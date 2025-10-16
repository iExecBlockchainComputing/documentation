---
title: Inputs
description:
  Understand the different input types available to your iApp in the TEE
  environment
---

# 📥 Inputs

**Your iApp runs inside a secure TEE environment with access to different types
of inputs.** Understanding what data you can access, how to access it, and when
to use each type is crucial for building effective privacy-preserving
applications.

This guide covers all input types available to your iApp and how to access them
within the TEE environment.

## Two perspectives on inputs

**Inputs work differently depending on your role:**

- 🔧 **As a developer** (using iApp Generator): You write code to access inputs
  from the TEE environment
- 👤 **As a user** (using DataProtector): You provide inputs when executing the
  iApp via `processProtectedData()`

::: tip

You can also execute iApp outside of DataProtector using other methods. See the
[Use an iApp guide](/guides/use-iapp/introduction) for more information.

:::

This guide shows both perspectives for each input type.

## Input types overview

Inside the TEE, your iApp can work with five distinct categories of inputs:

| Input Type            | Visibility | Security Level | Purpose                    | How iApp Accesses It   |
| --------------------- | ---------- | -------------- | -------------------------- | ---------------------- |
| **Protected Data**    | Public     | Encrypted      | Data to be processed       | Clear files in TEE     |
| **Args**              | Public     | Clear          | Configuration parameters   | Command line arguments |
| **Input Files**       | Public     | Clear          | Large datasets, models     | Clear files in TEE     |
| **Requester Secrets** | Private    | Encrypted      | User's sensitive data      | Environment variables  |
| **App Secrets**       | Private    | Encrypted      | Developer's sensitive data | Environment variables  |

## 1. Protected Data

**What it is:** Encrypted data that's only decrypted inside your TEE
environment.

**When to use:** Processing sensitive information like personal data, financial
records, health data.

### How to Access Protected Data

Protected data is available in the `IEXEC_IN` directory as decrypted files:

::: code-group

```python [Python]
import os
import json

# Get the input directory and dataset filename
iexec_in = os.environ['IEXEC_IN']
data_filename = os.environ['IEXEC_DATASET_FILENAME']

# Protected data is decrypted and available as files
try:
    # For single protected data
    with open(f"{iexec_in}/{data_filename}", 'r') as f:
        data = json.load(f)

    # Access the sensitive data
    user_email = data.get('email')
    user_preferences = data.get('preferences')

    print(f"Processing data for user: {user_email}")

except FileNotFoundError:
    print("No protected data provided")
```

```javascript [JavaScript]
const fs = require('fs');
const path = require('path');

// Get the input directory and dataset filename
const iexecIn = process.env.IEXEC_IN;
const dataFilename = process.env.IEXEC_DATASET_FILENAME;

try {
  // Protected data is decrypted and available as files
  const dataPath = path.join(iexecIn, dataFilename);
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Access the sensitive data
  const userEmail = data.email;
  const userPreferences = data.preferences;

  console.log(`Processing data for user: ${userEmail}`);
} catch (error) {
  console.log('No protected data provided');
}
```

:::

### How users provide protected data

Users specify the protected data address when executing your iApp:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User provides the protected data they want to use for processing
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Address of the protected data
  app: '0x456def...', // Your iApp address
});
```

::: warning

Protected data is decrypted and loaded into TEE enclave memory. Very large
datasets (>1-2GB) may cause out-of-memory errors. Consider data preprocessing or
chunking for large datasets.

:::

## 2. Arguments (Args)

**What they are:** Public parameters passed to your iApp during execution.

**When to use:** Configuration settings, model parameters, processing options -
anything that doesn't need to be secret.

::: danger

Args are **completely public** and visible on the blockchain explorer. Never
pass sensitive information through args.

:::

### How to Access Args

In your iApp project, args are passed as command-line arguments:

::: code-group

```python [Python]
import sys

# Access args from command line
args = sys.argv[1:]  # Skip first arg (script name)

# Example: iapp run myapp --args "model=bert threshold=0.8"
if len(args) >= 2:
    model_name = args[0]      # "model=bert"
    threshold = args[1]       # "threshold=0.8"
```

```javascript [JavaScript]
// Access args from command line
const args = process.argv.slice(2); // Skip node and script name

// Example: iapp run myapp --args "model=bert threshold=0.8"
if (args.length >= 2) {
  const modelName = args[0]; // "model=bert"
  const threshold = args[1]; // "threshold=0.8"
}
```

:::

### How users provide args

Users pass args through the DataProtector `processProtectedData()` call:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User provides args when executing your iApp
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: 'model=sentiment-bert temperature=0.7 format=json', // Public arguments
});
```

### Example use cases

- Model configuration: `"model=sentiment-bert temperature=0.7"`
- Processing options: `"format=json output_size=small"`
- Analysis parameters: `"start_date=2024-01-01 end_date=2024-12-31"`

## 3. Input Files

**What they are:** Files downloaded from public URLs during iApp execution.

**When to use:** Large datasets, ML models, reference files that don't contain
sensitive information.

### How to Access Input Files

Files are downloaded to the `IEXEC_INPUT_FILES_FOLDER` directory:

::: code-group

```python [Python]
import os

# Get the input files directory
input_dir = os.environ.get('IEXEC_INPUT_FILES_FOLDER', './input')

# List all downloaded files
for filename in os.listdir(input_dir):
    file_path = os.path.join(input_dir, filename)

    # Process your file
    with open(file_path, 'r') as f:
        content = f.read()
        print(f"Loaded file: {filename}")
```

```javascript [JavaScript]
const fs = require('fs');
const path = require('path');

// Get the input files directory
const inputDir = process.env.IEXEC_INPUT_FILES_FOLDER || './input';

// List all downloaded files
fs.readdirSync(inputDir).forEach((filename) => {
  const filePath = path.join(inputDir, filename);

  // Process your file
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`Loaded file: ${filename}`);
});
```

:::

### How Users Provide Input Files

Users specify input files when executing your iApp:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User provides input files via DataProtector
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  inputFiles: [
    'https://example.com/sentiment-model.pkl',
    'https://myapp.com/config.json',
  ],
});
```

### Example use cases

- ML model files: `"https://example.com/sentiment-model.pkl"`
- Reference datasets: `"https://data.gov/reference-corpus.csv"`
- Configuration files: `"https://myapp.com/config.json"`

::: warning

- **File size**: Limited by TEE enclave memory (typically 1-2GB max)
- **Memory constraint**: Files are loaded into enclave memory - large files may
  cause out-of-memory errors
- **Format**: Any format (binary, text, compressed)
- **URLs**: Must be direct download links (not web pages)
- **Security**: Files are public - don't use for sensitive data

:::

## 4. Requester Secrets

**What they are:** Confidential data provided by the user running your iApp.

**When to use:** API keys, database credentials, authentication tokens that the
user needs to provide.

### How to Access Requester Secrets

Secrets are available as environment variables with the pattern
`IEXEC_REQUESTER_SECRET_<INDEX>`:

::: code-group

```python [Python]
import os

# Access requester secrets by index
api_key = os.environ.get('IEXEC_REQUESTER_SECRET_1')
db_password = os.environ.get('IEXEC_REQUESTER_SECRET_2')

if api_key:
    # Use the API key for external service calls
    headers = {'Authorization': f'Bearer {api_key}'}
    # Make API calls...
else:
    print("No API key provided")
```

```javascript [JavaScript]
// Access requester secrets by index
const apiKey = process.env.IEXEC_REQUESTER_SECRET_1;
const dbPassword = process.env.IEXEC_REQUESTER_SECRET_2;

if (apiKey) {
  // Use the API key for external service calls
  const headers = { Authorization: `Bearer ${apiKey}` };
  // Make API calls...
} else {
  console.log('No API key provided');
}
```

:::

### How Users Provide Requester Secrets

Users provide all Requester Secrets when executing your iApp via DataProtector:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Example: User executes your iApp with all input types
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...', // Protected data address
    app: '0x456def...', // Your iApp address
    args: 'model=bert threshold=0.8', // Public arguments
    secrets: {
      // Requester secrets
      1: 'sk-1234567890abcdef', // API key
      2: 'mydbpassword123', // DB password
    },
  });
```

## 5. App Secrets

**What they are:** App Secrets are confidential data owned by the iApp developer
that are provisioned during app deployment and made available to your iApp
during execution. They are stored securely in the Secret Management Service
(SMS) and only accessible within the Trusted Execution Environment (TEE).

**When to use:** Use App Secrets for API keys, private keys, tokens, database
credentials, or any sensitive data that belongs to the app developer and needs
to be available to the iApp during execution. Unlike Requester Secrets (which
are provided by users), App Secrets are configured once by the developer and
remain constant across all executions.

::: info

App Secrets are different from Requester Secrets:

- **App Secrets**: Owned by the app developer, configured once during deployment
- **Requester Secrets**: Owned by the user executing the iApp, provided per
  execution

:::

### How to Use App Secrets in Your iApp

App Secrets are configured in your `iapp.config.json` during development and
automatically deployed with your iApp. For deployment details, see the
[Build Your iApp guide](/references/iapp-generator/cli/building-your-iexec-app).

#### Configuration in iapp.config.json

Add your App Secret to the project configuration:

```json
{
  "defaultChain": "arbitrum",
  "projectName": "my-iapp",
  "template": "JavaScript",
  "appSecret": "{\"API_KEY\":\"sk-1234567890abcdef\",\"DATABASE_URL\":\"postgresql://user:pass@host:5432/db\"}"
}
```

::: warning

- **Size limit**: App secrets are limited to 4096 kB maximum
- **Immutable**: Once set, app secrets cannot be changed without redeploying the
  iApp
- **Security**: App secrets are encrypted and only accessible within the TEE
  environment
- **Ownership**: App secrets belong to the iApp developer, not the user
  executing the iApp

:::

### How to Access App Secrets

App secrets are exposed as environment variables following the
`IEXEC_APP_DEVELOPER_SECRET` naming pattern.

::: code-group

```python [Python]
import os
import json

# Get your app secret
app_secret = os.environ.get('IEXEC_APP_DEVELOPER_SECRET')

if app_secret:
    # Parse JSON (multiple secrets)
    secrets = json.loads(app_secret)
    api_key = secrets.get('API_KEY')
    database_url = secrets.get('DATABASE_URL')
```

```javascript [JavaScript]
// Get your app secret
const appSecret = process.env.IEXEC_APP_DEVELOPER_SECRET;

if (appSecret) {
  // Parse JSON (multiple secrets)
  const secrets = JSON.parse(appSecret);
  const apiKey = secrets.API_KEY;
  const databaseUrl = secrets.DATABASE_URL;
}
```

:::

## Testing Inputs Locally

Use iApp Generator to test different input types:

```bash
# Test with different input types
iapp test --args "model=bert threshold=0.8"           # Test with arguments
iapp test --inputFiles "https://example.com/data.json" # Test with input files
iapp test --secrets "key1=value1,key2=value2"        # Test with secrets

# Mock protected data for testing
iapp mock protectedData  # Generate sample protected data

# Test your iApp locally with mocked protected data
iapp test --protectedData "mock_name"
```

## Common Patterns

### 🔍 **Data Analysis iApp**

**User execution (DataProtector):**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User runs your data analysis iApp
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their business data
  app: '0x456def...', // Your analysis iApp
  args: 'analysis_type=sentiment period=monthly',
  secrets: { 1: 'api-key-for-external-service' },
});
```

**Your iApp code (Python):**

```python
# Access inputs in your iApp
args = sys.argv[1:]           # Processing parameters
api_key = os.environ.get('IEXEC_REQUESTER_SECRET_1')  # User's API access
protected_data = load_protected_data()  # The sensitive data to process

# Process and output results
results = analyze_data(protected_data, args, api_key)
save_results(results)
```

### 🤖 **AI Model iApp**

**User execution (DataProtector):**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User runs your AI model with their data
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their personal data
  app: '0x456def...', // Your AI model iApp
  inputFiles: ['https://example.com/model-weights.pkl'],
  args: 'model_type=classification confidence_threshold=0.8',
});
```

**Your iApp code (Python):**

```python
# Load model from input files
model = load_model_from_inputs()

# Get user data to process
user_data = load_protected_data()

# Run inference
predictions = model.predict(user_data)

# Return encrypted results
save_encrypted_results(predictions)
```

### 📊 **Report Generator iApp**

**User execution (DataProtector):**

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User generates a report from their business data
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their business data
  app: '0x456def...', // Your report generator iApp
  args: 'report_type=quarterly format=pdf include_charts=true',
  inputFiles: ['https://example.com/company-template.xlsx'],
});
```

**Your iApp code (Python):**

```python
# Get configuration from args
report_type = get_arg('type', default='summary')

# Access the business data
business_data = load_protected_data()

# Generate report
report = generate_report(business_data, report_type)
save_report(report)
```

## What's Next?

**You now understand all input types available to your iApp!**

Continue building with these guides:

- **[Outputs](/guides/build-iapp/outputs)** - Learn how to generate and
  structure your iApp outputs
- **[App Access Control and Pricing](/guides/build-iapp/manage-access)** -
  Control who can use your iApp
- **[Debugging Your iApp](/guides/build-iapp/debugging)** - Troubleshoot
  execution issues
