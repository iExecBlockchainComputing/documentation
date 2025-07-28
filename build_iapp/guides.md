---
title: iApp Building Guides
description:
  Step-by-step guides for building, deploying, and managing your privacy-first
  iApps
---

# 📖 iApp Building Guides

**Master iApp development from code to production** with these comprehensive
step-by-step guides. Each guide focuses on a specific aspect of building
privacy-preserving applications with iExec.

## Essential Guides

### 💰 [App Access Control and Pricing](/build_iapp/guides/orders)

**Control who can use your iApp and monetize it.** Learn how to create app
orders to make your iApp accessible while defining pricing and access
restrictions.

- Create and manage app orders with iExec SDK
- Configure pricing, volume limits, and restrictions
- Understand TEE requirements and workerpool restrictions
- Common monetization patterns and use cases

---

### 📥📤 [Inputs and Outputs](/build_iapp/guides/inputs-and-outputs)

**Handle data flow in your iApp's TEE environment.** Master the different input
types and learn how to generate proper outputs that users can retrieve.

- 4 input types: Args, Input Files, Requester Secrets, Protected Data
- Access methods via environment variables and file system
- TEE memory constraints and best practices
- Output structure with mandatory `computed.json`

---

### 🐛 [Debugging Your iApp](/build_iapp/guides/debugging-your-iapp)

**Troubleshoot and optimize your iApp execution in the TEE environment.** Master
debugging techniques and best practices for reliable iApp development.

- Task execution lifecycle and monitoring
- iExec Explorer and CLI debugging tools
- Common issues: timeouts, memory limits, input/output problems
- Best practices: input validation, error handling, performance optimization

---

### 📦 [How to Get and Decrypt Results](/build_iapp/guides/how-to-get-and-decrypt-results)

**Download and decrypt iApp execution results from completed tasks.** Learn the
complete workflow for retrieving and using iApp outputs.

- Deal → Task → Result structure and accessibility
- Download methods: iExec CLI and DataProtector SDK
- Automatic vs manual decryption workflows
- Integration patterns for React and Node.js applications

---

### 🛡️ [Using TDX (Experimental)](/build_iapp/guides/using-tdx-experimental)

**Enable Intel TDX for enhanced TEE security - experimental feature only.**
Understand how to activate TDX and when to use it.

- How to enable TDX in iApp Generator deployment and execution
- SGX vs TDX differences and compatibility requirements
- Protected data compatibility considerations
- Production warnings and experimental limitations

## Quick Navigation

::: tip What You'll Learn These guides cover the complete journey from iApp
development to production deployment, user access management, and result
handling. :::

### By Development Stage

- **🚀 Just built your iApp?** →
  [App Access Control and Pricing](/build_iapp/guides/orders)
- **🔧 Handling data flow?** →
  [Inputs and Outputs](/build_iapp/guides/inputs-and-outputs)
- **🐛 Having issues?** →
  [Debugging Your iApp](/build_iapp/guides/debugging-your-iapp)
- **📦 Need results?** →
  [How to Get and Decrypt Results](/build_iapp/guides/how-to-get-and-decrypt-results)

### By User Type

**iApp Developer**: You build the privacy-preserving application  
→ [Inputs and Outputs](/build_iapp/guides/inputs-and-outputs) +
[Debugging](/build_iapp/guides/debugging-your-iapp)

**App Owner**: You deploy and monetize the iApp  
→ [App Access Control and Pricing](/build_iapp/guides/orders)

**End User Guide**: Your users need to retrieve results  
→ [How to Get and Decrypt Results](/build_iapp/guides/how-to-get-and-decrypt-results)

## Development Workflow

### 1. **Build Your iApp**

Start with [iApp Generator](/build_iapp/iapp-generator) to create your
privacy-preserving application.

### 2. **Handle Data Flow**

Use the [Inputs and Outputs](/build_iapp/guides/inputs-and-outputs) guide to
properly access different input types and generate results.

### 3. **Debug and Test**

Follow the [Debugging](/build_iapp/guides/debugging-your-iapp) guide to
troubleshoot issues and optimize performance.

### 4. **Control Access**

Implement [App Access Control and Pricing](/build_iapp/guides/orders) to make
your iApp accessible with proper monetization.

### 5. **User Experience**

Implement [Result Retrieval](/build_iapp/guides/how-to-get-and-decrypt-results)
to provide users with seamless access to iApp outputs.

## Additional Resources

### 📚 **iApp Generator**

- [What Is an iApp?](/build_iapp/iapp-generator/what-is-iapp) - Core concepts
  and overview
- [Getting Started](/build_iapp/iapp-generator/getting-started) - Your first
  iApp in 15 minutes
- [Building Your iApp](/build_iapp/iapp-generator/building-your-iexec-app) -
  Complete development guide

### 🎯 **Real Examples**

- [Hello World Tutorial](/overview/helloWorld) - End-to-end iApp development
- [AI Use Cases](/overview/use-cases/ai) - AI-powered privacy applications

### 🔧 **Advanced Topics**

- [SDK Deep Dive](/deep_dive/sdk) - Advanced SDK concepts and usage
- [Workers & Workerpools](/deep_dive/workers) - Understanding the execution
  infrastructure

---

**Ready to build privacy-first applications?** Pick the guide that matches your
current development stage and start building! 🚀
