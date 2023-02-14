# Access confidential assets from your app

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
{% endhint %}

### Secret Management Service (SMS)

You can use confidential assets on iExec thanks to the _iExec Secret Management Service_. This service verifies that the enclave asking for secrets is authorized to do so. Any user - as a confidential asset provider - declares on the blockchain which enclaves are authorized to access it. For each task, the SMS will query the blockchain to determine if the enclave requesting secrets is indeed whitelisted for it.

The SMS currently supports 3 types of secrets:
1. [Application developer secrets](app-developer-secret.md): those are short secrets - max. 4096 kB -, owned by the developer of an application. API keys are the main target for this type of secrets, but they can be any other data as long as they respect the size limit.
2. [Application requester secrets](requester-secrets.md): those are also short secrets - max. 4096 kB -, owned by any application requester. API keys are the main target for this type of secrets, but they can be any other data as long as they respect the size limit. Note an application requester secret is pushed into the SMS and is stored without being linked to any application. When a requester buys a task, they have to declare the secrets they want to use.
3. [Datasets](sgx-encrypted-dataset.md): those are long secrets. They have to be stored outside the iExec platform. Thus, they have to be encrypted using the SDK before making the encrypted dataset file publicly available. The asset description can then be deployed on the blockchain, before the encryption key is pushed into the SMS.
