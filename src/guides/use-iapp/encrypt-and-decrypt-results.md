---
title: Encrypt results and decrypt them
description:
  Learn how to encrypt iApp results end-to-end and decrypt them locally using
  the iExec SDK
---

# 🔐 Encrypt Results and Decrypt Them

Secure your outputs with end‑to‑end encryption so only you (the beneficiary) can
read them. Results leave the enclave and may traverse untrusted storage and
networks; encryption ensures nobody else (operators, storage providers,
intermediaries) can access the content. In this guide, you will generate a key
pair, publish the public key to the Secret Management Service (SMS) — which
provides it at runtime to the enclave running your iApp — run tasks with
encrypted results, and download and decrypt them locally.

::: info You don't need to change your application's code or redeploy it to add
this feature. :::

## Prerequisites

Before you begin, make sure you have the iExec SDK installed.

::: code-group

```sh [npm]
npm install iexec
```

```sh [yarn]
yarn add iexec
```

```sh [pnpm]
pnpm add iexec
```

```sh [bun]
bun add iexec
```

:::

## 1) Generate your encryption key pair

The beneficiary key pair is the root of trust for result confidentiality. The
public key will be used inside the TEE to encrypt results for the beneficiary;
the private key stays with the beneficiary to decrypt them locally.

Run from your iExec project directory:

```bash
iexec result generate-encryption-keypair
```

This creates two files in `.secrets/beneficiary/`:

```
.secrets/
└─ beneficiary/
   ├─ <0x-your-wallet-address>_key       # PRIVATE KEY (keep safe)
   └─ <0x-your-wallet-address>_key.pub   # PUBLIC KEY
```

Back up the private key securely. You will only need it locally to decrypt
results.

## 2) Push your public key to the SMS

The Secret Management Service securely delivers your public key, at runtime, to
the enclave running your iApp. Without this, the iApp cannot encrypt outputs for
you.

Make the public key available to TEEs at runtime:

```bash
iexec result push-encryption-key --tee-framework scone
```

Verify it:

```bash
iexec result check-encryption-key --tee-framework scone
```

## 3) Run the iApp with encrypted results

The --encrypt-result flag instructs the platform to perform envelope encryption
inside the enclave using your public key, so the archive that leaves the TEE is
unreadable to others.

Trigger a task and request encrypted outputs:

```bash
iexec app run <0x-app-address> \
  --workerpool <0x-workerpool-address> \
  --tag tee,scone \
  --encrypt-result \
  --watch
```

When completed, download the results archive:

```bash
iexec task show <0x-task-id> --download
```

Inside the archive, `iexec_out/result.zip.aes` is encrypted.

Note: Results are encrypted for the task beneficiary. Ensure the beneficiary
address is yours to be able to decrypt the archive.

If you extract the archive and try to read the encrypted file, you'll see
unreadable content:

```bash
mkdir /tmp/trash && \
    unzip <0x-your-task-id>.zip -d /tmp/trash && \
    cat /tmp/trash/iexec_out/result.zip.aes
```

The output will look like:

```bash
)3XqYvzEfRu<\ݵmm疞rc(a{{'ܼ͛q/[{hgD$g\.kj"s?"hJ_Q41_[{XԚa蘟vEr肽
Յ]9WTL*tdzO`!e&snoL3K6L9%
```

This confirms the results are properly encrypted and unreadable without the
private key.

## 4) Decrypt results locally

Results are encrypted end‑to‑end; only your private key can decrypt them. This
step restores the plaintext so you can use the output files.

Use your private key generated in step 1:

```bash
iexec result decrypt iexec_out/result.zip.aes
```

This produces `results.zip`. Extract it to view plaintext outputs:

```bash
unzip results.zip -d my-decrypted-result
```

And you can see the content of your result file:

```bash
$ cat my-decrypted-result/result.txt
Hello, world!
```

Your results are now decrypted and ready to use.

## Notes and tips

- Keep the private key offline and backed up.
- You can rotate keys by re-running generation and push steps; old tasks remain
  decryptable with the old private key.
- iApp code does not need changes to enable result encryption; it is enforced by
  the TEE using the public key from SMS.

## Related guides

- [Outputs](/guides/build-iapp/outputs) - Learn how to generate proper outputs
  from your iApp
- [Run iApp with ProtectedData](/guides/use-iapp/run-iapp-with-ProtectedData) -
  Execute iApp with encrypted data inputs
- [Run iApp without ProtectedData](/guides/use-iapp/run-iapp-without-ProtectedData) -
  Basic iApp execution methods
- [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions) -
  Understanding costs and payment options
- [iApp Generator](/references/iapp-generator) - Build your own confidential
  computing applications
