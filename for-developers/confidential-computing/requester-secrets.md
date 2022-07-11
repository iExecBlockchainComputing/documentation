# Use requester secrets

{% hint style="success" %}
**Prerequisites**

* [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
* [Nodejs](https://nodejs.org) 14.0.0 or higher.
* [iExec SDK](https://www.npmjs.com/package/iexec) 7.2.0 or higher.
* Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
{% endhint %}

{% hint style="warning" %}
Please make sure you have already checked the [Quickstart](../quick-start-for-developers.md), [Your first application](../your-first-app.md) and [Build trusted applications](create-your-first-sgx-app.md) tutorials before learning how to use requester secrets.
{% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to securely to associate an application developer secret to the runtime of an application.

{% hint style="warning" %}
The requester secrets are only exposed to authorized apps inside [enclaves](intel-sgx-technology.md#enclave) and never leave them.
{% endhint %}

{% hint style="info" %}
Your secrets are securely transferred with the SDK from your machine to the SMS over a TLS channel. Internally, your secrets are encrypted with standard AES encryption before being written to disk. Next releases will feature an SMS running entirely inside a trusted enclave.
{% endhint %}

Let's see how to do all of that!

## Prepare your application

{% hint style="info" %}
We will use the API [countapi.xyz](https://countapi.xyz/).
This service keeps a count of hit on any couple of `namespace/key` (ex: <https://api.countapi.xyz/hit/foo/bar>).
In this example, we will use requester secrets to set `namespace/key`.
{% endhint %}

Let's create a directory tree for this app in `~/iexec-projects/`.

{% tabs %}
{% tab title="Javascript" %}
{% code %}

```bash
cd ~/iexec-projects
mkdir tee-requester-secrets-app && cd tee-requester-secrets-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
```

{% endcode %}
{% endtab %}
{% endtabs %}

The application use the requester secrets to make a call to a secret endpoint of [countapi.xyz](https://countapi.xyz/) and writes the result in a file:

**Copy the following content** in `src/` .

{% tabs %}
{% tab title="Javascript" %}
{% code title="src/app.js" %}

```javascript
const fsPromises = require('fs').promises;
const axios = require('axios');

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // get the secret endpoint from requester secrets
    const secretNamespace = process.env.IEXEC_REQUESTER_SECRET_1;
    const secretKey = process.env.IEXEC_REQUESTER_SECRET_2;
    if (!secretNamespace) {
        console.log('missing requester secret 1 (namespace)');
        process.exit(1);
    }
    if (!secretKey) {
        console.log('missing requester secret 2 (key)');
        process.exit(1);
    }
    // get the hit count from countapi
    const hitCount = await axios.get(`https://api.countapi.xyz/hit/${secretNamespace}/${secretKey}`)
        .then(({data}) => data.value);

    const result = `endpoint hit ${hitCount} times`;
    console.log(result);
    // write the result
    await fsPromises.writeFile(`${iexecOut}/result.txt`, result);
    // declare everything is computed
    const computedJsonObj = {
        'deterministic-output-path': `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
        `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj),
    );
  } catch (e) {
    // do not log anything that could reveal the requester secrets!
    console.log('something went wrong');
    process.exit(1);
  }
})();
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="src/app.py" %}

```python
import os
import json
import requests

try:
    iexec_out = os.environ["IEXEC_OUT"]

    # get the secret endpoint from requester secrets
    try:
        secret_namespace = os.environ["IEXEC_REQUESTER_SECRET_1"]
    except Exception:
        print("missing requester secret 1 (namespace)")
        exit(1)
    try:
        secret_key = os.environ["IEXEC_REQUESTER_SECRET_2"]
    except Exception:
        print("missing requester secret 2 (key)")
        exit(1)

    # get the hit count from countapi
    response = requests.request("GET", "https://api.countapi.xyz/hit/" + secret_namespace + "/" + secret_key)
    json_response = response.json()
    hit_count = json_response["value"]

    result = "endpoint hit " + str(hit_count) + " times"
    print(result)

    # write the result
    with open(iexec_out + "/result.txt", "w+") as fout:
        fout.write(result)

    # declare everything is computed
    with open(iexec_out + "/computed.json", "w+") as f:
        json.dump({ "deterministic-output-path" : iexec_out + "/result.txt" }, f)

except Exception:
    # do not log anything that could reveal the app developer secret!
    print("something went wrong")
    exit(1)
```

{% endcode %}
{% endtab %}
{% endtabs %}

## Build the TEE docker image

The Dockerfile and the build scripts are similar to the ones we saw [previously](create-your-first-sgx-app.md) for a trusted application:

{% tabs %}
{% tab title="Javascript" %}
{% code title="Dockerfile" %}

```bash
# Starting from a base image supported by SCONE  
FROM node:14-alpine3.11

# install your dependencies
RUN mkdir /app && cd /app && npm install axios

COPY ./src /app

ENTRYPOINT [ "node", "/app/app.js"]
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="Dockerfile" %}

```bash
FROM python:3.7.3-alpine3.10

RUN pip3 install requests

COPY ./src /app

ENTRYPOINT ["python3", "/app/app.py"]
```

{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Javascript" %}
{% code title="sconify.sh" %}

```bash
#!/bin/bash

# declare the app entrypoint
ENTRYPOINT="node /app/app.js"
# declare an image name
IMG_NAME=tee-requester-secrets-app

IMG_FROM=${IMG_NAME}:temp-non-tee
IMG_TO=${IMG_NAME}:tee-debug

# build the regular non-TEE image
docker build . -t ${IMG_FROM}

# pull the SCONE curated image corresponding to our base image
docker pull registry.scontain.com:5050/sconecuratedimages/node:14.4.0-alpine3.11

# run the sconifier to build the TEE image based on the non-TEE image
docker run -it --rm \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com:5050/scone-production/iexec-sconify-image:5.3.15 \
            sconify_iexec \
            --name=${IMG_NAME} \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/node \
            --heap=1G \
            --dlopen=2 \
            --no-color \
            --verbose \
            --command=${ENTRYPOINT} \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run -it --rm -e SCONE_HASH=1 ${IMG_TO})"
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="sconify.sh" %}

```bash
#!/bin/bash

# declare the app entrypoint
ENTRYPOINT="python3 /app/app.py"
# declare an image name
IMG_NAME=tee-requester-secrets-app

IMG_FROM=${IMG_NAME}:temp-non-tee
IMG_TO=${IMG_NAME}:tee-debug

# build the regular non-TEE image
docker build . -t ${IMG_FROM}

# run the sconifier to build the TEE image based on the non-TEE image
docker run -it \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com:5050/scone-production/iexec-sconify-image:5.3.15 \
            sconify_iexec \
            --name=${IMG_NAME} \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/python3.7 \
            --heap=1G \
            --dlopen=2 \
            --no-color \
            --verbose \
            --command=${ENTRYPOINT} \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run -it --rm -e SCONE_HASH=1 ${IMG_TO})"
```

{% endcode %}
{% endtab %}

{% endtabs %}

Run the `sconify.sh` script to build the TEE-debug app.

{% hint style="info" %}
The `sconify.sh` script prints the generated docker image name, you must retag this image and push it on dockerhub.
{% endhint %}

## Test your app on iExec

At this stage, your application is ready to be tested on iExec. The process is similar to testing any type of application on the platform, with these minor exceptions:

### Deploy the TEE app on iExec

TEE applications require some additional information to be filled in during deployment.

```sh
# prepare the TEE application template
iexec app init --tee
```

Edit `iexec.json` and fill in the standard keys and the `mrenclave` object:

```json
{
  ...
  "app": {
    "owner": "0xF048eF3d7E3B33A465E0599E641BB29421f7Df92", // your address
    "name": "tee-requester-secrets-app", // application name
    "type": "DOCKER",
    "multiaddr": "docker.io/username/tee-requester-secrets-app:1.0.0", // app image
    "checksum": "0xa562ff90fd989ca618f2bb17f87b00b4b0486f46d3dae868350f9a27c424ed94", // image digest
    "mrenclave": {
      "provider": "SCONE", // TEE provider (keep default value)
      "version": "v5", // Scone version (keep default value)
      "entrypoint": "node /app/app.js" OR "python3 /app/app.py", // your app image entrypoint
      "heapSize": 1073741824, // heap size in bytes (1GB)
      "fingerprint": "253e7253d201ce25327becf1a3351f8945770e9624570fecd7db7d836b7ea192" // fingerprint of the enclave code (mrenclave), see how to retrieve it below
    }
  },
  ...
}
```

{% hint style="info" %}
Run your TEE image with `SCONE_HASH=1` to get the enclave fingerprint (mrenclave):

```sh
docker run -it --rm -e SCONE_HASH=1 tee-developer-secret-app:tee-debug
```

{% endhint %}

Deploy the app with the standard command:

```sh
iexec app deploy --chain bellecour
```

You will get a hexadecimal address for your deployed app. Use that address to push the app developer secret to the [SMS](intel-sgx-technology.md#secret-management-service-sms).

For simplicity, we will use the secret in a TEE-debug app on a debug workerpool. The debug workerpool is connected to a debug Secret Management Service so we will send the dataset encryption key to this SMS (this is fine for debugging but do not use to store production secrets).

These `sed` commands will do the trick:

```sh
# set a custom bellecour SMS in chain.json
sed -i 's|"bellecour": {},|"bellecour": { "sms": "https://v7.sms.debug-tee-services.bellecour.iex.ec" },|g' chain.json
```

```sh
# push some requester secrets to the SMS
iexec requester push-secret my-namespace --chain bellecour
iexec requester push-secret my-key --chain bellecour
# check the secret is available on the SMS
iexec requester check-secret my-namespace --chain bellecour
iexec requester check-secret my-key --chain bellecour
```

```sh
# restore the default configuration in chain.json
sed -i 's|"bellecour": { "sms": "https://v7.sms.debug-tee-services.bellecour.iex.ec" },|"bellecour": {},|g' chain.json
```

### Run the TEE app

Specify the tag `--tag tee` in `iexec app run` command to run a tee app with an app developer secret.

One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the debug workerpool `v7-debug.main.pools.iexec.eth`.

You are now ready to run the app with requester secrets.

```sh
iexec app run <appAddress> \
  --tag tee \
  --workerpool v7-debug.main.pools.iexec.eth \
  --secret 1=my-namespace \
  --secret 2=my-key \
  --watch \
  --chain bellecour
```

{% hint style="info" %}
The option `--secret <secretMapping...>` allow the requester to provision any number of secrets with the mapping syntax `<key>=<name>`.

example:

```sh
--secret 1=foo 3=bar
```

* the secret named `foo` will be available in `IEXEC_REQUESTER_SECRET_1`
* the secret named `bar` will be available in `IEXEC_REQUESTER_SECRET_3`
* `IEXEC_REQUESTER_SECRET_2` will be skipped
{% endhint %}

## Next step?

Thanks to the explained confidential computing workflow, it is possible to use consume requester secrets with a trusted application.
