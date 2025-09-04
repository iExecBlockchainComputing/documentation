---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Build with iExec’s Privacy Stack '
  tagline:
    'Build decentralized applications that combine data governance, privacy, and
    monetization.'
  image:
    src: /iexec-illustration-large.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /get-started/welcome
    - theme: alt
      text: Hello World Tutorial
      link: /get-started/helloWorld

features:
  - icon: <img src="/icon_quick_start.svg" />
    title: Quick Start
    details: Jump in and start building on iExec in minutes.
    link: /get-started/helloWorld
  - icon: <img src="/icon_protect_and_manage data.svg" />
    title: Protect & Manage Data
    details:
      DataProtector encrypts and allows you to control access to your sensitive
      data. Ready-to-use privacy toolkit for developers.
    link: /guides/manage-data/manage-access
  - icon: <img src="/icon_build_app.svg" />
    title: Build iApp
    details:
      iApp Generator builds confidential applications that run in secure TEEs.
      Custom confidentiality integration without managing infrastructure.
    link: /guides/build-iapp/build-&-test
  - icon: <img src="/icon_use_iapps.svg" />
    title: Use iApp
    details:
      Execute privacy-preserving apps like Web3Mail and Web3Telegram. Use what
      others built, extend what you need.
    link: /guides/use-iapp/introduction
  - icon: <img src="/icon_monetize_data.svg" />
    title: Monetize Data
    details:
      Create revenue streams from your data while maintaining full control and
      privacy
    link: /guides/manage-data/monetize-protected-data
  - icon: <img src="/icon_protocol.svg" />
    title: Protocols
    details:
      Deep dive into core protocol concepts. Understand how iExec enables
      privacy, governance, and monetization.
    link: /protocol/proof-of-contribution
---
