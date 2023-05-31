# v7 to v8 migration

iExec v8 comes with some breaking changes, follow this guide to migrate from v7 to v8.

{% hint style="info" %}

The v7 iExec Marketplace is still supported until the next major release.

[V7 Marketplace](https://v7.market.iex.ec)

{% endhint %}


- [CLI users](#cli-users)
  - [SDK upgrade version](#sdk-upgrade-version)
  - [Application migration](#application-migration)
  - [Dataset migration](#dataset-migration)
  - [Requester migration](#requester-migration) 
- [JS library](#js-library)

## CLI users

### SDK upgrade version

Upgrade iExec SDK CLI to v8:

```bash
npm i -g iexec@8

iexec -V
# 8.0.0
```

### Application migration

With the support of Gramine for confidential computing, the workflow for deploying and managing a dapp has slightly evolved.

#### Standard app migration

The application must be published to the v8 marketplace with its sell order, using the same Docker image and I/O management as before.

#### Scone app migration

Starting from the same Docker image and the same I/O management, you only need to rebuild your docker image with the new V8 sconifier sconify.sh

[More details](https://documentations.iex.ec/staging/v/v8-staging/for-developers/confidential-computing/choose-your-tee-framework/create-your-first-sgx-app#build-the-tee-docker-image)

The app initialization must explicitly declare the Scone tee framework.

```bash
iexec app  init --tee-framework scone
```

Deploy your application to the v8 marketplace:

```bash
iexec app deploy <app-address> [options]
```

Edit the iexec.json file with the new "tee scone" tag before signing and publishing your sell order.

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

If your application uses a secret, push it to the v8 SMS (Secret Management Service):

```bash
iexec app push-secret <app-address> [options]
```

### Dataset migration

DDataset developers should deploy their v7 dataset to v8 without making any modifications, and then push the dataset secret to v8 SMS. Additionally, they should publish their dataset's sell order on the v8 marketplace.

Deploy your dataset to the v8 marketplace:

```bash
iexec dataset deploy <dataset-address> [options]
```

Push your dataset secret to the v8 SMS:

```bash
iexec dataset push-secret <dataset-address> --secret-path <secret-path> [options]
```

Publish your dataset order with the correct tag

| Tee framework | V7 | V8 |
| --- | --- | --- |
| Tag Scone | "0x0000000000000000000000000000000000000000000000000000000000000001" | "0x0000000000000000000000000000000000000000000000000000000000000003" |
| Tag Gramine | n/a | "0x0000000000000000000000000000000000000000000000000000000000000005" |

### Requester migration

Requesters must log in to the Result Proxy v8 to store their results. To use the result encryption feature, they must also push their public key to the v8 SMS.

Login to the v8 Result proxy:

```bash
iexec storage init

# if you want to use the Gramine TEE framework
iexec storage init --tee-framework gramine
```

Push your encryption key to the v8 SMS:

{% hint style="info" %}
To generate your encryption keypair 
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

Publish your requester secret in the v8 SMS

```bash
iexec requester push-secret [options]
```

## JS library

Upgrade the iExec SDK JS library to v8 in your project's dependencies.

Then, migrate your assets in a similar way as with the CLI.

```bash
npm i iexec@8
```
