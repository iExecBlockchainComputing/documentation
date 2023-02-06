# Use a developer secret

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
œ{% endhint %}

{% hint style="success" %}
**Prerequisites**

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
- [Nodejs](https://nodejs.org) 14.0.0 or higher.
- [iExec SDK](https://www.npmjs.com/package/iexec) 8.0.0 or higher.
- Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-software-guard-extension-intel-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
  {% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to securely associate an application developer secret to the runtime of an application.

{% hint style="warning" %}
The app developer secret is only exposed to your app inside authorized [enclaves](intel-sgx-technology.md#enclave) and never leaves them.
{% endhint %}

{% hint style="info" %}
Your secrets are securely transferred with the SDK from your machine to the SMS over a TLS channel. Internally, your secrets are encrypted with standard AES encryption before being written to disk. Next releases will feature an SMS running entirely inside a trusted enclave.
{% endhint %}

Let's see how to do all of that!

## Prepare your application

{% hint style="info" %}
We will use the API [countapi.xyz](https://countapi.xyz/).
This service keeps a count of hits on any couple of `namespace/key` (ex: <https://api.countapi.xyz/hit/foo/bar>).
In this example, we will use an app developer secret to set `namespace/key`.
{% endhint %}

Let's create a directory tree for this app in `~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir tee-developer-secret-app && cd tee-developer-secret-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
```

The application uses the developer secret to make a call to a secret endpoint of [countapi.xyz](https://countapi.xyz/) and writes the result in a file:

**Copy the following content** in `src/` .

{% tabs %}
{% tab title="Javascript" %}
{% code title="src/app.js" %}

```javascript
const fsPromises = require("fs").promises;
const axios = require("axios");

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // get the secret endpoint from app developer secret
    const secret = process.env.IEXEC_APP_DEVELOPER_SECRET;
    if (!secret) {
      console.log("missing IEXEC_APP_DEVELOPER_SECRET");
      process.exit(1);
    }
    // get the hit count from countapi
    const hitCount = await axios
      .get(`https://api.countapi.xyz/hit/iexec/${secret}`)
      .then(({ data }) => data.value);

    const result = `endpoint hit ${hitCount} times`;
    console.log(result);
    // write the result
    await fsPromises.writeFile(`${iexecOut}/result.txt`, result);
    // declare everything is computed
    const computedJsonObj = {
      "deterministic-output-path": `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
      `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj)
    );
  } catch (e) {
    // do not log anything that could reveal the app developer secret!
    console.log("something went wrong");
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

    # get the secret endpoint from app developer secret
    try:
        secret = os.environ["IEXEC_APP_DEVELOPER_SECRET"]
    except Exception:
        print("missing IEXEC_APP_DEVELOPER_SECRET")
        exit(1)

    # get the hit count from countapi
    response = requests.request("GET", "https://api.countapi.xyz/hit/iexec/" + secret)
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

Build the docker image.

```bash
docker build . --tag <docker-hub-user>/countapi:1.0.0
```

### Build a TEE Scone application

Follow the steps described from [Build Scone app > Build the TEE docker image](create-your-first-sgx-app.md#build-the-tee-docker-image).
Create the `sconify.sh` script and update the variables as follow:

```bash
# Declare image related variables
IMG_NAME=tee-scone-countapi
IMG_FROM=<docker-hub-user>/countapi:1.0.0
IMG_TO=<docker-hub-user>/${IMG_NAME}:1.0.0-debug
```

Run the `sconify.sh` script to build the TEE-debug app.

{% hint style="info" %}
The `sconify.sh` script prints the generated docker image name, you must retag this image and push it on dockerhub.
{% endhint %}

Push your image on DockerHub:

```bash
docker push <docker-hub-user>/tee-scone-countapi:1.0.0-debug
```

### Build a TEE Gramine application

Follow the steps described from [Build Gramine app > Prepare your application](create-your-first-gramine-app.md#prepare-your-application).
Update the `RUN` statements in the `Dockerfile` to install required dependencies for your application:

{% tabs %}
{% tab title="Javascript" %}
{% code title="Dockerfile" %}
```bash
# Install required node dependencies
RUN npm install axios
```
{% endcode %}
{% endtab %}
{% tab title="Python" %}
{% code title="Dockerfile" %}
```bash
# Install required Python dependencies
RUN pip3 install requests
```
{% endcode %}
{% endtab %}
{% endtabs %}

Build the docker image.

```bash
docker build . --tag <docker-hub-user>/tee-gramine-countapi:1.0.0
```

Push your image on DockerHub:

```bash
docker push <docker-hub-user>/tee-gramine-countapi:1.0.0
```

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
    "name": "tee-developer-secret-app", // application name
    "type": "DOCKER",
    "multiaddr": "docker.io/username/tee-developer-secret-app:1.0.0", // app image
    "checksum": "0xf997788fcb5c9a47d8fa2653098da3c58343d400a82ca13d014d711d60560cac", // image digest
    "mrenclave": {
      "framework": "SCONE", // TEE framework (keep default value)
      "version": "v5", // Scone version (keep default value)
      "entrypoint": "node /app/app.js" OR "python3 /app/app.py", // your app image entrypoint
      "heapSize": 1073741824, // heap size in bytes (1GB)
      "fingerprint": "7d264f09de532fb1d55d25c4eb345a26454f4c21a1379e3813570538124a158e" // fingerprint of the enclave code (mrenclave), see how to retrieve it below
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
sed -i 's|"bellecour": {},|"bellecour": { "sms": { "scone": "https://v8.sms.debug-tee-services.bellecour.iex.ec" } },|g' chain.json
```

```sh
# push the app developer secret to the SMS
iexec app push-secret --chain bellecour
# check the secret is available on the SMS
iexec app check-secret --chain bellecour
```

```sh
# restore the default configuration in chain.json
sed -i 's|"bellecour": { "sms": { "scone": "https://v8.sms.debug-tee-services.bellecour.iex.ec" } },|"bellecour": {},|g' chain.json
```

### Run the TEE app

Specify the tag `--tag tee,scone` in `iexec app run` command to run a tee app with an app developer secret.

One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the debug workerpool `v8-debug.main.pools.iexec.eth`.

You are now ready to run the app

```sh
iexec app run <appAddress> --tag tee,scone --workerpool v8-debug.main.pools.iexec.eth --watch --chain bellecour
```

## Next step?

Thanks to the explained confidential computing workflow, it is possible to use an app developer secret with a trusted application.
