# Manage your apporders

Orders enable setting custom governance for resources.

Here you will learn how to manage your application's rules.

## Publish a custom apporder

Initialize an apporder

```bash
iexec order init --app
```

Edit the `apporder` part in `iexec.json` to set the conditions to use your app

| key | description |
| --- | --- |
| `app` | app address |
| `appprice` | price to charge the requester for each execution of the app (in nRLC) |
| `volume` | number of authorized uses, each use decreases this number |
| `tag` | restrict usage to specific runtime such as `tee` or `gpu` (1) |
| `datasetrestrict` | restrict to use the app with a specific dataset (2) |
| `workerpoolrestrict` | restrict to run the app on a specific workerpool (2) |
| `requesterrestrict` | restrict the app usage to a specific requester (2) |

1. See [tag](../../key-concepts/proof-of-contribution.md#tag)
2. the restriction is disabled by default with 0x0000000000000000000000000000000000000000

The supported tags for application orders are:

| Tag value | Description |
| --- | --- |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Standard task |
| 0x0000000000000000000000000000000000000000000000000000000000000003 | TEE task with Scone framework |
| 0x0000000000000000000000000000000000000000000000000000000000000005 | TEE task with Gramine framework |

{% hint style="info" %} For more information on orders, see [Orders description](../../key-concepts/proof-of-contribution.md#orders-description). {% endhint %}

When you are happy with your `apporder` sign it and publish it

```bash
iexec order sign --app && iexec order publish --app
```

## Remove an order from iExec Marketplace

List the published orders for your app.

```bash
iexec orderbook app <your app address>
```

Copy the `orderHash` of the order you want to remove

Unpublish the `apporder` from the iExec Marketplace

```bash
iexec order unpublish --app <orderHash>
```

An unpublished order is still valid on the blockchain, to invalidate it use the cancel command.

```bash
iexec order cancel --app <orderHash>
```
