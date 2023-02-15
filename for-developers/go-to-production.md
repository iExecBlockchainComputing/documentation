# Go to production

## Standard application

If you're developing a standard application, then you know everything needed to go to production! [Publish your orders](advanced/manage-your-apporders.md) with the price you think they are worth and here you go!

## Confidential Computing application

If you're developing a Confidential Computing application, then you'll need to be aware of important information. 

### Remote attestation
With the integration of TEE frameworks in iExec, you do not need to worry about [remote attestation](../help/glossary.md#remote-attestation). We do that for you, we guarantee that the code is running inside an enclave.

### The SMS is not meant to be a recovery storage

{% hint style="warning" %}
The following applies only to the Scone framework.
{% endhint %}

Let's talk about the [SMS](confidential-computing/access-confidential-assets.md). As we have seen before, this is a critical component. It holds all the secrets you give it, so nobody should be able to access its memory. That's why our production SMS runs inside an enclave.

The consequences are fairly easy to explain: if this enclave is lost, everything it contains is lost as well! To ensure security for your secrets, we have designed the SMS so nobody but the authorized applications can retrieve the secrets it holds - even we, iExec, the root-privilege user, can't retrieve the secrets we don't own. Please remember to keep your secrets locally in case the enclave is lost. Otherwise, nobody will be able to restore them.

As a reminder, a Scone enclave is protected by its application hash (AKA [MrEnclave](../help/glossary#mrenclave)) and the machine hardware.
```mermaid
graph TD
    S[Secret owner] -->|1. Push secret| SMS
    Req[Requester] --> |2. Buy task| Chain
    Chain[Blockchain] --> |3. Notify task to compute| Worker[Worker/Workerpool]
    Worker --> |4. Request: Create session <br>of secrets for task| SMS
    SMS --> |5. Check authorization for secrets| Chain
    SMS --> |6.a. Get encrypted secrets| SMSDB
    SMS --> |6.b. Get SMS database decryption key| CAS
    SMS --> |7. Push session of secrets which will be only <br> accessible to the Application in enclave| CAS
    SMS --> |8. Response: session ID| Worker
    Worker --> |9. Launch application with session ID| App[Application in enclave]
    App --> |10. Get all secrets for this session ID over RA-TLS channel| CAS
    SMS --- SMSCPU
    App --- AppCPU(Intel SGX CPU)
    CAS --- CASDB
    CASDB --- |Encryption is performed using a private Seal Key that is unique to that particular platform/hardware| CASCPU

    subgraph "Security Services"
        SMS[Scone SMS in enclave]
        SMSDB[(Encrypted SMS database)]
        SMSCPU(Intel SGX CPU)
        CAS[CAS in enclave: Configuration and Attestation Service]
        CASDB[(CAS Database)]
        CASCPU(Specific Intel SGX CPU)
    end

    style SMS fill:green
    style SMSCPU fill:green
    style CAS fill:green
    style CASDB fill:green
    style CASCPU fill:green
    style App fill:green
    style AppCPU fill:green
```

If the application hash changes, then the old enclave memory becomes inaccessible for the new enclave. If the hardware changes, then the same applies. You've got it, if the SMS is updated, the secrets it holds are lost. If the SMS is migrated to another instance, the secrets it holds are lost. This may happen at any moment, with or without notice. So, be careful with your secrets and keep them locally.
