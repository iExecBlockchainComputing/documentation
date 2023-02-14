# Go to production

With the integration of SCONE in iExec, you do not need to worry about [remote attestation](../help/glossary.md#remote-attestation). We do that for you, we guarantee that the code is running inside an enclave.

All secrets are pushed to an SMS where they are securely saved, protected by an enclave, which means even we, the root-privilege user, cannot access them. Only applications you have authorized can get this key.

Unquestionably, the SMS is a critical component. That's why it runs inside an enclave for Scone tasks.