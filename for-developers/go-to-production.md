# Go to production

All secrets are pushed to an SMS where it is securely saved protected by an enclave, which means even we, the root-privilege user, cannot access it. Only applications you have authorized can get this key.

Unquestionably, the SMS is a critical component. That's why it runs inside an enclave for Scone tasks.