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
you through an interactive setup process:

<CLIDemo
  initialCommand="iapp init"
  asciiText="iApp"
  :steps="[
    {
      showAt: 2,
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

Navigate to your project and run tests locally to simulate the TEE environment:

<CLIDemo
  :initialCommand="'iapp test'"
  :steps="[
    {
      showAt: 2,
      question: 'Running tests in simulated TEE environment...',
      answer: '✅ All tests passed',
      showTyping: true,
      isComplete: false
    },
    {
      showAt: 4,
      question: 'Building package...',
      answer: '📦 Package built successfully',
      showTyping: true,
      isComplete: false
    }
  ]"
  :completionStep="6"
  :completionMessage="'Running tests and building package...'"
  :completionItems="[
    '🧪 Running unit tests...',
    '✅ All tests passed',
    '📦 Building package...',
    '🔍 Code analysis complete',
    '🚀 Ready for deployment'
  ]"
  :successMessage="'Build successful! Ready for deployment.'"
  :autoRestart="false"
/>

## Deployment

Once your tests pass and the package is built, deploy your iApp to the iExec
network:

<CLIDemo
  initialCommand="iapp deploy"
  :steps="[
    {
      showAt: 2,
      question: 'Connecting to iExec network...',
      answer: '🌐 Connected to Arbitrum',
      showTyping: true,
      isComplete: false
    },
    {
      showAt: 4,
      question: 'Uploading package...',
      answer: '📤 Package uploaded',
      showTyping: true,
      isComplete: false
    }
  ]"
  :completionStep="5"
  :completionMessage="'Deploying to iExec network...'"
  :completionItems="[
    '🌐 Connecting to network...',
    '🔐 Authenticating...',
    '📤 Uploading package...',
    '🔍 Verifying deployment...',
    '📋 Contract deployed'
  ]"
  :successMessage="'Successfully deployed to iExec network!'"
  :autoRestart="false"
/>

<div class="bg-gradient-to-r from-blue-400/10 to-blue-400/5 rounded-[6px] p-4 border-l-4 border-blue-600 mb-6">
  <p class="m-0! text-sm"><strong>Note:</strong> iApp Generator currently supports Python and Node.js, but iApps can be built in any language that runs in Docker.</p>
</div>

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
import CLIDemo from '../../components/CLIDemo.vue';
</script>
