---
sidebar_position: 0
sidebar_label: Glossary
slug: /learn/glossary
---

# Glossary

### Wallet account

A wallet account serves as your identity in the Venom ecosystem, it is a specific type of [Smart Contract](glossary.md#smart-contract) designed to interact with your Venom balance and other [Smart Contracts](glossary.md#smart-contract).

Users who intend to send Venom tokens to network participants must first deploy a wallet account.

:::info
Learn how to create a wallet account by [Clicking Here](../general/wallet/creating-new-wallet.md)
:::

All supported cryptocurrency wallets can calculate the address of your wallet account based on its type ([Default](glossary.md#default-wallet), [Multisig](glossary.md#multisig-wallet)) and your [Public key](glossary.md#keys) even before it is deployed. You will be able to receive token transfers to this address immediately, as it has been calculated.

### Address

The smart contract's unique public identifier in the network stores the code and state of the contract and serves as the entry point for messages directed to it.

The address is composed of two parts: the identifier of the [Workchain](glossary.md#workchain) and the computed part.

Example: `0:4de50f6789111213a3141516b7fed892fc123ca22158c0d6d0d34daf4c6a7a0a`

`0` – _workchain\_id,_ `3de...7a0a` _– computed\_part_

A workchain\_id is an integer identifier defining a [Workchain](glossary.md#workchain).

The computed part of the address is a 256-bit internal address determined by the [Hash of the code](glossary.md#hash-of-the-code) and the data contained in the [Constructor Message](glossary.md#constructor-message). It can be calculated even before the contract is deployed on the network. This means that it is possible to send messages, including value-bearing messages, to contracts that have not yet been deployed.

### Block

A group of information that includes [Transactions](glossary.md#transaction), outbound messages, and updates to the state.

### Block Explorer <a href="#block-explorer" id="block-explorer"></a>

A web application where a user can explore the blocks, messages, transactions, and accounts in the network.

### Bridge <a href="#bridge" id="bridge"></a>

A network of relayers that connect two or more blockchains enables the transfer of assets from one chain to another. Venom network supports bridges with Ethereum, Binance Smart Chain, and Fantom Opera.

### Consensus

A fault-tolerant mechanism employed in blockchain networks to reach an agreement on a specific data value among a group of participants. The Venom network's algorithm is a Proof-of-stake consensus algorithm from the Byzantine Fault Tolerant (BFT) family of algorithms.

### Constructor message

[An Account](glossary.md#wallet-account), or [Smart Contract](glossary.md#smart-contract), is established by sending a specific constructor message to its address. The message includes the smart contract's initial code and initial data.

### Commission

Validators are rewarded for their participation in network security by handling transactions and taking part in the consensus process.

### Crypto wallet

A hardware or software wallet that stores [Public/Private Keys](glossary.md#keys), and [Seed Phrases](glossary.md#seed-phrase) for signing cryptocurrency transactions. [Crypto Wallets](glossary.md#crypto-wallet) in the Venom ecosystem are able to work with [Wallet Accounts](glossary.md#wallet-account), calculate their address by the [Public Key](glossary.md#keys), deploy them, and perform token transfers.

### Dapp <a href="#dapps" id="dapps"></a>

A decentralized application is typically presented as a web interface that interacts with smart contracts deployed on the blockchain network, instead of a centralized API. Users typically interact with dApps through a cryptocurrency wallet or browser.

### External message

A message that is not generated by a [Smart Contract](glossary.md#smart-contract) within the Venom network but is received from off-chain. A common example occurs when a user wants to transfer funds from one [Account](glossary.md#wallet-account) to another. In this case, the user sends a signed external message to [The Wallet Account](glossary.md#wallet-account), and the [Wallet Account](glossary.md#wallet-account) authorizes the sender and permits them to pay for the transaction fee from their balance. External messages differ from [Internal Messages](glossary.md#internal-message) as they cannot carry value and therefore cannot pay for their own processing (i.e., their "gas").

### Hash of the code

Sha256 hash of the contract code and the initial state.

### Default Wallet

A wallet account with straightforward logic for transferring funds, suitable for the majority of users.

### Transaction

The outcome of message execution that comprises information about the sender, the transaction logical time, incoming and outgoing messages, and the impact of the transaction on the state.

<details>

<summary>Components of a transaction</summary>

* The account to which the transaction belongs.
* The logical time of the transaction.
* One or zero inbound messages m processed by the transaction.
* The number of generated outbound messages n≥0.
* The outbound messages m1, …, mn.
* The initial state of account (including its balance).
* The final state of account (including its balance).
* The total fees collected by the validators.

</details>

### Homogeneous

In a [Multi-Blockchain](glossary.md#multi-blockchain) system, all the blockchains can be of the same type and have the same rules (i.e. using the same format of transactions, the same virtual machine for executing [Smart-Contract](glossary.md#smart-contract) code, sharing the same cryptocurrency, etc.) and this similarity is deliberately exploited, but with different data in each blockchain. In this scenario, the system is considered homogeneous.

### Heterogeneous

In a [Multi-Blockchain](glossary.md#multi-blockchain) system, when different blockchains (typically referred to as [Workchains](glossary.md#workchain) in this case) can have different "rules", the system is considered heterogeneous.

### Hypercube routing

The method of transmitting messages from one [Shardchain](glossary.md#shardchain) to another.

### Keys

The private and public keys are large numbers that are utilized in a complex mathematical process for encrypting, decrypting, signing, and verifying messages.

### Interoperability

The capability of a blockchain to transfer information and share data with other blockchains.

### Internal message

The message type that one contract sends to another contract.

### Mainnet

Mainnet, short for "main network," refers to the primary public blockchain network.

### Masterchain

The master blockchain holds the necessary information to achieve [Consensus](glossary.md#consensus) among validators.

### Multisig wallet

A multi-signature wallet is a wallet that is employed by two or more users to increase security by requiring multiple signatures to sign transactions before execution.

### Multi-blockchain

A blockchain where multiple chains can coexist simultaneously.

### Workchain

A type of blockchain in the Venom network under the Masterchain, which has its own state transition functions, cryptographic primitives, transaction or block structures, and native cryptocurrency, while leveraging the security of the Masterchain.

### Validator

Designated nodes, known as validators, produce and sign new blocks in the blockchain.

### Delegator

A delegator allocates its tokens to a validator to participate in maintaining network security. Delegators share revenue and risks with their validators.

### Nominator

A participant in network decentralization by bonding their tokens, nominates a validator to participate in the consensus protocol and create blocks.

### Seed phrase

A seed phrase is a sequence of words generated by a [Cryptocurrency Wallet](glossary.md#crypto-wallet) that grants access to the cryptocurrency associated with that wallet.

### Smart contract

Code that performs arbitrary state changes within the blockchain, executable on [TVM](glossary.md#tvm) is the Turing complete [Virtual Machine](glossary.md#virtual-machine).

### Staking pool

Any network participant can deploy a smart contract that enables other network participants to nominate its owner for the role of a validator and participate in the distribution of the validator reward.

### Shardchain

It follows the same rules and block format as the workchain, but is responsible for only a subset of accounts, based on several initial (most significant) bits of the account address. Since all these shardchains share a common block format and rules, the Venom Blockchain is homogeneous in this aspect, similar to what has been proposed in one of the Ethereum scaling proposals.

### Virtual machine

The Venom network supports a Turing-complete virtual machine for executing smart contract code.

### Wallet types

Types of [Wallet Account](glossary.md#wallet-account) smart contracts. Currently, it supports two types of wallets [Default](glossary.md#default-wallet) and [Multisig](glossary.md#multisig-wallet)
