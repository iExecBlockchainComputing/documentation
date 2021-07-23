# Use confidential assets

{% hint style="success" %}
**Prerequisites**

* [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
* [Nodejs](https://nodejs.org) 12.0.0 or higher.
* [iExec SDK](https://www.npmjs.com/package/iexec) 6.0.0 or higher.
* Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
{% endhint %}

{% hint style="warning" %}
Please make sure you have already checked the [Quickstart](../your-first-app.md), [Your first application](../your-first-app.md) and [Build trusted applications](create-your-first-sgx-app.md) tutorials before learning how to manage confidential datasets.
{% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to authorize only applications you trust to use your datasets and get paid for it. Data is encrypted using standard encryption mechanisms and the plain version never leaves your machine. The encrypted version is made available for usage and the encryption key is pushed into the [SMS](intel-sgx-technology.md#secret-management-service-sms). After you deploy the dataset on iExec it is you, and only you, who decides which application is allowed to get the secret to decrypt it.

{% hint style="warning" %}
Datasets are only decrypted inside authorized [enclaves](intel-sgx-technology.md#enclave) and never leave them. The same thing applies to secrets.
{% endhint %}

{% hint style="info" %}
Your secrets are securely transferred with the SDK from your machine to the SMS over a TLS channel. Internally, your secrets are encrypted with standard AES encryption before being written to disk. Next releases will feature an SMS running entirely inside a trusted enclave.
{% endhint %}

Let's see how to do all of that!

## Encrypt the dataset

Before starting, let's make sure we are inside the folder `~/iexec-projects` - created previously, during the [quick start](../quick-start-for-developers.md) tutorial.

```bash
cd ~/iexec-projects
```

Init the dataset configuration.

```bash
iexec dataset init --encrypted
```

This command will create the folders `datasets/encrypted`, `datasets/original` and `.secrets/datasets`. A new section `"dataset"` will be added to the `iexec.json` file as well.

```bash
.
├── datasets
│   ├── encrypted
│   └── original
└── .secrets
│    └── datasets
...
```

We will create a dummy file that has `"Hello, world!"` as content inside `datasets/original`. Alternatively, you can put your own dataset file.

```bash
echo "Hello, confidential world!" > datasets/original/my-first-dataset.txt
```

```bash
datasets
├── encrypted
└── original
    └── my-first-dataset.txt
```

Now run the following command to encrypt the file:

```bash
iexec dataset encrypt
```

{% hint style="info" %}
`iexec dataset encrypt` will output a checksum, keep this value for a later use.
{% endhint %}

```bash
datasets
├── encrypted
│   └── my-first-dataset.txt.enc
└── original
    └── my-first-dataset.txt
```

As you can see, the command generated the file `datasets/encrypted/my-first-dataset.txt.enc`. That file is the encrypted version of your dataset, you should push it somewhere accessible because the worker will download it during the execution process. You will enter this file's URI in the `iexec.json`file \(`multiaddr` attribute\) when you will deploy your dataset. Make sure that the URI is a **DIRECT** download link \(not a link to a web page for example\).

{% hint style="info" %}
You can use Github for example to publish the file but you should add **/raw/** to the URI like this: [https://github.com/&lt;username&gt;/&lt;repo&gt;/raw/master/my-first-dataset.zip](https://github.com/<username>/<repo>/raw/master/my-first-dataset.zip)
{% endhint %}

The file `.secrets/datasets/my-first-dataset.txt.key` is the encryption key, make sure to back it up securely. The file `.secrets/datasets/dataset.key` is just an "alias" in the sense that it is the key of the last encrypted dataset.

```bash
.secrets
└── datasets
    ├── dataset.key
    └── my-first-dataset.txt.key
```

## Deploy the dataset

Fill in the fields of the `iexec.json` file. Choose a `name` for your dataset, put the encrypted file's URI in `multiaddr`\(the URI you got after publishing the file\), and add the `checksum` \(you can get it by running `sha256sum datasets/encrypted/my-first-dataset.txt.enc`\)

```bash
$ cat iexec.json
{
  "description": "My iExec ressource description...",

  ...

  "dataset": {
    "owner": "0x-your-wallet-address",
    "name": "Encrypted hello world dataset",
    "multiaddr": "/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ",
    "checksum": "0x0000000000000000000000000000000000000000000000000000000000000000"
  }
}
```

To deploy your dataset run:

```bash
iexec dataset deploy --chain viviani
```

You will get a hexadecimal address for your deployed dataset. Use that address to push the encryption key to the [SMS](intel-sgx-technology.md#secret-management-service-sms) so it is available for authorized applications.

For simplicity, we will use the dataset with a TEE-debug app on a debug workerpool. The debug workerpool is connected to a debug Secret Management Service so we will send the dataset encryption key to this SMS (this is fine for debugging but do not use to store production secrets).

These `sed` commands will do the trick:

```sh
# set a custom viviani SMS in chain.json
sed -i 's|"viviani": {},|"viviani": { "sms": "https://v6.sms.debug-tee-services.viviani.iex.ec" },|g' chain.json
```
```sh
# push the dataset secret to the SMS
iexec dataset push-secret --chain viviani
# check the secret is available on the SMS
iexec dataset check-secret --chain viviani
```
```sh
# restore the default configuration in chain.json
sed -i 's|"viviani": { "sms": "https://v6.sms.debug-tee-services.viviani.iex.ec" },|"viviani": {},|g' chain.json
```

We saw in this section how to encrypt a dataset and deploy it on iExec. In addition, we learned how to push the encryption secret to the [SMS](intel-sgx-technology.md#secret-management-service-sms). Now we need to build the application that is going to consume this dataset.

## Prepare your application:

Let's create a directory tree for this app in `~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir my-tee-dataset-app && cd my-tee-dataset-app
iexec init --skip-wallet
mkdir src
touch src/app.js
touch Dockerfile
touch sconify.sh
```

In the folder `src/` create the file `app.js` then copy this code inside:

In `app.js`, we read the content of the dataset and write it in the result's folder \(in an artistic way using **Figlet\)**:

{% tabs %}
{% tab title="Javascript" %}
{% code title="src/app.js" %}
```javascript
const fsPromises = require('fs').promises;
const figlet = require('figlet');

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    const iexecIn = process.env.IEXEC_IN;
    const datasetFileName = process.env.IEXEC_DATASET_FILENAME;

    // Use some confidential assets
    let text = '';
    try {
      const confidentialFile = await fsPromises.readFile(`${iexecIn}/${datasetFileName}`);
      text = figlet.textSync(confidentialFile.toString());
    } catch (e) {
      console.log('confidential file does not exists');
    }
    // Append some results
    await fsPromises.writeFile(`${iexecOut}/result.txt`, text);
    console.log(text);
    // Declare everything is computed
    const computedJsonObj = {
      'deterministic-output-path': `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
      `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj),
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Build the TEE docker image:

The Dockerfile and the build scripts are the same as the ones we saw [previously](create-your-first-sgx-app.md) for a trusted application:

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


{% code title="sconify.sh" %}
```bash
#!/bin/bash

# declare the app entrypoint
ENTRYPOINT="node /app/app.js"
# declare an image name
IMG_NAME=nodejs-dataset-app

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

Run the `sconify.sh` script to build the TEE-debug app.

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
    "name": "tee-dataset-app", // application name
    "type": "DOCKER",
    "multiaddr": "docker.io/username/my-tee-dataset-app:1.0.0", // app image
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

Specify the tag `--tag tee` and the dataset to use `--dataset <datasetAddress>` in `iexec app run` command to run a tee app with a dataset.

One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the Viviani debug workerpool `0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe` (see deployed workerpools on https://v6.pools.iex.ec).

You are now ready to run the app

```
iexec app run <appAddress> --tag tee --dataset <datasetAddress> --workerpool 0xe6806E69BA8650AF23264702ddD43C4DCe35CcCe --watch --chain viviani
```

## Next step?

Thanks to the explained confidential computing workflow, it is possible to use an encrypted dataset with a trusted application. We can go another step further and protect the result too. See in the next chapter how to make your execution result encrypted so that you are the only one who can read it.

