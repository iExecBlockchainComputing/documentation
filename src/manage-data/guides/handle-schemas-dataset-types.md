---
title: Handle Schemas and Dataset Types
description:
  Learn how schemas work in DataProtector and how to use them in your iApps
---

# 🏷️ Handle Schemas and Dataset Types

**Schemas are like TypeScript for your protected data.** They define the
structure and types of your data automatically when you protect it, making it
easy for iApps to know what they're working with.

Think of schemas as **data labels** - they tell iApps "this protected data
contains an email address and a phone number" without revealing the actual
values.

## How Schemas Work

When you protect data with DataProtector, the SDK automatically analyzes your
JSON object and generates a schema. **No manual schema definition needed** -
it's all handled for you.

```ts
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

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

// The schema is automatically generated:
console.log(protectedData.schema);
/* Output:
{
  email: 'string',
  phoneNumber: 'string', 
  preferences: {
    newsletter: 'bool',
    notifications: 'bool'
  }
}
*/
```

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

::: tip Auto-Detection The SDK automatically detects file types based on
content. No need to specify MIME types manually. :::

## Why Schemas Matter

### 🎯 **For iApp Development**

Schemas let your iApps validate and process data safely:

```js
// Inside your iApp
const email = await deserializer.getValue('email', 'string');
const preferences = await deserializer.getValue(
  'preferences.newsletter',
  'bool'
);
```

### 🔍 **For Data Discovery**

Users can find relevant protected data without seeing the actual content:

```ts
// Find all protected data with email addresses
const query = { schema: { email: 'string' } };
// Returns metadata only, no actual emails revealed
```

### 🛡️ **For Type Safety**

Prevents your iApps from processing incompatible data types.

## Real Examples

### Simple User Profile

```ts
const userData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
    age: 25,
    isSubscribed: true,
  },
});
// Schema: { email: 'string', age: 'f64', isSubscribed: 'bool' }
```

### Nested Contact Information

```ts
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
// Schema reflects the full nested structure
```

### File Data

```ts
import { createArrayBufferFromFile } from '@iexec/dataprotector';

const file = document.getElementById('fileInput').files[0];
const fileBuffer = await createArrayBufferFromFile(file);

const fileData = await dataProtectorCore.protectData({
  data: {
    fileName: file.name,
    fileContent: fileBuffer,
    uploadDate: Date.now(),
  },
});
// Schema: { fileName: 'string', fileContent: 'image/jpeg', uploadDate: 'f64' }
```

## Using Schemas in iApps

Once you have protected data with a schema, you'll want to process it inside an
iApp.

::: warning Type Matching **Your iApp and frontend must use the same field names
and types.** If they don't match, you'll get runtime errors when processing the
data. :::

→ **Ready to build an iApp?** Check out our detailed
[Inputs and Outputs guide](/build_iapp/guides/inputs-and-outputs) to learn how
to access schema fields inside your iApp using the deserializer.

## Next Steps

**You now understand how schemas work with protected data.** Here's what to
explore next:

- **Build an iApp**: Check out the
  [iApp Generator guide](/build_iapp/iapp-generator) to create your first data
  processor
- **Process data**: Learn about
  [processProtectedData](/manage-data/dataProtector/dataProtectorCore/processProtectedData)
  for running computations
- **See it in action**: Try our [Hello World tutorial](/overview/helloWorld) for
  a complete example

---

**TL;DR**: Schemas = auto-generated data labels. Frontend protects data → Schema
describes structure → iApp uses schema to access fields safely. Match your field
names and types between frontend and iApp! 🏷️
