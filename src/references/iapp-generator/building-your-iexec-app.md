---
title: Build Your iApp
description:
  Learn how to initialize, configure, and build your iExec application using the
  iApp Generator CLI with step-by-step guidance.
---

# 🧑‍🏭 Build your iApp

## 🧰 Initialize your iApp

The iApp (iExec Application) Generator CLI simplifies the setup of your iApp by
guiding you through a step-by-step initialization process. This ensures your
iApp is correctly configured and compatible with iExec's confidential computing
environment.

### 🏗 Define your Project

<CLIDemo
  initialCommand="iapp init"
  asciiText="iApp"
  :steps="[
    {
      showAt: 2,
      completeAt: 4,
      question: 'What is your project name? (A folder with this name will be created)',
      answer: 'hello-world',
      showTyping: true,
      isComplete: false
    },
    {
      showAt: 4,
      completeAt: 6,
      question: 'Which language do you want to use?',
      answer: 'JavaScript',
      options: [
        { label: 'JavaScript', selected: true },
        { label: 'Python', selected: false }
      ],
      highlighted: false,
      isComplete: false
    },
    {
      showAt: 6,
      completeAt: 8,
      question: 'What kind of project do you want to init?',
      answer: 'Hello World',
      options: [
        { label: 'Hello World - iapp quick start', selected: true },
        { label: 'advanced', selected: false }
      ],
      highlighted: false,
      isComplete: false
    }
  ]"
  :completionStep="8"
  :completionMessage="'Generating your iApp...'"
  :completionItems="[
    '📁 Created hello-world/',
    '📄 Added package.json',
    '🐳 Added Dockerfile',
    '⚙️ Added iExec configuration'
  ]"
  :successMessage="'Your iApp is ready!'"
/>

Follow the prompts to specify:

- **Project name** – Creates a folder for your project files.
- **Language** – Choose between JavaScript, Python, etc.
- **Project mode** – Choose Basic (Hello-World setup) or Advanced mode.

### ⚙ Configure

You'll set up:

- **Arguments (Args)** – Public parameters for your iApp.
- **Input Files** – Files dynamically downloaded during execution. These can
  come from **a specific URL**.
- **Requester Secrets** – Confidential authentication strings.
- **Protected Data** – Encrypted data accessible only inside the TEE.
- **App Secret** – Immutable secret provisioned by the iApp owner.

::: tip 💡

The Secret Management Service (SMS) securely stores application developer
secrets. Once set, the App Secret is immutable and cannot be updated. Use with
caution.

For more information on **App Secrets**, refer to
[Access confidential assets from your app](https://protocol.docs.iex.ec/for-developers/confidential-computing/access-confidential-assets)

:::

For more details and to learn how to use them in your application, refer here
[Application I/O](https://protocol.docs.iex.ec/for-developers/application-io)

## 🚀 Launch your iApp

After initialization, the following essential files and directories are
generated:

- `iapp.config.json`
- `src/app.js` _(JavaScript)_ or `src/app.py` _(Python)_
- `Dockerfile`
- Directories:
  - `input/`
  - `output/`
  - `cache/`

### 📝 Update your iApp

To modify your main application logic open:

```sh
src/app.js  # For JavaScript
src/app.py  # For Python
```

::: info

💡 The `src/` directory contains the core logic of your iApp. Implement your
algorithms and data processing here.

:::

## 🛠️ CLI Commands Reference

### `iapp init`

**Purpose**: Initialize a new iApp project  
**Usage**: `iapp init [options]`  
**What it does**: Creates project structure, configuration files, and basic
templates through interactive prompts.

### `iapp test`

**Purpose**: Test your iApp locally before deployment  
**Usage**: `iapp test [options]`  
**Options**:

- `-v, --version` [boolean] – Show version number
- `--args <string>` – Arguments accessible inside the iApp (use quotes to group)
- `--protectedData <string>` – Specify the protected data mock name (default or
  custom via `iapp mock`)
- `--inputFile <string>` – One or multiple input files (public URLs) available
  inside the iApp at `$IEXEC_INPUT_FILE_NAME_*`
- `--requesterSecret <array>` – Key-value requester secrets (`index=value`)
  available inside the iApp at `$IEXEC_REQUESTER_SECRET_*`

### `iapp deploy`

**Purpose**: Deploy your iApp to the iExec network  
**Usage**: `iapp deploy [options]`  
**Options**:

- `--chain <string>` – Specify the blockchain network for deployment (e.g.,
  `goerli`, `mainnet`)

### `iapp run <iAppAddress>`

**Purpose**: Execute your deployed iApp on a worker node  
**Usage**: `iapp run <iAppAddress> [options]`  
**Positional arguments**:

- `<iAppAddress>` – Address of the deployed iApp to run

**Options**:

- `--args <string>` – Arguments accessible inside the iApp (use quotes to group)
- `--protectedData <string>` – Specify the protected data mock name (default or
  custom via `iapp mock`)
- `--inputFile <string>` – One or multiple input files (public URLs) available
  inside the iApp at `$IEXEC_INPUT_FILE_NAME_*`
- `--requesterSecret <array>` – Key-value requester secrets (`index=value`)
  available inside the iApp at `$IEXEC_REQUESTER_SECRET_*`
- `--chain <string>` – Specify the blockchain network to run the iApp on (e.g.,
  `goerli`, `mainnet`)

### `iapp debug <taskId>`

**Purpose**: Retrieve detailed execution logs from worker nodes  
**Usage**: `iapp debug <taskId> [options]`  
**Positional arguments**:

- `<taskId>` – The ID of the task to debug

**Options**:

- `--chain <string>` – Specify the blockchain network of the task (e.g.,
  `goerli`, `mainnet`)

### `iapp mock <inputType>`

**Purpose**: Create mocked input for testing purposes  
**Usage**: `iapp mock <inputType> [options]`  
**Positional arguments**:

- `<inputType>` – Type of input to mock (e.g., `default`, `custom`)  

**Options**:

- `--args <string>` – Arguments to use in the mock data
- `--protectedData <string>` – Protected data mock name to use
- `--inputFile <string>` – Input files to mock
- `--requesterSecret <array>` – Requester secrets to mock

### `iapp wallet <action>`

**Purpose**: Manage wallet-related operations  
**Usage**: `iapp wallet <action> [options]`  
**Positional arguments**:

- `<action>` – Wallet action to perform (e.g., `balance`, `address`, `sign`)  

**Options**:

- `--chain <string>` – Specify the blockchain network (e.g., `goerli`,
  `mainnet`)
- `--data <string>` – Data to sign (for `sign` action)

## Advanced Options <ChainNotSupportedBadge />

### `EXPERIMENTAL_TDX_APP=true`

**Purpose**: Enable experimental Intel TDX support  
**Usage**: Set as environment variable before running commands  
**Example**: `EXPERIMENTAL_TDX_APP=true iapp test`

**Available with**:

- `iapp test`
- `iapp deploy`
- `iapp run <app-address>`

::: info TDX <ChainNotSupportedBadge />

🧪 While **TEE** iApp are based on **intel SGX** technology by default, iApp has
an experimental support for **intel TDX** applications.

TDX mode is enabled by setting the environment variable
`EXPERIMENTAL_TDX_APP=true`.

⚠️ Keep in mind: TDX mode is experimental and can be subject to instabilities or
discontinuity.

:::

## 🚀 Next Steps

Your iApp is now running on iExec!

Once your application is **stable** and **functional**, you can learn how to
[manage orders](https://protocol.docs.iex.ec/for-developers/advanced/manage-your-apporders)

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
</script>
