# Access confidential assets from your app

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
{% endhint %}

### Secret Management Service (SMS)

You can use confidential assets on iExec thanks to the _iExec Secret Management Service_. This service verifies that the enclave asking for secrets is authorized to do so. Any user - as a confidential asset provider - declares on the blockchain which enclaves are authorized to access it. For each task, the SMS will query the blockchain to determine if the enclave requesting secrets is indeed whitelisted for it.

The SMS currently supports 3 types of secrets:
1. [Application developer secret](app-developer-secret.md): This secret is directly accessible from your application code as an environment variable. This secret is owned by the developer of the application. It can be any king of data (API key, private key, token, ..) as long as it respects the size limit (max. 4096 kB).
2. [Requester secrets](requester-secrets.md): These secrets are directly accessible from the application as an environment variables, as long as the requester has decided to share them with it. These secrets can be any other data as long as they respect the size limit (max. 4096 kB). Before buying a task, a requester secret is pushed into the SMS and is not linked to any application. When a requester buys a task, the requester can declare which secrets can be accessed by the application. Doing so, a single requester secret can be shared with multiple applications.
3. [Dataset secret](sgx-encrypted-dataset.md): A dataset secret is not directly accessible from the application code but the decrypted content of the dataset is. If a dataset is authorized to be used in a certain application, the content will be automatically decrypted in the application enclave. To be able to monetize such dataset on iExec, the original dataset must be encrypted using the iExec SDK. The encrypted dataset file must be publicly available, while the encryption key must be pushed into the SMS.
