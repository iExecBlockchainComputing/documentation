---
title: Glossary
description: iExec terms glossary
---

# Glossary

## A

### App

A computer program designed to automate processes. An app is generally under the
control of different communities such as product managers, project owners, or
data center administrators. An app can also be decentralized thanks to the
blockchain: see [DApp](#decentralized-application-dapp).

### Attestation

A process that verifies the integrity and authenticity of a TEE environment.
Attestation proves that code is running in a genuine, unmodified TEE
environment.

**Key Points**:

- **Verification**: Proves the TEE environment is genuine and unmodified
- **Trust Establishment**: Builds trust between parties in confidential
  computing
- **Remote Attestation**: Allows verification of remote TEE environments
- **iExec Integration**: Used to verify worker TEE environments

**Analogy**: Attestation is like having a security guard verify that a secure
facility is legitimate and hasn't been tampered with before allowing access.

## B

### Bellecour Sidechain

iExec's product sidechain. It is linked to Ethereum Mainnet with a bridge
allowing for the transfer of assets between networks. It allows iExec to be used
without paying Ethereum gas fees.

See [Sidechain](#sidechain) and [xRLC](#xrlc) for more information.

### Beneficiary

An entity indicated by the requester that benefits from the result of a
computational execution. It can be the requester, a third party, a smart
contract etc.

## C

### Confidential Computing / Trusted Computing

A technology that ensures computation confidentiality through hardware-level
memory encryption (Trusted Execution Environment or TEE). It allows only
authorized code to run in protected areas and manipulate data securely. These
guarantees are critical for decentralized cloud computing where code runs on
remote machines not controlled by the requester.

See [Trusted Execution Environment (TEE)](#trusted-execution-environment-tee)
for more information

## D

### Decentralized App (DApp)

A dApp built on a decentralized network that combines a smart contract and a
frontend user interface. A DApp has its backend code running on a decentralized
peer-to-peer network. Contrast this with a traditional app where the backend
code is running in fully controlled environments.

See [App](#app) for more information.

### DApp Provider

Writes, configures, and deploys apps on the iExec platform. Those apps can be
DApps or legacy (traditional) apps. Providers can make their apps available for
free or ask for a fixed fee for each use of their app.

### Dataset

A dataset is a collection of related sets of information that is composed of
separate elements, such as numbers, semantic-data or variables, that can be
manipulated by a computer for practical application. For example, data within
the medical industry can be use by healthcare professionals, care providers,
insurers, and government agencies.

### Dataset Provider

Owns datasets that can be monetized in the iExec marketplace.

### Deal

An agreement between all parties (requester and providers) in the iExec network.
A deal is created when requester and providers' orders are matched in the
marketplace and recorded in the PoCo smart contract.

## E

### Enclave

In confidential computing jargon, an "enclave" is the special memory zone
protected by the CPU. For simplicity's sake, you can refer to private regions of
memory defined by Intel® SGX application as "enclaves".

**Key Points**:

- **Protected Memory**: Secure area where sensitive code and data run
- **Hardware Protection**: Protected by CPU security features
- **Isolation**: Completely isolated from the rest of the system
- **SGX Specific**: Term primarily used with Intel SGX technology

**Analogy**: An enclave is like a secure room within a building that only
authorized people can enter and where everything inside is protected.

### Explorer (iExec Explorer)

Tracks and displays all transactions occurring on iExec's platform. It provides
detailed information on the latest deals, tasks, apps, and datasets deployed.

### ERC-20

A standard for fungible tokens. This property makes each token exactly the same
in type and value as another token.

### ERC-721

A standard for non-fungible tokens. This property makes each token unique and
capable of having a different value from another token from the same Smart
Contract. This uniqueness may come from a variety of sources, including age,
rarity, or appearance.

### Ethereum

A decentralized, open-source blockchain with smart contract functionality.
Ethereum proposes using blockchain technology to maintain a decentralized
payment network and to store computer code that can be used to power
decentralized applications.

### EVM (Ethereum Virtual Machine)

The Ethereum's execution environment. This is the virtual machine which executes
the smart contracts on the blockchain.

### Explorer (iExec Explorer)

Tracks and displays all transactions occuring on iExec's platform. It provides
detailed information on the latest deals, tasks, apps, and datasets deployed.

## I

### ICO (Initial Coin Offering)

A fundraising mechanism where a blockchain-based startup mints its own native
crypto asset in exchange for other cryptocurrencies. The goal is to raise funds
and, in turn, create a community of incentivized users who want the project to
succeed so that the presale tokens gain in value.

### iExec Academy

iExec's content aggregator where people can find content related to the project,
including articles, demos, documentation, and tutorials.

### Intel SGX (Software Guard Extensions)

Intel's first-generation TEE technology that protects individual applications or
parts of applications. SGX creates small, secure memory areas called "enclaves"
where sensitive code and data can run safely.

**Characteristics**:

- **Scope**: App-level protection
- **Memory**: Limited secure memory (like a small safe)
- **Code Changes**: Requires significant modifications
- **Best For**: Focused, lightweight applications

**Analogy**: SGX is like installing a small, specialized safe inside your office
for specific valuable items.

### Intel TDX (Trust Domain Extensions)

Intel's next-generation TEE technology that protects entire virtual machines.
TDX provides larger secure memory spaces and requires minimal code changes
compared to SGX.

**Characteristics**:

- **Scope**: Virtual machine-level protection
- **Memory**: Large secure memory space (multi-GB+)
- **Code Changes**: Minimal changes needed - "lift and shift" approach
- **Best For**: Complex applications, legacy systems, AI workloads

**Analogy**: TDX is like moving your entire office into a secure building where
everything is protected.

## M

### Mainnet

An independent blockchain running its own peer-to-peer network with its own
technology and protocol (e.g. Bitcoin and Ethereum). It is a live blockchain
where its own cryptocurrencies or tokens have value (when compared against a
testnet network).

### Marketplace (iExec)

The iExec Marketplace connects resource providers with resource users, allowing
anyone to monetize or rent computing power, datasets, and applications. The
marketplace is a smart contract that acts as escrow anytime you need the network
to exchange computing assets.

### Minting

A decentralized method that enables to generate a new token without the
involvement of a central authority. It can either be a non-fungible token or a
crypto coin.

Please note that minting a Non-Fungible Token (NFT) is a different procedure. To
mint an NFT, users usually sign up with a cryptocurrecny wallet on an NFT
marketplace (or other platform). Then that create an NFT by uploading a file and
paying for the creation. Once the transaction is verified, a new NFT is minted.
This process to add NFTs to a blockchain allows creators to sell their photos,
videos, and digital 3D objects.

See [ERC-721](#erc-721) for more information.

### MREnclave

The MREnclave is a hash value that identifies every enclave. It is obtained from
the content of memory pages and access rights. The MREnclave is available after
the TEE application is built.

## N

### nRLC

N in nRLC stands for nano RLC.

nRLC is the smallest subdivision of the RLC token, 1 RLC equals to 10^9 nRLC.

nRLC is the base unit for the PoCo, orders prices in a deal are calculated in
nRLC.

See [Deal](#deal) and [PoCo](#poco-proof-of-contribution) for more information.

## O

### Oracle

Data feeds that connect the off-chain world to blockchain products. Oracles act
as a link between data that exists in traditional web2 and blockchain smart
contracts, and are used to query data in smart contracts.

### Oracle Factory

The iExec developer interface which allows users to create custom oracles. This
interface permits users to create oracles for any type of data, without
requiring coding experience, in a few minutes directly from their browser.

## P

### PoCo (Proof of Contribution)

The protocol used by iExec for consensus over off-chain computing.

The iExec platform provides a network where application providers, workers, and
users can gather and work together. The fully decentralized nature of iExec
implies that no single agent is trusted by default, and that those agents
require incentives to contribute correctly. PoCo is a protocol designed to
provides trust in an open and decentralized environment of untrusted machines.
It also orchestrates the different contributions to the iExec network, ensuring
payments are always fair and timely.

## R

### Remote attestation

As explained by
[Intel](https://software.intel.com/en-us/sgx/attestation-services), the remote
attestation is the process that happens before any exchange between a remote
provider and an enclave. It allows the provider to verify that the expected
software is running in an Intel® SGX-protected way, as well as getting other
details about the application being attested. If the attestation is successful,
a secure communication channel is established between the provider and the
enclave, and secrets can safely land in the latter.

### Requester

A person who buys the execution of a task in the iExec marketplace.

### RLC (Run on lots of computers)

An Ethereum (ERC20) token launched during the iExec ICO in 2017. This utility
token is used on the iExec marketplace to buy and sell computing assets.

### Roadmap

Describes business and technical developments towards the adoption of the iExec
protocol. The timeline for this roadmap is organized by quarter for an overview
on ongoing projects and the future work. It is available here
<https://www.iex.ec/news/iexec-2025-roadmap-and-rlc-ecosystem>

## S

### Scheduler

Organizes the work distribution for workers in a worker pool.

### Scone Framework

A high-level framework that simplifies the development of Intel SGX
applications. Scone provides tools and libraries to make SGX development easier
and more accessible.

**Key Points**:

- **SGX Simplification**: Makes SGX development easier and more accessible
- **iExec Integration**: Used by iExec to simplify SGX application development
- **High-Level Tools**: Provides libraries and tools for SGX development
- **Production Ready**: Used in production iExec SGX applications

**Analogy**: Scone is like having a toolkit that makes it easier to build secure
applications, similar to how a construction toolkit makes building houses
easier.

### SDK (Software Development Kit)

A set of tools for interaction with smart contracts and the iExec's marketplace.
It is available as a CLI and JS library. Access SDK here:
<https://github.com/iExecBlockchainComputing/iexec-sdk>

### Sidechain

A controlled blockchain deployed over a data center and linked to Ethereum
Mainnet with a bridge permitting to transfer assets between the two. iExec's
sidechain "Bellecour" is iExec's mainnet bridged to ethereum mainnet.

### Smart Contracts

The fundamental building blocks of Ethereum applications. They are computer
programs stored on the blockchain that allows us to convert traditional
contracts into digital parallels. Smart contracts are very logical - following
an if this then that structure. This means they behave exactly as programmed and
cannot be changed.

Nick Szabo used the term "smart contract" in 1994, when he wrote "an
introduction to the concept" and, in 1996, "an exploration of what smart
contracts could do".

### SMS (Secret Management Service)

An encrypted database that stores users' secrets.

### sRLC

S in sRLC stands for Staked RLC.

The sRLC balance of an account reflects the amount of RLC deposited by the
account on the iExec PoCo smart contract. The sRLC balance of an account is
managed by the PoCo smart contracts to ensure payments across the platform
users. At any time, sRLC can be converted to RLC in the wallet by a withdrawal
operation.

### Staking (of RLC)

A mechanism in PoCo that involves a certain amount of Workers' RLC being
'locked-up' during the execution of a task. To prevent malicious workers, the
locked RLC is staked as a security deposit. Workers who computed a false result
will lose their stake.

See [PoCo](#poco-proof-of-contribution) for more information.

## T

### Task

A task within iExec is an instance where computing power is required.

### Testnet

Used by programmers and developers to test and troubleshoot the aspects and
features of a blockchain network to ensure it is ready for mainnet launch.

### Trusted Domain

A secure virtual machine created by Intel TDX technology. Trusted domains are
isolated, protected environments where entire applications can run securely.

**Key Points**:

- **VM-Level Protection**: Protects entire virtual machines, not just parts
- **Multiple Domains**: Can run multiple trusted domains on a single TDX machine
- **Complete Isolation**: Each domain is completely isolated from others
- **TDX Specific**: Term used specifically with Intel TDX technology

**Analogy**: A trusted domain is like having multiple secure offices within one
secure building, where each office is completely private and protected.

### Trusted Execution Environment (TEE)

A hardware secure area used to guarantee the confidentiality, integrity, and
ownership of code and data. Think of TEE as a **secure vault inside your
computer** where sensitive operations happen - like having a private room that
only authorized code can enter.

**Key Benefits**:

- 🔒 **Data Privacy**: Your data is encrypted and protected during processing
- 🛡️ **Code Integrity**: Your code runs exactly as intended, without tampering
- 🌐 **Trust in Untrusted Environments**: Run securely on remote computers you
  don't control

**Real-world analogy**: Imagine a bank vault inside a regular building. The
building (your computer) can be accessed by many people, but the vault (TEE) has
special security measures that keep its contents completely private and secure.

## W

### Workers

Individuals or companies who own computing resources and are willing to make
them available for the computation of tasks against payments in RLC. Similarly
to blockchain miners, workers want a simple solution that will make their
computer part of a large infrastructure that will take care of the details for
them.

### Worker Pools

Organize the contributions of Workers. A worker pool is a group of machines,
often with similar characteristics, that is led by a Pool Manager.

### Worker Pool Manager

In charge of proposing available computing resources (workers) to task
requesters.

## X

### xRLC

X in xRLC stands for eXternal.

A xRLC is the native token of iExec sidechain (it means it is used as ETH on
ethereum mainnet). A xRLC is a RLC bridged on an external sidechain and only the
bridge can mint\* xRLC.

The bridge helps maintain the parity between the main chain and the external
chain. For example, one xRLC on the sidechain has the same value as 1 RLC on the
mainchain.

See [Sidechain](#sidechain), [Bellecour Sidechain](#bellecour-sidechain) or
[Minting](#minting) for more information.
