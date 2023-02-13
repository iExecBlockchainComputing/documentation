# Access confidential assets from your app

{% hint style="warning" %}
Before going any further, make sure you managed to [Build with a TEE framework](choose-your-tee-framework.md).
{% endhint %}

### Secret Management Service (SMS)

You can use confidential assets on iExec thanks to the _iExec Secret Management Service_. This service verifies that the enclave asking for secrets is authorized to do so. Any user - as a confidential asset provider - declares on the blockchain which enclaves are authorized to access it. For each task, the SMS will query the blockchain to determine if the enclave requesting secrets is indeed whitelisted for it.

As a general flow, to make your confidential asset available on iExec, you should first encrypt it using the SDK, before making the encrypted file publicly available. Deploy your confidential asset on the blockchain, then push the encryption key into the SMS.

- [Attach a secret to your app](app-developer-secret.md)
- [Access requester secrets from your app](requester-secrets.md)
- [Access a confidential dataset from your app](sgx-encrypted-dataset.md)
