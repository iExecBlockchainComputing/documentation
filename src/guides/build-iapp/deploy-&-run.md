---
title: Deploy and Run an iApp
description:
  Deploy your iApp to supported networks and learn how to execute it using the iApp Generator CLI
---

# Deploy and Run an iApp

It's time to run your iApp! After building and testing, you'll need to deploy it to a supported network and then execute it.

## Deploy your iApp

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

Now that your iApp has been deployed on the iExec protocol, you can navigate to the `cache` folder to see your deployments saved. A file named `deployments.json` in the folder corresponding to your target network will be created containing each deployment made on this network. These files will help you easily track each deployment per network.

Here is an example:

```json
[
  {
    "sconifiedImage": "robiniexec/iapp:0.0.1-tee-scone-5.9.1-v16-debug-5aea8b4aa71d",
    "appContractAddress": "0x9665136c599ec361C8eE627eC4F35A23fBa94897",
    "owner": "0xbabE8270aC9857Af3aaC06877888F1939FbeC578",
    "date": "2025-08-12T13:16:18.252Z"
  },
  ...
]
```

## Run your iApp

There are multiple ways to execute an iApp on the iExec network. An iApp can be:

- **Self-sufficient** - Basic execution without additional inputs
- **Data-dependent** - Requires protected data, secrets, input files, or
  command-line arguments

The iApp Generator CLI provides a streamlined way to execute iApp, especially
for developers who have built their own iApp.

> **Note**: For installation instructions, see the
> [iApp Generator Getting Started guide](/references/iapp-generator/getting-started).

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet"
    asciiText="Execute"
    :steps="arbitrumRunSteps"
    :completionStep="16"
    :completionMessage="'iApp execution completed successfully:'"
    :completionItems="arbitrumRunCompletionItems"
    :successMessage="'Your iApp has been executed successfully on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923"
    asciiText="Execute"
    :steps="bellecourRunSteps"
    :completionStep="14"
    :completionMessage="'iApp execution completed successfully:'"
    :completionItems="bellecourRunCompletionItems"
    :successMessage="'Your iApp has been executed successfully on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

Now that you have run your iApp on the iExec protocol, you can navigate to the `cache` folder to see your runs saved. A file named `runs.json` in the folder corresponding to your target network will be created containing each run made on this network. These files will help you easily track each run per network. Use the [iExec Explorer](/guides/tooling-and-explorers/iexec-explorer) to retrieve more data about your tasks.

Here is an example:

```json
[
  {
    "iAppAddress": "0x9665136c599ec361C8eE627eC4F35A23fBa94897",
    "dealid": "0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f",
    "taskid": "0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8",
    "txHash": "0x6f14eac6933c609fb6d3e6b2bbd18c373c6dc99c7d7fd22036d5a20f847c5e42",
    "date": "2025-08-18T18:30:03.711Z"
  },
  ...
]
```

## Next Steps

- Learn how to [manage access to your iApp](/guides/build-iapp/manage-access)
- Discover [debugging techniques](/guides/build-iapp/debugging) for troubleshooting

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

// Variables for running iApp (execution steps)
const arbitrumRunSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    completeAt: 5,
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
    showAt: 5,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 10,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 11,
    completeAt: 13,
    question:'Would you like to download the result ?',
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
    showAt: 13,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 14,
    completeAt: 16,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  }
];

const bellecourRunSteps = [
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
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    completeAt: 11,
    question:'Would you like to download the result ?',
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
    showAt: 11,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    completeAt: 14,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  }
];

const arbitrumRunCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];

const bellecourRunCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];
</script>
