# Use confidential assets

{% hint style="warning" %}
The [Gramine TEE framework](choose-your-tee-framework.md#gramine) is not supported at the moment.
This page is only applicable to the [Scone TEE framework](choose-your-tee-framework.md#scone).
{% endhint %}

{% hint style="success" %}
**Prerequisites**

- Familiarity with the basic concepts of [Intel® SGX](intel-sgx-technology.md#intel-r-software-guard-extension-intel-r-sgx) and [SCONE](intel-sgx-technology.md#scone-framework) framework.
- [Build With a Scone TEE application](create-your-first-sgx-app.md)
{% endhint %}

Trusted Execution Environments offer a huge advantage from a security perspective. They guarantee that the behavior of execution does not change even when launched on an untrusted remote machine. The data inside this type of environment is also protected, which allows its monetization while preventing leakage.

With iExec, it is possible to authorize only applications you trust to use your datasets and get paid for it. Data is encrypted using standard encryption mechanisms and the plain version never leaves your machine. The encrypted version is made available for usage and the encryption key is pushed into the [SMS](intel-sgx-technology.md#secret-management-service-sms). After you deploy the dataset on iExec it is you, and only you, who decides which application is allowed to get the secret to decrypt it.

{% hint style="warning" %}
In this tutorial, you will learn how to leverage an encrypted dataset by using the `IEXEC_DATASET_FILENAME` environment variable in your application.

Datasets are only decrypted inside authorized [enclaves](intel-sgx-technology.md#enclave) and never leave them. The same thing applies to secrets.
{% endhint %}

{% hint style="info" %}
Your secrets are securely transferred with the SDK from your machine to the SMS over a TLS channel. Internally, your secrets are encrypted with standard AES encryption before being written to disk. Next releases will feature an SMS running entirely inside a trusted enclave.
{% endhint %}

Let's see how to do all of that!

## Encrypt the dataset

Before starting, let's make sure we are inside the `~/iexec-projects` folder created previously during the [quick start](../quick-start-for-developers.md) tutorial.

```bash
cd ~/iexec-projects
mkdir tee-dataset-app && cd tee-dataset-app
iexec init --skip-wallet
```

Make sure your `iexec.json` content is the same as the one described [here](create-your-first-sgx-app.md#update-chain-json).
Init the dataset configuration.

```bash
iexec dataset init --encrypted
```

This command will create the `datasets/encrypted`, `datasets/original` and `.secrets/datasets` folders. A new section `"dataset"` will be added to the `iexec.json` file as well.

```bash
.
├── datasets
│   ├── encrypted
│   └── original
└── .secrets
    └── datasets
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

Fill in the fields of the `iexec.json` file. Choose a `name` for your dataset, put the encrypted file's URI in `multiaddr`\(the URI you got after publishing the file\), and add the `checksum` \(you can get it by running `sha256sum datasets/encrypted/my-first-dataset.txt.enc`\).

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
iexec dataset deploy --chain bellecour
```

You will get a hexadecimal address for your deployed dataset. Use that address to push the encryption key to the [SMS](intel-sgx-technology.md#secret-management-service-sms) so it is available for authorized applications.

For simplicity, we will use the dataset with a TEE-debug app on a debug workerpool. The debug workerpool is connected to a debug Secret Management Service so we will send the dataset encryption key to this SMS (this is fine for debugging but do not use to store production secrets).

### Push the dataset secret to the SMS
```bash
iexec dataset push-secret --chain bellecour
```

### Check secret availability on the SMS

```bash
iexec dataset check-secret --chain bellecour
```

We saw in this section how to encrypt a dataset and deploy it on iExec. In addition, we learned how to push the encryption secret to the [SMS](intel-sgx-technology.md#secret-management-service-sms). Now we need to build the application that is going to consume this dataset.

## Prepare your application

Let's create a directory tree for this app in `~/iexec-projects/`.

```bash
cd ~/iexec-projects/tee-dataset-app
mkdir src
touch Dockerfile
touch sconify.sh
```

In the folder `src/` create the file `app.js` or `app.py` then copy this code inside:

The application reads the content of the dataset and writes it into the result's folder \(in an artistic way using **Figlet\)**:

{% tabs %}
{% tab title="Javascript" %}
{% code title="src/app.js" %}

```javascript
const fsPromises = require("fs").promises;
const figlet = require("figlet");

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    const iexecIn = process.env.IEXEC_IN;
    const datasetFileName = process.env.IEXEC_DATASET_FILENAME;

    // Use some confidential assets
    let text = "";
    try {
      const confidentialFile = await fsPromises.readFile(
        `${iexecIn}/${datasetFileName}`
      );
      text = figlet.textSync(confidentialFile.toString());
    } catch (e) {
      console.log("confidential file does not exist");
    }
    // Append some results
    await fsPromises.writeFile(`${iexecOut}/result.txt`, text);
    console.log(text);
    // Declare everything is computed
    const computedJsonObj = {
      "deterministic-output-path": `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
      `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="src/app.py" %}

```python
import json
import os

from pyfiglet import Figlet

iexec_out = os.environ['IEXEC_OUT']
iexec_in = os.environ['IEXEC_IN']
dataset_filename = os.environ['IEXEC_DATASET_FILENAME']

text = ''

# Check the confidential file exists and open it
try:
    dataset_file = open(iexec_in + '/' + dataset_filename, 'r')
    dataset = dataset_file.read()
    text = Figlet().renderText(dataset)
except OSError:
    print('confidential file does not exists')
    exit(1)

print(text)

# Append some results in /iexec_out/
with open(iexec_out + '/result.txt', 'w+') as fout:
    fout.write(text)

# Declare everything is computed
with open(iexec_out + '/computed.json', 'w+') as f:
    json.dump({"deterministic-output-path": iexec_out + '/result.txt'}, f)
```

{% endcode %}
{% endtab %}
{% endtabs %}


## Build the TEE docker image

Create the `Dockerfile` as described in [Build your first application](../your-first-app.md#dockerize-your-app).

Build the Docker iamge:

```bash
docker build . --tag <docker-hub-user>/hello-world-with-dataset:1.0.0
```

Follow the steps described in [Build Scone app > Build the TEE docker image](create-your-first-sgx-app.md#build-the-tee-docker-image).
Create the `sconify.sh` script and update the variables as follow:

```bash
# declare related variables
IMG_NAME=tee-scone-hello-world-with-dataset
IMG_FROM=<docker-hub-user>/hello-world-with-dataset:1.0.0
IMG_TO=<docker-hub-user>/${IMG_NAME}:1.0.0-debug
```

Run the `sconify.sh` script to build the TEE-debug app, then push your image on Docker Hub.

```bash
docker push <docker-hub-user>/tee-scone-hello-world-with-dataset:1.0.0-debug
```

## Test your app on iExec

At this stage, your application is ready to be tested on iExec.

### Deploy the TEE app on iExec

Deploy the application as described in [Build Scone app](create-your-first-sgx-app.md#deploy-the-tee-app-on-iexec).

### Run the TEE app

Specify the tag `--tag tee,scone` and the dataset to use `--dataset <datasetAddress>` in `iexec app run` command to run a tee app with a dataset.

One last thing, in order to run a **TEE-debug** app you will also need to select a debug workerpool, use the debug workerpool `v8-debug.main.pools.iexec.eth`.

You are now ready to run the app

```bash
iexec app run <appAddress> \
  --tag tee,scone \
  --dataset <datasetAddress> \
  --workerpool v8-debug.main.pools.iexec.eth \
  --watch \
  --chain bellecour
```

## Next step?

Thanks to the explained confidential computing workflow, you discovered how to use an encrypted dataset with a trusted application.
To go further, check out how to:

- [Attach a secret to your app](app-developer-secret.md)
- [Access requester secrets](requester-secrets.md)
- [Protect the result](end-to-end-encryption.md)
