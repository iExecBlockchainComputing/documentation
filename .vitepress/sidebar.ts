import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/': [
      {
        text: 'OVERVIEW',
        items: [
          {
            text: '⚡&nbsp;&nbsp;Speedrun iExec',
            link: '/overview/speedrun-iexec',
          },
          {
            text: '👋&nbsp;&nbsp; Hello World',
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
              {
                text: 'Build iApp',
                link: '/overview/helloWorld/3-buildIApp',
              },
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
            text: '📋&nbsp;&nbsp;Use Cases',
            collapsed: true,
            items: [
              {
                text: 'AI',
                link: '/overview/use-cases/ai',
              },
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
            text: '🤖&nbsp;&nbsp;Use the docs in your AI',
            link: '/overview/ai-integration',
          },
          {
            text: '🆘&nbsp;&nbsp;Contact Us',
            link: '/overview/contact-us',
          },
        ],
      },
      {
        text: 'PROTECT AND MANAGE DATA',
        items: [
          {
            text: '❓&nbsp;&nbsp;What Is Protected Data?',
            link: '/manage_data/dataProtector/what-is-protected-data',
          },
          {
            text: '📖&nbsp;&nbsp;Guides',
            link: '/manage_data/guides',
            collapsed: true,
            items: [
              {
                text: 'Create and Share Access to Protected Data',
                link: '/manage_data/guides/create-and-share-access',
              },
              {
                text: 'Handle Schemas and Dataset Types',
                link: '/manage_data/guides/handle-schemas-dataset-types',
              },
              {
                text: 'Manage Data Monetization',
                link: '/manage_data/guides/manage-data-monetization',
              },
            ],
          },
          {
            text: '🔐&nbsp;&nbsp;DataProtector <span class="VPBadge warning" style="margin-left: 8px; margin-bottom: -1px; transform: translateY(-1px);">beta</span>',
            link: '/manage_data/dataProtector',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/manage_data/dataProtector/getting-started',
              },
              {
                text: 'DataProtector Core',
                link: '/manage_data/dataProtector/dataProtectorCore',
                collapsed: true,
                items: [
                  {
                    text: 'protectData',
                    link: '/manage_data/dataProtector/dataProtectorCore/protectData',
                  },
                  {
                    text: 'getProtectedData',
                    link: '/manage_data/dataProtector/dataProtectorCore/getProtectedData',
                  },
                  {
                    text: 'transferOwnership',
                    link: '/manage_data/dataProtector/dataProtectorCore/transferOwnership',
                  },
                  {
                    text: 'grantAccess',
                    link: '/manage_data/dataProtector/dataProtectorCore/grantAccess',
                  },
                  {
                    text: 'getGrantedAccess',
                    link: '/manage_data/dataProtector/dataProtectorCore/getGrantedAccess',
                  },
                  {
                    text: 'revokeOneAccess',
                    link: '/manage_data/dataProtector/dataProtectorCore/revokeOneAccess',
                  },
                  {
                    text: 'revokeAllAccess',
                    link: '/manage_data/dataProtector/dataProtectorCore/revokeAllAccess',
                  },
                  {
                    text: 'processProtectedData',
                    link: '/manage_data/dataProtector/dataProtectorCore/processProtectedData',
                  },
                  {
                    text: 'getResultFromCompletedTask',
                    link: '/manage_data/dataProtector/dataProtectorCore/getResultFromCompletedTask',
                  },
                ],
              },
              {
                text: 'DataProtector Sharing',
                link: '/manage_data/dataProtector/dataProtectorSharing',
                collapsed: true,
                items: [
                  {
                    text: 'Collection',
                    link: '/manage_data/dataProtector/dataProtectorSharing/collection',
                    collapsed: true,
                    items: [
                      {
                        text: 'createCollection',
                        link: '/manage_data/dataProtector/dataProtectorSharing/collection/createCollection',
                      },
                      {
                        text: 'removeCollection',
                        link: '/manage_data/dataProtector/dataProtectorSharing/collection/removeCollection',
                      },
                      {
                        text: 'addToCollection',
                        link: '/manage_data/dataProtector/dataProtectorSharing/collection/addToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromCollection',
                        link: '/manage_data/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                      },
                    ],
                  },
                  {
                    text: 'Renting',
                    link: '/manage_data/dataProtector/dataProtectorSharing/renting',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToRenting',
                        link: '/manage_data/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                      },
                      {
                        text: 'setProtectedDataRentingParams',
                        link: '/manage_data/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
                      },
                      {
                        text: 'rentProtectedData',
                        link: '/manage_data/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                      },
                      {
                        text: 'removeProtectedDataFromRenting',
                        link: '/manage_data/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                      },
                    ],
                  },
                  {
                    text: 'Selling',
                    link: '/manage_data/dataProtector/dataProtectorSharing/selling',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataForSale',
                        link: '/manage_data/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                      },
                      {
                        text: 'buyProtectedData',
                        link: '/manage_data/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                      },
                      {
                        text: 'removeProtectedDataForSale',
                        link: '/manage_data/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                      },
                    ],
                  },
                  {
                    text: 'Subscription',
                    link: '/manage_data/dataProtector/dataProtectorSharing/subscription',
                    collapsed: true,
                    items: [
                      {
                        text: 'setProtectedDataToSubscription',
                        link: '/manage_data/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                      },
                      {
                        text: 'setSubscriptionParams',
                        link: '/manage_data/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                      },
                      {
                        text: 'subscribeToCollection',
                        link: '/manage_data/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                      },
                      {
                        text: 'removeProtectedDataFromSubscription',
                        link: '/manage_data/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                      },
                    ],
                  },
                  {
                    text: 'Consume',
                    collapsed: true,
                    items: [
                      {
                        text: 'consumeProtectedData',
                        link: '/manage_data/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                      },
                    ],
                  },
                  {
                    text: 'Read data',
                    collapsed: true,
                    items: [
                      {
                        text: 'getProtectedDataInCollections',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                      },
                      {
                        text: 'getProtectedDataPricingParams',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                      },
                      {
                        text: 'getCollectionOwners',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                      },
                      {
                        text: 'getCollectionsByOwner',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                      },
                      {
                        text: 'getCollectionSubscriptions',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                      },
                      {
                        text: 'getRentals',
                        link: '/manage_data/dataProtector/dataProtectorSharing/read/getRentals',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Types',
                link: '/manage_data/dataProtector/types',
              },
              {
                text: 'Advanced',
                collapsed: true,
                items: [
                  {
                    text: 'Advanced Configuration',
                    link: '/manage_data/dataProtector/advanced/advanced-configuration',
                  },
                  {
                    text: 'Sharing smart contract',
                    link: '/manage_data/dataProtector/advanced/dps-smart-contract',
                  },
                  {
                    text: 'Apps whitelist',
                    link: '/manage_data/dataProtector/advanced/apps-whitelist',
                    collapsed: true,
                    items: [
                      {
                        text: 'createAddOnlyAppWhitelist',
                        link: '/manage_data/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                      },
                      {
                        text: 'addAppToAddOnlyAppWhitelist',
                        link: '/manage_data/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                      },
                      {
                        text: 'getUserAddOnlyAppWhitelist',
                        link: '/manage_data/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                      },
                    ],
                  },
                  {
                    text: 'iApp',
                    link: '/manage_data/dataProtector/advanced/iApp',
                    collapsed: true,
                    items: [
                      {
                        text: 'DataProtector Deserializer',
                        link: '/manage_data/dataProtector/advanced/iApp/deserializer',
                        collapsed: true,
                        items: [
                          {
                            text: 'getValue',
                            link: '/manage_data/dataProtector/advanced/iApp/deserializer/getValue',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Migrate from v1 to v2',
                link: '/manage_data/dataProtector/migrate-from-v1',
              },
            ],
          },
        ],
      },
      {
        text: 'BUILD YOUR iAPP',
        items: [
          {
            text: '❓&nbsp;&nbsp;What Is an iApp?',
            link: '/build_iapp/iapp-generator/what-is-iapp',
          },
          {
            text: '📖&nbsp;&nbsp;Guides',
            link: '/build_iapp/guides',
            collapsed: true,
            items: [
              {
                text: 'App Access Control and Pricing',
                link: '/build_iapp/guides/orders',
              },
              {
                text: 'Inputs and Outputs',
                link: '/build_iapp/guides/inputs-and-outputs',
              },
              {
                text: 'Debugging Your iApp',
                link: '/build_iapp/guides/debugging-your-iapp',
              },
              {
                text: 'How to Get and Decrypt Results',
                link: '/build_iapp/guides/how-to-get-and-decrypt-results',
              },
              {
                text: 'Using TDX (Experimental)',
                link: '/build_iapp/guides/using-tdx-experimental',
              },
            ],
          },
          {
            text: '🤖&nbsp;&nbsp;iApp Generator',
            link: '/build_iapp/iapp-generator',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/build_iapp/iapp-generator/getting-started',
              },
              {
                text: 'Building Your iApp',
                link: '/build_iapp/iapp-generator/building-your-iexec-app',
              },
              {
                text: 'References',
                link: '/build_iapp/iapp-generator/references',
              },
              {
                text: 'Advanced Creation',
                link: '/build_iapp/iapp-generator/advanced-creation',
              },
            ],
          },
          {
            text: '🔧&nbsp;&nbsp;Protocol-Level Guides',
            link: '/build_iapp/iapp-generator/protocol-level-guides',
          },
        ],
      },
      {
        text: 'USE AN iAPP',
        items: [
          {
            text: '🚀&nbsp;&nbsp;Getting Started',
            link: '/use_iapp/introduction',
          },
          {
            text: '📖&nbsp;&nbsp;Guides',
            link: '/use_iapp/guides',
            collapsed: true,
            items: [
              {
                text: 'Different ways to execute an iApp',
                link: '/use_iapp/guides/different-ways-to-execute',
              },
              {
                text: 'Add inputs to the execution',
                link: '/use_iapp/guides/add-inputs-to-execution',
              },
              {
                text: 'Use iApp with Protected Data',
                link: '/use_iapp/use-iapp-with-protected-data',
              },
              {
                text: 'Find iApps to Use',
                link: '/use_iapp/find-iapps',
              },
              {
                text: 'How to pay the executions',
                link: '/use_iapp/guides/how-to-pay-executions',
              },
            ],
          },
          {
            text: '💰&nbsp;&nbsp;How to Pay',
            link: '/use_iapp/payment',
            collapsed: true,
            items: [
              {
                text: 'How to Pay for Web3mail',
                link: '/overview/how-to-pay-for-web3mail',
              },
              {
                text: 'How to Pay for Web3telegram',
                link: '/use_iapp/web3telegram/how-to-pay-for-web3telegram',
              },
              {
                text: 'Pricing Considerations',
                link: '/overview/pricing-considerations',
              },
              {
                text: 'Voucher Authorization Guide',
                link: '/use_iapp/voucher-guide',
              },
            ],
          },
          {
            text: '✉&nbsp;&nbsp;Web3Mail',
            link: '/use_iapp/web3mail',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/use_iapp/web3mail/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/use_iapp/web3mail/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/use_iapp/web3mail/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendEmail',
                    link: '/use_iapp/web3mail/methods/sendEmail',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/use_iapp/web3mail/advanced-configuration',
              },
            ],
          },
          {
            text: '💬&nbsp;&nbsp;Web3Telegram <span class="VPBadge warning" style="margin-left: 8px; margin-bottom: -1px; transform: translateY(-1px);">alpha</span>',
            link: '/use_iapp/web3telegram',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/use_iapp/web3telegram/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'fetchMyContacts',
                    link: '/use_iapp/web3telegram/methods/fetchMyContacts',
                  },
                  {
                    text: 'fetchUserContacts',
                    link: '/use_iapp/web3telegram/methods/fetchUserContacts',
                  },
                  {
                    text: 'sendTelegram',
                    link: '/use_iapp/web3telegram/methods/sendTelegram',
                  },
                ],
              },
              {
                text: 'Integration Guide',
                link: '/use_iapp/web3telegram/integration-guide',
              },
              {
                text: 'Advanced Configuration',
                link: '/use_iapp/web3telegram/advanced-configuration',
              },
            ],
          },
          {
            text: '🧙&nbsp;&nbsp;Oracle Factory',
            link: '/use_iapp/oracle-factory',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/use_iapp/oracle-factory/getting-started',
              },
              {
                text: 'Methods',
                collapsed: true,
                items: [
                  {
                    text: 'createOracle',
                    link: '/use_iapp/oracle-factory/methods/createOracle',
                  },
                  {
                    text: 'readOracle',
                    link: '/use_iapp/oracle-factory/methods/readOracle',
                  },
                  {
                    text: 'updateOracle',
                    link: '/use_iapp/oracle-factory/methods/updateOracle',
                  },
                ],
              },
              {
                text: 'Advanced Configuration',
                link: '/use_iapp/oracle-factory/advanced-configuration',
              },
            ],
          },
        ],
      },
      {
        text: 'KEY CONCEPTS',
        items: [
          {
            text: '🔧&nbsp;&nbsp;iExec SDK',
            link: '/deep_dive/sdk',
          },
          {
            text: '⚙️&nbsp;&nbsp;Workers & Workerpools',
            link: '/deep_dive/workers',
          },
          {
            text: '📖&nbsp;&nbsp;Glossary',
            link: '/deep_dive/glossary',
          },
        ],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
