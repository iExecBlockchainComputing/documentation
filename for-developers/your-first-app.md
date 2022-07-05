---
description: >-
  In this section we will show you how you can create a Docker dapp over the
  iExec infrastructure.
---

# Your first application

{% hint style="success" %}
**Prerequisites**

* [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and client.
* [Dockerhub](https://hub.docker.com/) account.
* [Nodejs](https://nodejs.org) 14.0.0 or higher.
* [iExec SDK](https://www.npmjs.com/package/iexec) 7.2.0 or higher.
* [Quickstart](quick-start-for-developers.md) tutorial completed
{% endhint %}

In this guide, we will prepare an iExec app based on an existing docker image and we will run it on iExec decentralized infrastructure.

**Tutorial Steps :**

* [Understand what is an iExec decentralized application?](your-first-app.md#understand-what-is-an-iexec-decentralized-application)
* [Application I/O](your-first-app.md#application-i-o)
* [Build your app](your-first-app.md#build-your-app)
* [Test your app locally](your-first-app.md#test-your-app-locally)
* [Test your app on iExec](your-first-app.md#test-your-app-on-iexec)
* [Publish your app on iExec marketplace](your-first-app.md#publish-your-app-on-the-iexec-marketplace)
* [What's next?](your-first-app.md#whats-next)

## Understand what is an iExec decentralized application?

iExec leverage [Docker](https://www.docker.com/why-docker) containers to ensure the execution of your application on a decentralized infrastructure. iExec supports Linux-based docker images.

### Why using Docker containers?

* Docker Engine is the most **widely used** container engine.
* A Docker container image is a **standard** unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. This allows for computations to be **run on any worker** connected to the decentralized infrastructure.
* Docker also enables the creation of new layers on top of existing images. This allows for any iExec **apps to be easily built on top of existing docker images**.

### What kind of application can I build on iExec?

Today you can run any application as a task. This means services are not supported for now.

## Application I/O

This is an overview of an iExec application inputs and expected outputs. You probably don't have to deeply understand every part of this section to build your app, just pick what you need.

### Application Inputs

The different kinds of input are listed below.

| name | type | confidentiality | provider |
|---|---|---|---|
| [args](#args) | string | public | requester |
| [input files](#input-files) | files | public | requester |
| [requester secrets](#requester-secrets) | strings | secret\* | requester |
| [dataset](#dataset) | file | secret\* | requester/<br/>third-party |
| [app developer secret](#app-developer-secret) | string | secret\* | app developer |

\* secret inputs are protected by the TEE technology they are not exposed to non TEE tasks

#### Args

The requester uses **args** to pass non-sensitive arguments to the app.

##### Provisioning args

**args** are defined by the requester via `requestorder` `params.iexec_args`.

{% code title="requestorder" %}

```json
{
  ...
  "params": {
    ...
    "iexec_args": "do something"
    ...
  }
  ...
}
```

{% endcode %}

##### Consuming args

**args** are forwarded as they are, straight to the application.

#### Input files

The requester uses **input files** to pass non-sensitive files to process.

##### Provisioning input files

**input files** are defined by the requester via a list of download URLs in `requestorder` `params.iexec_input_files`.

{% code title="requestorder" %}

```json
{
  ...
  "params": {
    ...
    "iexec_input_files": [
      "https://example.com/file.txt",
      "https://example.com/image.jpeg"
      ]
    ...
  }
  ...
}
```

{% endcode %}

##### Consuming input files

Each **input file** is downloaded in the `IEXEC_IN` directory and gets its name exposed to the application via `IEXEC_INPUT_FILE_NAME_x` (where `x` is the index of the file starting with `1`).

input files count is exposed via `IEXEC_INPUT_FILES_NUMBER`

#### Requester secrets

The requester uses **requester secrets** to securely pass secrets to the application.

##### Provisioning requester secrets

The requester pushes named secrets to the SMS.

The requester defines a mapping of secret names onto secret numbers via `requestorder` `params.iexec_secrets` (secrets numbers must be strictly positive).

{% code title="requestorder" %}

```json
{
  ...
  "params": {
    ...
    "iexec_secrets": {
      "1": "my-login",
      "2": "my-password"
    }
    ...
  }
  ...
}
```

{% endcode %}

##### Consuming requester secrets

Each **requester secret** is exposed to the application in `IEXEC_REQUESTER_SECRET_x` where `x` is the secret number set by the requester.

#### Dataset

The requester uses a **dataset** to use third-party confidential data in the application.

##### Provisioning a dataset

The dataset provider creates a **dataset** and defines the governance in `datasetorder`s.

The requester specifies the **dataset** to use via `requestorder` `dataset`.

{% code title="requestorder" %}

```json
{
  ...
  "dataset": "0x915F00E3A45e7A78aa21401D0398109f795D8bcA",
  "datasetmaxprice": "0"
  ...
}
```

{% endcode %}

##### Consuming a dataset

The **dataset** file is downloaded and unencrypted in the `IEXEC_IN` directory and gets its name exposed to the application via `IEXEC_DATASET_FILENAME`.

The **dataset** address is also exposed via `IEXEC_DATASET_ADDRESS`.

#### App developer secret

The developer uses an **app developer secret** to inject an immutable secret into the application.

##### Provisioning an app developer secret

The app developer pushes an **app developer secret** to the Secret Management Service.

Once pushed, an **app developer secret** cannot be modified.

##### Consuming an app developer secret

The **app developer secret** is exposed to the application in `IEXEC_APP_SECRET`

### Runtime variables

The runtime variables are environment variables set by the iExec worker and available for your application.

#### Input variables

| Name | Type | Content |
|---|---|---|
| IEXEC_IN | path | Absolute path of iexec input folder |
| IEXEC_INPUT_FILES_NUMBER | int &gt;= 0 | Total number of input files |
| IEXEC_INPUT_FILE_NAME_x | string or unset | Name of the input file indexed by x \(`x` starts with `1`\) |
| IEXEC_REQUESTER_SECRET_x | string or unset | requester secret number x \(`x` starts with `1`\) |
| IEXEC_DATASET_FILENAME | string or unset | Name of the dataset file |
| IEXEC_DATASET_ADDRESS | address | ethereum address of the dataset used (or address zero) |
| IEXEC_APP_DEVELOPER_SECRET | string or unset | app developer secret |

#### Other variables

| Name | Type | Content |
|---|---|---|
| IEXEC_OUT | path | Absolute path of iexec output folder |
| IEXEC_TASK_ID | bytes32 | taskid of the running task |
| IEXEC_BOT_TASK_INDEX  | int &gt;= 0 | Index of the current task in the Bag of Tasks* |
| IEXEC_BOT_FIRST_INDEX | int &gt;= 0 | Index of the first task in the current Deal \(Bag of task* subset\) |
| IEXEC_BOT_SIZE | int &gt;= 1 | Total number of parallelized tasks in a Bag of Tasks* |

\* The requester may request multiple tasks in a single requestorder \(Bag of Tasks\), each task of the bag is given a unique index.

### Application outputs

An iExec app produces a result archive (`zip` file) for the requester with the following tree:

```text
result.zip
  ├── stdout.txt
  ├── stderr.txt
  ├── computed.json
  └── ...
```

* The iExec worker automaticaly creates `stdout.txt` and `stdout.txt` containing the logs of your application.
* Your application **must** create the `computed.json` file in `IEXEC_OUT` when the computing is over.
* Any file placed in `IEXEC_OUT` will also be added to the result archive.

{% hint style="warning" %}
Your application must always create a `computed.json` file in the iExec output directory as a proof of execution.

It contains at least a field `deterministic-output-path` which is the path of the deterministic portion of your results (file or a non-empty folder) and is required for the proof of execution \(given the same inputs this file should always be the same\).

`computed.json` could look like `{ "deterministic-output-path" : "/iexec_out/result.txt" }`

The `computed.json` file is compared across replicated tasks in the [Proof of Contribution protocol](../key-concepts/proof-of-contribution.md) to achieve a consensus on workers.
{% endhint %}

## Build your app

Create the folder tree for your application in `~/iexec-projects/`.

```bash
cd ~/iexec-projects
mkdir my-hello-world-app
cd my-hello-world-app
mkdir src
touch Dockerfile
```

### Write the app

The following examples only feature Javascript and Python use cases for simplicity concerns but remember that you can run on iExec anything which is Dockerizable.

**Copy the following content** in `src/` .

{% tabs %}
{% tab title="JavaScript" %}
{% code title="src/app.js" %}

```javascript
const fsPromises = require('fs').promises;
const figlet = require('figlet');

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // Do whatever you want (let's write hello world here)
    const message = process.argv.length > 2 ? process.argv[2] : 'World';

    const text = figlet.textSync(`Hello, ${message}!`); // Let's add some art for e.g.
    console.log(text);
    // Append some results in /iexec_out/
    await fsPromises.writeFile(`${iexecOut}/result.txt`, text);
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

{% tab title="Python" %}
{% code title="src/app.py" %}

```python
import os
import sys
import json
from pyfiglet import Figlet

iexec_out = os.environ['IEXEC_OUT']

# Do whatever you want (let's write hello world here)
text = 'Hello, {}!'.format(sys.argv[1] if len(sys.argv) > 1 else "World")
text = Figlet().renderText(text) # Let's add some art for e.g.
print(text)

# Append some results in /iexec_out/
with open(iexec_out + '/result.txt', 'w+') as fout:
    fout.write(text)

# Declare everything is computed
with open(iexec_out + '/computed.json', 'w+') as f:
    json.dump({ "deterministic-output-path" : iexec_out + '/result.txt' }, f)
```

{% endcode %}
{% endtab %}
{% endtabs %}

### Dockerize your app

**Copy the following content** in `Dockerfile` .

{% tabs %}
{% tab title="JavaScript" %}
{% code title="Dockerfile" %}

```bash
FROM node:14
### install your dependencies if you have some
RUN mkdir /app && cd /app && npm install figlet@1.x
COPY ./src /app
ENTRYPOINT [ "node", "/app/app.js"]
```

{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="Dockerfile" %}

```bash
FROM python:3.7.3-alpine3.10
### install python dependencies if you have some
RUN pip3 install pyfiglet
COPY ./src /app
ENTRYPOINT ["python3", "/app/app.py"]
```

{% endcode %}
{% endtab %}
{% endtabs %}

Build the docker image.

```bash
docker build . --tag my-hello-world
```

{% hint style="success" %}
`docker build` produce an image id, using `--tag <name>` option is a convenient way to name the image to reuse it in the next steps.
{% endhint %}

**Congratulations you built your first docker image for iExec!**

## Test your app locally

### Basic test

Create local volumes to simulate input and output directories.

```bash
mkdir /tmp/iexec_in
mkdir /tmp/iexec_out
```

Run your application locally \(container volumes bound with local volumes\).

```bash
docker run --rm \
    -v /tmp/iexec_in:/iexec_in \
    -v /tmp/iexec_out:/iexec_out \
    -e IEXEC_IN=/iexec_in \
    -e IEXEC_OUT=/iexec_out \
    my-hello-world arg1 arg2 arg3
```

{% hint style="success" %}
docker run \[options\] image \[args\]

**docker run usage:**

`docker run [OPTIONS] IMAGE [COMMAND] [ARGS...]`

Use `[COMMAND]` and `[ARGS...]` to simulate the requester arguments

**useful options for iExec:**

`-v` : Bind mount a volume. Use it to bind input and output directories (`/iexec_in` and `/iexec_out`)

`-e`: Set environnement variable. Use it to simulate iExec Runtime variables
{% endhint %}

### Test with input files

Starting with the basic test you can simulate input files.

For each input file:

* Copy it in the local volume bound to `/iexec_in` .
* Add `-e IEXEC_INPUT_FILE_NAME_x=NAME` to docker run options \(`x` is the index of the file starting by 1 and `NAME` is the name of the file\)

Add `-e IEXEC_INPUT_FILES_NUMBER=n` to docker run options \(`n` is the total number of input files\).

Example with two inputs files:

```bash
touch /tmp/iexec_in/file1 && \
touch /tmp/iexec_in/file2 && \
docker run \
    -v /tmp/iexec_in:/iexec_in \
    -v /tmp/iexec_out:/iexec_out \
    -e IEXEC_IN=/iexec_in \
    -e IEXEC_OUT=/iexec_out \
    -e IEXEC_INPUT_FILE_NAME_1=file1 \
    -e IEXEC_INPUT_FILE_NAME_2=file2 \
    -e IEXEC_INPUT_FILES_NUMBER=2 \
    my-hello-world \
    arg1 arg2 arg3
```

## Test your app on iExec

### Push your app to Dockerhub

Login to your Dockerhub account.

```bash
docker login
```

Tag your application image to push it to your dockerhub public repository.

```bash
docker tag my-hello-world <dockerusername>/my-hello-world:1.0.0
```

{% hint style="warning" %}
replace `<dockerusername>` with your docker user name
{% endhint %}

Push the image to Dockerhub.

```bash
docker push <dockerusername>/my-hello-world:1.0.0
```

**Congratulations, your app is ready to be deployed on iExec!**

### Deploy your app on iExec

You already learned how to deploy the default app on iExec in the [previous tutorial](quick-start-for-developers.md).

Go back to the `iexec-project` folder.

```bash
cd ~/iexec-projects/
```

You will need a few configurations in `iexec.json` to deploy your app:

* Replace app **name** with your application name \(display only\)
* Replace app **multiaddr** with your app image download URI \(should looks like `registry.hub.docker.com/<dockerusername>/my-hello-world:1.0.0`\)
* Replace app **checksum** with your application image checksum \(see tip below\)

{% hint style="info" %}
The checksum of your app is the sha256 digest of the docker image prefixed with `0x` , you can use the following command to get it.

```bash
docker pull <dockerusername>/my-hello-world:1.0.0 | grep "Digest: sha256:" | sed 's/.*sha256:/0x/'
```

{% endhint %}

Deploy your app on iExec

```bash
iexec app deploy --chain bellecour
```

Verify the deployed app \(name, multiaddr, checksum, owner\)

```bash
iexec app show --chain bellecour
```

### Run your app on iExec

```bash
iexec app run --watch --chain bellecour
```

{% hint style="info" %}
**Using arguments:**

You can pass arguments to the app using `--args <args>` option.

With `--args "dostuff --with-option"` the app will receive `["dostuff", "--with-option"]` as process args.

**Using input files:**

You can pass input files to the app using `--input-files <list of URL>` option.

With `--input-files https://example.com/file-A.txt,https://example.com/file-B.zip` the iExec worker will download the files before running the app in `IEXEC_IN`, and let the app access them throug variables:

* `file-A.txt` as`IEXEC_INPUT_FILE_NAME_1`
* `file-B.zip` as`IEXEC_INPUT_FILE_NAME_2`
{% endhint %}

Once the run is completed copy the taskid from `iexec app run` output to download and check the result

```bash
iexec task show <taskid> --download my-app-result --chain bellecour  \
    && unzip my-app-result.zip -d my-app-result
```

**Congratulations your app successfully ran on iExec!**

### Debug your app on iExec

Sometimes things don't work out right the first time and you may want to debug your application.

Get debug information of task

```bash
iexec task debug <taskid> --logs
```

{% hint style="info" %}
`iexec task debug <taskid>` allows anyone to know the **onchain** and **offchain** statuses of the task.

`--logs` option allows the requester to retrieve the worker's application logs.

For security reasons, application logs are only accessible to the requester.

As a developer, make it a rule to never log sensitive information in your application.
{% endhint %}

## Publish your app on the iExec marketplace

```bash
iexec app publish --chain bellecour
```

**Congratulations your application is now available on iExec!**

## What's next?

In this tutorial you learned about the key concepts for building an app on iExec:

* iExec app inputs and outputs
* iExec app must produce a `computed.json` file \(required for the proof of execution\)
* using docker to package your app with all its dependencies
* testing an iExec app locally
* publishing on dockerhub

Resources:

* A list of iExec applications with their Docker images can be found at [https://github.com/iExecBlockchainComputing/iexec-apps](https://github.com/iExecBlockchainComputing/iexec-apps)

Continue with these articles:

* [Confidential app](confidential-computing/)
* [Learn how to manage your apporders](advanced/manage-your-apporders.md)
