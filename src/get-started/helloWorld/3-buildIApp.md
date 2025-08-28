---
title: Build and Deploy Your First iApp
description:
  Learn how to build and deploy your first iExec application (iApp) for
  processing protected data in this comprehensive tutorial.
---

# 🛠️ Build and Deploy your First iApp

> Reading time 🕒 10 min

<Banner>
  <h2 class="text-2xl font-bold mt-0 border-none!">Time to build!</h2>
  <p>Let's build an iApp that can process protected data in a secure environment using the <a href="/references/iapp-generator" target="_blank">iExec iApp generator tool</a>. This tool helps you create, test and deploy iApp with just a few commands.</p>
</Banner>

If you wanna explore and deep dive in the CLI. You can check the
[iApp-CLI](https://github.com/iExecBlockchainComputing/iapp/tree/main/cli)
github repository. Follow the instructions carefully for a smooth development
experience.

## 📋 Prerequisites

Before getting started, make sure you have:

<div class="flex flex-col gap-2 my-4 pl-0">
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      📦 Node.js v20+
    </div>
    <a target="_blank" href="https://nodejs.org/en/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 Docker installed
    </div>
    <a target="_blank" href="https://docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
  
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 DockerHub Account
    </div>
    <a target="_blank" href="https://hub.docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Sign Up →</a>
  </div>
</div>

<div class="bg-gradient-to-r from-fuchsia-400/10 to-fuchsia-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">Don't worry! All secrets used in this tutorial stay on your machine and aren’t shared with anyone. You’ll only need them to run the <code>iapp run</code> command.</p>
</div>

## 🚀 Types of iApp you Can Build

iExec enables you to build various types of Privacy-preserving applications.
Here are some popular use cases:

### 📧 Web3 Mail

Send privacy-preserving emails to registered Ethereum account holders without
knowing or storing their email addresses.
[Github](https://github.com/iExecBlockchainComputing/web3mail-sdk/tree/main/dapp)
| [Documentation](/references/web3mail)

### 💬 Web3 Telegram

Send privacy-preserving Telegram messages without knowing or storing their
Telegram handles.
[Github](https://github.com/iExecBlockchainComputing/web3telegram-sdk/tree/main/dapp)
| [Documentation](/references/web3telegram)

### 🌐 Content Delivery

Transfer, sell or rent protected content to authorized users.
[Github](https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/main/packages/protected-data-delivery-dapp)
| [Documentation](/references/dataProtector/dataProtectorSharing)

::: tip <i></i>

These are just a few examples, the possibilities are endless. Want to explore
iApp Generator? Check out our
<a href="/references/iapp-generator" target="_blank">documentation</a> and see
what you can build!

:::

## 💾 Installation (Win / Mac / Linux)

First, you need to install the `iapp` package. Open your terminal and run:

::: code-group

```sh [npm]
npm i -g @iexec/iapp
```

```sh [yarn]
yarn global add @iexec/iapp
```

```sh [pnpm]
pnpm add -g @iexec/iapp
```

```sh [bun]
bun add -g @iexec/iapp
```

:::

You can check if the installation was successful by running:

```sh
#checking the version
iapp --version

#checking the available commands
iapp --help
```

## 🛠️ Bootstrap your iApp

To initialize the working directory for developing your iApp, use the
`iapp init` command. This command sets up the necessary project structure and
files.

```sh
mkdir iexec-test
cd iexec-test
iapp init
```

You will be prompted with the following message:

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

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">1</span>
    <span>Pick a name for your project</span>
  </div>
</div>

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">2</span>
    <span>Select a programming language for your project</span>
  </div>
</div>

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">3</span>
    <span>Select the type of project you want to init</span>
  </div>
</div>

::: tip <i></i>

We recommend selecting **"Hello World"** to quickly discover how iApp works! use
**advanced** only if you are familiar with iExec.

:::

- An iApp project is setup with the selected language
- An ethereum wallet has been created (we use it to sign the iApp creation
  onchain)
- A new folder has been created, it contains a very simple application, with the
  main code being located in `src/app.js` or `src/app.py`

## 🧪 Test your iApp

To test your iApp, run the `iapp test` command. This will build a Docker image
and run your application locally to simulate the TEE environment. You'll see the
following steps:

<CLIDemo
  initialCommand="iapp test"
  :steps="[
    {
      showAt: 2,
      question: 'No app secret is configured (from iapp.config.json)',
      answer: '',
      showTyping: false,
      isComplete: true
    },
    {
      showAt: 3,
      question: 'App docker image built (sha256:9cc0de820aaaf8f86700a3ec4082fe69b9e9a48a117ebb0ade0d82d0879cbe41)',
      answer: '',
      showTyping: false,
      isComplete: true
    },
    {
      showAt: 4,
      question: 'App docker image ran and exited successfully.',
      answer: '',
      showTyping: false,
      isComplete: true
    },
    {
      showAt: 5,
      completeAt: 6,
      question: 'Would you like to see the app logs? (12 lines)',
      answer: 'no',
      options: [
        { label: 'yes', selected: false },
        { label: 'no', selected: true }
      ],
      highlighted: false,
      showTyping: false,
      isComplete: false
    },
    {
      showAt: 7,
      question: 'Checked app output',
      answer: '',
      showTyping: false,
      isComplete: true
    },
    {
      showAt: 8,
      completeAt: 10,
      question: 'Would you like to see the result? (View ./output/)',
      answer: 'yes',
      options: [
        { label: 'yes', selected: true },
        { label: 'no', selected: false }
      ],
      highlighted: false,
      showTyping: false,
      isComplete: false
    }
  ]"
  :completionStep="11"
  :completionMessage="'📁 output directory content:'"
  :completionItems="[
    '└ computed.json',
    '└ result.txt'
  ]"
  :successMessage="'hello world'"
  :autoRestart="true"
/>

The `iapp test` command uses your local Docker to build and execute the app,
simulating how it will run in the iExec network's TEE environment.

::: warning Common Issues:

- If you get <code>Error: Docker daemon is not accessible</code>: Make sure
  Docker is installed and running.
- if you get <code>Error: Failed to locate iApp project root</code>: Ensure you
  are in your project folder before proceeding.

:::

### 🧩 Using Arguments

You can pass arguments to your iApp using the `--args` option. This allows you
to provide necessary inputs during runtime (you can use your name for example).

```sh
iapp test --args your-name
```

### 🔒 Using Protected Data

You can pass a protectedData that you are authorized to process to your iApp
using the `--protectedData` option.

Since nothing is actually deployed during testing, we use Protected Data mocks
to test the app. Using `--protectedData` default will provide your app with the
default protectedData mock.

```sh
iapp test --protectedData default
```

::: tip <i></i>

You can check how args and protectedData are processed in `src/app.js` or
`src/app.py`

:::

## 🚀 Deploy your iApp

Deploy your iApp on the iExec protocol.

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">1</span>
    <span>Go to <a href="https://hub.docker.com/settings/security" target="_blank">Docker Hub Security Settings</a></span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">2</span>
    <span>Click <a href="https://app.docker.com/settings/personal-access-tokens" target="_blank">"Personal access tokens"</a> → "Generate new token"</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">3</span>
    <span>Name it "Test iExec iApp CLI" (expiration date is optional)</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">4</span>
    <span>Select "Read & Write" permissions</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">5</span>
    <span>Save your token securely and your username</span>
  </div>
</div>

Once you have your token, you can deploy your iApp.

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp deploy --chain arbitrum-mainnet"
    asciiText="Deploy"
    :steps="arbitrumSteps"
    :completionStep="15"
    :completionMessage="'Deployment of your iApp completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Run iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 to execute your iApp on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp deploy"
    asciiText="Deploy"
    :steps="bellecourSteps"
    :completionStep="14"
    :completionMessage="'Deployment of your iApp completed successfully:'"
    :completionItems="bellecourCompletionItems"
    :successMessage="'Run iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 to execute your iApp on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

::: tip <i></i>

📝 Make sure to save your **iApp address** after deployment - you'll need it
later!

You can find your iApp address in the <code>iexec-app.json</code> file in your
project folder.

⚠️ If you encounter issues during deployment, make sure the Docker BuildKit
feature is enabled and supports AMD64 architecture:

```sh
docker buildx inspect --bootstrap | grep -i platforms
```

The output should include <code>linux/amd64</code> in the list of supported
platforms. If not, update to the latest Docker Desktop version which includes
these requirements.

If you set the wrong Docker username, you can change it by editing the
<code>iapp.config.json</code> file

:::

## 🏃 Run your iApp

Now you can run your application:

```sh
iapp run <my-iapp-address>
```

To sum up the process, we take the **iApp** and wrap it in the iExec framework,
allowing it to run securely in a **Trusted Execution Environment (TEE)** for
**confidential computing**. If you want to explore further, you can check the
protocol documentation [here](https://protocol.docs.iex.ec/).

<Container variant="success">

🎉 Congratulations! You've successfully deployed and run your first iApp on
iExec. This is a significant milestone - your application is now ready to
securely process confidential data in a trusted environment.

</Container>

## 🎯 Key Takeaways

- 🔒 **iApp:** Special applications that run in TEEs to process protected data
- 🛠️ **iApp CLI:** Command-line tool for building, testing, and deploying iApp
- 🔐 **Protected Data:** Can be integrated and processed securely in your iApp
- ⛓️ **Deployment:** Apps are deployed on iExec protocol to run in trusted
  environments

<Container variant="success">

Next up: Alice will learn how to authorize the iApp and Bob to access and use
her protected data! 🚀

</Container>

<script setup>
import InfoIcon from '@/components/InfoIcon.vue'
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const arbitrumSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'This method requires sending blockchain transactions, transaction fees will be applied. Would you like to continue?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 4,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    completeAt: 7,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 7,
    completeAt: 9,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 9,
    completeAt: 11,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 11,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 14,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

const bellecourSteps = [
  {
    showAt: 2,
    question: 'Using chain bellecour',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    completeAt: 6,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 6,
    completeAt: 8,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 8,
    completeAt: 10,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 10,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 11,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

const arbitrumCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];

const bellecourCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];
</script>
