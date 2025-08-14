---
title: Create and Deploy an iApp
description:
  How to create a confidential iExec application and deploy it on iExec protocol
---

# Create and Deploy an iApp

iApps (iExec Applications) are decentralized applications that run on the iExec
network. They leverage confidential computing to ensure data privacy and
security while providing scalable off-chain computation.

## About iApp Generator

Bootstrap TEE-compatible applications in minutes without any hardcoding skills,
iApp Generator handles all the low-level complexity for you.

- **Select your project mode & language** - Get started with either a basic or
  advanced setup, depending on your experience with the iExec framework. You can
  use Python or JavaScript—whichever you prefer!
- **Develop your iApp effortlessly** - Write your application logic using
  familiar programming languages while the generator handles all TEE-specific
  configurations.
- **Access to TEEs easily** - No need to dive into low-level requirements,
  create iApps that connect to TEEs in minutes.
- **Check and deploy iApps quickly** - iApp Generator checks that your iApp
  complies with the iExec Framework and streamlines its deployment.

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Docker** - [Download here](https://www.docker.com/get-started)
- **Docker Hub account** - [Sign up here](https://hub.docker.com/) (required for
  deployment)

## Installation

First, install the iApp Generator CLI tool using your preferred package manager:

::: code-group

```sh [npm]
npm install -g @iexec/iapp
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

## Quick Start

Once installed, you can create and deploy your first iApp. The CLI will guide
you through an interactive setup process to configure your project name,
programming language, and template:

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

After the interactive setup, continue with development and deployment:

## Development and Testing

Navigate to your project and run tests locally to simulate the TEE environment.
The CLI will build a Docker image, run your app, and show you the results:

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

## Deployment

After your tests pass and the package is built, you can deploy your iApp to a
supported network. During deployment, you'll enter your DockerHub credentials,
specify your app version, and push both standard and TEE-compatible images:

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

## Real Examples

Here are some real-world examples of iApps to help you understand how they work
in practice.

### Email Notification iApp

This iApp lets you send updates to your contacts without ever seeing their email
addresses, privacy is preserved by design.

::: code-group

```js [Node.js]
/* User runs: "Send updates to my contacts about my project" */
const contacts = loadProtectedData(); // User's protected contact list
contacts.forEach((contact) => {
  sendEmail(contact, projectUpdateMessage);
});
// → Emails sent directly, you never see the addresses
```

```python [Python]
# User runs: "Send updates to my contacts about my project"
contacts = load_protecteddata()  # User's protected contact list
for contact in contacts:
   send_email(contact, project_update_message)
# → Emails sent directly, you never see the addresses
```

:::

### Oracle Update iApp

This iApp securely updates a price oracle using private trading data, ensuring
sensitive information stays confidential.

::: code-group

```js [Node.js]
// User runs: "Update price oracle with my private trading data"
const tradingData = loadProtectedData(); // User's protected trading history
const averagePrice = calculateWeightedAverage(tradingData);
updateOracleContract(averagePrice);
// → Oracle updated with real data, trading history stays private
```

```python [Python]
# User runs: "Update price oracle with my private trading data"
trading_data = load_protecteddata()  # User's protected trading history
average_price = calculate_weighted_average(trading_data)
update_oracle_contract(average_price)
# → Oracle updated with real data, trading history stays private
```

:::

### Automated Transactions iApp

This iApp automates monthly payments using protected payment details, so
financial information remains private.

::: code-group

```js [Node.js]
// User runs: "Automate payments every month"
const paymentInfo = loadProtectedData(); // User's payment details
for (let month = 0; month < 12; month++) {
  processPayment(paymentInfo);
}
// → Payments processed, payment details stay private
```

```python [Python]
# User runs: "Automate payments every month"
payment_info = load_protecteddata()  # User's payment details
for month in range(12):
   process_payment(payment_info)
# → Payments processed, payment details stay private
```

:::

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';

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
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-debug-ce3a01d9c5d7 on dockerhub',
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
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-debug-ce3a01d9c5d7 on dockerhub',
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
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-debug-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];

const bellecourCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-debug-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];
</script>
