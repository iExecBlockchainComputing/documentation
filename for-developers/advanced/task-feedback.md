# Task Feedback

## Debug your app on iExec

Sometimes things don't work out right the first time and you may need to debug your application.

- Get debug information of a _task_
```bash
iexec task debug <taskid> --chain bellecour
```
It allows anyone to know on-chain and off-chain statuses of the _task_.

- Get debug logs of a _task_
```bash
iexec task debug <taskid> --logs --chain bellecour
```
It allows the requester to retrieve application logs produced by workers.

## Off-chain statuses

One _task_ bought by a requester will result in one off-chain _task_ with one or more _replicates_ depending on the level of trust set by the requester. For a given _task_, each worker involved in the computation will have its own _replicate_ containing the description of the _task_ to compute. The whole computation of a _replicate_ is made of several stages. Each stage completed by a worker will result in an update of its _replicate_ status.

The links between a _task_ to its _replicates_ can be represented as follows:
```bash
task1
├── replicate1 (workerX)
├── replicate2 (workerY)
└── replicate3 (workerZ)
```

While the _task_ holds a meta status, each _replicate_ has its own status which can be one of these:
| Replicate status | Description |
| --- | --- |
| `CREATED` | A new _replicate_ is assigned to a worker just after it asked for more work
| `RUNNING` | The worker confirms it is going to work on this _replicate_
| `APP_DOWNLOADING` | The worker is downloading the application
| `APP_DOWNLOADED` | The download of the application is completed
| `APP_DOWNLOAD_FAILED` | The download of the application failed
| `DATA_DOWNLOADING` | The worker is downloading the dataset
| `DATA_DOWNLOADED` | The download of the dataset is completed
| `DATA_DOWNLOAD_FAILED` | The download of the dataset failed
| `COMPUTING` | The worker is computing the _task_
| `COMPUTED` | The computation is completed
| `COMPUTE_FAILED` | The computation failed
| `CAN_CONTRIBUTE` | The worker can contribute the result digest the computation
| `CANT_CONTRIBUTE_SINCE_STAKE_TOO_LOW` | The worker hasn't enough RLC in its account to contribute (30% of the _task_ in RLC by default)
| `CANT_CONTRIBUTE_SINCE_TASK_NOT_ACTIVE` | The _task_ is not active on chain. This status usually happens when different workers have contributed on the same _task_ but the consensus has been reached before the related worker contributed.
| `CANT_CONTRIBUTE_SINCE_AFTER_DEADLINE` | The deadline for the contribution is reached
| `CANT_CONTRIBUTE_SINCE_CONTRIBUTION_ALREADY_SET` | The worker already contributed for this _task_
| `CONTRIBUTING` | The worker sent the "contribute(..)" transaction (result digest) on chain
| `CONTRIBUTE_FAILED` | The contribute transaction failed
| `CONTRIBUTED` | The worker has contributed on chain
| `CANT_REVEAL` | The worker cant reveal the proof that it is the owner of the result digest
| `REVEALING` | The worker sent the "reveal(..)" transaction (proof that he is the owner of the result digest)
| `REVEALED` | The worker has revealed the proof on chain
| `REVEAL_FAILED` | The reveal transaction failed
| `RESULT_UPLOAD_REQUESTED` | The worker has been requested to upload the result to a remote filesystem
| `RESULT_UPLOAD_REQUEST_FAILED` | The worker did not accept to be requested to upload the result
| `RESULT_UPLOADING` | The worker is uploading the result
| `RESULT_UPLOADED` | The result is uploaded to IPFS (over the _iExec Result Proxy_)
| `RESULT_UPLOAD_FAILED` | The upload of the result failed
| `COMPLETED` | The whole _task_ is completed meaning the _task_ is finalized. The worker has been rewarded if it is part of the consensus
| `REVEAL_TIMEOUT` | The worker took too long to reveal its proof (more than 2 periods after the consensus)
| `WORKER_LOST` | The worker didn't ping the iexec-core scheduler for a while. It is considered as out for this _task_
| `ABORTED_ON_CONSENSUS_REACHED` | The consensus is reached but the related worker is not part of it
| `ABORTED_ON_CONTRIBUTION_TIMEOUT` | The worker took too long to contribute (7 periods after the purchase of the _task_)
| `FAILED` | The worker failed to participate to the _task_
| `OUT_OF_GAS` | The worker needs some ETH, please refill its wallet
| `RECOVERING` | The worker has been stopped, it is starting back from where it stopped