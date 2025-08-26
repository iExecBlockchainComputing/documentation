---
title: Outputs
description:
  Learn how to generate and structure outputs from your iApp in the TEE
  environment
---

# 📤 Outputs

**Your iApp must generate outputs that users can retrieve and decrypt.** Understanding
how to structure your outputs, create the required metadata, and follow best
practices is essential for building effective privacy-preserving applications.

This guide covers how to generate outputs from your iApp and ensure they can be
properly retrieved by users.

## Creating Outputs

Your iApp must generate outputs in the `IEXEC_OUT` directory. **Every iApp must
create a `computed.json` file** with metadata about the computation.

### Basic Output Structure

::: code-group

```python [Python]
import os
import json

# Get output directory
iexec_out = os.environ['IEXEC_OUT']

# Create your result file
result_data = {
    "analysis": "positive sentiment",
    "confidence": 0.92,
    "processed_at": "2024-01-15T10:30:00Z"
}

# Save main result
with open(f"{iexec_out}/result.json", 'w') as f:
    json.dump(result_data, f)

# REQUIRED: Create `computed.json` metadata
computed_metadata = {
    "deterministic-output-path": f"{iexec_out}/result.json",
    "execution-timestamp": "2024-01-15T10:30:00Z",
    "app-version": "1.0.0"
}

with open(f"{iexec_out}/computed.json", 'w') as f:
    json.dump(computed_metadata, f)
```

```javascript [JavaScript]
const fs = require('fs');
const path = require('path');

// Get output directory
const iexecOut = process.env.IEXEC_OUT;

// Create your result file
const resultData = {
  analysis: 'positive sentiment',
  confidence: 0.92,
  processed_at: '2024-01-15T10:30:00Z',
};

// Save main result
fs.writeFileSync(
  path.join(iexecOut, 'result.json'),
  JSON.stringify(resultData, null, 2)
);

// REQUIRED: Create computed.json metadata
const computedMetadata = {
  'deterministic-output-path': path.join(iexecOut, 'result.json'),
  'execution-timestamp': '2024-01-15T10:30:00Z',
  'app-version': '1.0.0',
};

fs.writeFileSync(
  path.join(iexecOut, 'computed.json'),
  JSON.stringify(computedMetadata, null, 2)
);
```

:::

### Output Best Practices

1. **Always create `computed.json`** - This is mandatory
2. **Use descriptive filenames** - `analysis_result.json`, not `output.txt`
3. **Include metadata** - Timestamps, versions, parameters used
4. **Structure your data** - Use JSON for structured results
5. **Keep files reasonable** - Large outputs increase retrieval time and may hit
   memory limits
6. **Memory awareness** - TEE enclave memory is limited, avoid generating
   multi-GB outputs

### Example: Multi-file Output

```python
import os
import json

iexec_out = os.environ['IEXEC_OUT']

# Create multiple output files
summary = {"total_processed": 1000, "success_rate": 0.95}
with open(f"{iexec_out}/summary.json", 'w') as f:
    json.dump(summary, f)

# Create a detailed report
with open(f"{iexec_out}/detailed_report.txt", 'w') as f:
    f.write("Detailed analysis results...\n")

# Create visualization data
chart_data = {"labels": ["A", "B", "C"], "values": [10, 20, 30]}
with open(f"{iexec_out}/chart_data.json", 'w') as f:
    json.dump(chart_data, f)

# Required metadata file
computed = {
    "deterministic-output-path": f"{iexec_out}/summary.json",
    "additional-files": [
        f"{iexec_out}/detailed_report.txt",
        f"{iexec_out}/chart_data.json"
    ]
}
with open(f"{iexec_out}/computed.json", 'w') as f:
    json.dump(computed, f)
```

## What's Next?

**You now understand how to generate proper outputs from your iApp!**

Continue building with these guides:

- **[Inputs](/guides/build-iapp/inputs)** - Learn about the different input types
  available to your iApp
- **[App Access Control and Pricing](/guides/build-iapp/manage-access)** -
  Control who can use your iApp
- **[Debugging Your iApp](/guides/build-iapp/debugging)** - Troubleshoot
  execution issues
- **[How to Get and Decrypt Results](/guides/use-iapp/getting-started)** -
  User-side result handling
