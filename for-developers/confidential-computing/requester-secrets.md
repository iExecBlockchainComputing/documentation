# Use requester secrets

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
{% endhint %}

{% hint style="success" %}
**Prerequisites**

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
- [Nodejs](https://nodejs.org) 14.0.0 or higher.
- [iExec SDK](https://www.npmjs.com/package/iexec) 8.0.0 or higher.
- Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
{% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to securely consume requester-provided secrets in the application.

{% hint title="info" %}
In this tutorial, you will learn how to leverage requester secrets by using the following environment variables in your code:

- `IEXEC_REQUESTER_SECRET_1`
- `IEXEC_REQUESTER_SECRET_2`
- `...`
- `IEXEC_REQUESTER_SECRET_<N>`
{% endhint %}

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

```bash
cd ~/iexec-projects
mkdir tee-requester-secrets-app && cd tee-requester-secrets-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
```

When workgin with the **Scone** framework, update `chain.json` content as follow:

```json
{
  "default": "bellecour",
  "chains": {
    "bellecour": {
      "sms": { "scone": "https://v8.sms.debug-tee-services.bellecour.iex.ec" }
    }
  }
}
```

The application use the requester secrets to make a call to a secret endpoint of [countapi.xyz](https://countapi.xyz/) and writes the result in a file:

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
    // get the secret endpoint from requester secrets
    const secretNamespace = process.env.IEXEC_REQUESTER_SECRET_1;
    const secretKey = process.env.IEXEC_REQUESTER_SECRET_2;
    if (!secretNamespace) {
      console.log("missing requester secret 1 (namespace)");
      process.exit(1);
    }
    if (!secretKey) {
      console.log("missing requester secret 2 (key)");
      process.exit(1);
    }
    // get the hit count from countapi
    const hitCount = await axios
      .get(`https://api.countapi.xyz/hit/${secretNamespace}/${secretKey}`)
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
    // do not log anything that could reveal the requester secrets!
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

## Build a TEE Scone application

Create the `Dockerfile`

{% tabs %}
{% tab title="Scone" %}

In this section, you will:

- Build the native image of the application as described in [Build your first application](../your-first-app.md#dockerize-your-app).
- Create and execute the `sconify.sh` script to build the **Scone TEE application** as we saw in [Build Scone app > Prepare your application](create-your-first-sgx-app.md#prepare-your-application).

The Dockerfile and the build scripts are similar to the ones we saw [previously](create-your-first-sgx-app.md) for a trusted application:

Create the `Dockerfile`

### For a Javascript application

```bash
# Starting from a base image supported by SCONE
FROM node:14-alpine3.11

# install your dependencies
RUN mkdir /app && cd /app && npm install axios

COPY ./src /app

ENTRYPOINT [ "node", "/app/app.js"]
```

### For a Python application

```bash
FROM python:3.7.3-alpine3.10

RUN pip3 install requests

COPY ./src /app

ENTRYPOINT ["python3", "/app/app.py"]
```

Build the docker image.

```bash
docker build . --tag <docker-hub-user>/count-api:1.0.0
```

Follow the steps described in [Build Scone app > Build the TEE docker image](create-your-first-sgx-app.md#build-the-tee-docker-image).
Create the `sconify.sh` script and update the variables as follow:

```bash
# Declare image related variables
IMG_NAME=tee-scone-count-api
IMG_FROM=<docker-hub-user>/count-api:1.0.0
IMG_TO=<docker-hub-user>/${IMG_NAME}:1.0.0-debug
```

Run the `sconify.sh` script to build the TEE-debug app.

Push your image on Docker Hub:

```bash
docker push <docker-hub-user>/tee-scone-count-api:1.0.0-debug
```

{% endtab %}
{% tab title="Gramine" %}

In this section, you will create a `Dockerfile` and create your **Gramine TEE application** as we saw in [Build Gramine app > Prepare your application](create-your-first-gramine-app.md#prepare-your-application).

You need to copy the `Dockerfile`, then update its `RUN` statements to install required dependencies for your application:

### For a Javascript application

```bash
# Install required node dependencies
RUN npm install axios
```

### For a Python application

```bash
# Install required Python dependencies
RUN pip3 install requests
```

{% endtab %}
{% endtabs %}

## Test your app on iExec

At this stage, your application is ready to be tested on iExec with the following steps:

### Deploy the TEE app on iExec

{% tabs %}
{% tab title="Scone" %}

[Deploy your application](create-your-first-sgx-app.md#deploy-the-tee-app-on-iexec)

{% endtab %}
{% tab title="Gramine" %}

[Deploy your application](create-your-first-gramine-app.md#deploy-the-tee-app-on-iexec)

{% endtab %}
{% endtabs %}

You will get a hexadecimal address for your deployed app. Use that address to push the app developer secret to the [SMS](intel-sgx-technology.md#secret-management-service-sms).

For simplicity, we will use the secret in a TEE-debug app on a debug workerpool. The debug workerpool is connected to a debug Secret Management Service so we will send the dataset encryption key to this SMS (this is fine for debugging but do not use to store production secrets).

### Push some requester secrets to the SMS

```bash
iexec requester push-secret my-namespace --chain bellecour
iexec requester push-secret my-key --chain bellecour
```

### Check secrets availability in the SMS

```bash
iexec requester check-secret my-namespace --chain bellecour
iexec requester check-secret my-key --chain bellecour
```

### Run the TEE app

You are now ready to run the app with requester secrets.

{% tabs %}
{% tab title="Scone" %}

Specify the `--secret` and `--tag tee,scone` options in `iexec app run` command to run a tee app with requester secrets on Scone

```bash
iexec app run <appAddress> \
  --tag tee,scone \
  --workerpool v8-debug.main.pools.iexec.eth \
  --secret 1=my-namespace \
  --secret 2=my-key \
  --watch \
  --chain bellecour
```

{% endtab %}
{% tab title="Gramine" %}

Specify the `--secret` and `--tag tee,gramine` options in `iexec app run` command to run a TEE app with requester secrets on Gramine

```bash
iexec app run <appAddress> \
  --tag tee,gramine
  --workerpool v8-debug.main.pools.iexec.eth \
  --secret 1=my-namespace \
  --secret 2=my-key \
  --watch \
  --chain bellecour
```

{% endtab %}
{% endtabs %}

{% hint style="info" %}
The option `--secret <secretMapping...>` allow the requester to provision any number of secrets with the mapping syntax `<key>=<name>`.

example:

```bash
--secret 1=foo 3=bar
```

- the secret named `foo` will be available in `IEXEC_REQUESTER_SECRET_1`
- the secret named `bar` will be available in `IEXEC_REQUESTER_SECRET_3`
- `IEXEC_REQUESTER_SECRET_2` will be skipped
{% endhint %}

## Next step?

Thanks to the explained confidential computing workflow, you discovered how to consume requester secrets with a trusted application.
To go further, check out how to:

- [Attach a secret to your app](app-developer-secret.md)
- [Access a confidential dataset](sgx-encrypted-dataset.md)
- [Protect the result](end-to-end-encryption.md)
