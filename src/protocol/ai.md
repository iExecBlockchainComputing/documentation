---
title: AI Framework Support
description:
  Comprehensive guide to AI framework compatibility and support on the iExec
  platform
---

# 🤖 AI Framework Support

The iExec Platform provides comprehensive support for popular AI and machine
learning frameworks. Deploy confidential AI with ease. iExec supports popular
AI/ML frameworks, running in secure Trusted Execution Environments (TEEs) with
optimized configurations.

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

Trusted Execution Environments (TEEs) protect your AI models and data
end-to-end:

- **Data Privacy**: TEEs isolate AI computations in secure enclaves
- **Secure Training & Inference**: Unauthorized entities can never access your
  models and data
- **Hardware-Level Security**: Intel SGX and TDX provide enterprise-grade
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
- **Fair Pricing**: Blockchain verifies execution costs transparently
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
includes ready-to-use examples:

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

#### Important Considerations

- **SGX Limitations**: Expect potential library incompatibilities and code
  modifications
- **TDX Advantages**: Minimal code changes required ("lift and shift" approach)

## 📚 Next Steps

### Learn TEE Technologies

- **[Intel SGX Technology](/protocol/tee/intel-sgx)** - SGX limitations and
  capabilities
- **[Intel TDX Technology](/protocol/tee/intel-tdx)** - TDX advantages for AI
- **[SGX vs TDX Comparison](/protocol/tee/sgx-vs-tdx)** - Detailed comparison

### Build AI Applications

- **[Build & Test](/guides/build-iapp/build-&-test)** - Build and test your AI
  application
- **[Deploy & Run](/guides/build-iapp/deploy-&-run)** - Deploy and run your AI
  application
- **[Build Intel TDX App](/guides/build-iapp/advanced/build-your-first-tdx-iapp)** -
  TDX applications for AI workloads
- **[Inputs](/guides/build-iapp/inputs)** - Handle data inputs
- **[Outputs](/guides/build-iapp/outputs)** - Handle data outputs
  flow in TEE environment

### Explore Examples

- **[AI Frameworks Hello World](https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world)** -
  Ready-to-use Docker examples
- **[iExec Discord](https://discord.com/invite/pbt9m98wnU)** - Community support
