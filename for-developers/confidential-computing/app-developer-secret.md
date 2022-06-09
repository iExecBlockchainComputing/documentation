# Use a developer secret

{% hint style="success" %}
**Prerequisites**

* [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
* [Nodejs](https://nodejs.org) 12.0.0 or higher.
* [iExec SDK](https://www.npmjs.com/package/iexec) 7.0.0 or higher.
* Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
{% endhint %}

{% hint style="warning" %}
Please make sure you have already checked the [Quickstart](../your-first-app.md), [Your first application](../your-first-app.md) and [Build trusted applications](create-your-first-sgx-app.md) tutorials before learning how to use a developer secret.
{% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to securely to associate an application developer secret to the runtime of an application.

{% hint style="warning" %}
The app developer secret is only exposed to your app inside authorized [enclaves](intel-sgx-technology.md#enclave) and never leave them.
{% endhint %}

{% hint style="info" %}
Your secrets are securely transferred with the SDK from your machine to the SMS over a TLS channel. Internally, your secrets are encrypted with standard AES encryption before being written to disk. Next releases will feature an SMS running entirely inside a trusted enclave.
{% endhint %}

Let's see how to do all of that!

## Prepare your application:

{% hint style="info" %}
We will use the API [countapi.xyz](https://countapi.xyz/).
This service keeps a count of hit on any couple of `namespace/key` (ex: <https://api.countapi.xyz/hit/foo/bar>).
In this example, we will use an app developer secrets to set `namespace/key`.
{% endhint %}

Let's create a directory tree for this app in `~/iexec-projects/`.

{% tabs %}
{% tab title="Javascript" %}
{% code %}
```bash
cd ~/iexec-projects
mkdir my-tee-dev-secret-app && cd my-tee-dev-secret-app
iexec init --skip-wallet
mkdir src
touch src/app.js
touch Dockerfile
touch sconify.sh
```
{% endcode %}
{% endtab %}
{% endtabs %}

In the folder `src/` create the file `app.js` then copy this code inside:

The application use the developer secret to make a call to a secret endpoint of [countapi.xyz](https://countapi.xyz/) and writes the result in a file:

{% tabs %}
{% tab title="Javascript" %}
{% code title="src/app.js" %}
```javascript
const fsPromises = require('fs').promises;
const axios = require('axios');

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // get the secret endpoint from app developer secret
    const secret = process.env.IEXEC_APP_DEVELOPER_SECRET;
    if (!secret) {
        console.log('missing IEXEC_APP_DEVELOPER_SECRET');
        process.exit(1);
    }
    // get the hit count from countapi
    const hitCount = await axios.get(`https://api.countapi.xyz/hit/iexec/${secret}`)
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
    // do not log anything that could reveal the app developer secret!
    console.log('something went wrong');
    process.exit(1);
  }
})();
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Build the TEE docker image:

The Dockerfile and the build scripts are similar to the ones we saw [previously](create-your-first-sgx-app.md) for a trusted application, we changed a dependency to add `axios`:


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
{% endtabs %}

{% tabs %}
{% tab title="Javascript" %}
{% code title="sconify.sh" %}
```bash
#!/bin/bash

# declare the app entrypoint
ENTRYPOINT="node /app/app.js"
# declare an image name
IMG_NAME=nodejs-developer-secret-app

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
{% endtabs %}

Run the `sconify.sh` script to build the TEE-debug app.

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
    "multiaddr": "docker.io/username/nodejs-tee-developer-secret-app:1.0.0", // app image
    "checksum": "0xf997788fcb5c9a47d8fa2653098da3c58343d400a82ca13d014d711d60560cac", // image digest
    "mrenclave": {
      "provider": "SCONE", // TEE provider (keep default value)
      "version": "v5", // Scone version (keep default value)
      "entrypoint": "node /app/app.js", // your app image entrypoint
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
docker run -it --rm -e SCONE_HASH=1 nodejs-tee-developer-secret-app
```
{% endhint %}

Deploy the app with the standard command:
```sh
iexec app deploy --chain viviani
```

You will get a hexadecimal address for your deployed app. Use that address to push the app developer secret to the [SMS](intel-sgx-technology.md#secret-management-service-sms).

For simplicity, we will use the secret in a TEE-debug app on a debug workerpool. The debug workerpool is connected to a debug Secret Management Service so we will send the dataset encryption key to this SMS (this is fine for debugging but do not use to store production secrets).

These `sed` commands will do the trick:

```sh
# set a custom viviani SMS in chain.json
sed -i 's|"viviani": {},|"viviani": { "sms": "https://v7.sms.debug-tee-services.viviani.iex.ec" },|g' chain.json
```
```sh
# push the dataset secret to the SMS
iexec dataset push-secret --chain viviani
# check the secret is available on the SMS
iexec dataset check-secret --chain viviani
```
```sh
# restore the default configuration in chain.json
sed -i 's|"viviani": { "sms": "https://v7.sms.debug-tee-services.viviani.iex.ec" },|"viviani": {},|g' chain.json
```

### Run the TEE app

Specify the tag `--tag tee` in `iexec app run` command to run a tee app with an app developer secret.

One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the Viviani debug workerpool `0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe` (see deployed workerpools on https://v7.pools.iex.ec).

You are now ready to run the app

```sh
iexec app run <appAddress> --tag tee --workerpool 0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe --watch --chain viviani
```

## Next step?

Thanks to the explained confidential computing workflow, it is possible to use an app developer secret with a trusted application.