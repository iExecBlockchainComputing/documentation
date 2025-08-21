---
title: Advanced Configuration
description:
  Explore the advanced configuration options for integrating Web3Telegram. Learn
  how to customize the iApp address, whitelist, subgraph, IPFS node, and more
  for secure Telegram communication on the iExec blockchain.
---

# Advanced Configuration

The `IExecWeb3Telegram` constructor accepts configuration options object. As
these options are very specific, you won't need to use them for a standard usage
of `@iexec/web3telegram`.

## Parameters

```ts twoslash
import { type Web3TelegramConfigOptions } from '@iexec/web3telegram';
```

### dappAddressOrENS

The Ethereum contract address or ENS (Ethereum Name Service) for the
web3telegram iApp.

If not provided, the default ENS web3telegram iApp provided by iExec will be
used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappAddressOrENS: '0x456def...', // [!code focus]
});
```

### dappWhitelistAddress

The Ethereum contract address for the web3telegram iApp whitelist. By granting
access to a whitelist, Chat Id owners ensure their Chat Id is still available to
consumers even after a new version of web3telegram iApp gets released.

If not provided, the default whitelist smart contract address provided by iExec
will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappWhitelistAddress: '0x456def...', // [!code focus]
});
```

### dataProtectorSubgraph

The subgraph URL for querying data.

If not provided, the default data protector subgraph provided by iExec will be
used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dataProtectorSubgraph: 'subgraph-url', // [!code focus]
});
```

### ipfsNode

The IPFS node URL for content uploads. Use this option if you want to use your
own IPFS node to upload content.

If not provided, the default IPFS node provided by iExec will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsNode: 'ipfs-node-url', // [!code focus]
});
```

### ipfsGateway

The IPFS gateway URL used for content downloads. Mainly used for checking
content uploaded on the IPFS network. Use this option if you want to use your
own IPFS node for content downloads.

If not provided, the default IPFS gateway provided by iExec will be used.

```ts twoslash
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsGateway: 'ipfs-gateway-url', // [!code focus]
});
```

### iexecOptions

Low level configuration options for `iexec` SDK, see
[iexec SDK documentation IExecConfigOptions](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md)
for more details.
