# Build a Gramine application

{% hint style="warning" %}
Before going any further, make sure you managed to [Build your first application](../your-first-app.md).
{% endhint %}

{% hint style="success" %}
**Prerequisites**

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
- [Nodejs](https://nodejs.org) 14.0.0 or higher.
- [iExec SDK](https://www.npmjs.com/package/iexec) 8.0.0 or higher.
- Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [Gramine](choose-your-tee-framework.md#gramine) framework.
{% endhint %}

## Prepare your application

Create a directory tree for your application in `~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir tee-hello-world-app && cd tee-hello-world-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
```

Copy from previous steps your [Javascript or Python sources](../your-first-app.md#write-the-app) in `src/` .
When your sources are copied, your are ready to dockerize your application:

{% tabs %}
{% tab title="Javascript" %}
{% code title="Dockerfile" %}

```bash
FROM iexechub/iexec-gramine-base:0.10.0

RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

ARG SOURCE_DIR=src
ARG GRAMINE_DIR=gramine

# Get the code of app to /workplace/app
COPY $SOURCE_DIR/app.js /workplace/app

# Set the main function for node app, no need for binnary app
RUN sed -i "s#MAIN_FUNC=#MAIN_FUNC=/workplace/app/app.js#" /apploader.sh

WORKDIR /workplace/app

# Install required node dependencies (needs to be ran after WORKDIR has been specified)
RUN npm install figlet@1.x

# Copy the manifest to use from within the base image
# or create your own
RUN cp /common-manifests/nodejs.entrypoint.manifest /entrypoint.manifest

# Finalize app (finalize manifest and sign app)
RUN /finalize-app.sh
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="Dockerfile" %}

```bash
FROM iexechub/iexec-gramine-base:0.10.0

### Install python and required dependencies
RUN apt-get install -y python3 && rm -rf /var/lib/apt/lists/* \
     && pip3 install pyfiglet

ARG SOURCE_DIR=src
ARG GRAMINE_DIR=gramine

# get the code of app to /workplace/app
COPY $SOURCE_DIR/app.py /workplace/app

# set the main function for python and node app, no need for binnary app
RUN sed -i "s#MAIN_FUNC=#MAIN_FUNC=/workplace/app/app.py#" /apploader.sh

WORKDIR /workplace/app

# Copy the manifest to use from within the base image
# or create your own
RUN cp /common-manifests/python.entrypoint.manifest /entrypoint.manifest

# Finalize app (finalize manifest and sign app)
RUN /finalize-app.sh
```

{% endcode %}
{% endtab %}
{% endtabs %}


Build the docker image.

```bash
docker build . --tag <docker-hub-user>/tee-gramine-hello-world:1.0.0
```

Push your image on DockerHub:
```bash
docker push <docker-hub-user>/tee-gramine-hello-world:1.0.0
```

Congratulations, you just built your Gramine TEE application.

## Test your app on iExec

At this stage, your application is ready to be tested on iExec. The process is similar to testing any type of application on the platform, with these minor exceptions:

### Deploy the TEE app on iExec

Gramine TEE applications require some additional information to be filled in during deployment.

```bash
# prepare the Gramine TEE application template
iexec app init --tee-framework gramine
```

Edit `iexec.json` and fill in the standard keys and the `mrenclave` object:

```json
{
  ...
  "app": {
    "owner": "<your-wallet-address>", // starts with 0x
    "name": "tee-gramine-hello-world",
    "type": "DOCKER",
    "multiaddr": "docker.io/<docker-hub-user>/tee-gramine-hello-world:1.0.0", // update it with your own DockerHub username
    "checksum": "<checksum>", // starts with 0x, update it with your own image digest
    "mrenclave": {
      "framework": "GRAMINE",
      "version": "v1",
      "entrypoint": "/workplace /app/app.js" OR "/workplace/app/app.py", // update it with your own image entrypoint
      "heapSize": 1073741824,
      "fingerprint": "<mrenclave>" // no 0x prefix, see how to retrieve it below
    }
  },
  ...
}
```

{% hint style="info" %}
Run your Gramine TEE image with `sps=unset` to get the enclave fingerprint (mrenclave):

```bash
docker run --rm -e sps=unset <docker-hub-user>/tee-gramine-hello-world:1.0.0
```

The run is expected to fail but should look for a `mr_enclave` field in your logs:
```
    mr_enclave:  dcec6d7f76520cb996d6e9dac105b9c3d75c7bb4a4d8f3669f6101cbca6aff4f
```

Hint: The `mr_enclave` is also available in your logs when building your app.
{% endhint %}

Deploy the app with the standard command:

```bash
iexec app deploy --chain bellecour
```

### Run the TEE app

Specify the tag `--tag tee,gramine` in `iexec app run` command to run a tee app.

Verify your chain.json is reset to the default configuration

```bash
"bellecour": {}
```

```bash
# initialize the storage
iexec storage init --chain bellecour --tee-framework gramine
```

You are now ready to run the app

```bash
iexec app run --tag tee,gramine --workerpool v8-debug.main.pools.iexec.eth --watch --chain bellecour
```

{% hint style="info" %}
You noticed we used `v8-debug.main.pools.iexec.eth` instead of an ethereum address, this is an ENS name.
The [ENS (Ethereum Name Service)](https://ens.domains/) protocol enables associating decentralized naming to ethereum addresses.
{% endhint %}

## Next step?

You have built and run your Gramine application, you can now go further with:

- [Access confidential assets from your app](access-confidential-assets.md)
- [Protect the result](end-to-end-encryption.md)