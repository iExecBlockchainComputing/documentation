# v7 to v8 migration

iExec v8 comes with some breaking changes, follow this guide to migrate from v7 to v8.

- [CLI users](#cli-users)
  - [Application migration](#application-migration)
  - [Dataset migration](#dataset-migration)
  - [Requester migration](#requester-migration)
- [JS library](#js-library)

## CLI users

### Application migration

With the support of gramine for confidential computing, the workflow to deploy and manage a dapp has slighly evolved

Upgrade iExec SDK CLI to v8:

```bash
npm i -g iexec@8

iexec -V
# 8.0.0
```
#### Standard app migration

Starting from the same Docker image and the same I/O management, Application developers need to publish their application and their sell order to the v8 marketplace in order to make it available for requesters.

#### Scone app migration

Starting from the same Docker image and the same I/O management, you only need to rebuild your docker image with the new V8 sconify.sh
https://documentations.iex.ec/staging/v/v8-staging/for-developers/confidential-computing/choose-your-tee-framework/create-your-first-sgx-app#build-the-tee-docker-image   

The app init must explicitly declare the Scone tee framework.
```bash
iexec app  init --tee-framework scone
```
Publish your application to the v8 marketplace:

```bash
iexec app publish <app-address> [options]
```

If your application uses a secret, push it to the v8 SMS:

```bash
iexec app push-secret <app-address> [options]
```

Sign and publish your sell order after edit the "tee scone" tag from the app order 
description in iexec.json
```file
"order": {
    "apporder": {
      "app": "0x2f6657E11BF67E02092f5876f290d2884fC99626",
      "appprice": "1",
      "volume": "10",
      "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
      "datasetrestrict": "0x0000000000000000000000000000000000000000",
      "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
      "requesterrestrict": "0x0000000000000000000000000000000000000000"
    },
}
```

#### App secret 

Publish your app secret in the v8 SMS

```bash
iexec app push-secret [options]
```


### Dataset migration

Dataset developers need to push their dataset secret to the v8 SMS and publish their dataset sell order to the v8 marketplace in order to make it available for requesters.

Upgrade iExec SDK CLI to v8:

```bash
npm i -g iexec@8

iexec -V
# 8.0.0
```

Push your dataset secret to the v8 SMS:

```bash
iexec dataset push-secret <dataset-address> --secret-path <secret-path> [options]
```

Publish your dataset to the v8 marketplace:

```bash
iexec dataset publish <dataset-address> [options]
```
Publish your dataset order with the correct tag

Before
for tee application
```file
"tag": "0x0000000000000000000000000000000000000000000000000000000000000001"
```
After

for tee application scone 
```file
"tag": 0x0000000000000000000000000000000000000000000000000000000000000003"
```
for tee application gramine
```file
"tag": 0x0000000000000000000000000000000000000000000000000000000000000005"
```
### Requester migration

Requesters need to login to the Result proxy v8 to store their results and must push their encryption public key to the v8 SMS to use result encryption feature.

Upgrade iExec SDK CLI to v8:

```bash
npm i -g iexec@8

iexec -V
# 8.0.0
```

Login to the v8 Result proxy:

```bash
iexec storage init

# if you want to use the Gramine TEE framework
iexec storage init --tee-framework gramine
```

Push your encryption key to the v8 SMS:

```bash
iexec result push-encryption-key [options]

# if you want to use the Gramine TEE framework
iexec result push-encryption-key --tee-framework gramine
```

#### Requester secret 

Publish your requester secret in the v8 SMS

```bash
iexec requester push-secret [options]
```

## JS library

Upgrade iExec SDK CLI to v8 in your project's dependencies to use the v8 stack.

```bash
npm i iexec@8
```
