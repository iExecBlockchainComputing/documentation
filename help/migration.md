# v6 to v7 migration

iExec v7 comes with some breaking changes, follow this guide to migrate from v6 to v7.

* [CLI users](migration#cli-users)
  * [Application migration](migration#application-migration)
  * [Dataset migration](migration#dataset-migration)
  * [Requester migration](migration#requester-migration)
* [JS library](migration#js-library)

## CLI users

### Application migration

Application developers needs to publish their application sell order to the v7 marketplace in order to make it availlable for requesters.

Upgrade iExec SDK CLI to v7:

```bash
npm i -g iexec@7

iexec -V
# 7.0.0
```

Publish your application to the v7 marketplace:

```bash
iexec app publish <app-address> [options]
```

### Dataset migration

Dataset developers needs to push their dataset secret to the v7 SMS and publish their dataset sell order to the v7 marketplace in order to make it availlable for requesters.

Upgrade iExec SDK CLI to v7:

```bash
npm i -g iexec@7

iexec -V
# 7.0.0
```

Push your dataset secret to the v7 SMS:

```bash
iexec dataset push-secret <dataset-address> --secret-path <secret-path> [options]
```

Publish your dataset to the v7 marketplace:

```bash
iexec dataset publish <dataset-address> [options]
```

### Requester migration

Requesters need to login to the Result proxy v7 to store their results and must push their encryption public key to the v7 SMS to use result encryption feature.

Upgrade iExec SDK CLI to v7:

```bash
npm i -g iexec@7

iexec -V
# 7.0.0
```

Login to the v7 Result proxy:

```bash
iexec storage init
```

Push your encryption key to the v7 SMS:

```bash
iexec result push-encryption-key [options]
```

## JS library

Upgrade iExec SDK CLI to v7 in your project's dependencies to use the v7 stack.

```bash
npm i iexec@7
```
