---
title: What is Protected Data?
description:
  Learn about iExec's Protected Data - encrypted datasets that enable
  privacy-preserving computation. Understand DataProtector encryption, access
  controls, and secure data monetization.
---

<script setup>
import CardWithBorder from '@/components/CardWithBorder.vue';
import CardGrid from '@/components/CardGrid.vue';
import CardWithoutBorder from '@/components/CardWithoutBorder.vue';
import Container from '@/components/Container.vue';
</script>

# Protected Data

Protected Data refers to any data encrypted using the **iExec Data Protector
tool**. This Turnkey Privacy encryption solution enables users to protect,
manage and monetize their data within the Web3 ecosystem effortlessly.

::: tip <i></i>

Unlike standard datasets, Protected Data exposes its **data types on-chain**
(indicating types like email addresses or photos). This lets anyone **identify
entries with matching types**.

:::

## Key concepts

### Data governance

- **You own your data:** The original data never leaves your control
- **Granular permissions:** Decide who can access and use your data
- **Revocable access:** Grant and revoke permissions at any time

### Privacy-preserving Computation

- **Encrypted Processing:** Maintains a complete chain of trust.
- **TEE (Trusted Execution Environment):** Secure enclaves protect data during
  processing
- **Secret storage:** iExec's protocol secrets in a TEE database.

### Monetization

- **Data marketplaces:** Sell access to your protected data
- **Usage tracking:** Monitor how your data is being used
- **Fair compensation:** Get paid for data usage

## How it Works

<CardWithBorder>

1. **Protect:** Encrypt and register your data on the iExec network
2. **Share:** Authorize specific users and iApps to access your data
3. **Monitor:** Track usage and maintain control
4. **Monetize:** Earn from your data while keeping it private
5. **Compute:** Authorized users can compute on your data with authorized iApp

</CardWithBorder>

## Use cases

<CardGrid>
<CardWithoutBorder>
  
  ### Personal Data
  
  - Health records
  - Financial data
  - Personal preferences

</CardWithoutBorder>

<CardWithoutBorder>
  
  ### Business Intelligence
  - Market research
  - Customer analytics
  - Proprietary datasets

</CardWithoutBorder>

<CardWithoutBorder>
  
  ### AI Training
  - Training models without exposing sensitive data
  - Federated learning
  - Privacy-preserving ML

</CardWithoutBorder>

<CardWithoutBorder>
  
  ### Research
  - Collaborative research with privacy guarantees
  - Cross-institutional studies
  - Clinical trial data

</CardWithoutBorder>
</CardGrid>

<Container variant="success">

Ready to protect your data? Start with our **DataProtector guides**. Learn how
to secure sensitive information while unlocking its value.

</Container>

## Next steps

<CardWithoutBorder>

<!-- prettier-ignore -->
**Learn More:** [Complete DataProtector Documentation](/guides/manage-data/manage-access)

<!-- prettier-ignore -->
**Getting Started:** [DataProtector Quick Start Guide](/references/dataProtector/getting-started)

</CardWithoutBorder>
