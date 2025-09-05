---
title: Bonus Chapter
description:
  Explore additional features and advanced concepts in this bonus chapter of the
  Hello World tutorial series.
---

# 🎉 Bonus Chapter

> Reading time 🕒 4 min

<Banner>
  
## Congratulations!

You've successfully completed the Hello World journey and learned how to protect
data, deploy iApp, and manage data access. Now it's time to claim your rewards!
🏆

</Banner>

## 🏁 Any Questions?

<div class="flex flex-col md:flex-row items-center gap-8">
  <p class="flex-1">
    If you have any questions, please schedule an appointment with our DevRel team who will be happy to help!
    <br>
    <br>
    <a href="https://calendly.com/martin-leclercq-iexec/30min" target="_blank">📅 Book a meeting</a>
  </p>
  <div class="flex-1 flex justify-center">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenE3ZW42enUydnl5b2F3ZDcyNHZkdXF6bzFydjl6bmc4MzYydHRweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g9582DNuQppxC/giphy.gif" alt="Funny waiting animation" width="300" height="300" />
  </div>
</div>

<Container class="mt-4" variant="success">

Need help setting up or got some questions? Join our
**<a target="_blank" href="https://discord.gg/6yrgRH6ATD">Discord
Community</a>** for support!

</Container>

<template v-if="selectedChain !== 42161">

## 🎁 Claim your Voucher

<div class="mb-6">
  <h3 class="text-xl font-semibold mb-2">What is a Voucher?</h3>
  <p>A Voucher is your all-in-one solution for iExec development to use iExec's technology, access to premium support, technical guidance and mentorship to help you build and monetize your projects. 🚀</p>
  <p>Claim your <strong>$20 voucher</strong> to kickstart your development journey. Want to learn more about [Voucher](https://www.iex.ec/voucher) ? 🎁</p>
</div>

<div class="mb-6">
  <p>Here's your unique coupon code based on your wallet address. You'll need to provide this code when claiming your voucher on Discord:</p>
  <ClientOnly>
    <CouponCode />
  </ClientOnly>
</div>

<Button as="a" href="https://www.iex.ec/voucher" target="_blank" data-track="claimVoucher">
  Claim your $20 voucher
</Button>

<br/>
<br/>

<Container variant="success">

Thank you for being part of the iExec journey! We can't wait to see what you'll
build next! 🚀

</Container>

</template>

<script setup>
import CouponCode from '@/modules/helloWorld/CouponCode.vue';
import Button from '@/components/ui/Button.vue';
import useUserStore from '@/stores/useUser.store';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'
import { computed } from 'vue';

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());
</script>
