# Go to production

## Standard application

If you're developing a standard application, then you know everything needed to go to production! [Publish your orders](advanced/manage-your-apporders.md) with the price you think they are worth and here you go!

## Confidential Computing application

If you're developing a Confidential Computing application, then you'll need to be aware of important information. 

### Remote attestation
With the integration of TEE frameworks in iExec, you do not need to worry about [remote attestation](../help/glossary.md#remote-attestation). iExec does that for you, guaranteeing that the code is running inside an enclave.

### The SMS is not meant to be a recovery storage

{% hint style="warning" %}
The following applies only to the Scone framework.
{% endhint %}

Let's talk about the [SMS](confidential-computing/access-confidential-assets.md). As seen before, this is a critical component. It holds all the secrets you give it, so nobody should be able to access its memory. That's why the production SMS runs inside an enclave.

The consequences are fairly easy to explain: if this enclave is lost, everything it contains is lost as well! To ensure security for your secrets, the SMS has been designed so nobody can retrieve the secrets it holds - even iExec, the root-privilege user, can't retrieve the secrets they don't own. These secrets are only exposed outside the enclave when they are sent to the CAS over a RA-TLS channel to create the Scone session. Please remember to keep your secrets locally in case the enclave is lost. Otherwise, nobody will be able to restore them.

As a reminder, a Scone enclave is protected by its application hash (AKA [MrEnclave](../help/glossary#mrenclave)) and the machine hardware.

Below is a graph showing how the secrets and session mechanism works:
```mermaid
graph TD
    S[Secret owner] -->|1. Push secret| SMS
    Req[Requester] --> |2. Buy task| Chain
    Chain[Blockchain] --> |3. Notify task to compute| Worker[Worker/Workerpool]
    Worker --> |4. Request:<br> Create session of secrets for task| SMS
    SMS --> |5. Check authorization <br>for secrets| Chain
    SMS --> |6.a. Get encrypted secrets| SMSDB
    SMS --> |6.b. Get SMS database decryption key| CAS
    SMS --> |7. Push session of secrets <br>which will be only <br> accessible to <br>the Application| CAS
    SMS --> |8. Response: <br>session ID| Worker
    Worker --> |9. Launch application with session ID| App[Application]
    App --> |10. Get all secrets for this session ID over RA-TLS channel| CAS
    SMS --- SMSCPU
    App --- AppCPU(Intel SGX CPU)
    CAS --- CASDB
    CASDB --- |Encryption is performed using a private Seal Key that <br>is unique to that particular platform/hardware| CASCPU

    subgraph "Security Services"
        SMS[Scone SMS]
        SMSDB[(Encrypted <br>SMS<br> database)]
        SMSCPU(Intel SGX <br>CPU)
        CAS[CAS: Configuration and Attestation Service]
        CASDB[(CAS Database)]
        CASCPU(Specific Intel SGX CPU)
    end

    subgraph "Legend"
        IN[Enclave protection]
        Out[No enclave protection]
    end

    style SMS fill:green,color:white
    style SMSCPU fill:green,color:white
    style CAS fill:green,color:white
    style CASDB fill:green,color:white
    style CASCPU fill:green,color:white
    style App fill:green,color:white
    style AppCPU fill:green,color:white
    style IN fill:green,color:white
```

If the application hash changes, then the old enclave memory becomes inaccessible for the new enclave. If the hardware changes, then the same applies. You've got it, if the SMS is updated, the secrets it holds are lost. If the SMS is migrated to another instance, the secrets it holds are lost. This may happen at any moment, with or without notice. So, be careful with your secrets and keep them locally.
