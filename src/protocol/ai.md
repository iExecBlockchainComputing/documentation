---
title: iExec for AI
description:
  How iExec helps develop, deploy and execute confidential AI applications with
  framework support
---

# 🧠 iExec for AI

The iExec Platform delivers powerful tools specifically for AI developers.
Build, deploy, and execute confidential AI applications with enterprise-grade
security and decentralized infrastructure.

## 🚀 Quick Start

**Want to get started immediately?**

- 📚
  **[AI Frameworks Hello World](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world)** -
  Ready-to-use Docker examples for TensorFlow, PyTorch, and more
- 🛠️ **[Build & Deploy](/guides/build-iapp/build-&-deploy)** - General iApp
  development guide (not AI-specific)
- 🔬
  **[TDX App Guide](/guides/build-iapp/advanced/create-your-first-tdx-app)** -
  Build TDX applications (works well for AI workloads)

## 🛡️ Why iExec for AI?

### Confidential Computing

Your AI models and data are protected end-to-end using Trusted Execution
Environments (TEEs):

- **Data Privacy**: AI computations are encrypted throughout processing
- **Secure Training & Inference**: Models and data can never be accessed by
  unauthorized entities
- **Hardware-Level Security**: Intel SGX and TDX provide military-grade
  protection

### AI Monetization

Monetize your AI assets easily and securely:

- **Datasets**: Encrypt and sell access to your training data
- **Models**: Deploy and monetize your trained AI models
- **Agents**: Create and sell AI agents and applications
- **Ownership Preserved**: Your digital assets always remain yours

### Decentralized Infrastructure

Scale AI applications without centralized cloud dependencies:

- **On-Demand Compute**: Access powerful resources when you need them
- **Fair Pricing**: Transparent, blockchain-verified execution costs
- **Global Network**: Deploy across a worldwide network of secure workers

## 🤖 AI Framework Support

### Overview

| Framework        | TDX Support     | SGX Support     | Best For                      |
| ---------------- | --------------- | --------------- | ----------------------------- |
| **TensorFlow**   | ✅ Yes (3.01GB) | ❌ No           | Deep learning, production ML  |
| **PyTorch**      | ✅ Yes (6.44GB) | ❌ No           | Research, computer vision     |
| **Scikit-learn** | ✅ Yes (1.18GB) | ✅ Yes (1.01GB) | Traditional ML, data analysis |
| **OpenVINO**     | ✅ Yes (1.82GB) | ❌ No           | Computer vision, inference    |
| **NumPy**        | ✅ Yes (1.25GB) | ✅ Yes (1.08GB) | Scientific computing          |
| **Matplotlib**   | ✅ Yes (1.25GB) | ✅ Yes (1.08GB) | Data visualization            |

### Framework Details

| Framework        | Version     | Description                                   | TDX Support | SGX Support         | Use Cases                              | Resources                                                                                                                                                                                                                           |
| ---------------- | ----------- | --------------------------------------------- | ----------- | ------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TensorFlow**   | 2.19.0      | Google's ML framework for production AI       | ✅ 3.01GB   | ❌ Too large        | Deep learning, CV, NLP                 | [Docs](https://www.tensorflow.org/) • [Quickstart](https://www.tensorflow.org/tutorials/quickstart/beginner) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/tensorflow)                 |
| **PyTorch**      | 2.7.0+cu126 | Facebook's research-focused DL framework      | ✅ 6.44GB   | ❌ Too large        | Research, DL, CV, NLP                  | [Docs](https://pytorch.org/docs/) • [Quickstart](https://docs.pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/pytorch)   |
| **Scikit-learn** | 1.6.1       | Comprehensive ML library for Python           | ✅ 1.18GB   | ✅ 1.01GB           | Classification, regression, clustering | [Docs](https://scikit-learn.org/stable/) • [Examples](https://scikit-learn.org/stable/auto_examples/index.html) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/scikit)                  |
| **OpenVINO**     | 2024.6.0    | Intel's high-performance AI inference toolkit | ✅ 1.82GB   | ❌ Execution issues | Computer vision, inference             | [Docs](https://docs.openvino.ai/) • [Tutorial](https://docs.openvino.ai/2023.3/notebooks/004-hello-detection-with-output.html) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/openvino) |
| **NumPy**        | 2.0.2       | Fundamental package for scientific computing  | ✅ 1.25GB   | ✅ 1.08GB           | Scientific computing, data analysis    | [Docs](https://numpy.org/doc/) • [User Guide](https://numpy.org/doc/stable/user/index.html) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/numpy)                                       |
| **Matplotlib**   | 3.9.4       | Comprehensive library for data visualization  | ✅ 1.25GB   | ✅ 1.08GB           | Data visualization, plotting           | [Docs](https://matplotlib.org/) • [Gallery](https://matplotlib.org/stable/gallery/index.html) • [Docker](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world/tree/main/matplotlib)                                |

## 🐳 Getting Started with Docker Examples

### What's Included

Our
[AI Frameworks Hello World repository](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world)
provides ready-to-use examples:

```
ai-frameworks-hello-world/
├── tensorflow/     # TensorFlow 2.19.0 example
├── pytorch/        # PyTorch 2.7.0+cu126 example
├── scikit/         # Scikit-learn 1.6.1 example
├── openvino/       # OpenVINO 2024.6.0 example
├── numpy/          # NumPy 2.0.2 example
└── matplotlib/     # Matplotlib 3.9.4 example
```

### Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world.git
cd ai-frameworks-hello-world

# Try TensorFlow example
cd tensorflow
docker build -t hello-tensorflow .
docker run --rm hello-tensorflow

# Try PyTorch example
cd ../pytorch
docker build -t hello-pytorch .
docker run --rm hello-pytorch
```

### Features

- **✅ Isolated Testing**: Each framework runs in its own container
- **✅ Reproducible**: Consistent environment across systems
- **✅ TDX Ready**: All containers tested for Intel TDX compatibility
- **✅ Easy Deployment**: Simple build and run commands

## 📊 Technology Comparison

### TDX vs SGX for AI

| Feature               | Intel TDX                  | Intel SGX                          |
| --------------------- | -------------------------- | ---------------------------------- |
| **Memory Limit**      | Multi-GB+                  | ~1.95GB                            |
| **Framework Support** | All major frameworks       | Limited (Scikit-learn, NumPy)      |
| **Code Changes**      | Minimal ("lift and shift") | Significant modifications required |
| **Production Ready**  | ✅ Yes                     | ⚠️ Limited                         |
| **AI Workloads**      | ✅ Excellent               | ❌ Restricted                      |

### Recommendations

#### For Production AI Applications

- **Use TDX** for TensorFlow, PyTorch, and OpenVINO
- **Use SGX** for lightweight ML with Scikit-learn and NumPy

#### For Development and Testing

- **Start with SGX** for simple ML tasks
- **Migrate to TDX** for complex AI workloads

## 📚 Next Steps

### Learn TEE Technologies

- **[Intel SGX Technology](/get-started/protocol/tee/intel-sgx)** - SGX
  limitations and capabilities
- **[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** - TDX
  advantages for AI
- **[SGX vs TDX Comparison](/get-started/protocol/tee/sgx-vs-tdx)** - Detailed
  comparison

### Build AI Applications

- **[Build & Deploy](/guides/build-iapp/build-&-deploy)** - Create your first AI
  application
- **[Build Intel TDX App](/guides/build-iapp/advanced/create-your-first-tdx-app)** -
  TDX applications for AI workloads
- **[Inputs and Outputs](/guides/build-iapp/inputs-and-outputs)** - Handle data
  flow in TEE environment

### Explore Examples

- **[AI Frameworks Hello World](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world)** -
  Ready-to-use Docker examples
- **[iExec Discord](https://discord.com/invite/pbt9m98wnU)** - Community support
- **[Protocol Documentation](https://protocol.docs.iex.ec)** - Technical deep
  dive
