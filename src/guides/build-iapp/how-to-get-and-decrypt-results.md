---
title: How to Get and Decrypt Results
description: Download and decrypt iApp execution results from completed tasks
---

# 📦 How to Get and Decrypt Results

**When an iApp execution completes, you need to retrieve and decrypt the
results.** This guide shows you how to download task results and decrypt them to
access the actual output files.

Understanding the result retrieval process is essential for building
user-friendly applications with iExec.

## Understanding Results Structure

### Deal → Task → Result Flow

**Every execution follows this hierarchy**:

```
Deal (agreement between parties)
├── Task 1 (individual execution instance)
│   └── Result (encrypted output files)
├── Task 2
│   └── Result
└── ...
```

- **Deal**: Contains one or more tasks from your execution request
- **Task**: Individual computation instance with unique `taskId`
- **Result**: Encrypted ZIP file containing your iApp's output files

### Result Accessibility

**Results are publicly downloadable** but may be encrypted:

- ✅ **Anyone can download** the result file from IPFS
- 🔒 **Only authorized parties can decrypt** the contents
- 📁 **Results contain** all files from `IEXEC_OUT` directory
- ⚡ **Available immediately** after task completion

## Downloading Results

### Using iExec SDK CLI

**Get task information and download**:

```bash
# Check task status and get result info
iexec task show <taskId>

# Download encrypted result
iexec task show <taskId> --download my-result

# Extract downloaded files
unzip my-result.zip -d my-result/
ls my-result/
```

**Get task ID from deal**:

```bash
# If you only have the deal ID
iexec deal show <dealId>

# Lists all tasks in the deal with their IDs
```

### Using DataProtector SDK

**Integrated download and decryption**:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Get result from completed task
const result = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x123abc...', // Your task ID
});

console.log('Result downloaded and decrypted:', result);
```

## Decrypting Results

### Automatic Decryption with DataProtector

**The easiest way** - decryption happens automatically:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Execute and get results in one flow
const processResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
});

console.log('Task ID:', processResponse.taskId);

// Get decrypted result
const result = await dataProtectorCore.getResultFromCompletedTask({
  taskId: processResponse.taskId,
});

// Result is automatically decrypted ArrayBuffer
const resultText = new TextDecoder().decode(result.result);
console.log('Decrypted result:', resultText);
```

### Manual Decryption with CLI

**If you downloaded manually**:

```bash
# Download the encrypted result
iexec task show <taskId> --download my-result

# Decrypt using your wallet (must be the beneficiary)
iexec result decrypt my-result.zip --force

# Extract decrypted files
unzip decrypted-result.zip -d final-result/
cat final-result/result.txt
```

## Result File Structure

### What's Inside a Result

**Typical result contents**:

```
result.zip
├── computed.json         # Mandatory metadata file
├── result.txt           # Your main output
├── analysis.json        # Additional outputs
├── logs.txt            # Optional logs
└── metadata.json       # Optional metadata
```

### `computed.json` Structure

**Always present in every result**:

```json
{
  "deterministic-output-path": "/iexec_out/result.txt",
  "execution-timestamp": "2024-01-15T10:30:00Z",
  "app-version": "1.0.0"
}
```

**Key fields**:

- `deterministic-output-path`: Main result file path
- `execution-timestamp`: When the computation completed
- Custom fields added by your iApp

## Common Patterns

### React Application Example

**Integrate result retrieval in your frontend**:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
async function downloadResult(taskId: string) {
  try {
    const resultResponse = await dataProtectorCore.getResultFromCompletedTask({
      taskId,
    });

    // Convert to text or JSON based on your result format
    const resultText = new TextDecoder().decode(resultResponse.result);
    const resultJson = JSON.parse(resultText);

    return resultJson;
  } catch (error) {
    console.error('Failed to download result:', error);
    throw error;
  }
}

// Usage example
const taskId = '0x123abc...';
const result = await downloadResult(taskId);
console.log('Analysis Result:', result);
```

### Node.js Backend Example

**Server-side result processing**:

```javascript
const {
  IExecDataProtectorCore,
  getWeb3Provider,
} = require('@iexec/dataprotector');

async function processTaskResult(taskId) {
  const web3Provider = getWeb3Provider(process.env.PRIVATE_KEY);
  const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

  try {
    // Get the result
    const resultBuffer = await dataProtectorCore.getResultFromCompletedTask({
      taskId,
    });

    // Parse the result based on your format
    const resultText = new TextDecoder().decode(resultBuffer);

    // If your result is JSON
    const analysisResult = JSON.parse(resultText);

    // Store in database, send notifications, etc.
    await saveToDatabase(taskId, analysisResult);
    await notifyUser(analysisResult);

    return analysisResult;
  } catch (error) {
    console.error('Result processing failed:', error);
    throw error;
  }
}
```

## Troubleshooting

### Common Issues

**❌ "Task not completed"**

```
Error: Task is still running
```

**Solution**: Wait for task completion or check status with
`iexec task show <taskId>`

**❌ "Decryption failed"**

```
Error: Failed to decrypt result
```

**Solutions**:

- Use the correct wallet (beneficiary)
- Check if result was actually encrypted
- Verify task completed successfully

**❌ "Result not found"**

```
Error: Result not available
```

**Solutions**:

- Check task status - it might have failed
- Verify the task ID is correct
- Wait for result upload to complete

### Checking Task Status

**Before downloading, verify completion**:

```bash
# Check if task is completed
iexec task show <taskId>

# Look for status: "COMPLETED"
# And result information in the output
```

### Result Encryption Status

**Not all results are encrypted**:

- 🔒 **Encrypted**: When `beneficiary` is set in the request
- 📂 **Plain**: When no beneficiary specified (public results)
- ✅ **DataProtector handles both** automatically

## What's Next?

**You can now retrieve and decrypt iApp results!**

Integrate result handling into your applications:

- **[Inputs and Outputs](/guides/build-iapp/inputs-and-outputs)** - Understand
  what your iApp can output
- **[Debugging Your iApp](/guides/build-iapp/debugging)** - Troubleshoot
  execution issues
- **[App Access Control and Pricing](/guides/build-iapp/manage-access)** -
  Control who can run your iApp

### Advanced Topics

- **[DataProtector SDK](/references/dataProtector)** - Complete SDK
  documentation
- **[SDK Deep Dive](/references/sdk)** - Advanced result handling techniques
