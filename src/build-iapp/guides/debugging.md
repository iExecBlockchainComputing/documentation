---
title: Debugging Your iApp
description:
  Troubleshoot and optimize your iApp execution in the TEE environment
---

# 🐛 Debugging

**When your iApp doesn't work as expected, debugging in the TEE environment
requires specific techniques.** This guide helps you identify issues and
optimize your iApp's performance.

## Task Execution Lifecycle

Understanding how your task progresses through the iExec network:

### Key Stages

1. **Deal Creation** - Orders matched, funds locked
2. **Task Initialization** - Workers selected for execution
3. **iApp Execution** - Your code runs inside TEE
4. **Result Processing** - Results encrypted and uploaded
5. **Task Completion** - Results available for download

**Most failures happen during stages 2-4**

## Monitoring Your Tasks

### iExec Explorer

Track your tasks at [explorer.iex.ec](https://explorer.iex.ec):

- Search by `taskId` or deal ID
- Check status: `PENDING` → `ACTIVE` → `COMPLETED/FAILED`
- View error messages if execution fails

### Status in Code

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => {
    console.log(`Status: ${title} - Done: ${isDone}`);
  },
});
```

## Debug Commands

### Local Testing

```bash
# Test your iApp locally
iapp test --args "model=bert threshold=0.8"
iapp test --secrets "key1=value1,key2=value2"

# Mock protected data for testing
iapp mock protectedData
iapp test --protectedData "mock_name"
```

### Remote Debugging

```bash
# Deploy and run
iapp deploy
iapp run <iapp-address>

# Debug failed executions
iapp debug <taskId>
```

### Task Information

```bash
# View task details
iexec task show <taskId>

# Download results (if completed)
iexec task show <taskId> --download
```

## Common Issues

### ⏱️ **Task Timeout**

- **Cause**: Code takes too long to execute
- **Solution**: Optimize algorithms, reduce input sizes, use appropriate task
  category

### 💾 **Memory Issues**

- **Cause**: Loading large files, memory leaks, TEE constraints
- **Solution**: Process data in chunks, use streaming, optimize memory usage

### 📁 **Input/Output Problems**

- **Cause**: Wrong file paths, missing `computed.json`
- **Solution**: Always create `computed.json`, verify environment variables

```python
# Always create computed.json
import json, os
computed = {"deterministic-output-path": f"{os.environ['IEXEC_OUT']}/result.json"}
with open(f"{os.environ['IEXEC_OUT']}/computed.json", 'w') as f:
    json.dump(computed, f)
```

### ⚠️ **Dataset type unmatching**

- **Cause**: The dataset type specified in the frontend (protectData) does not
  match with the dataset type specified in the iApp
- **Solution**: Check both dataset types

## Best Practices

### 🔍 **Input Validation**

```python
import os, sys

# Check required environment variables
if not os.environ.get('IEXEC_IN') or not os.environ.get('IEXEC_OUT'):
    print("ERROR: Missing IEXEC_IN or IEXEC_OUT")
    sys.exit(1)

# Validate arguments
if len(sys.argv) < 2:
    print("ERROR: Missing required arguments")
    sys.exit(1)
```

### 📝 **Clear Error Messages**

```python
try:
    # Your processing logic
    result = process_data(data)
except Exception as e:
    print(f"ERROR: Processing failed: {str(e)}")
    sys.exit(1)
```

### 🔒 **Safe File Operations**

```python
import os, json

# Always ensure output directory exists
iexec_out = os.environ['IEXEC_OUT']
os.makedirs(iexec_out, exist_ok=True)

# Write results safely
try:
    with open(f"{iexec_out}/result.json", 'w') as f:
        json.dump(result_data, f)
except Exception as e:
    print(f"ERROR: Failed to write results: {e}")
    sys.exit(1)
```

## What's Next?

Continue improving your iApps:

- **[Inputs and Outputs](/build_iapp/guides/inputs-and-outputs)** - Handle data
  in TEE
- **[How to Get and Decrypt Results](/build_iapp/guides/how-to-get-and-decrypt-results)** -
  Retrieve results
