import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/get-started/': [
      {
        text: 'GET STARTED',
        items: [
          { text: '💡 Welcome', link: '/get-started/welcome' },
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
            text: '🚀 Quick Start',
            link: '/get-started/quick-start',
          },
          {
            text: '📋 Use Cases',
            link: '/get-started/use-cases',
          },
          {
            text: '🪙 RLC Token',
            link: '/get-started/rlc',
          },
          {
            text: '🤖 Develop with AI',
            link: '/get-started/develop-with-ai',
          },
        ],
      },
      {
        text: 'WHAT IS iExec ?',
        items: [
          {
            text: '❓&nbsp;&nbsp;What is Protected Data ?',
            link: '/get-started/what-is-iexec/what-is-protected-data',
          },
          {
            text: '❓ What is an iApp ?',
            link: '/get-started/what-is-iexec/build-iapp/what-is-iapp',
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
            text: '🔧 iExec SDK',
            link: '/get-started/protocol/sdk',
          },
          {
            text: '⚙️ Workers & Workerpools',
            collapsed: true,
            items: [
              {
                text: '🚀 Worker Quick Start',
                link: '/get-started/protocol/worker/quick-start',
              },
              {
                text: '🔒 Manage Workerpool Access',
                link: '/get-started/protocol/worker/manage-access',
              },
            ],
          },
          {
            text: '⛓️‍💥 PoCo',
            collapsed: true,
            items: [
              {
                text: '💸 Pay Per Task Model',
                link: '/get-started/protocol/poco/pay-per-task',
              },
              {
                text: '🛡️ Proof of Contribution',
                link: '/get-started/protocol/poco/proof-of-contribution',
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
            link: '/guides/manage-data/guides/manage-access',
          },
          {
            text: 'Handle Schemas and Dataset Types',
            link: '/guides/manage-data/guides/handle-schemas-dataset-types',
          },
          {
            text: 'Monetize Protected Data',
            link: '/guides/manage-data/guides/monetize-protected-data',
          },
        ],
      },
      {
        text: 'BUILD YOUR iAPP',
        items: [
          {
            text: 'Build and Deploy',
            link: '/guides/build-iapp/guides/build-&-deploy',
          },
          {
            text: 'Manage Access',
            link: '/guides/build-iapp/guides/manage-access',
          },
          {
            text: 'Inputs and Outputs',
            link: '/guides/build-iapp/guides/inputs-and-outputs',
          },
          {
            text: 'Using TDX',
            link: '/guides/build-iapp/guides/using-tdx',
          },
          {
            text: 'How to Get and Decrypt Results',
            link: '/guides/build-iapp/guides/how-to-get-and-decrypt-results',
          },
          {
            text: 'Debugging',
            link: '/guides/build-iapp/guides/debugging',
          },
        ],
      },
      {
        text: 'USE AN iAPP',
        items: [
          {
            text: '📝 Introduction',
            link: '/guides/what-is-iexec/introduction',
          },
          {
            text: '🚀 Getting Started',
            link: '/guides/what-is-iexec/getting-started',
          },
          {
            text: 'Different Ways to Execute an iApp',
            link: '/guides/use-iapp/guides/different-ways-to-execute',
          },
          {
            text: 'Add Inputs to the Execution',
            link: '/guides/use-iapp/guides/add-inputs-to-execution',
          },
          {
            text: 'Use iApp with Protected Data',
            link: '/guides/use-iapp/guides/use-iapp-with-protected-data',
          },
          {
            text: 'Find iApps to Use',
            link: '/guides/use-iapp/guides/find-iapps',
          },
          {
            text: 'How to Pay the Executions',
            link: '/guides/use-iapp/guides/how-to-pay-executions',
          },
          {
            text: '💰 How to Pay',
            collapsed: true,
            items: [
              {
                text: 'How to Pay for Web3Mail',
                link: '/guides/use-iapp/how-to-pay/how-to-pay-for-web3mail',
              },
              {
                text: 'How to Pay for Web3Telegram',
                link: '/guides/use-iapp/how-to-pay/how-to-pay-for-web3telegram',
              },
              {
                text: 'Pricing Considerations',
                link: '/guides/use-iapp/how-to-pay/pricing-considerations',
              },
              {
                text: 'Voucher',
                link: '/guides/use-iapp/how-to-pay/voucher',
              },
            ],
          },
          {
            text: '✉ Web3Mail',
            link: '/guides/use-iapp/web3mail',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/guides/use-iapp/web3mail/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/guides/use-iapp/web3mail/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/guides/use-iapp/web3mail/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendEmail',
                    link: '/guides/use-iapp/web3mail/methods/sendEmail',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/guides/use-iapp/web3mail/advanced-configuration',
              },
            ],
          },
          {
            text: '💬 Web3Telegram',
            link: '/guides/use-iapp/web3telegram',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/guides/use-iapp/web3telegram/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/guides/use-iapp/web3telegram/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/guides/use-iapp/web3telegram/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendTelegram',
                    link: '/guides/use-iapp/web3telegram/methods/sendTelegram',
                  },
                ],
              },
              {
                text: 'Integration Guide',
                link: '/guides/use-iapp/web3telegram/integration-guide',
              },
              {
                text: 'Advanced Configuration',
                link: '/guides/use-iapp/web3telegram/advanced-configuration',
              },
            ],
          },
        ],
      },
    ],
    '/references/': [
      {
        text: '🔐 DataProtector',
        link: '/references/manage-data/dataProtector',
        collapsed: true,
        items: [
          {
            text: 'Getting Started',
            link: '/references/manage-data/dataProtector/getting-started',
          },
          {
            text: 'DataProtector Core',
            link: '/references/manage-data/dataProtector/dataProtectorCore',
            collapsed: true,
            items: [
              {
                text: 'protectData',
                link: '/references/manage-data/dataProtector/dataProtectorCore/protectData',
              },
              {
                text: 'getProtectedData',
                link: '/references/manage-data/dataProtector/dataProtectorCore/getProtectedData',
              },
              {
                text: 'transferOwnership',
                link: '/references/manage-data/dataProtector/dataProtectorCore/transferOwnership',
              },
              {
                text: 'grantAccess',
                link: '/references/manage-data/dataProtector/dataProtectorCore/grantAccess',
              },
              {
                text: 'getGrantedAccess',
                link: '/references/manage-data/dataProtector/dataProtectorCore/getGrantedAccess',
              },
              {
                text: 'revokeOneAccess',
                link: '/references/manage-data/dataProtector/dataProtectorCore/revokeOneAccess',
              },
              {
                text: 'revokeAllAccess',
                link: '/references/manage-data/dataProtector/dataProtectorCore/revokeAllAccess',
              },
              {
                text: 'processProtectedData',
                link: '/references/manage-data/dataProtector/dataProtectorCore/processProtectedData',
              },
              {
                text: 'getResultFromCompletedTask',
                link: '/references/manage-data/dataProtector/dataProtectorCore/getResultFromCompletedTask',
              },
            ],
          },
          {
            text: 'DataProtector Sharing',
            link: '/references/manage-data/dataProtector/dataProtectorSharing',
            collapsed: true,
            items: [
              {
                text: 'Collection',
                link: '/references/manage-data/dataProtector/dataProtectorSharing/collection',
                collapsed: true,
                items: [
                  {
                    text: 'createCollection',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/collection/createCollection',
                  },
                  {
                    text: 'removeCollection',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/collection/removeCollection',
                  },
                  {
                    text: 'addToCollection',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/collection/addToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromCollection',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                  },
                ],
              },
              {
                text: 'Renting',
                link: '/references/manage-data/dataProtector/dataProtectorSharing/renting',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataToRenting',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                  },
                  {
                    text: 'setProtectedDataRentingParams',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
                  },
                  {
                    text: 'rentProtectedData',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                  },
                  {
                    text: 'removeProtectedDataFromRenting',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                  },
                ],
              },
              {
                text: 'Selling',
                link: '/references/manage-data/dataProtector/dataProtectorSharing/selling',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataForSale',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                  },
                  {
                    text: 'buyProtectedData',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                  },
                  {
                    text: 'removeProtectedDataForSale',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                  },
                ],
              },
              {
                text: 'Subscription',
                link: '/references/manage-data/dataProtector/dataProtectorSharing/subscription',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataToSubscription',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                  },
                  {
                    text: 'setSubscriptionParams',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                  },
                  {
                    text: 'subscribeToCollection',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromSubscription',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                  },
                ],
              },
              {
                text: 'Consume',
                collapsed: true,
                items: [
                  {
                    text: 'consumeProtectedData',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                  },
                ],
              },
              {
                text: 'Read Data',
                collapsed: true,
                items: [
                  {
                    text: 'getProtectedDataInCollections',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                  },
                  {
                    text: 'getProtectedDataPricingParams',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                  },
                  {
                    text: 'getCollectionOwners',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                  },
                  {
                    text: 'getCollectionsByOwner',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                  },
                  {
                    text: 'getCollectionSubscriptions',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                  },
                  {
                    text: 'getRentals',
                    link: '/references/manage-data/dataProtector/dataProtectorSharing/read/getRentals',
                  },
                ],
              },
            ],
          },
          {
            text: 'Types',
            link: '/references/manage-data/dataProtector/types',
          },
          {
            text: 'Advanced',
            collapsed: true,
            items: [
              {
                text: 'Advanced Configuration',
                link: '/references/manage-data/dataProtector/advanced/advanced-configuration',
              },
              {
                text: 'Sharing smart contract',
                link: '/references/manage-data/dataProtector/advanced/dps-smart-contract',
              },
              {
                text: 'Apps whitelist',
                link: '/references/manage-data/dataProtector/advanced/apps-whitelist',
                collapsed: true,
                items: [
                  {
                    text: 'createAddOnlyAppWhitelist',
                    link: '/references/manage-data/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                  },
                  {
                    text: 'addAppToAddOnlyAppWhitelist',
                    link: '/references/manage-data/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                  },
                  {
                    text: 'getUserAddOnlyAppWhitelist',
                    link: '/references/manage-data/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                  },
                ],
              },
            ],
          },
          {
            text: 'Migrate from v1 to v2',
            link: '/references/manage-data/dataProtector/migrate-from-v1',
          },
        ],
      },
      {
        text: '🤖 iApp Generator',
        link: '/references/build-iapp/iapp-generator',
        collapsed: true,
        items: [
          {
            text: 'Getting Started',
            link: '/references/build-iapp/iapp-generator/getting-started',
          },
          {
            text: 'Building your iApp',
            link: '/references/build-iapp/iapp-generator/building-your-iexec-app',
          },
          {
            text: 'Deserialize ProtectedData',
            link: '/references/build-iapp/iapp-generator/deserializer',
            collapsed: true,
            items: [
              {
                text: 'getValue',
                link: '/references/build-iapp/iapp-generator/deserializer/getValue',
              },
            ],
          },
        ],
      },
      {
        text: '�📖 Glossary',
        link: '/references/protocol/glossary',
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
