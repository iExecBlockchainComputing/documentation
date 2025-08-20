import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/get-started/': [
      {
        text: 'GET STARTED',
        items: [
          { text: '💡 Welcome', link: '/get-started/welcome' },
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
            text: 'iApp',
            link: '/get-started/overview/iapp',
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
            text: 'Subgraph Explorer',
            link: '/get-started/tooling-and-explorers/subgraph-explorer',
          },
          {
            text: 'Blockchain Explorer',
            link: '/get-started/tooling-and-explorers/blockchain-explorer',
          },
        ],
      },
      {
        text: 'PROTOCOL',
        items: [
          {
            text: '🛡️ Proof of Contribution',
            link: '/get-started/protocol/proof-of-contribution',
          },
          {
            text: 'Pay Per Task Model',
            link: '/get-started/protocol/pay-per-task',
          },
          {
            text: 'Oracle',
            link: '/get-started/protocol/oracle',
          },
          {
            text: 'Workers & Workerpools',
            collapsed: true,
            items: [
              {
                text: 'Worker Quick Start',
                link: '/get-started/protocol/worker/quick-start',
              },
              {
                text: 'Manage Workerpool Access',
                link: '/get-started/protocol/worker/manage-access',
              },
            ],
          },
          {
            text: '🔒 TEE Technology',
            collapsed: true,
            items: [
              {
                text: 'Introduction to TEE Technologies',
                link: '/get-started/protocol/tee/introduction',
              },
              {
                text: 'Intel SGX Technology',
                link: '/get-started/protocol/tee/intel-sgx',
              },
              {
                text: 'Intel TDX Technology',
                link: '/get-started/protocol/tee/intel-tdx',
              },
              {
                text: 'SGX vs TDX Comparison',
                link: '/get-started/protocol/tee/sgx-vs-tdx',
              },
            ],
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
            text: 'Inputs and Outputs',
            link: '/guides/build-iapp/inputs-and-outputs',
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
                text: 'Overview',
                link: '/guides/build-iapp/advanced/overview',
              },
              {
                text: 'Quick Start for Developers',
                link: '/guides/build-iapp/advanced/quick-start-for-developers',
              },
              {
                text: 'Build your first application',
                link: '/guides/build-iapp/advanced/your-first-app',
              },
              {
                text: 'Build your first SGX app (SCONE)',
                link: '/guides/build-iapp/advanced/create-your-first-sgx-app',
              },
              {
                text: 'End-to-end Encryption',
                link: '/guides/build-iapp/advanced/end-to-end-encryption',
              },
              {
                text: 'SGX Encrypted Dataset',
                link: '/guides/build-iapp/advanced/sgx-encrypted-dataset',
              },
              {
                text: 'Access Confidential Assets',
                link: '/guides/build-iapp/advanced/access-confidential-assets',
              },
              {
                text: 'Build Intel TDX app',
                link: '/guides/build-iapp/advanced/create-your-first-tdx-app',
              },
            ],
          },
        ],
      },
      {
        text: 'USE AN iAPP',
        items: [
          {
            text: 'Introduction',
            link: '/guides/use-iapp/introduction',
          },
          {
            text: 'Getting Started',
            link: '/guides/use-iapp/getting-started',
          },
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
        ],
      },
    ],
    '/references/': [
      {
        text: '🔐 DataProtector',
        link: '/references/dataProtector',
        collapsed: true,
        items: [
          {
            text: 'Getting Started',
            link: '/references/dataProtector/getting-started',
          },
          {
            text: 'DataProtector Core',
            link: '/references/dataProtector/dataProtectorCore',
            collapsed: true,
            items: [
              {
                text: 'protectData',
                link: '/references/dataProtector/dataProtectorCore/protectData',
              },
              {
                text: 'getProtectedData',
                link: '/references/dataProtector/dataProtectorCore/getProtectedData',
              },
              {
                text: 'transferOwnership',
                link: '/references/dataProtector/dataProtectorCore/transferOwnership',
              },
              {
                text: 'grantAccess',
                link: '/references/dataProtector/dataProtectorCore/grantAccess',
              },
              {
                text: 'getGrantedAccess',
                link: '/references/dataProtector/dataProtectorCore/getGrantedAccess',
              },
              {
                text: 'revokeOneAccess',
                link: '/references/dataProtector/dataProtectorCore/revokeOneAccess',
              },
              {
                text: 'revokeAllAccess',
                link: '/references/dataProtector/dataProtectorCore/revokeAllAccess',
              },
              {
                text: 'processProtectedData',
                link: '/references/dataProtector/dataProtectorCore/processProtectedData',
              },
              {
                text: 'getResultFromCompletedTask',
                link: '/references/dataProtector/dataProtectorCore/getResultFromCompletedTask',
              },
            ],
          },
          {
            text: 'DataProtector Sharing',
            link: '/references/dataProtector/dataProtectorSharing',
            collapsed: true,
            items: [
              {
                text: 'Collection',
                link: '/references/dataProtector/dataProtectorSharing/collection',
                collapsed: true,
                items: [
                  {
                    text: 'createCollection',
                    link: '/references/dataProtector/dataProtectorSharing/collection/createCollection',
                  },
                  {
                    text: 'removeCollection',
                    link: '/references/dataProtector/dataProtectorSharing/collection/removeCollection',
                  },
                  {
                    text: 'addToCollection',
                    link: '/references/dataProtector/dataProtectorSharing/collection/addToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromCollection',
                    link: '/references/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                  },
                ],
              },
              {
                text: 'Renting',
                link: '/references/dataProtector/dataProtectorSharing/renting',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataToRenting',
                    link: '/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                  },
                  {
                    text: 'setProtectedDataRentingParams',
                    link: '/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
                  },
                  {
                    text: 'rentProtectedData',
                    link: '/references/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                  },
                  {
                    text: 'removeProtectedDataFromRenting',
                    link: '/references/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                  },
                ],
              },
              {
                text: 'Selling',
                link: '/references/dataProtector/dataProtectorSharing/selling',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataForSale',
                    link: '/references/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                  },
                  {
                    text: 'buyProtectedData',
                    link: '/references/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                  },
                  {
                    text: 'removeProtectedDataForSale',
                    link: '/references/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                  },
                ],
              },
              {
                text: 'Subscription',
                link: '/references/dataProtector/dataProtectorSharing/subscription',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataToSubscription',
                    link: '/references/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                  },
                  {
                    text: 'setSubscriptionParams',
                    link: '/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                  },
                  {
                    text: 'subscribeToCollection',
                    link: '/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromSubscription',
                    link: '/references/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                  },
                ],
              },
              {
                text: 'Consume',
                collapsed: true,
                items: [
                  {
                    text: 'consumeProtectedData',
                    link: '/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                  },
                ],
              },
              {
                text: 'Read Data',
                collapsed: true,
                items: [
                  {
                    text: 'getProtectedDataInCollections',
                    link: '/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                  },
                  {
                    text: 'getProtectedDataPricingParams',
                    link: '/references/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                  },
                  {
                    text: 'getCollectionOwners',
                    link: '/references/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                  },
                  {
                    text: 'getCollectionsByOwner',
                    link: '/references/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                  },
                  {
                    text: 'getCollectionSubscriptions',
                    link: '/references/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                  },
                  {
                    text: 'getRentals',
                    link: '/references/dataProtector/dataProtectorSharing/read/getRentals',
                  },
                ],
              },
            ],
          },
          {
            text: 'Types',
            link: '/references/dataProtector/types',
          },
          {
            text: 'Advanced',
            collapsed: true,
            items: [
              {
                text: 'Advanced Configuration',
                link: '/references/dataProtector/advanced/advanced-configuration',
              },
              {
                text: 'Apps whitelist',
                link: '/references/dataProtector/advanced/apps-whitelist',
                collapsed: true,
                items: [
                  {
                    text: 'createAddOnlyAppWhitelist',
                    link: '/references/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                  },
                  {
                    text: 'addAppToAddOnlyAppWhitelist',
                    link: '/references/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                  },
                  {
                    text: 'getUserAddOnlyAppWhitelist',
                    link: '/references/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                  },
                ],
              },
            ],
          },
          {
            text: 'Migrate from v1 to v2',
            link: '/references/dataProtector/migrate-from-v1',
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
            text: 'Integration Guide',
            link: '/references/web3telegram/integration-guide',
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
  } as DefaultTheme.Sidebar;
}
