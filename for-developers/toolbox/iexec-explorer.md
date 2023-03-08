# iExec explorer

The iExec explorer is a high level protocol explorer that allow to quickly browse iExec protocol.

The iExec explorer is available at <https://explorer.iex.ec>.

## Protocol overview

The iExec explorer home page gives a quick overview of the protocol recent activity.

- The latests [Deals](#deal) and [tasks](#task) running on the platform
- The latests [Apps](#app), [Datasets](#dataset) and [Workerpools](#workerpool) deployed

![iExec Explorer](../../.gitbook/assets/explorer_home.png)

## Navigation

### Search bar

The search bar allow to find an object by it's address, ENS or transaction hash.

![search by address](../../.gitbook/assets/explorer_search-by-address.png)

![search by ens](../../.gitbook/assets/explorer_search-by-ens.png)

![search by tx hash](../../.gitbook/assets/explorer_search-by-tx-hash.png)

### Links

Each item can be clicked to access a [detailed view](#detailed-views) of the corresponding object.

### Block explorer links

For a low level view, an external links to a [block explorer](https://blockscout-bellecour.iex.ec/) is available on [addresses](#address) and transactions.

## Detailed views

The following object have a detailed view.

- [Address](#address)
- [App](#app)
- [Dataset](#dataset)
- [Workerpool](#workerpool)
- [Deal](#deal)
- [Task](#task)
- [Transaction](#transaction)

### Address

This page summaries the interactions of an ethereum address with the protocol.

Specific role based views (such as [Worker](#worker-view)) are available on this page.

![address details](../../.gitbook/assets/explorer_address-details.png)

#### Worker view

The worker view shows the wallet activity as a worker.

The worker's latests contributions on tasks are exposed with their current status.

| Status | Description |
| --- | --- |
| CONTRIBUTED | the worker submitted the computation result on the blockchain but the task is not finalized yet |
| PROVED | the worker contribution was in the consensus when the task was finalized<br/> - the worker has been rewarded |
| REJECTED | the worker contribution was not in the consensus when the task was finalized<br/> - the worker's stake has been seized |

![address details: worker view](../../.gitbook/assets/explorer_address-details_worker-view.png)

### App

This page shows the details of an app and the latests usages.

![app details](../../.gitbook/assets/explorer_app-details.png)

### Dataset

This page shows the details of a dataset and the latests usages.

![dataset details](../../.gitbook/assets/explorer_dataset-details.png)

### Workerpool

This page shows the details of a workerpool and the latests usages.

![workerpool details](../../.gitbook/assets/explorer_workerpool-details.png)

### Deal

This page shows the details of a deal and the generated computation [tasks](#task).

The `Status` shows a synthetic information of the deal's tasks completion.

| Status | Description |
| --- | --- |
| PENDING | tasks not COMPLETED while the deadline is not reached yet |
| COMPLETED | tasks successfully COMPLETED |
| CLAIMABLE | tasks not finalized before the deadline<br/> - not finalized tasks can be claimed |
| CLAIMED | tasks not finalized before the deadline and claimed as failed |

![deal details](../../.gitbook/assets/explorer_deal-details.png)

### Task

This page shows the details of a task and it's completion status.

| Status | Description |
| --- | --- |
| STARTED | the task was initialized and waiting for worker's contributions<br/> - this status is displayed in red when the deadline is reached, the task can be claimed |
| REVEALING | the task received enough contributions to reach the [PoCo](../../key-concepts/proof-of-contribution.md) consensus but is not yet finalized<br/> - this status is displayed in red when the deadline is reached, the task can be claimed |
| COMPLETED | the task is successfully finalized<br/> - resource providers have been rewarded |
| FAILLED | the task was not `COMPLETED` before the deadline and was claimed as failed.<br/> - the workerpool stake has been seized<br/> - the requester has been refund |

Once the task status is `COMPLETED`, the result is available

- on chain if a callback contract has been specified
- off-chain as a downloadable archive if no callback contract was specified

![task details](../../.gitbook/assets/explorer_task-details.png)

### Transaction

This page shows the detail of a transaction on the protocol smart contracts.

{% hint style="info" %}

Transactions that does not impact the protocol are not indexed in the explorer.

To inspect any transaction on iExec Bellecour sidechain, use a block explorer such as [Blockscout](https://blockscout-bellecour.iex.ec/)

{% endhint %}

The protocol related ethereum events triggered by the transaction are exposed.

![transaction details](../../.gitbook/assets/explorer_transaction-details.png)
