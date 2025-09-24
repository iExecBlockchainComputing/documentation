---
title: Getting Started
description:
  Learn how to set up and start using the iApp Generator with prerequisites,
  installation, and first steps.
---

# 🛠 Getting Started

## 🕕 Prerequisites

Before using the iApp Generator, make sure you have:

<div class="flex flex-col gap-2 my-4 pl-0">
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      📦 Node.js v20+ (for javascript iApps)
    </div>
    <a target="_blank" href="https://nodejs.org/en/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐍 Python 3.8+ (for Python iApps)
    </div>
    <a target="_blank" href="https://www.python.org/downloads/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 Docker installed
    </div>
    <a target="_blank" href="https://docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
  
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 DockerHub Account
    </div>
    <a target="_blank" href="https://hub.docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Sign Up →</a>
  </div>
</div>

::: tip 🔍 Verify Docker Compatibility

```bash
docker buildx inspect --bootstrap | grep -i platforms
```

If `linux/amd64` is not listed, **update your Docker installation.**

:::

### 📦 Installation

::: code-group

```sh [npm]
npm install -g @iexec/iapp
```

```sh [yarn]
yarn global add @iexec/iapp
```

```sh [pnpm]
pnpm add -g @iexec/iapp
```

```sh [bun]
bun add -g @iexec/iapp
```

:::

Once installed, generate the auto-completion script and add it to your shell by
following the instructions:

```bash
iapp completion
```
