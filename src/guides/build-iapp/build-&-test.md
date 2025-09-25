---
title: Build and Test an iApp
description:
  Learn how to build, test, and package your iExec application using the iApp
  Generator CLI tool
---

# Build and Test an iApp

iApp (iExec Applications) are decentralized applications that run on the iExec
network. They use confidential computing to ensure data privacy and security
while providing scalable off-chain computation.

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
  create iApp that connect to TEEs in minutes.
- **Check and deploy iApp quickly** - iApp Generator checks that your iApp
  complies with the iExec Framework and streamlines its deployment.

## Prerequisites

Before getting started, make sure you have the required tools installed. See the
[iApp Generator Getting Started guide](/references/iapp-generator/cli/getting-started)
for detailed prerequisites and installation instructions.

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

## Next Steps

- When everything is ready
  [deploy and run your iApp](/guides/use-iapp/run-iapp-with-ProtectedData)

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
</script>
