---
description: >-
  A workerpool manager is an essential actor in the iExec network. It will be in charge of proposing available computing resources (workers) to task requesters.
---

# Manage a workerpool

An iExec workerpool is orchestrated by an _iExec Core Scheduler_. The _iExec Core Scheduler_ watches on-chain deals and schedules off-chain computation among available workers.

![My Workerpool Dashboard](../.gitbook/assets/my-workerpool-dashboard.png)

## Deploy a workerpool

You can deploy your own workerpool on iExec with [this repository](https://github.com/iExecBlockchainComputing/deploy-workerpool). Be sure to check a particular [release](https://github.com/iExecBlockchainComputing/deploy-workerpool/releases) before starting your deployment.

## Manage a workerpool orders

Orders enable setting custom governance for resources.

Here you will learn how to manage your workerpool's rules.

### Publish a workerpool order

Initialize a workerpool order

```bash
iexec order init --workerpool
```

Edit the `workerpoolorder` part in `iexec.json` to set the conditions to use your workerpool.

| key | description |
| --- | --- |
| `workerpool` | workerpool address |
| `workerpoolprice` | price to charge the requester for each execution of the app (in nRLC) |
| `volume` | number of authorized uses, each use decreases this number |
| `tag` | restrict usage to a specific runtime such as `gpu` or `tee`. The latter requires to define either `scone` or `gramine` bit to specify the TEE framework and should not be used alone (1) |
| `category` | Order category, will define the deal `workClockTimeRef` and its deadlines |
| `trust` | Trust level of the execution, impacts the number of replicates |
| `apprestrict` | restrict the workerpool usage to a specifig app (2) |
| `datasetrestrict` | restrict the workerpool usage to a specific dataset (2) |
| `requesterrestrict` | restrict the workerpool usage to a specific requester (2) |

1. See [tag](../key-concepts/proof-of-contribution.md#tag)
2. the restriction is disabled by default with 0x0000000000000000000000000000000000000000.

As described in [tag](../key-concepts/proof-of-contribution.md#tag), a workerpool will only accept app, dataset and request order tags' combinations matching its own tag. With the current tag specifications, it is mandatory to properly define the `workerpoolorder`'s tag.

| Tag value | Description |
| --- | --- |
| `0x0000000000000000000000000000000000000000000000000000000000000000` | Order for the execution of a standard task |
| `0x0000000000000000000000000000000000000000000000000000000000000003` | Order for the execution of a TEE task with Scone framework |
| `0x0000000000000000000000000000000000000000000000000000000000000005` | Order for the execution of a TEE task with Gramine framework |

{% hint style="warning" %}

1. Do not publish order with the `tee`,`scone` and `gramine` tag bits enabled. Such an order could match a TEE Gramine task with a Standard dataset and a TEE Scone request. This would produce an unpredictable behavior.
2. Currently, TEE workflow do not support tasks replication on several workers. TEE workerpool orders must be published with `trust` value equal to `0` or `1`.

{% endhint %}

{% hint style="info" %} For more information on orders, see [Orders description](../key-concepts/proof-of-contribution.md#orders-description). {% endhint %}

When you are happy with your `workerpoolorder` sign it and publish it

```bash
iexec order sign --workerpool && iexec order publish --workerpool
```

## Remove an order from iExec Marketplace

List the published orders for your app.

```bash
iexec orderbook workerpool <your workerpool address>
```

Copy the `orderHash` of the order you want to remove

Unpublish the `workerpoolorder` from the iExec Marketplace

```bash
iexec order unpublish --workerpool <orderHash>
```

An unpublished order is still valid on the blockchain, to invalidate it use the cancel command.

```bash
iexec order cancel --workerpool <orderHash>
```
