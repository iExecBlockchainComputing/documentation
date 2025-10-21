# Task size: pay-per-task

Pay-per-task categories, time limits, and claim rules.

## Pay-per-task model

We base the pay-per-task model on task size categories. Each category defines
two limits:

- Maximum Computing Time (C): per-task execution time on the worker. If the task
  exceeds C, the worker stops the task and marks it as failed.
- Maximum Deal Time (D): overall time window for a task in the deal. If the task
  isn’t completed within D, the requester can claim the task. On claim, the
  requester can recover the RLC engaged for this task.

**Categories Description:**

| **Category** | **Maximum Computing Time (C)** | **Maximum Deal Time (D)** |
| ------------ | ------------------------------ | ------------------------- |
| 0 – XS       | 5 min                          | 50 min                    |
| 1 – S        | 20 min                         | 200 min (3h20m)           |
| 2 – M        | 1 hour                         | 10h                       |
| 3 – L        | 3 hours                        | 30h (1d6h)                |
| 4 – XL       | 10 hours                       | 100h (4d4h)               |

- Worker allocates up to C per task. Beyond C, the worker stops the task.
- Requesters can claim the task after D if the task isn’t completed.

## How to pick a category (quick guide)

Use this decision table to choose a safe category for your workload.

| **Typical workload**                  | **Suggested category** |
| ------------------------------------- | ---------------------- |
| Short scripts / small data processing | Cat 0–1                |
| Medium data processing (10-15min)     | Cat 2                  |
| Heavy ML inference / long simulations | Cat 3–4                |

Use the iExec SDK to **set the category** in app, request, or workerpool
orders.  
For commands and examples, see the
[iExec SDK Github repository](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md).
