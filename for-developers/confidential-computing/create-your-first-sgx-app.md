# Build trusted applications

{% hint style="success" %}
**Prerequisites**

* [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
* [Nodejs](https://nodejs.org) 12.0.0 or higher.
* [iExec SDK](https://www.npmjs.com/package/iexec) 6.0.0 or higher.
* Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
{% endhint %}

{% hint style="warning" %}
Please make sure you have already checked the [quickstart](../your-first-app.md) and [Your first application](../your-first-app.md) tutorials before building your trusted application on iExec.
{% endhint %}

After understanding the fundamentals of Confidential Computing and explaining the technologies behind it, it is time to roll up our sleeves and get hands-on with [enclaves](intel-sgx-technology.md#enclave). In this guide, we will focus on protecting an application - that is already compatible with the iExec platform - using SGX, and without changing the source code. That means we will use the same code we [previously](../your-first-app.md#build-your-app) deployed for a basic iExec application.


**How would the enclave verify the integrity of the code?**

The short answer is: the application is protected by taking a snapshot of the file system's state. The TEE image will use the [fspf](intel-sgx-technology.md#fspf-file-system-protection-file) feature of SCONE to authenticate the file system directories that would be used by the application \(/bin, /lib...\) as well as the code itself. It takes a snapshot of their state that will be later shared with the worker \(via the Blockchain\) to make sure everything is under control. If we change one bit of one of the authenticated files, the file system's state changes completely and the enclave will refuse to boot since it considers it as a possible attack.

## Prepare your application:

Create a directory tree for your application in `~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir my-tee-hello-world-app && cd my-tee-hello-world-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
```

In the folder `src/` create the file `app.js` then copy [this](../your-first-app.md#write-the-app-javascript-script-example) code inside.

As we mentioned earlier, the advantage of using **SCONE** is the ability to make the application **Intel® SGX-enabled** without changing the source code. The only thing we are going to do is rebuilding the app using the Trusted-Execution-Environment tooling provided by **SCONE**.

{% hint style="info" %}
SCONE provides TEE conversion tooling (Python, Java, ..) plus eventually TEE base images for other languages (NodeJs).
{% endhint %}

Copy the Dockerfile of the non-TEE app:

{% tabs %}
{% tab title="Javascript" %}
{% code title="Dockerfile" %}
```bash
# Starting from a base image supported by SCONE  
FROM node:14-alpine3.11

# install your dependencies
RUN mkdir /app && cd /app && npm install figlet@1.x

COPY ./src /app

ENTRYPOINT [ "node", "/app/app.js"]
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Build the TEE docker image:

You will need to register a [free SCONE Account](https://scontain.com) to access SCONE build tools and curated images from the [SCONE registry](https://gitlab.scontain.com/).

Once your account is activated, you need to [request access to the SCONE build tools for iExec](mailto:info@scontain.com?cc=scone-access@iex.ec&subject=iExec%20Build%20Tools&body=Hi%20SCONE%20Team%0D%0A%0D%0AI%20would%20like%20to%20get%20access%20to%20the%20SCONE%20build%20tools%20for%20iExec:%0A%20-%20scone-production/iexec-sconify-image%0A%20-%20sconecuratedimages%20(all%20curated%20images%20such%20as%20nodejs%20python...)%0A%0AMy%20DockerID%20is%20...%0A%0ABest%20regards%0A%0A...).

```sh
# when your account is ready, run `docker login` to connect the SCONE registry
docker login registry.scontain.com:5050
```

We will use the following script to wrap the sconification process, copy the `sconify.sh` script in the current directory:

{% code title="sconify.sh" %}
```bash
#!/bin/bash

# declare the app entrypoint
ENTRYPOINT="node /app/app.js"
# declare an image name
IMG_NAME=nodejs-hello-world

IMG_FROM=${IMG_NAME}:temp-non-tee
IMG_TO=${IMG_NAME}:tee-debug

# build the regular non-TEE image
docker build . -t ${IMG_FROM}

# pull the SCONE curated image corresponding to our base image
docker pull registry.scontain.com:5050/sconecuratedimages/node:14.4.0-alpine3.11

# run the sconifier to build the TEE image based on the non-TEE image
docker run -it --rm \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com:5050/scone-production/iexec-sconify-image:5.3.7 \
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


```sh
# make the script executable
chmod +x sconify.sh
# run the sconify script
./sconify.sh
```

Congratulation you just built your first TEE application.

{% hint style="info" %}

You may have noticed the `tee-debug` flag in the image name, the built image is actually in TEE debug mode, this allows you to have some debug features while developping the app.
Once you are happy with the debug app, contact us to go to production!

{% endhint %}

## Test your app on iExec

At this stage, your application is ready to be tested on iExec. The process is similar to testing any type of application on the platform, with these minor exceptions:

### Deploy the TEE app on iExec:

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
    "name": "tee-hello-world", // application name
    "type": "DOCKER",
    "multiaddr": "docker.io/username/my-tee-hello-world:1.0.0", // app image
    "checksum": "0x15bed530c76f1f3b05b2db8d44c417128b8934899bc85804a655a01b441bfa78", // image digest
    "mrenclave": {
      "provider": "SCONE", // TEE provider (keep default value)
      "version": "v5", // Scone version (keep default value)
      "entrypoint": "node /app/app.js", // your app image entrypoint
      "heapSize": 1073741824, // heap size in bytes (1GB)
      "fingerprint": "eca3ace86f1e8a5c47123c8fd271319e9eb25356803d36666dc620f30365c0c1" // fingerprint of the enclave code (mrenclave), see how to retrieve it below
    }
  },
  ...
}
```

{% hint style="info" %}
Run your TEE image with `SCONE_HASH=1` to get the enclave fingerprint (mrenclave):
```sh
docker run -it --rm -e SCONE_HASH=1 nodejs-hello-world:tee-debug
```
{% endhint %}

Deploy the app with the standard command:
```sh
iexec app deploy --chain viviani
```

### Run the TEE app

Specify the tag `--tag tee` in `iexec app run` command to run a tee app.


One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the Viviani debug workerpool `0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe` (see deployed workerpools on https://v6.pools.iex.ec).

The debug workerpool is connected to a debug Secret Management Service (this is fine for debugging but do not use to store production secrets), we will need to init the storage token on this SMS.

These `sed` commands will do the trick:

```sh
# set a custom viviani SMS in chain.json
sed -i 's|"viviani": {},|"viviani": { "sms": "https://v6.sms.debug-tee-services.viviani.iex.ec" },|g' chain.json
```
```sh
# initialize the storage
iexec storage init --chain viviani
```
```sh
# restore the default configuration in chain.json
sed -i 's|"viviani": { "sms": "https://v6.sms.debug-tee-services.viviani.iex.ec" },|"viviani": {},|g' chain.json
```

You are now ready to run the app

```
iexec app run --tag tee --workerpool 0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe --watch --chain viviani
```

## Next step?

In this tutorial, you learned how to leverage your application with the power of Trusted Execution Environments using iExec. But according to your use case, you may need to use some confidential data to get the full potential of the **Confidential Computing** paradigm. Check out the next chapter to see how.
