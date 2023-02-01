# v7 to v8 migration

iExec v8 comes with some breaking changes, follow this guide to migrate from v7 to v8.

- [CLI users](#cli-users)
  - [Application migration](#application-migration)
  - [Dataset migration](#dataset-migration)
  - [Requester migration](#requester-migration)
- [JS library](#js-library)

## CLI users

### Application migration

Application developers need to publish their application sell order to the v8 marketplace in order to make it available for requesters.

Upgrade iExec SDK CLI to v8:

```bash
npm i -g iexec@8

iexec -V
# 8.0.0
```

Publish your application to the v8 marketplace:

```bash
iexec app publish <app-address> [options]
```

If your application uses a secret, push it to the v8 SMS:

```bash
iexec app push-secret <app-address> [options]
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

## JS library

Upgrade iExec SDK CLI to v8 in your project's dependencies to use the v8 stack.

```bash
npm i iexec@8
```
