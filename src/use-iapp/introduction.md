---
title: Introduction to Using iApps
description:
  Learn how to use iExec Applications (iApps) to securely process protected data
  in a privacy-safe environment
---

# 📝 Introduction to Using iApps

iExec Applications (iApps) are your gateway to secure, privacy-preserving
computation on the iExec network. These applications run inside Trusted
Execution Environments (TEEs) like Intel SGX or Intel TDX, ensuring your data
remains confidential even during processing.

## What are iApps?

iApps are regular applications (Python scripts, AI models, data processors,
etc.) that have been adapted to run securely on the iExec network. They can
process protected data without ever seeing the raw information, making them
perfect for scenarios where data privacy is crucial.

## Key Benefits

- **🔒 Privacy-First**: Your data never leaves the secure TEE environment
- **⚡ Trusted Execution**: Applications run in hardware-protected environments
- **🌐 Decentralized**: No single point of failure or control
- **💰 Cost-Effective**: Pay only for the computation you need
- **🔧 Developer-Friendly**: Use familiar programming languages and tools

## How iApps Work

1. **Data Protection**: Users protect their sensitive data using the
   [Data Protector](/manage-data/dataProtector/dataProtectorCore/protectData)
2. **Application Deployment**: Developers deploy their applications to the iExec
   network
3. **Secure Processing**: iApps process protected data inside TEEs without
   accessing raw data
4. **Result Delivery**: Only the computation results are returned, keeping
   original data private

## Use Cases

- **Email Notifications**: Send emails without seeing recipient addresses
- **Oracle Updates**: Update price feeds using private trading data
- **Automated Transactions**: Process payments with protected financial data
- **AI Model Training**: Train models on sensitive datasets
- **Data Analytics**: Analyze private data without exposing it

## Getting Started

Ready to start using iApps? Check out our
[Getting Started Guide](./getting-started.md) to learn how to find, execute, and
interact with iApps on the iExec network.
