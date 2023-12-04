# Update Secrets in SMS in V8.2 [2023/12/04]

iExec is rolling out an upgraded version of iExec SMS (Secret Management Service). 

Any assets (such as Apps or Datasets) that are using secrets created prior to this date will no longer be supported after the migration. Requesters will also be affected and will need to take certain actions to retrieve results and generate encrypted results.

[Announcement](https://medium.com/iex-ec/iexec-secret-management-service-upgrade-iexec-8-3-3fa483866f9f)

{% hint style="info" %}

The update will take place on December 4, between 13:00 and 16:00 UTC.

{% endhint %}

- [Push secrets with CLI](#cli-users)
  - [Application](#application)
  - [Dataset](#dataset)
  - [Requester ](#requester)
- [Push secrets with JS library](#js-library)

## Push Secrets with CLI users

### Application

If your application uses a secret, push it to the SMS (Secret Management Service):

```bash
iexec app push-secret <app-address> [options]
```

### Dataset

Push your dataset secret to the SMS:

```bash
iexec dataset push-secret <dataset-address> --secret-path <secret-path> [options]
```

### Requester

Requesters must log in to the Result Proxy to store their results. To use the result encryption feature, they must also push their public key to the SMS.

Login to the Result proxy:

```bash
iexec storage init

# if you want to use the Gramine TEE framework
iexec storage init --tee-framework gramine
```

Push your encryption key to the SMS:

{% hint style="info" %} To generate your encryption keypair

```bash
iexec result generate-encryption-keypair
```

{% endhint %}

```bash
iexec result push-encryption-key [options]

# if you want to use the Gramine TEE framework
iexec result push-encryption-key --tee-framework gramine
```

#### Requester secret

Publish your requester secret to the SMS

```bash
iexec requester push-secret [options]
```

## Push secrets with JS library

You should proceed to push all associated secrets to your assets in the Secret Management Service using methods similar to the ones employed with the CLI, which were previously presented on this page. 


