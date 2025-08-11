import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/documentation/': [
      {
        text: 'GET STARTED',
        items: [
          { text: '💡 Welcome', link: '/documentation/welcome' },
          {
            text: '👋 Hello World',
            link: '/documentation/helloWorld',
            collapsed: true,
            items: [
              {
                text: 'iExec Overview',
                link: '/documentation/helloWorld/1-overview',
              },
              {
                text: 'Protect Data',
                link: '/documentation/helloWorld/2-protectData',
              },
              {
                text: 'Build iApp',
                link: '/documentation/helloWorld/3-buildIApp',
              },
              {
                text: 'Manage Data Access',
                link: '/documentation/helloWorld/4-manageDataAccess',
              },
              {
                text: 'Bonus Chapter !',
                link: '/documentation/helloWorld/5-bonusChapter',
              },
            ],
          },
          {
            text: '🚀 Quick Start',
            link: '/documentation/quick-start',
          },
          {
            text: '📋 Use Cases',
            link: '/documentation/use-cases',
          },
          {
            text: '🪙 RLC Token',
            link: '/documentation/rlc',
          },
          {
            text: '🤖 Develop with AI',
            link: '/documentation/develop-with-ai',
          },
        ],
      },
      {
        text: 'PROTECT AND MANAGE DATA',
        items: [
          {
            text: '❓&nbsp;&nbsp;What is Protected Data ?',
            link: '/documentation/manage-data/what-is-protected-data',
          },
          {
            text: '📖 Guides',
            collapsed: true,
            items: [
              {
                text: 'Manage Access',
                link: '/documentation/manage-data/guides/manage-access',
              },
              {
                text: 'Handle Schemas and Dataset Types',
                link: '/documentation/manage-data/guides/handle-schemas-dataset-types',
              },
              {
                text: 'Monetize Protected Data',
                link: '/documentation/manage-data/guides/monetize-protected-data',
              },
            ],
          },
          {
            text: '🔐 DataProtector',
            link: '/documentation/manage-data/dataProtector',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/documentation/manage-data/dataProtector/getting-started',
              },
              {
                text: 'DataProtector Core',
                link: '/documentation/manage-data/dataProtector/dataProtectorCore',
                collapsed: true,
                items: [
                  {
                    text: 'protectData',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/protectData',
                  },
                  {
                    text: 'getProtectedData',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/getProtectedData',
                  },
                  {
                    text: 'transferOwnership',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/transferOwnership',
                  },
                  {
                    text: 'grantAccess',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/grantAccess',
                  },
                  {
                    text: 'getGrantedAccess',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/getGrantedAccess',
                  },
                  {
                    text: 'revokeOneAccess',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/revokeOneAccess',
                  },
                  {
                    text: 'revokeAllAccess',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/revokeAllAccess',
                  },
                  {
                    text: 'processProtectedData',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/processProtectedData',
                  },
                  {
                    text: 'getResultFromCompletedTask',
                    link: '/documentation/manage-data/dataProtector/dataProtectorCore/getResultFromCompletedTask',
                  },
                ],
              },
              {
                text: 'DataProtector Sharing',
                link: '/documentation/manage-data/dataProtector/dataProtectorSharing',
                collapsed: true,
                items: [
                  {
                    text: 'Collection',
                    link: '/documentation/manage-data/dataProtector/dataProtectorSharing/collection',
                    collapsed: true,
                    items: [
                      {
                        text: 'createCollection',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/collection/createCollection',
                      },
                      {
                        text: 'removeCollection',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/collection/removeCollection',
                      },
                      {
                        text: 'addToCollection',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/collection/addToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromCollection',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                      },
                    ],
                  },
                  {
                    text: 'Renting',
                    link: '/documentation/manage-data/dataProtector/dataProtectorSharing/renting',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToRenting',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                      },
                      {
                        text: 'setProtectedDataRentingParams',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
                      },
                      {
                        text: 'rentProtectedData',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                      },
                      {
                        text: 'removeProtectedDataFromRenting',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                      },
                    ],
                  },
                  {
                    text: 'Selling',
                    link: '/documentation/manage-data/dataProtector/dataProtectorSharing/selling',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataForSale',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                      },
                      {
                        text: 'buyProtectedData',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                      },
                      {
                        text: 'removeProtectedDataForSale',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                      },
                    ],
                  },
                  {
                    text: 'Subscription',
                    link: '/documentation/manage-data/dataProtector/dataProtectorSharing/subscription',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToSubscription',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                      },
                      {
                        text: 'setSubscriptionParams',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                      },
                      {
                        text: 'subscribeToCollection',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromSubscription',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                      },
                    ],
                  },
                  {
                    text: 'Consume',
                    collapsed: true,
                    items: [
                      {
                        text: 'consumeProtectedData',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                      },
                    ],
                  },
                  {
                    text: 'Read Data',
                    collapsed: true,
                    items: [
                      {
                        text: 'getProtectedDataInCollections',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                      },
                      {
                        text: 'getProtectedDataPricingParams',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                      },
                      {
                        text: 'getCollectionOwners',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                      },
                      {
                        text: 'getCollectionsByOwner',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                      },
                      {
                        text: 'getCollectionSubscriptions',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                      },
                      {
                        text: 'getRentals',
                        link: '/documentation/manage-data/dataProtector/dataProtectorSharing/read/getRentals',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Types',
                link: '/documentation/manage-data/dataProtector/types',
              },
              {
                text: 'Advanced',
                collapsed: true,
                items: [
                  {
                    text: 'Advanced Configuration',
                    link: '/documentation/manage-data/dataProtector/advanced/advanced-configuration',
                  },
                  {
                    text: 'Sharing smart contract',
                    link: '/documentation/manage-data/dataProtector/advanced/dps-smart-contract',
                  },
                  {
                    text: 'Apps whitelist',
                    link: '/documentation/manage-data/dataProtector/advanced/apps-whitelist',
                    collapsed: true,
                    items: [
                      {
                        text: 'createAddOnlyAppWhitelist',
                        link: '/documentation/manage-data/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                      },
                      {
                        text: 'addAppToAddOnlyAppWhitelist',
                        link: '/documentation/manage-data/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                      },
                      {
                        text: 'getUserAddOnlyAppWhitelist',
                        link: '/documentation/manage-data/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Migrate from v1 to v2',
                link: '/documentation/manage-data/dataProtector/migrate-from-v1',
              },
            ],
          },
        ],
      },
      {
        text: 'BUILD YOUR iAPP',
        items: [
          {
            text: '❓ What is an iApp ?',
            link: '/documentation/build-iapp/what-is-iapp',
          },
          {
            text: '📖 Guides',
            collapsed: true,
            items: [
              {
                text: 'Build and Deploy',
                link: '/documentation/build-iapp/guides/build-&-deploy',
              },
              {
                text: 'Manage Access',
                link: '/documentation/build-iapp/guides/manage-access',
              },
              {
                text: 'Inputs and Outputs',
                link: '/documentation/build-iapp/guides/inputs-and-outputs',
              },
              {
                text: 'Using TDX',
                link: '/documentation/build-iapp/guides/using-tdx',
              },
              {
                text: 'How to Get and Decrypt Results',
                link: '/documentation/build-iapp/guides/how-to-get-and-decrypt-results',
              },
              {
                text: 'Debugging',
                link: '/documentation/build-iapp/guides/debugging',
              },
            ],
          },
          {
            text: '🤖 iApp Generator',
            link: '/documentation/build-iapp/iapp-generator',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/documentation/build-iapp/iapp-generator/getting-started',
              },
              {
                text: 'Building your iApp',
                link: '/documentation/build-iapp/iapp-generator/building-your-iexec-app',
              },
              {
                text: 'Deserialize ProtectedData',
                link: '/documentation/build-iapp/iapp-generator/deserializer',
                collapsed: true,
                items: [
                  {
                    text: 'getValue',
                    link: '/documentation/build-iapp/iapp-generator/deserializer/getValue',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'USE AN iAPP',
        items: [
          {
            text: '📝 Introduction',
            link: '/documentation/use-iapp/introduction',
          },
          {
            text: '🚀 Getting Started',
            link: '/documentation/use-iapp/getting-started',
          },
          {
            text: '📖 Guides',
            collapsed: true,
            items: [
              {
                text: 'Different Ways to Execute an iApp',
                link: '/documentation/use-iapp/guides/different-ways-to-execute',
              },
              {
                text: 'Add Inputs to the Execution',
                link: '/documentation/use-iapp/guides/add-inputs-to-execution',
              },
              {
                text: 'Use iApp with Protected Data',
                link: '/documentation/use-iapp/guides/use-iapp-with-protected-data',
              },
              {
                text: 'Find iApps to Use',
                link: '/documentation/use-iapp/guides/find-iapps',
              },
              {
                text: 'How to Pay the Executions',
                link: '/documentation/use-iapp/guides/how-to-pay-executions',
              },
            ],
          },
          {
            text: '💰 How to Pay',
            collapsed: true,
            items: [
              {
                text: 'How to Pay for Web3Mail',
                link: '/documentation/use-iapp/how-to-pay/how-to-pay-for-web3mail',
              },
              {
                text: 'How to Pay for Web3Telegram',
                link: '/documentation/use-iapp/how-to-pay/how-to-pay-for-web3telegram',
              },
              {
                text: 'Pricing Considerations',
                link: '/documentation/use-iapp/how-to-pay/pricing-considerations',
              },
              {
                text: 'Voucher',
                link: '/documentation/use-iapp/how-to-pay/voucher',
              },
            ],
          },
          {
            text: '✉ Web3Mail',
            link: '/use-iapp/web3mail',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/documentation/use-iapp/web3mail/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/documentation/use-iapp/web3mail/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/documentation/use-iapp/web3mail/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendEmail',
                    link: '/documentation/use-iapp/web3mail/methods/sendEmail',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/documentation/use-iapp/web3mail/advanced-configuration',
              },
            ],
          },
          {
            text: '💬 Web3Telegram',
            link: '/documentation/use-iapp/web3telegram',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/documentation/use-iapp/web3telegram/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/documentation/use-iapp/web3telegram/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/documentation/use-iapp/web3telegram/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendTelegram',
                    link: '/documentation/use-iapp/web3telegram/methods/sendTelegram',
                  },
                ],
              },
              {
                text: 'Integration Guide',
                link: '/documentation/use-iapp/web3telegram/integration-guide',
              },
              {
                text: 'Advanced Configuration',
                link: '/documentation/use-iapp/web3telegram/advanced-configuration',
              },
            ],
          },
        ],
      },
      {
        text: 'TOOLING & EXPLORERS',
        items: [
          {
            text: 'iExec Explorer',
            link: '/documentation/tooling-and-explorers/iexec-explorer',
          },
          {
            text: 'Builder Dashboard',
            link: '/documentation/tooling-and-explorers/builder-dashboard',
          },
          {
            text: 'RLC Bridge',
            link: '/documentation/tooling-and-explorers/bridge',
          },
          {
            text: 'Subgraph Explorer',
            link: '/documentation/tooling-and-explorers/subgraph-explorer',
          },
          {
            text: 'Blockchain Explorer',
            link: '/documentation/tooling-and-explorers/blockchain-explorer',
          },
        ],
      },
      {
        text: 'PROTOCOL',
        items: [
          {
            text: '🔧 iExec SDK',
            link: '/documentation/protocol/sdk',
          },
          {
            text: '⚙️ Workers & Workerpools',
            collapsed: true,
            items: [
              {
                text: '🚀 Worker Quick Start',
                link: '/documentation/protocol/worker/quick-start',
              },
              {
                text: '🔒 Manage Workerpool Access',
                link: '/documentation/protocol/worker/manage-access',
              },
            ],
          },
          {
            text: '⚙️ PoCo',
            collapsed: true,
            items: [
              {
                text: '� Pay Per Task Model',
                link: '/documentation/protocol/poco/pay-per-task',
              },
              {
                text: '🛡️ Proof of Contribution',
                link: '/documentation/protocol/poco/proof-of-contribution',
              },
            ],
          },
          {
            text: '�📖 Glossary',
            link: '/documentation/protocol/glossary',
          },
        ],
      },
    ],
    '/guides/': [],
    '/references/': [],
  } satisfies DefaultTheme.Sidebar;
}
