# Task Feedback

## Debug your app on iExec

Sometimes things don't work out right the first time and you may need to debug your application.

Get debug information of task

```bash
iexec task debug <taskid> --logs --chain bellecour
```

{% hint style="info" %}
`iexec task debug <taskid>` allows anyone to know the **onchain** and **offchain** statuses of the task.

`--logs` option allows the requester to retrieve the worker's application logs.
{% endhint %}

## Statuses of _replicates_

One task bought by a requester will result in one or more _replicates_ depending on the level of trust set by the requester. For a given task, each worker involved in the computation will have its own _replicate_ containing the description of the task to compute. The whole computation of a _replicate_ is made of several stages. Each stage completed by a worker will result in an update of its _replicate_ status.

Here are the different possible statuses for a _replicate_:

- `CREATED`: A new _replicate_ is assigned to your worker just after it asked for new one
- `RUNNING`: Your worker confirms it is going to work on this _replicate_
- `APP_DOWNLOADING`: Your worker is downloading the application
- `APP_DOWNLOADED`: The download of the application is completed
- `APP_DOWNLOAD_FAILED`: The download of the application failed
- `DATA_DOWNLOADING`: Your worker is downloading the dataset
- `DATA_DOWNLOADED`: The download of the dataset is completed
- `DATA_DOWNLOAD_FAILED`: The download of the dataset failed
- `COMPUTING`: Your worker is computing the task
- `COMPUTED`: The computation is completed
- `COMPUTE_FAILED`: The computation failed
- `CAN_CONTRIBUTE`: Your worker can contribute the result digest the computation
- `CANT_CONTRIBUTE_SINCE_STAKE_TOO_LOW`: Your worker hasn't enough RLC in its account to contribute (30% of the task in RLC by default)
- `CANT_CONTRIBUTE_SINCE_TASK_NOT_ACTIVE`: The task is not active on chain. This status usually happens when different workers have contributed on the same task but the consensus has been reached before your contribution.
- `CANT_CONTRIBUTE_SINCE_AFTER_DEADLINE`: The deadline for the contribution is reached
- `CANT_CONTRIBUTE_SINCE_CONTRIBUTION_ALREADY_SET`: Your worker already contributed for this task
- `CONTRIBUTING`: Your worker sent the "contribute(..)" transaction (result digest) on chain
- `CONTRIBUTE_FAILED`: The contribute transaction failed
- `CONTRIBUTED`: Your worker has contributed on chain
- `CANT_REVEAL`: Your worker cant reveal the proof that it is the owner of the result digest
- `REVEALING`: Your worker sent the "reveal(..)" transaction (proof that he is the owner of the result digest)
- `REVEALED`: Your worker has revealed the proof on chain
- `REVEAL_FAILED`: The reveal transaction failed
- `RESULT_UPLOAD_REQUESTED`: Your worker has been requested to upload the result to a remote filesystem
- `RESULT_UPLOAD_REQUEST_FAILED`: Your worker did not accept to be requested to upload the result
- `RESULT_UPLOADING`: Your worker is uploading the result
- `RESULT_UPLOADED`: The result is uploaded to IPFS (over the _iExec Result Proxy_)
- `RESULT_UPLOAD_FAILED`: The upload of the result failed
- `COMPLETED`: The whole task is completed meaning the task is finalized. You have been rewarded if you are part of the consensus
- `REVEAL_TIMEOUT`: Your worker took too long to reveal its proof (more than 2 periods after the consensus)
- `WORKER_LOST`: Your worker didn't ping the iexec-core scheduler for a while. It is considered as out for this task
- `ABORTED_ON_CONSENSUS_REACHED`: The consensus is reached but you are not part of it
- `ABORTED_ON_CONTRIBUTION_TIMEOUT`: Your worker took too long to contribute (7 periods after the purchase of the task)
- `FAILED`: Your worker failed to participate to the task
- `OUT_OF_GAS`: Your worker needs some ETH, please refill its wallet
- `RECOVERING`: Your worker has been stopped, it is starting back from where it stopped