<script setup>
import GrantAccess from '../../modules/helloWorld/GrantAccess.vue';
import { useWalletConnection } from '../../hooks/useWalletConnection.vue';

const { protectedDataAddress } = useWalletConnection();
</script>

# 🔑 Manage Data Access

> Reading time 🕒 6 mins

<div class="bg-gradient-to-r from-[#fcd15a] to-[#ffad4d] rounded-[6px] px-8 pb-4 text-gray-800 max-w-3xl mx-auto mb-6">
  <h2 class="text-2xl font-bold mt-0 border-none!">Control Your Data</h2>
  <p>Alice will learn how to grant access to her protected data and manage who can use it.</p>
</div>

<div class="bg-gradient-to-r from-fuchsia-400/10 to-fuchsia-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">When you protect your data, you can authorize specific <span class="text-fuchsia-700 font-semibold">users</span> and <span class="text-fuchsia-700 font-semibold">applications</span> to access it. This means an authorized user will be able to use an authorized iApp to compute your protected data.</p>
</div>

## 🔐 The Authorization Flow

Here is a simple diagram to explain the process:

![alt](/assets/hello-world/process_light.png){.light-only}
![alt](/assets/hello-world/process_dark.png){.dark-only}

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">1</span>
    <span>Protect your data using DataProtector SDK</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">2</span>
    <span>Authorize a user (wallet address) to access your data</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">3</span>
    <span>Authorize the iApp to access your data</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">4</span>
    <span>Authorized user can now run your iApp to process your protected data</span>
  </div>
</div>

## 🔓 Grant the iApp Access to Your Data

<div class="bg-gradient-to-r from-fuchsia-400/10 to-fuchsia-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">Remember the <span class="text-fuchsia-700 font-semibold">iApp address</span> you saved from the previous chapter? You'll need it now to grant access to your protected data.</p>
</div>

<GrantAccess />

**Let's look at the code that makes this possible:**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

- 📄 **protectedData**: The protected data address (local storage for the demo)
- 💻 **authorizedApp**: The iApp address you want to authorize
- 👤 **authorizedUser**: User's wallet address (0x... means all users)

<div class="bg-gradient-to-r from-fuchsia-400/10 to-fuchsia-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">As we don't have the Bob's wallet address, we'll use the zero address to grant access to all users.</p>
</div>

## 🏃 Time to run

You're now ready to process your protected data in a trusted environment:

```sh-vue
iapp run <my-iapp-address> --protectedData {{ protectedDataAddress }}
```

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 mb-6">
  <p class="m-0!">🎉 Congratulations! You've successfully completed the core workflow of protecting and processing data with iExec!</p>
</div>

## What's next: Data Monetization

We've completed the first step of the journey! You can now integrate the
**DataProtector SDK** into your dApp, **secure your data**, **grant access** to
users and iApps, and **process it safely**.

But here's where it gets even more exciting... **monetization!**.

Our SDK offers flexible **monetization mechanisms**, allowing you to create
**protected data collections** and implement advanced models like
**subscriptions**, **rentals**, or **direct sales**. The choice is yours!

Want to see it in action? Check out our
[Content Creator Demo](https://demo.iex.ec/content-creator/) where you can:

- Create and protect your own content
- Set pricing and access rules
- Manage subscriptions and rentals
- Track your earnings

For more technical details, see the
[DataProtector Sharing](../../tools/dataProtector/dataProtectorSharing.html)
documentation.

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 mb-6">
    <p class="m-0!">You have one more step to complete the journey, and it's the easy one. Let's go to the bonus chapter!</p>
</div>
