import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/overview/': [
      {
        text: 'GET STARTED',
        items: [
          { text: '💡 Welcome', link: '/overview/welcome' },
          {
            text: '👋 Hello World',
            link: '/overview/helloWorld',
            items: [
              {
                text: 'iExec Overview',
                link: '/overview/helloWorld/1-overview',
              },
              {
                text: 'Protect data',
                link: '/overview/helloWorld/2-protectData',
              },
              { text: 'Build iApp', link: '/overview/helloWorld/3-buildIApp' },
              {
                text: 'Manage data access',
                link: '/overview/helloWorld/4-manageDataAccess',
              },
              {
                text: 'Bonus chapter!',
                link: '/overview/helloWorld/5-bonusChapter',
              },
            ],
          },
          {
            text: '🚀 Quick Start',
            link: '/overview/quick-start',
          },
          {
            text: '📋 Use Cases',
            link: '/overview/use-cases',
          },
          {
            text: '🤖 Develop with AI',
            link: '/overview/develop-with-ai',
          },
        ],
      },
      {
        text: 'TOOLING & EXPLORERS',
        items: [
          {
            text: 'iExec Explorer',
            link: '/overview/tooling-and-explorers/iexec-explorer',
          },
          {
            text: 'Builder Dashboard',
            link: '/overview/tooling-and-explorers/builder-dashboard',
          },
          {
            text: 'Subgraph Explorer',
            link: '/overview/tooling-and-explorers/subgraph-explorer',
          },
          {
            text: 'Blockchain Explorer',
            link: '/overview/tooling-and-explorers/blockchain-explorer',
          },
        ],
      },
    ],
    '/manage-data/': [
      {
        text: 'PROTECT AND MANAGE DATA',
        items: [
          {
            text: '❓&nbsp;&nbsp;What Is Protected Data?',
            link: '/manage-data/what-is-protected-data',
          },
          {
            text: '📖 Guides',
            items: [
              {
                text: 'Manage Access',
                link: '/manage-data/guides/manage-access',
              },
              {
                text: 'Handle Schemas and Dataset Types',
                link: '/manage-data/guides/handle-schemas-dataset-types',
              },
              {
                text: 'Monetize Protected Data',
                link: '/manage-data/guides/monetize-protected-data',
              },
            ],
          },
          {
            text: '🔐 DataProtector',
            link: '/manage-data/dataProtector',
            items: [
              {
                text: 'Getting Started',
                link: '/manage-data/dataProtector/getting-started',
              },
              {
                text: 'DataProtector Core',
                link: '/manage-data/dataProtector/dataProtectorCore',
                collapsed: true,
                items: [
                  {
                    text: 'protectData',
                    link: '/manage-data/dataProtector/dataProtectorCore/protectData',
                  },
                  {
                    text: 'getProtectedData',
                    link: '/manage-data/dataProtector/dataProtectorCore/getProtectedData',
                  },
                  {
                    text: 'transferOwnership',
                    link: '/manage-data/dataProtector/dataProtectorCore/transferOwnership',
                  },
                  {
                    text: 'grantAccess',
                    link: '/manage-data/dataProtector/dataProtectorCore/grantAccess',
                  },
                  {
                    text: 'getGrantedAccess',
                    link: '/manage-data/dataProtector/dataProtectorCore/getGrantedAccess',
                  },
                  {
                    text: 'revokeOneAccess',
                    link: '/manage-data/dataProtector/dataProtectorCore/revokeOneAccess',
                  },
                  {
                    text: 'revokeAllAccess',
                    link: '/manage-data/dataProtector/dataProtectorCore/revokeAllAccess',
                  },
                  {
                    text: 'processProtectedData',
                    link: '/manage-data/dataProtector/dataProtectorCore/processProtectedData',
                  },
                  {
                    text: 'getResultFromCompletedTask',
                    link: '/manage-data/dataProtector/dataProtectorCore/getResultFromCompletedTask',
                  },
                ],
              },
              {
                text: 'DataProtector Sharing',
                link: '/manage-data/dataProtector/dataProtectorSharing',
                collapsed: true,
                items: [
                  {
                    text: 'Collection',
                    link: '/manage-data/dataProtector/dataProtectorSharing/collection',
                    collapsed: true,
                    items: [
                      {
                        text: 'createCollection',
                        link: '/manage-data/dataProtector/dataProtectorSharing/collection/createCollection',
                      },
                      {
                        text: 'removeCollection',
                        link: '/manage-data/dataProtector/dataProtectorSharing/collection/removeCollection',
                      },
                      {
                        text: 'addToCollection',
                        link: '/manage-data/dataProtector/dataProtectorSharing/collection/addToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromCollection',
                        link: '/manage-data/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                      },
                    ],
                  },
                  {
                    text: 'Renting',
                    link: '/manage-data/dataProtector/dataProtectorSharing/renting',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToRenting',
                        link: '/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                      },
                      {
                        text: 'setProtectedDataRentingParams',
                        link: '/manage-data/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
                      },
                      {
                        text: 'rentProtectedData',
                        link: '/manage-data/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                      },
                      {
                        text: 'removeProtectedDataFromRenting',
                        link: '/manage-data/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                      },
                    ],
                  },
                  {
                    text: 'Selling',
                    link: '/manage-data/dataProtector/dataProtectorSharing/selling',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataForSale',
                        link: '/manage-data/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                      },
                      {
                        text: 'buyProtectedData',
                        link: '/manage-data/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                      },
                      {
                        text: 'removeProtectedDataForSale',
                        link: '/manage-data/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                      },
                    ],
                  },
                  {
                    text: 'Subscription',
                    link: '/manage-data/dataProtector/dataProtectorSharing/subscription',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToSubscription',
                        link: '/manage-data/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                      },
                      {
                        text: 'setSubscriptionParams',
                        link: '/manage-data/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                      },
                      {
                        text: 'subscribeToCollection',
                        link: '/manage-data/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromSubscription',
                        link: '/manage-data/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                      },
                    ],
                  },
                  {
                    text: 'Consume',
                    collapsed: true,
                    items: [
                      {
                        text: 'consumeProtectedData',
                        link: '/manage-data/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                      },
                    ],
                  },
                  {
                    text: 'Read data',
                    collapsed: true,
                    items: [
                      {
                        text: 'getProtectedDataInCollections',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                      },
                      {
                        text: 'getProtectedDataPricingParams',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                      },
                      {
                        text: 'getCollectionOwners',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                      },
                      {
                        text: 'getCollectionsByOwner',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                      },
                      {
                        text: 'getCollectionSubscriptions',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                      },
                      {
                        text: 'getRentals',
                        link: '/manage-data/dataProtector/dataProtectorSharing/read/getRentals',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Types',
                link: '/manage-data/dataProtector/types',
              },
              {
                text: 'Advanced',
                collapsed: true,
                items: [
                  {
                    text: 'Advanced Configuration',
                    link: '/manage-data/dataProtector/advanced/advanced-configuration',
                  },
                  {
                    text: 'Sharing smart contract',
                    link: '/manage-data/dataProtector/advanced/dps-smart-contract',
                  },
                  {
                    text: 'Apps whitelist',
                    link: '/manage-data/dataProtector/advanced/apps-whitelist',
                    collapsed: true,
                    items: [
                      {
                        text: 'createAddOnlyAppWhitelist',
                        link: '/manage-data/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                      },
                      {
                        text: 'addAppToAddOnlyAppWhitelist',
                        link: '/manage-data/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                      },
                      {
                        text: 'getUserAddOnlyAppWhitelist',
                        link: '/manage-data/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Migrate from v1 to v2',
                link: '/manage-data/dataProtector/migrate-from-v1',
              },
            ],
          },
        ],
      },
    ],
    '/build-iapp/': [
      {
        text: 'BUILD YOUR iAPP',
        items: [
          { text: '❓ What Is an iApp?', link: '/build-iapp/what-is-iapp' },
          {
            text: '📖 Guides',
            items: [
              {
                text: 'Build and Deploy',
                link: '/build-iapp/guides/build-&-deploy',
              },
              {
                text: 'Manage Access',
                link: '/build-iapp/guides/manage-access',
              },
              {
                text: 'Inputs and Outputs',
                link: '/build-iapp/guides/inputs-and-outputs',
              },
              {
                text: 'Using TDX',
                link: '/build-iapp/guides/using-tdx',
              },
              {
                text: 'How to Get and Decrypt Results',
                link: '/build-iapp/guides/how-to-get-and-decrypt-results',
              },
              {
                text: 'Debugging',
                link: '/build-iapp/guides/debugging',
              },
            ],
          },
          {
            text: '🤖 iApp Generator',
            link: '/build-iapp/iapp-generator',
            items: [
              {
                text: 'Getting Started',
                link: '/build-iapp/iapp-generator/getting-started',
              },
              {
                text: 'Building Your iApp',
                link: '/build-iapp/iapp-generator/building-your-iexec-app',
              },
              {
                text: 'Deserialize ProtectedData',
                link: '/build-iapp/iapp-generator/deserializer',
                collapsed: true,
                items: [
                  {
                    text: 'getValue',
                    link: '/build-iapp/iapp-generator/deserializer/getValue',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    '/use-iapp/': [
      {
        text: 'USE AN iAPP',
        items: [
          { text: '📝 Introduction', link: '/use-iapp/introduction' },
          { text: '🚀 Getting Started', link: '/use-iapp/getting-started' },
          {
            text: '📖 Guides',
            items: [
              {
                text: 'Different ways to execute an iApp',
                link: '/use-iapp/guides/different-ways-to-execute',
              },
              {
                text: 'Add inputs to the execution',
                link: '/use-iapp/guides/add-inputs-to-execution',
              },
              {
                text: 'Use iApp with Protected Data',
                link: '/use-iapp/guides/use-iapp-with-protected-data',
              },
              {
                text: 'Find iApps to Use',
                link: '/use-iapp/guides/find-iapps',
              },
              {
                text: 'How to pay the executions',
                link: '/use-iapp/guides/how-to-pay-executions',
              },
            ],
          },
          {
            text: '💰 How to Pay',
            items: [
              {
                text: 'How to Pay for Web3mail',
                link: '/use-iapp/how-to-pay/how-to-pay-for-web3mail',
              },
              {
                text: 'How to Pay for Web3telegram',
                link: '/use-iapp/how-to-pay/how-to-pay-for-web3telegram',
              },
              {
                text: 'Pricing Considerations',
                link: '/use-iapp/how-to-pay/pricing-considerations',
              },
              {
                text: 'Voucher',
                link: '/use-iapp/how-to-pay/voucher',
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
                link: '/use-iapp/web3mail/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/use-iapp/web3mail/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/use-iapp/web3mail/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendEmail',
                    link: '/use-iapp/web3mail/methods/sendEmail',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/use-iapp/web3mail/advanced-configuration',
              },
            ],
          },
          {
            text: '💬 Web3Telegram <span class="VPBadge warning" style="margin-left: 8px; margin-bottom: -1px; transform: translateY(-1px);">alpha</span>',
            link: '/use-iapp/web3telegram',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/use-iapp/web3telegram/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/use-iapp/web3telegram/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/use-iapp/web3telegram/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendTelegram',
                    link: '/use-iapp/web3telegram/methods/sendTelegram',
                  },
                ],
              },
              {
                text: 'Integration Guide',
                link: '/use-iapp/web3telegram/integration-guide',
              },
              {
                text: 'Advanced Configuration',
                link: '/use-iapp/web3telegram/advanced-configuration',
              },
            ],
          },
        ],
      },
    ],
    '/protocol/': [
      {
        text: 'PROTOCOL',
        items: [
          {
            text: '🔧&nbsp;&nbsp;iExec SDK',
            link: '/protocol/sdk',
          },
          {
            text: '⚙️&nbsp;&nbsp;Workers & Workerpools',
            link: '/protocol/workers',
          },
          {
            text: '📖&nbsp;&nbsp;Glossary',
            link: '/protocol/glossary',
          },
        ],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
