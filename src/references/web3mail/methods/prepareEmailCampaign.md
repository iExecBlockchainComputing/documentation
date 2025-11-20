---
title: prepareEmailCampaign
description:
  Use the prepareEmailCampaign method from Web3Mail to prepare a bulk email
  campaign request. This method creates a bulk request that can be processed
  using sendEmailCampaign.
---

# prepareEmailCampaign

This method prepares a bulk email campaign by creating a bulk request that
groups multiple protected data items. The prepared campaign request can then be
sent using the
[`sendEmailCampaign`](/references/web3mail/methods/sendEmailCampaign) method.

::: info

This method is part of a two-step bulk campaign process:

1. **Prepare the campaign** using `prepareEmailCampaign` to create a bulk
   request
2. **Send the campaign** using `sendEmailCampaign` to process the bulk request

:::

## Usage

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);

// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Prepare the campaign
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  contentType: 'text/plain',
});
```

```ts twoslash [NodeJS]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Prepare the campaign
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  contentType: 'text/plain',
});
```

:::

## Parameters

```ts twoslash
import { type PrepareEmailCampaignParams } from '@iexec/web3mail';
```

### grantedAccesses <RequiredBadge />

**Type:** `GrantedAccess[]`

An array of `GrantedAccess` objects representing contacts who have granted you
access to their protected data with bulk processing capability.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray, // [!code focus]
  emailSubject: 'My subject',
  emailContent: 'My content',
});
```

### emailSubject <RequiredBadge />

**Type:** `string`

The email subject that will be sent to all recipients.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject', // [!code focus]
  emailContent: 'My email content',
});
```

### emailContent <RequiredBadge />

**Type:** `string`

**Maximum size:** `512 kb`

The email content that will be sent to all recipients. The content is encrypted
and stored in IPFS.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content', // [!code focus]
});
```

### contentType <OptionalBadge />

**Type:** `string | undefined`

**Default:** `'text/plain'`

The MIME type of the email content (e.g., `'text/plain'`, `'text/html'`).

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  contentType: 'text/html', // [!code focus]
});
```

### maxProtectedDataPerTask <OptionalBadge />

**Type:** `number | undefined`

**Default:** `100`

Limits the number of protected data items processed per task.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  maxProtectedDataPerTask: 10, // [!code focus]
});
```

### workerpoolAddressOrEns <OptionalBadge />

**Type:** `AddressOrENS | undefined`

**Default:** Default workerpool from chain configuration

The workerpool address or ENS name that will execute the bulk campaign tasks.
You can specify this during preparation or when sending the campaign.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolAddressOrEns: '0xa5de76...', // [!code focus]
});
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the workerpool provider for
using their infrastructure to run the Web3Mail app. You can specify this during
preparation or when sending the campaign.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### label <OptionalBadge />

**Type:** `string | undefined`

An optional label to identify or categorize the campaign.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  label: 'Newsletter Campaign', // [!code focus]
});
```

### dataMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay for accessing the protected
data.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  dataMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### appMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the Web3Mail app provider
for using the Web3Mail application.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  appMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type PrepareEmailCampaignResponse } from '@iexec/web3mail';
```

### campaignRequest

**Type:** `BulkRequest`

The prepared bulk request object that contains all the necessary information to
process the bulk campaign. This object should be passed to `sendEmailCampaign`
to execute the campaign.

```ts twoslash
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);
// Fetch contacts and prepare campaign
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});

// Use the campaignRequest to send the campaign
const { tasks } = await web3mail.sendEmailCampaign({
  campaignRequest: emailCampaign.campaignRequest, // [!code focus]
});
```

## Complete Example

Here's a complete example showing the two-step campaign process:

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
const web3mail = new IExecWeb3mail(web3Provider);

// Step 1: Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 2: Prepare the campaign
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'Hello from My Awesome App!',
  emailContent:
    'Hello! This is a bulk email sent to all recipients. Thank you for subscribing!',
  contentType: 'text/html',
  maxProtectedDataPerTask: 10,
});

// Step 3: Send the campaign
const { tasks } = await web3mail.sendEmailCampaign({
  campaignRequest: emailCampaign.campaignRequest,
});
```

```ts twoslash [NodeJS]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

// Step 1: Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 2: Prepare the campaign
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'Hello from My Awesome App!',
  emailContent:
    'Hello! This is a bulk email sent to all recipients. Thank you for subscribing!',
  contentType: 'text/html',
  maxProtectedDataPerTask: 10,
});

// Step 3: Send the campaign
const { tasks } = await web3mail.sendEmailCampaign({
  campaignRequest: emailCampaign.campaignRequest,
});
```

:::

## Related Documentation

- [sendEmailCampaign Method](/references/web3mail/methods/sendEmailCampaign) -
  Send a prepared bulk campaign

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue';
import OptionalBadge from '@/components/OptionalBadge.vue';
</script>
