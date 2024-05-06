# v7 to v8 migration

iExec v8 comes with some breaking changes, follow this guide to migrate from v7 to v8.

{% hint style="info" %}

The v7 iExec Marketplace is still supported until the next v9 release.

[V7 Marketplace](https://v7.market.iex.ec)

{% endhint %}

{% hint style="info" %}

The iExec Testnet blockchain (aka Viviani) is no longer available. It is necessary to port your dApps to the iExec Sidechain (aka Bellecour) by redeploying all your digital assets: apps, datasets, workerpools and any related orders.

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

With the early work around Gramine support for Confidential Computing applications, the workflow for deploying and managing a dapp has slightly evolved.

#### Standard app migration

The application must be published to the v8 marketplace with its sell order, using same Docker image and I/O management as before.

#### Scone app migration

Starting from the same Docker image and the same I/O management, you only need to rebuild your docker image with the new v8 sconifier (`sconify.sh` script). See more details [here](../for-developers/confidential-computing/create-your-first-sgx-app.md#build-the-tee-docker-image).

The app initialization must explicitly declare the Scone TEE framework.

```bash
iexec app  init --tee-framework scone
```

Deploy your application to the v8 marketplace:

```bash
iexec app deploy <app-address> [options]
```

Edit `iexec.json` file with the new "tee scone" tag before signing and publishing your sell order.

```json
{
  "order": {
    "apporder": {
      "app": "<your-app-address>", // starts with 0x
      "appprice": "<unitary-usage-price>",
      "volume": "<allowed-usage-count>",
      "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
      "datasetrestrict": "0x0000000000000000000000000000000000000000",
      "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
      "requesterrestrict": "0x0000000000000000000000000000000000000000"
    }
  }
}
```

{% hint style="info" %}

For more information, please refer to [Manage your apporders](../for-developers/advanced/manage-your-apporders.md).

{% endhint %}

#### App secret

If your application uses a secret, push it to the v8 SMS (Secret Management Service):

```bash
iexec app push-secret <app-address> [options]
```

### Dataset migration

Dataset developers should deploy their v7 dataset to v8 without making any modifications, and then push the dataset secret to the v8 SMS. Additionally, they should publish their sell order for the dataset on the v8 marketplace.

Deploy your dataset to the v8 marketplace:

```bash
iexec dataset deploy <dataset-address> [options]
```

Push your dataset secret to the v8 SMS:

```bash
iexec dataset push-secret <dataset-address> --secret-path <secret-path> [options]
```

Edit `iexec.json` file with the new "tee scone" tag before signing and publishing your sell order.

```json
{
  "order": {
    "datasetorder": {
      "dataset": "<your-dataset-address>", // starts with 0x
      "datasetprice": "<unitary-usage-price>",
      "volume": "<allowed-usage-count>",
      "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
      "apprestrict": "0x0000000000000000000000000000000000000000",
      "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
      "requesterrestrict": "0x0000000000000000000000000000000000000000"
    }
  }
}
```

{% hint style="info" %}

For more information, please refer to [Manage you datasetorders](../for-developers/advanced/manage-your-datasetorders.md).

{% endhint %}

### Requester migration

To use the result encryption feature, requesters must push their public key to the v8 SMS.

Push your encryption key to the v8 SMS:

{% hint style="info" %} To generate your encryption keypair

```bash
iexec result generate-encryption-keypair
```

{% endhint %}

```bash
iexec result push-encryption-key [options]
```

#### Requester secret

Publish your requester secret to the v8 SMS

```bash
iexec requester push-secret [options]
```

## JS library

Upgrade the iExec SDK JS library to v8 marketplace in your project's dependencies.

Next, you should proceed to transfer your assets to the v8 marketplace using a method similar to the one employed with the CLI, previously presented on this page.

```bash
npm i iexec@8
```
