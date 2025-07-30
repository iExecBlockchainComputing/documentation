import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/': [
      {
        text: 'OVERVIEW',
        items: [
          { text: '💡 What We Do', link: '/overview/what-we-do' },
          {
            text: '👋 Hello World',
            link: '/overview/helloWorld',
            collapsed: true,
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
            text: '📋 Use Cases',
            collapsed: true,
            items: [
              { text: 'AI', link: '/overview/use-cases/ai' },
              {
                text: 'Other Emerging Trends',
                link: '/overview/use-cases/other-emerging-trends',
              },
              {
                text: 'Use Case Demos',
                link: '/overview/use-case-demo',
                collapsed: true,
                items: [
                  {
                    text: 'Content Creator',
                    link: '/overview/use-case-demo/content-creator',
                  },
                  {
                    text: 'Web3 Messaging',
                    link: '/overview/use-case-demo/web3messaging',
                  },
                ],
              },
            ],
          },
          {
            text: '🤖 Use the docs in your AI',
            link: '/overview/ai-integration',
          },
          { text: '🆘 Contact Us', link: '/overview/contact-us' },
        ],
      },
    ],
    '/overview/': [
      {
        text: 'OVERVIEW',
        items: [
          { text: '💡 What We Do', link: '/overview/what-we-do' },
          {
            text: '👋 Hello World',
            link: '/overview/helloWorld',
            collapsed: true,
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
            text: '📋 Use Cases',
            collapsed: true,
            items: [
              { text: 'AI', link: '/overview/use-cases/ai' },
              {
                text: 'Other Emerging Trends',
                link: '/overview/use-cases/other-emerging-trends',
              },
              {
                text: 'Use Case Demos',
                link: '/overview/use-case-demo',
                collapsed: true,
                items: [
                  {
                    text: 'Content Creator',
                    link: '/overview/use-case-demo/content-creator',
                  },
                  {
                    text: 'Web3 Messaging',
                    link: '/overview/use-case-demo/web3messaging',
                  },
                ],
              },
            ],
          },
          {
            text: '🤖 Use the docs in your AI',
            link: '/overview/ai-integration',
          },
          { text: '🆘 Contact Us', link: '/overview/contact-us' },
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
            link: '/manage-data/guides',
            collapsed: true,
            items: [
              {
                text: 'Create and Share Access to Protected Data',
                link: '/manage-data/guides/create-and-share-access',
              },
              {
                text: 'Handle Schemas and Dataset Types',
                link: '/manage-data/guides/handle-schemas-dataset-types',
              },
              {
                text: 'Manage Data Monetization',
                link: '/manage-data/guides/manage-data-monetization',
              },
            ],
          },
          {
            text: '🔐 DataProtector',
            link: '/manage-data/dataProtector',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/manage-data/dataProtector/getting-started',
              },
              {
                text: 'Guides',
                link: '/manage-data/dataProtector/guides',
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
                  {
                    text: 'iApp',
                    link: '/manage-data/dataProtector/advanced/iApp',
                    collapsed: true,
                    items: [
                      {
                        text: 'DataProtector Deserializer',
                        link: '/manage-data/dataProtector/advanced/iApp/deserializer',
                        collapsed: true,
                        items: [
                          {
                            text: 'getValue',
                            link: '/manage-data/dataProtector/advanced/iApp/deserializer/getValue',
                          },
                        ],
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
            link: '/build-iapp/guides',
            collapsed: true,
            items: [
              {
                text: 'Manage Your iApps',
                link: '/build-iapp/guides/manage-iapps',
              },
              {
                text: 'Orders (how they work, how to manage them)',
                link: '/build-iapp/guides/orders',
              },
              {
                text: 'Inputs and Outputs (types, differences, formats)',
                link: '/build-iapp/guides/inputs-and-outputs',
              },
              {
                text: 'Debugging Your iApp',
                link: '/build-iapp/guides/debugging-your-iapp',
              },
              {
                text: 'Using TDX (Trusted Execution) [EXPERIMENTAL]',
                link: '/build-iapp/guides/using-tdx-experimental',
              },
              {
                text: 'How to Get and Decrypt Results',
                link: '/build-iapp/guides/how-to-get-and-decrypt-results',
              },
              {
                text: 'AI Frameworks',
                link: '/build-iapp/guides/ai-frameworks',
              },
              {
                text: 'Other Emerging Trends',
                link: '/build-iapp/guides/other-emerging-trends',
              },
            ],
          },
          {
            text: '🤖 iApp Generator',
            link: '/build-iapp/iapp-generator',
            collapsed: true,
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
                text: 'References',
                link: '/build-iapp/iapp-generator/references',
              },
              {
                text: 'Advanced Creation',
                link: '/build-iapp/iapp-generator/advanced-creation',
              },
            ],
          },
          {
            text: '🔧 Protocol-Level Guides',
            link: '/build-iapp/iapp-generator/protocol-level-guides',
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
            link: '/use-iapp/guides',
            collapsed: true,
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
                link: '/use-iapp/use-iapp-with-protected-data',
              },
              {
                text: 'Find iApps to Use',
                link: '/use-iapp/find-iapps',
              },
              {
                text: 'How to pay the executions',
                link: '/use-iapp/guides/how-to-pay-executions',
              },
            ],
          },
          {
            text: '💰 How to Pay',
            link: '/use-iapp/payment',
            collapsed: true,
            items: [
              {
                text: 'How to Pay for Web3mail',
                link: '/overview/how-to-pay-for-web3mail',
              },
              {
                text: 'How to Pay for Web3telegram',
                link: '/use-iapp/web3telegram/how-to-pay-for-web3telegram',
              },
              {
                text: 'Pricing Considerations',
                link: '/overview/pricing-considerations',
              },
              {
                text: 'Voucher Authorization Guide',
                link: '/use-iapp/voucher-guide',
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
          {
            text: '🧙 Oracle Factory',
            link: '/use-iapp/oracle-factory',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/use-iapp/oracle-factory/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'createOracle',
                    link: '/use-iapp/oracle-factory/methods/createOracle',
                  },
                  {
                    text: 'readOracle',
                    link: '/use-iapp/oracle-factory/methods/readOracle',
                  },
                  {
                    text: 'updateOracle',
                    link: '/use-iapp/oracle-factory/methods/updateOracle',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/use-iapp/oracle-factory/advanced-configuration',
              },
            ],
          },
        ],
      },
    ],
    '/core-concept/': [
      {
        text: 'CORE CONCEPTS',
        items: [
          {
            text: '🔧&nbsp;&nbsp;iExec SDK',
            link: '/core-concept/sdk',
          },
          {
            text: '⚙️&nbsp;&nbsp;Workers & Workerpools',
            link: '/core-concept/workers',
          },
          {
            text: '📖&nbsp;&nbsp;Glossary',
            link: '/core-concept/glossary',
          },
        ],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
