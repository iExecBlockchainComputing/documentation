# Use a developer secret

In this tutorial, you will learn how to leverage an application developer secret by using the `IEXEC_APP_DEVELOPER_SECRET` environment variable in your application code.

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
{% endhint %}

{% hint style="success" %}
**Prerequisites**

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
- [Nodejs](https://nodejs.org) 14.0.0 or higher.
- [iExec SDK](https://www.npmjs.com/package/iexec) 8.0.0 or higher.
- Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-software-guard-extension-intel-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
  {% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to securely associate an application developer secret to the runtime of an application.
This association is performed through the usage of environment variables which cannot leak outside of the enclave memory.

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

Depending on the TEE framework you are using, make sure your `chain.json` content is correct:

- [Scone chain.json](create-your-first-sgx-app.md#update-chain-json)
- [Gramine chain.json](create-your-first-gramine-app.md#update-chain-json)

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

## Build a Confidential Computing application

### Build the docker image

{% tabs %}
{% tab title="Scone" %}

In this section, you will:

- Build the native image of the application as described in [Build your first application](../your-first-app.md#dockerize-your-app).
- Create and execute the `sconify.sh` script to build the **Scone TEE application** as we saw in [Build Scone app > Prepare your application](create-your-first-sgx-app.md#prepare-your-application).

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

Build the docker image.

```bash
docker build . --tag <docker-hub-user>/tee-gramine-count-api:1.0.0
```

{% endtab %}
{% endtabs %}

### Push the image on Docker Hub

{% tabs %}
{% tab title="Scone" %}

```bash
docker push <docker-hub-user>/tee-scone-count-api:1.0.0-debug
```

{% endtab %}
{% tab title="Gramine" %}

```bash
docker push <docker-hub-user>/tee-gramine-count-api:1.0.0
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

### Push an application developer secret to the SMS

```bash
iexec app push-secret --chain bellecour
```

### Check the secret exists in the SMS

```bash
iexec app check-secret --chain bellecour
```

### Run the TEE app

{% tabs %}
{% tab title="Scone" %}
[Run your application](create-your-first-sgx-app.md#run-the-tee-app).
{% endtab %}
{% tab title="Gramine" %}
[Run your application](create-your-first-gramine-app.md#run-the-tee-app)
{% endtab %}
{% endtabs %}

## Next step?

Thanks to the explained confidential computing workflow, you now know how to use an app developer secret in a Confidential Computing application.
To go further, check out how to:

- [Access requester secrets](requester-secrets.md)
- [Access a confidential dataset](sgx-encrypted-dataset.md)
- [Protect the result](end-to-end-encryption.md)
