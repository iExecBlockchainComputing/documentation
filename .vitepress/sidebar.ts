import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/get-started/': [
      {
        text: 'GET STARTED',
        items: [
          { text: 'Welcome', link: '/get-started/welcome' },
          {
            text: 'Toolkit',
            link: '/get-started/toolkit',
          },
          {
            text: '👋 Hello World',
            link: '/get-started/helloWorld',
            collapsed: true,
            items: [
              {
                text: 'iExec Overview',
                link: '/get-started/helloWorld/1-overview',
              },
              {
                text: 'Protect Data',
                link: '/get-started/helloWorld/2-protectData',
              },
              {
                text: 'Build iApp',
                link: '/get-started/helloWorld/3-buildIApp',
              },
              {
                text: 'Manage Data Access',
                link: '/get-started/helloWorld/4-manageDataAccess',
              },
              {
                text: 'Bonus Chapter !',
                link: '/get-started/helloWorld/5-bonusChapter',
              },
            ],
          },
          {
            text: 'Quick Start',
            link: '/get-started/quick-start',
          },
          {
            text: 'Use Cases',
            link: '/get-started/use-cases',
          },
          {
            text: 'Develop with AI',
            link: '/get-started/develop-with-ai',
          },
        ],
      },
      {
        text: 'iExec OVERVIEW',
        items: [
          {
            text: 'What is iExec ?',
            link: '/get-started/overview/what-is-iexec',
          },
          {
            text: 'Protected Data',
            link: '/get-started/overview/protected-data',
          },
          {
            text: 'Privacy iApp',
            link: '/get-started/overview/privacy-iapp',
          },
          {
            text: 'Workerpool',
            link: '/get-started/overview/workerpool',
          },
          {
            text: 'RLC Token',
            link: '/get-started/overview/rlc',
          },
        ],
      },
      {
        text: 'TOOLING & EXPLORERS',
        items: [
          {
            text: 'iExec Explorer',
            link: '/get-started/tooling-and-explorers/iexec-explorer',
          },
          {
            text: 'Builder Dashboard',
            link: '/get-started/tooling-and-explorers/builder-dashboard',
          },
          {
            text: 'RLC Bridge',
            link: '/get-started/tooling-and-explorers/bridge',
          },
          {
            text: 'RLC Faucet',
            link: '/get-started/tooling-and-explorers/faucet',
          },
          {
            text: 'Subgraph Explorer',
            link: '/get-started/tooling-and-explorers/subgraph-explorer',
          },
          {
            text: 'Blockchain Explorer',
            link: '/get-started/tooling-and-explorers/blockchain-explorer',
          },
        ],
      },
    ],
    '/guides/': [
      {
        text: 'PROTECT AND MANAGE DATA',
        items: [
          {
            text: 'Manage Access',
            link: '/guides/manage-data/manage-access',
          },
          {
            text: 'Handle Schemas and Dataset Types',
            link: '/guides/manage-data/handle-schemas-dataset-types',
          },
          {
            text: 'Monetize Protected Data',
            link: '/guides/manage-data/monetize-protected-data',
          },
        ],
      },
      {
        text: 'BUILD YOUR iAPP',
        items: [
          {
            text: 'Build and Test',
            link: '/guides/build-iapp/build-&-test',
          },
          {
            text: 'Deploy and Run',
            link: '/guides/build-iapp/deploy-&-run',
          },
          {
            text: 'Manage Access',
            link: '/guides/build-iapp/manage-access',
          },
          {
            text: 'Inputs',
            link: '/guides/build-iapp/inputs',
          },
          {
            text: 'Outputs',
            link: '/guides/build-iapp/outputs',
          },

          {
            text: 'Debugging',
            link: '/guides/build-iapp/debugging',
          },
          {
            text: 'Advanced',
            collapsed: true,
            items: [
              {
                text: 'Quick Start',
                link: '/guides/build-iapp/advanced/quick-start',
              },
              {
                text: 'Build your first SGX app',
                link: '/guides/build-iapp/advanced/build-your-first-sgx-iapp',
              },
              {
                text: 'End-to-end Encryption',
                link: '/guides/build-iapp/advanced/protect-the-result',
              },
              {
                text: 'Result Callback',
                link: '/guides/build-iapp/advanced/result-callback',
              },
              {
                text: 'Access Confidential Assets',
                link: '/guides/build-iapp/advanced/access-confidential-assets',
              },
              {
                text: 'Build Intel TDX app',
                link: '/guides/build-iapp/advanced/build-your-first-tdx-iapp',
              },
            ],
          },
        ],
      },
      {
        text: 'USE AN iAPP',
        items: [
          {
            text: 'How to Pay the Executions',
            link: '/guides/use-iapp/how-to-pay-executions',
          },
          {
            text: 'Run iApp with ProtectedData',
            link: '/guides/use-iapp/run-iapp-with-ProtectedData',
          },
          {
            text: 'Run iApp without ProtectedData',
            link: '/guides/use-iapp/run-iapp-without-ProtectedData',
          },
          {
            text: 'Integrate Web3 Messaging',
            link: '/guides/use-iapp/integrate-web3-messaging',
          },
        ],
      },
    ],
    '/references/': [
      {
        text: '🔐 DataProtector',
        link: '/references/dataProtector',
        items: [
          {
            text: 'Getting Started',
            link: '/references/dataProtector/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'protectData',
                link: '/references/dataProtector/methods/protectData',
              },
              {
                text: 'getProtectedData',
                link: '/references/dataProtector/methods/getProtectedData',
              },
              {
                text: 'transferOwnership',
                link: '/references/dataProtector/methods/transferOwnership',
              },
              {
                text: 'grantAccess',
                link: '/references/dataProtector/methods/grantAccess',
              },
              {
                text: 'getGrantedAccess',
                link: '/references/dataProtector/methods/getGrantedAccess',
              },
              {
                text: 'revokeOneAccess',
                link: '/references/dataProtector/methods/revokeOneAccess',
              },
              {
                text: 'revokeAllAccess',
                link: '/references/dataProtector/methods/revokeAllAccess',
              },
              {
                text: 'processProtectedData',
                link: '/references/dataProtector/methods/processProtectedData',
              },
              {
                text: 'getResultFromCompletedTask',
                link: '/references/dataProtector/methods/getResultFromCompletedTask',
              },
            ],
          },
          {
            text: 'Types',
            link: '/references/dataProtector/types',
          },
          {
            text: 'Advanced Configuration',
            link: '/references/dataProtector/advanced-configuration',
          },
        ],
      },
      {
        text: '🤖 iApp Generator',
        link: '/references/iapp-generator',
        items: [
          {
            text: 'Getting Started',
            link: '/references/iapp-generator/getting-started',
          },
          {
            text: 'Building your iApp',
            link: '/references/iapp-generator/building-your-iexec-app',
          },
          {
            text: 'Deserialize ProtectedData',
            link: '/references/iapp-generator/deserializer',
            collapsed: true,
            items: [
              {
                text: 'getValue',
                link: '/references/iapp-generator/deserializer/getValue',
              },
            ],
          },
        ],
      },
      {
        text: '✉ Web3Mail',
        link: '/references/web3mail',
        items: [
          {
            text: 'Getting Started',
            link: '/references/web3mail/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'fetchMyContacts',
                link: '/references/web3mail/methods/fetchMyContacts',
              },
              {
                text: 'fetchUserContacts',
                link: '/references/web3mail/methods/fetchUserContacts',
              },
              {
                text: 'sendEmail',
                link: '/references/web3mail/methods/sendEmail',
              },
            ],
          },
          {
            text: 'Advanced Configuration',
            link: '/references/web3mail/advanced-configuration',
          },
        ],
      },
      {
        text: '💬 Web3Telegram',
        link: '/references/web3telegram',
        items: [
          {
            text: 'Getting Started',
            link: '/references/web3telegram/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'fetchMyContacts',
                link: '/references/web3telegram/methods/fetchMyContacts',
              },
              {
                text: 'fetchUserContacts',
                link: '/references/web3telegram/methods/fetchUserContacts',
              },
              {
                text: 'sendTelegram',
                link: '/references/web3telegram/methods/sendTelegram',
              },
            ],
          },

          {
            text: 'Advanced Configuration',
            link: '/references/web3telegram/advanced-configuration',
          },
        ],
      },
      {
        text: 'iExec SDK',
        link: '/references/sdk',
      },
      {
        text: '📖 Glossary',
        link: '/references/glossary',
      },
    ],
    '/protocol/': [
      {
        text: 'PROTOCOL',
        items: [
          {
            text: '🛡️ Proof of Contribution',
            link: '/protocol/proof-of-contribution',
          },
          {
            text: 'Pay Per Task Model',
            link: '/protocol/pay-per-task',
          },
          {
            text: 'Debug Your Tasks',
            link: '/protocol/debugging',
          },
          {
            text: 'Workers & Workerpools',
            collapsed: false,
            items: [
              {
                text: 'Worker Quick Start',
                link: '/protocol/worker/quick-start',
              },
              {
                text: 'Manage Workerpool Access',
                link: '/protocol/worker/manage-access',
              },
            ],
          },
          {
            text: '🔒 TEE Technology',
            collapsed: false,
            items: [
              {
                text: 'Introduction to TEE Technologies',
                link: '/protocol/tee/introduction',
              },
              {
                text: 'Intel SGX Technology',
                link: '/protocol/tee/intel-sgx',
              },
              {
                text: 'Intel TDX Technology',
                link: '/protocol/tee/intel-tdx',
              },
              {
                text: 'SGX vs TDX Comparison',
                link: '/protocol/tee/sgx-vs-tdx',
              },
            ],
          },
          {
            text: '🤖 AI Framework Support',
            link: '/protocol/ai',
          },
        ],
      },
    ],
  } as DefaultTheme.Sidebar;
}
