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

For security reasons, application logs are only accessible to the requester.

## Statuses of Replicates

One Task bought by a requester will result in one or more Replicates depending on the level of trust set by the requester. For a given task, each worker involved in the computation will have its own Replicate containing the description of the task to compute. The whole computation of a Replicate is made of several stages. Each stage completed by a worker will result in an update of its Replicate status.

Here are the different possible statuses for a replicate:

* **CREATED**: A new replicate is assigned to your worker just after it asked for new one
* **RUNNING**: Your worker confirms it is going to work on this replicate
* **APP\_DOWNLOADING**: Your worker is downloaing the application
* **APP\_DOWNLOADED**: The download of the application is completed
* **APP\_DOWNLOAD\_FAILED**: The download of the application failed
* **DATA\_DOWNLOADING**: Your worker is downloading the dataset
* **DATA\_DOWNLOADED**: The download of the dataset is completed
* **DATA\_DOWNLOAD\_FAILED**: The download of the dataset failed
* **COMPUTING**: Your worker is computing the task
* **COMPUTED**: The computation is completed
* **COMPUTE\_FAILED**: The computation failed
* **CAN\_CONTRIBUTE**: Your worker can contribute the fingerprint of the computed result on chain
* **CANT\_CONTRIBUTE\_SINCE\_STAKE\_TOO\_LOW**: Your worker hasn’t enought RLC in its account to contribute \(30% of the task in RLC by default\)
* **CANT\_CONTRIBUTE\_SINCE\_TASK\_NOT\_ACTIVE**: The task is not active on chain. This status usually happens when different workers have contributed on the same task but the consensus has been reached before your contribution.
* **CANT\_CONTRIBUTE\_SINCE\_AFTER\_DEADLINE**: The deadline for the contribution is reached
* **CANT\_CONTRIBUTE\_SINCE\_CONTRIBUTION\_ALREADY\_SET**: Your worker already contributed for this task
* **CONTRIBUTING**: Your worker sent the “contribute\(..\)” transaction \(fingerprint of the result\) on chain
* **CONTRIBUTE\_FAILED**: The contribute transaction failed
* **CONTRIBUTED**: Your worker has contributed on chain
* **CANT\_REVEAL**: Your worker cant reveal the proof that it is the owner of the fingerprint of the computed result
* **REVEALING**: Your worker sent the “reveal\(..\)” transactions \(proof that he is the owner of the fingerprint of the result\)
* **REVEALED**: Your worker has revealed the proof on chain
* **REVEAL\_FAILED**: The reveal transaction failed
* **RESULT\_UPLOAD\_REQUESTED**: Your worker has been requested to upload the result to a remote filesystem
* **RESULT\_UPLOAD\_REQUEST\_FAILED**: Your worker did not accept to be requested to upload the result
* **RESULT\_UPLOADING**: Your worker is uploading the result
* **RESULT\_UPLOADED**: The result is uploaded \(to an iExec Result Repository or to IPFS\)
* **RESULT\_UPLOAD\_FAILED**: The upload of the result failed
* **COMPLETED**: The whole task is completed meaning the task is finalized. You have been rewarded if you are part of the consensus
* **REVEAL\_TIMEOUT**: Your worker took too long to reveal its proof \(more than 2 periods after the consensus\)
* **WORKER\_LOST**: Your worker didn’t ping the iexec-core scheduler for a while. It is considered as out for this task
* **ABORTED\_ON\_CONSENSUS\_REACHED**: The consensus is reached but you are not part of it
* **ABORTED\_ON\_CONTRIBUTION\_TIMEOUT**: Your worker took too long to contribute \(7 periods after the purchase of the task\)
* **FAILED**: Your worker failed to participate to the task
* **OUT\_OF\_GAS**: Your worker needs some ETH, please refill its wallet
* **RECOVERING**: Your worker has been stopped, it is starting back from where it stopped