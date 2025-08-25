---
title: Manage Data Access
description:
  Learn how to grant and manage access to protected data using iExec's
  DataProtector SDK in this tutorial step.
---

<script setup>
import GrantAccess from '@/modules/helloWorld/GrantAccess.vue';
import { useWalletConnection } from '@/hooks/useWalletConnection.vue';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'

const { protectedDataAddress } = useWalletConnection();
</script>

# 🔑 Manage Data Access

> Reading time 🕒 6 min

<Banner>
  <h2 class="text-2xl font-bold mt-0 border-none!">Control Your Data</h2>
  <p>Alice will learn how to grant access to her protected data and manage who can use it.</p>
</Banner>

::: tip <i></i>

When you protect your data, you can authorize specific <strong>users</strong>
and <strong>applications</strong> to access it. This means an authorized user
will be able to use an authorized iApp to compute your protected data.

:::

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

## 🔓 Grant the iApp Access to your Data

::: tip <i></i>

Remember the <strong>iApp address</strong> you saved from the previous chapter?
You'll need it now to grant access to your protected data.

:::

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

::: tip <i></i>

As we don't have the Bob's wallet address, we'll use the zero address to grant
access to all users.

:::

## 🏃 Time to Run

You're now ready to process your protected data in a trusted environment:

```sh-vue
iapp run <my-iapp-address> --protectedData {{ protectedDataAddress }}
```

<Container variant="success">

🎉 Congratulations! You've successfully completed the core workflow of
protecting and processing data with iExec!

</Container>

## What's Next: Data Monetization

We've completed the first step of the journey! You can now integrate the
**DataProtector SDK** into your iApp, **secure your data**, **grant access** to
users and iApp, and **process it safely**.

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
[DataProtector Sharing](/references/dataProtector/dataProtectorSharing)
documentation.

<Container variant="success">

You have one more step to complete the journey, and it's the easy one. Let's go
to the bonus chapter!

</Container>
