---
title: Deserialize a ProtectedData
description:
  Learn how to deserialize protected data in your iApp using the
  @iexec/dataprotector-deserializer utility package for accessing authorized
  data.
---

# Deserialize a ProtectedData

If you want to build your own iApp (iExec TEE Dapp), you may need to access
protected data that your wallet and iApp are authorized to use. To achieve this,
you must deserialize the content of the protected data with the expected data
schema.

To simplify this process, you can use the lightweight utility package,
`@iexec/dataprotector-deserializer`, in your iApp. This package streamlines the
deserialization of protected data, making it easy for you to access and use the
information securely.

## Overview

This deserializer is built on the
[Borsh technical specification](https://borsh.io/). iExec developed this
JavaScript library to simplify deserialization in your iApp built with
JavaScript.

::: warning

If you want to build your iApp in another language, you need to know how to
deserialize a protected data.

Under the hood, protected data are **zip files** replicating the tree structure
of the original data object. iExec's protocol stores each value in a dedicated
file, the system stores binary values as is while it handles boolean, numbers,
and strings serialized with Borsh.

To access a value from a protected data, your app will need to unzip the iExec
dataset file at `$IEXEC_IN/$IEXEC_DATASET_FILENAME`. Then for `'bool'`, `'f64'`,
`'i128'` or `'string'` types, use the Borsh deserialization specification to
recover the original value. Borsh has
[implementations in various languages](https://github.com/near/borsh#implementations),
check your favorite one.

:::

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 14 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/dataprotector-deserializer
```

```sh [yarn]
yarn add @iexec/dataprotector-deserializer
```

```sh [pnpm]
pnpm add @iexec/dataprotector-deserializer
```

```sh [bun]
bun add @iexec/dataprotector-deserializer
```

:::

### Instantiate SDK

```ts twoslash [NodeJS]
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
```
