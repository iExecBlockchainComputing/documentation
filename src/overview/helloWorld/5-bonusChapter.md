---
title: Bonus Chapter
description:
  Explore additional features and advanced concepts in this bonus chapter of the
  Hello World tutorial series.
---

<script setup>
import CouponCode from '../../modules/helloWorld/CouponCode.vue';
import Button from '../../components/ui/Button.vue';
</script>

# 🎉 Bonus Chapter

> Reading time 🕒 4 mins

<div class="bg-gradient-to-r from-[#fcd15a] to-[#ffad4d] rounded-[6px] px-8 pb-4 text-gray-800 max-w-3xl mx-auto mb-6">
  <h2 class="text-2xl font-bold mt-0 border-none!">Congratulations!</h2>
  <p class="m-0!">You've successfully completed the Hello World journey and learned how to protect data, deploy iApps, and manage data access. Now it's time to claim your rewards! 🏆</p>
</div>

## 🏁 Any Questions?

<div class="flex flex-col md:flex-row items-center gap-8">
  <p class="flex-1">
    If you have any questions, please schedule an appointment with our DevRel team who will be happy to help!
    <br>
    <br>
    <a href="https://calendly.com/martin-leclercq-iexec/30min" target="_blank" class="text-fuchsia-700 underline hover:text-fuchsia-900">📅 Book a meeting</a>
  </p>
  <div class="flex-1 flex justify-center">
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenE3ZW42enUydnl5b2F3ZDcyNHZkdXF6bzFydjl6bmc4MzYydHRweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g9582DNuQppxC/giphy.gif" alt="Funny waiting animation" width="300" height="300" />
  </div>
</div>

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 my-6">
  <p class="m-0!">Need help setting up or got some questions? Join our <a target="_blank" href="https://discord.gg/6yrgRH6ATD" class="text-green-700 underline hover:text-green-900">Discord Community</a> for support!</p>
</div>

## 🎁 Claim your Voucher

<div class="mb-6">
  <h3 class="text-xl font-semibold mb-2">What is a Voucher?</h3>
  <p>A Voucher is your all-in-one solution for iExec development to use iExec's technology, access to premium support, technical guidance and mentorship to help you build and monetize your projects. 🚀</p>
  <p>Claim your <strong>$20 voucher</strong> to kickstart your development journey. Want to learn more about <a href="https://www.iex.ec/voucher" target="_blank" class="text-fuchsia-700 underline hover:text-fuchsia-900">Voucher</a> ? 🎁</p>
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

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 mt-8 mb-6">
  <p class="m-0!">Thank you for being part of the iExec journey! We can't wait to see what you'll build next! 🚀</p>
</div>
