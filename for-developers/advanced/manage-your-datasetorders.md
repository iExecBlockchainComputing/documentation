# Manage your datasetorders

Orders enable setting custom governance for resources.

Here you will learn how to manage your dataset's rules.

## Publish a custom datasetorder

Initialize a datasetorder

```bash
iexec order init --dataset
```

Edit the `datasetorder` part in `iexec.json` to set the conditions to use your dataset

| key | description |
| --- | --- |
| `dataset` | dataset address |
| `datasetprice` | price to charge the requester for each use of the dataset (in nRLC) |
| `volume` | number of authorized uses, each use decreases this number |
| `tag` | restrict usage to specific runtime such as `tee` or `gpu` (1) |
| `apprestrict` | restrict to use the dataset with a specific app (2) |
| `workerpoolrestrict` | restrict to use the dataset on a specific workerpool (2) |
| `requesterrestrict` | restrict the dataset usage to a specific requester (2) |

1. See [tag](../../key-concepts/proof-of-contribution.md#tag)
2. the restriction is disabled by default with 0x0000000000000000000000000000000000000000

The supported tags for dataset orders are:

| Tag value | Description |
| --- | --- |
| `0x0000000000000000000000000000000000000000000000000000000000000000` | No specific feature. Beware, such orders can be matched in TEE workerpools orders. |
| `0x0000000000000000000000000000000000000000000000000000000000000003` | Encrypted dataset for TEE task with Scone framework |

{% hint style="warning" %} TEE tasks with Gramine framework do not support datasets. Do not publish dataset orders with the `tee` and `gramine` tag bits enabled. {% endhint %}

{% hint style="info" %} For more information on orders, see [Orders description](../../key-concepts/proof-of-contribution.md#orders-description). {% endhint %}

When you are happy with your `datasetorder` sign it and publish it

```bash
iexec order sign --dataset && iexec order publish --dataset
```

## Remove an order from iExec Marketplace

List the published orders for your dataset.

```bash
iexec orderbook dataset <your dataset address>
```

Copy the `orderHash` of the order you want to remove

Unpublish the `datasetorder` from the iExec Marketplace

```bash
iexec order unpublish --dataset <orderHash>
```

An unpublished order is still valid on the blockchain, to invalidate it use the cancel command.

```bash
iexec order cancel --dataset <orderHash>
```
