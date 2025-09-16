---
title: Handle Schemas and Dataset Types
description:
  Learn how schemas work in DataProtector and how to use them in your iApp
---

# 🏷️ Handle Schemas and Dataset Types

**Schemas are like content labels that describe what's inside your protected
data.**

They define the structure and types of your data automatically when you protect
it, making it easy for iApp to know what they're working with.

Think of schemas as **data fingerprints** - they tell iApp "this protected data
contains an email address and a phone number" without revealing the actual
values.

Use the
<a :href="`${explorerUrl}/datasets`" target="_blank" rel="noopener">iExec
explorer</a> to browse protected data and see their asset types. Make filtered
searches based on schema to find data that fits your needs.

## How schemas work

When you protect data with DataProtector, the SDK automatically analyzes your
JSON object and generates a schema. **No manual schema definition needed** -
it's all handled for you.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'User Contact',
  data: {
    email: 'alice@example.com',
    phoneNumber: '+1234567890',
    preferences: {
      newsletter: true,
      notifications: false,
    },
  },
});

console.log('✅ Protected data created!');
console.log('📍 Address:', protectedData.address);
```

**🏷️ Generated Schema:**

```json
{
  "email": "string",
  "phoneNumber": "string",
  "preferences": {
    "newsletter": "bool",
    "notifications": "bool"
  }
}
```

::: info Schema Structure

The schema automatically maps your data structure to types that iApp can
understand and validate.

:::

## Supported data types

The schema automatically detects these types:

| Type                            | Description    | Example               |
| ------------------------------- | -------------- | --------------------- |
| `string`                        | Text data      | `"alice@example.com"` |
| `bool`                          | Boolean values | `true`, `false`       |
| `f64`                           | Numbers        | `42`, `3.14`          |
| `i128`                          | Big integers   | `BigInt(123456789)`   |
| `application/octet-stream`      | Binary data    | File contents         |
| `image/jpeg`, `image/png`, etc. | Media files    | Images, videos        |

::: tip Auto-Detection

The SDK automatically detects file types based on content. No need to specify
MIME types manually.

:::

Use the
<a :href="`${explorerUrl}/datasets`" target="_blank" rel="noopener">iExec
explorer</a> and its advanced filter to find datasets matching your required
asset type. The explorer provides a powerful filtering system that lets you
search for protected data based on their schema structure.

<ImageViewer
  :image-url-dark="assetTypesAdvanceFilterViewImage"
  image-alt="asset Types Advance Filter View"
  :link-url="`${explorerUrl}/datasets`"
  caption="Explore Asset Types Filter"
/>

**How to use the asset type filter:**

1. **Select asset type criteria** - Choose from predefined types and enter the
   field names
2. **Apply multiple filters** - Combine asset type filters with other criteria
   like date range, owner, or tags
3. **Browse matching datasets** - View only the protected data that matches your
   schema requirements

This filtering capability is essential when building iApps that need specific
data structures. For example, if your iApp processes user profiles, you can
filter for datasets containing `email: string` and `age: f64` fields to ensure
compatibility.

## Why schemas matter

- **Clarity**: Makes your data easier to understand and reuse
- **Safety**: Ensures iExec apps don’t process the wrong data
- **Structure**: Facilitates structured communication between **front-end and
  iApp logic**

### 🎯 **For iApp Development**

Schemas let your iApp validate and process data safely:

```ts twoslash
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---
// Inside your iApp
const email = await deserializer.getValue('email', 'string');
const preferences = await deserializer.getValue(
  'preferences.newsletter',
  'bool'
);
```

### 🛡️ **For Type Safety**

Prevents your iApp from processing incompatible data types.

### 🔍 **For Data Discovery**

Users can find relevant protected data without seeing the actual content:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  requiredSchema: {
    email: 'string',
  },
});
```

## Real examples

For real-world applications built by developers using various asset types, check out the [iExec case studies](https://www.iex.ec/case-studies) to see how schemas are used in production environments.

### Simple User Profile

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const userData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
    age: 25,
    isSubscribed: true,
  },
});
```

**🏷️ Generated Schema:**

```json
{
  "email": "string",
  "age": "f64",
  "isSubscribed": "bool"
}
```

### Nested Contact Information

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const contactData = await dataProtectorCore.protectData({
  data: {
    personal: {
      firstName: 'Alice',
      lastName: 'Smith',
    },
    contact: {
      email: 'alice@example.com',
      phone: '+1234567890',
    },
    preferences: {
      marketing: false,
      notifications: true,
    },
  },
});
```

**🏷️ Generated Schema:**

```json
{
  "personal": {
    "firstName": "string",
    "lastName": "string"
  },
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "preferences": {
    "marketing": "bool",
    "notifications": "bool"
  }
}
```

### File Data

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

// Mock function for the example
function createArrayBufferFromFile(file: File): Promise<ArrayBuffer> {
  return Promise.resolve(new ArrayBuffer(0));
}

// Get file from input element
const file = new File([''], 'example.jpg', { type: 'image/jpeg' });

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const fileBuffer = await createArrayBufferFromFile(file);

const fileData = await dataProtectorCore.protectData({
  data: {
    fileName: file.name,
    fileContent: fileBuffer,
    uploadDate: Date.now(),
  },
});
```

**🏷️ Schema for file upload:**

```json
{
  "fileName": "string",
  "fileContent": "image/jpeg",
  "uploadDate": "f64"
}
```

## Using schemas in iApp

Once you have protected data with a schema, you'll want to process it inside an
iApp.

::: warning Type Matching

**Your iApp and frontend must use the same field names and types.** If they
don't match, you'll get runtime errors when processing the data.

:::

→ **Ready to build an iApp?** Check out our detailed
[Inputs guide](/guides/build-iapp/inputs) to learn how to access schema fields
inside your iApp using the deserializer.

## Next steps

**You now understand how schemas work with protected data.** Here's what to
explore next:

- **Build an iApp**: Check out the
  [iApp Generator guide](/references/iapp-generator) to create your first data
  processor
- **Process data**: Learn about
  [processProtectedData](/references/dataProtector/dataProtectorCore/processProtectedData)
  for running computations
- **See it in action**: Try our [Hello World tutorial](/get-started/helloWorld)
  for a complete example

<script setup>
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';
import ImageViewer from '@/components/ImageViewer.vue';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);

// Assets
import assetTypesAdvanceFilterViewImage from '@/assets/tooling-&-explorers/iexec-explorer/asset-types-advance-filter.png';
</script>
