---
title: Build Your First Application with Scone Framework
description:
  Learn how to build and run Confidential Computing applications with the Scone
  TEE framework for secure, privacy-preserving computation
---

# Build your first application with Scone framework

In this tutorial, you will learn how to build and run a Confidential Computing
application with the Scone TEE framework.

::: warning

Before going any further, make sure you managed to
[Build your first application](./your-first-app).

:::

::: tip Prerequisites:

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and
  client.
- [iExec SDK](https://www.npmjs.com/package/iexec) 8.0.0 or higher.
  [Install the iExec SDK](./quick-start-for-developers.md#install-the-iexec-sdk)
- Familiarity with the basic concepts of
  [Intel® SGX](/get-started/protocol/tee/intel-sgx) and
  [SCONE](https://scontain.com) framework.

:::

In order to follow this tutorial, you will need to register a
[free SCONE Account](https://scontain.com) to access SCONE build tools and
curated images from the [SCONE registry](https://gitlab.scontain.com/).

Once your account is activated, you need to
[request access to the SCONE build tools for iExec](mailto:info@scontain.com?cc=scone-access@iex.ec&subject=iExec%20Build%20Tools&body=Hi%20SCONE%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20access%20to%20the%20SCONE%20build%20tools%20for%20iExec:%0A%20-%20scone-production/iexec-sconify-image%0A%20-%20sconecuratedimages%20%28all%20curated%20images%20such%20as%20nodejs%2C%20python...%29%0A%0AMy%20DockerID%20is%20...%0A%0ABest%20regards%0A%0A...).

```bash
# when your account is ready, run `docker login` to connect the SCONE registry
docker login registry.scontain.com
```

## Prepare your application

::: warning

For demo purposes, we omitted some development best practices in these examples.

Make sure to check your field's best practices before going to production.

:::

Before going further, your `<docker-hub-user>/hello-world:1.0.0` image built
previously is required.

If you missed that part, please go back to
[Build your first application](./your-first-app).

For this tutorial, you can reuse the same directory tree or create a new one.

To create a new directory tree, execute the following commands in
`~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir tee-hello-world-app && cd tee-hello-world-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
chmod +x sconify.sh
```

## Build the TEE docker image

Before wrapping your iExec confidential application with Scone, you need to
generate a custom signing key. This key is required for the sconification
process and will be referenced in the Docker command below.

Generate your enclave signing key with:

```bash
openssl genrsa -3 -out enclave-key.pem 3072
```

This will create an `enclave-key.pem` file in your current directory. You will
use this file in the sconify Docker command to sign your TEE image.

We will use the following script to wrap the sconification process, copy the
`sconify.sh` script in the current directory:

::: code-group

```bash [for Javascript]
#!/bin/bash

# Declare the app entrypoint
ENTRYPOINT="node /app/app.js"

# Declare image related variables
IMG_NAME=tee-scone-hello-world
IMG_FROM=<docker-hub-user>/hello-world:1.0.0
IMG_TO=<docker-hub-user>/${IMG_NAME}:1.0.0

# Run the sconifier to build the TEE image based on the non-TEE image
docker run -it --rm \
            -v $PWD/enclave-key.pem:/sig/enclave-key.pem \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com/scone-production/iexec-sconify-image:5.9.1-v16\
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
            --dlopen=1 \
            --no-color \
            --verbose \
            --command=${ENTRYPOINT} \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run --rm -e SCONE_HASH=1 ${IMG_TO})"
```

```bash [for Python]
#!/bin/bash

# Declare the app entrypoint
ENTRYPOINT="python3 /app/app.py"

# Declare image related variables
IMG_NAME=tee-scone-hello-world
IMG_FROM=<docker-hub-user>/hello-world:1.0.0
IMG_TO=<docker-hub-user>/${IMG_NAME}:1.0.0

# Run the sconifier to build the TEE image based on the non-TEE image
docker run -it \
            -v $PWD/enclave-key.pem:/sig/enclave-key.pem \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com/scone-production/iexec-sconify-image:5.9.1-v16\
            sconify_iexec \
            --name=${IMG_NAME} \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/python3 \
            --heap=1G \
            --dlopen=1 \
            --no-color \
            --verbose \
            --command=${ENTRYPOINT} \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run --rm -e SCONE_HASH=1 ${IMG_TO})"
```

:::

Run the `sconify.sh` script to build the Scone TEE application:

```bash
./sconify.sh
```

Push your image on DockerHub:

```bash
docker push <docker-hub-user>/tee-scone-hello-world:1.0.0
```

Congratulations, you just built your Scone TEE application.

## Test your app on iExec

At this stage, your application is ready to be tested on iExec. The process is
similar to testing any type of application on the platform, with these minor
exceptions:

### Deploy the TEE app on iExec

TEE applications require some additional information to be filled in during
deployment.

```bash
# prepare the TEE application template
iexec app init --tee
```

Edit `iexec.json` and fill in the standard keys and the `mrenclave` object:

```json
{
  ...
  "app": {
    "owner": "<your-wallet-address>", // starts with 0x
    "name": "tee-scone-hello-world", // application name
    "type": "DOCKER",
    "multiaddr": "docker.io/<docker-hub-user>/tee-scone-hello-world:1.0.0", // app image
    "checksum": "<checksum>", // starts with 0x, update it with your own image digest
    "mrenclave": {
      "framework": "SCONE", // TEE framework (keep default value)
      "version": "v5.9", // Scone version (keep default value)
      "entrypoint": "node /app/app.js" OR "python3 /app/app.py", // update it with your own image entrypoint
      "heapSize": 1073741824, // heap size in bytes, update it with --heap option value used in sconify.sh script during TEE image build
      "fingerprint": "<mrenclave>" // fingerprint of the enclave code (mrenclave), without 0x prefix, see how to retrieve it below
    }
  },
  ...
}
```

::: info

See
[Create your identity on the blockchain](./quick-start-for-developers.md#create-your-identity-on-the-blockchain)
to retrieve `<your-wallet-address>` value.

See [Deploy your app on iExec](./your-first-app.md#deploy-your-app-on-iexec) to
retrieve your image `<checksum>`.

Run your TEE image with `SCONE_HASH=1` to get the enclave fingerprint
(mrenclave):

```bash
docker run --rm -e SCONE_HASH=1 <docker-hub-user>/tee-scone-hello-world:1.0.0
```

:::

Deploy the app with the standard command:

```bash twoslash
iexec app deploy --chain {{chainName}}
```

### Run the TEE app

Specify the tag `--tag tee,scone` in `iexec app run` command to run a tee app.

One last thing, in order to run a **TEE** app you will also need to select a
workerpool, use the iexec workerpool `{{workerpoolAddress}}`.

You are now ready to run the app

```bash twoslash
iexec app run --chain {{chainName}} --tag tee,scone --workerpool {{workerpoolAddress}} --watch
```

::: info

You noticed we used `{{workerpoolAddress}}` instead of an ethereum address, this
is an ENS name.

:::

::: info

Remember, you can access task and app logs by following the instructions on page
[Debug your tasks](/guides/build-iapp/debugging).

:::

## Next step?

In this tutorial, you learned how to leverage your application with the power of
Trusted Execution Environments using iExec. But according to your use case, you
may need to use some confidential data to get the full potential of the
**Confidential Computing** paradigm. Check out next chapters to see how:

- [Access confidential assets from your app](access-confidential-assets.md)
- [Protect the result](end-to-end-encryption.md)

<script setup>
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const chainName = computed(() => chainData.value.chainName);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>
