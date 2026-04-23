---
title: Build Your iApp
description:
  Learn how to initialize, configure, and build your iExec application using the
  iApp Generator command-line tool with step-by-step guidance.
---

# Build your iApp

::: tip 📋 Prerequisites

Before building your iApp, make sure you have the required tools installed. See
the [Getting Started guide](/references/iapp-generator/getting-started) for
detailed prerequisites and installation instructions.

:::

## Initialize your iApp

The iApp (iExec App) Generator command-line tool simplifies the setup of your
iApp by guiding you through a step-by-step initialization process. This ensures
your iApp is correctly configured and compatible with iExec's confidential
computing environment.

### Define your project

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

### Configure

You'll set up:

- **Arguments (Args)** – Public parameters for your iApp.
- **Input Files** – Files dynamically downloaded during execution. These can
  come from **a specific URL**.
- **Requester Secrets** – Confidential authentication strings.
- **Protected Data** – Encrypted data accessible only inside the TEE.
- **App Secret** – Immutable secret provisioned by the iApp owner.

For more details and to learn how to use them in your application, refer here
[Inputs](/guides/build-iapp/inputs).

## Build your iApp

After initialization, the following essential files and directories are
generated:

- `iapp.config.json`
- `src/app.js` _(JavaScript)_ or `src/app.py` _(Python)_
- `Dockerfile`
- Directories:
  - `input/`
  - `output/`
  - `cache/`

To modify your main application logic open:

```sh
src/app.js  # For JavaScript
src/app.py  # For Python
```

::: info

💡 The `src/` directory contains the core logic of your iApp. Implement your
algorithms and data processing here.

:::

## CLI Commands Reference

### `iapp init`

**Purpose**: Initialize a new iApp project **Usage**: `iapp init` **What it
does**: Creates project structure, configuration files, and basic templates
through interactive prompts.

### `iapp test`

**Purpose**: Test your iApp locally before deployment **Usage**:
`iapp test [options]` **Options**:

- `-v, --version` [boolean] – Show version number
- `--args <string>` – Arguments accessible inside the iApp (use quotes to group)
- `--protectedData <string>` – Specify the protected data mock name (default or
  custom via `iapp mock`)
- `--inputFile <string>` – One or multiple input files (public URLs) available
  inside the iApp at `$IEXEC_INPUT_FILE_NAME_*`
- `--requesterSecret <array>` – Key-value requester secrets (`index=value`)
  available inside the iApp at `$IEXEC_REQUESTER_SECRET_*`

### `iapp deploy`

**Purpose**: Deploy your iApp to the iExec network **Usage**:
`iapp deploy [options]` **Options**:

- `--chain <string>` – Specify the blockchain network for deployment (e.g.,
  `arbitrum-mainnet`, `arbitrum-sepolia-testnet`)

### `iapp run <iAppAddress>`

**Purpose**: Execute your deployed iApp on a worker node **Usage**:
`iapp run <iAppAddress> [options]` **Positional arguments**:

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
  `arbitrum-mainnet`, `arbitrum-sepolia-testnet`)

### `iapp debug <taskId>`

**Purpose**: Retrieve detailed execution logs from worker nodes **Usage**:
`iapp debug <taskId> [options]` **Positional arguments**:

- `<taskId>` – The ID of the task to debug

**Options**:

- `--chain <string>` – Specify the blockchain network of the task (e.g.,
  `arbitrum-mainnet`, `arbitrum-sepolia-testnet`)

### `iapp mock <inputType>`

**Purpose**: Create a mocked input for testing **Usage**:
`iapp mock <inputType> [options]` **Positional arguments**:

- `<inputType>` – Type of input to mock [choices: "protectedData"]

### `iapp wallet <action>`

**Purpose**: Manage wallet-related operations **Usage**:
`iapp wallet <action> [options]` **Positional arguments**:

- `<action>` – Import a new wallet or select one from the keystore [choices:
  "import", "select"]

## Next Steps

Your iApp is now running on iExec!

Once your application is **stable** and **functional**, you can learn how to
[manage access to your iApp](/guides/build-iapp/manage-access)

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
</script>
