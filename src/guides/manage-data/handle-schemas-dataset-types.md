---
title: Handle Schemas and Dataset Types
description:
  Learn how schemas work in DataProtector and how to use them in your iApps
---

# 🏷️ Handle Schemas and Dataset Types

**Schemas are like content labels that describe what's inside your protected
data.**

They define the structure and types of your data automatically when you protect
it, making it easy for iApps to know what they're working with.

Think of schemas as **data fingerprints** - they tell iApps "this protected data
contains an email address and a phone number" without revealing the actual
values.

## How Schemas Work

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

The schema automatically maps your data structure to types that iApps can
understand and validate.

:::

## Supported Data Types

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

## Why Schemas Matter

- **Clarity**: Makes your data easier to understand and reuse
- **Safety**: Ensures iExec apps don’t process the wrong data
- **Structure**: Facilitates structured communication between **front-end and
  iApp logic**

### 🎯 **For iApp Development**

Schemas let your iApps validate and process data safely:

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

Prevents your iApps from processing incompatible data types.

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

## Real Examples

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

## Using Schemas in iApps

Once you have protected data with a schema, you'll want to process it inside an
iApp.

::: warning Type Matching

**Your iApp and frontend must use the same field names and types.** If they
don't match, you'll get runtime errors when processing the data.

:::

→ **Ready to build an iApp?** Check out our detailed
[Inputs and Outputs guide](/guides/build-iapp/inputs-and-outputs) to learn how
to access schema fields inside your iApp using the deserializer.

## Next Steps

**You now understand how schemas work with protected data.** Here's what to
explore next:

- **Build an iApp**: Check out the
  [iApp Generator guide](/references/iapp-generator) to create your first data
  processor
- **Process data**: Learn about
  [processProtectedData](/references/dataProtector/dataProtectorCore/processProtectedData)
  for running computations
- **See it in action**: Try our
  [Hello World tutorial](/get-started/helloWorld) for a complete example
