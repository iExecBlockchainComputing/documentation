---
description: >-
  The dapp of the week is Websensors. The team, based in Brazil, is delivering a
  very exciting product.
---

# Websensors \(Exemple\)

The dapp of the week is **Websensors**. The team, based in Brazil, is delivering a very exciting product. Initiated by [Ricardo Marcacini](https://www.researchgate.net/profile/Ricardo_Marcacini), São Paulo University Ph.D., and currently principal researcher of the Websensors project at the Federal University of Mato Grosso do Sul \(Brazil\), Websensors is one of the most promising winners of the [Dapp Challenge](https://medium.com/iex-ec/dapp-challenge-15-new-applications-using-the-iexec-decentralized-cloud-a25c33208667). Websensors are artificial-intelligence-based oracles for smart contracts. What could that mean?

## AI-based oracles for smart contracts <a id="44e9"></a>

In the blockchain world, an ‘oracle’ is a smart contract that makes ‘real world’ data available to be used in other smart contracts. These live data feeds can be used as conditions to trigger transactions on-chain \(payments, reputation, etc\). The quality and availability of this data is extremely important. Some are reliable and trustworthy, some others are not. The oracles provided by Websensors have these abilities and they’re transparent because both the algorithm and datasets used are public and therefore auditable. The iExec[ Proof-of-Contribution](https://medium.com/iex-ec/poco-series/home) protocol guarantees the off-chain execution of each computation and this is essential in the context of creating powerful decentralized apps.

Ricardo Marcacini, leader of the project explains why iExec is essential in for the realisation of the Websensors Dapp in [How can we use millions of events available on the web to make smart contracts really smart?](https://websensors.net.br/iexec/):

> In particular, our interest is in the[ PoCo Protocol \(Proof-of-Contribution\)](https://medium.com/iex-ec/poco-series/home), which provides a consensus mechanism among several nodes that run a given computer program. In addition,[ iExec also offers distributed computing as a commodity](https://market.iex.ec/), which allows us to run the sensors at a low cost.

This is a quote from[ How can we use millions of events available on the web to make smart contracts really smart?](https://websensors.net.br/iexec/) by Ricardo Marcacini, leader of the project.

For anyone interested in learning more, I would advise reading the full text written by the main architect of the project:[WebsensorsOur proposal is to use Websensors as an Oracle. Such a solution can be seen as a hybrid strategy in which \(1\) humans…websensors.net.br](https://websensors.net.br/iexec/?source=post_page-----70dc9c333e83----------------------)

This demo video also gives a good idea of how Websensors work:

This is only an example that can lead to decentralized insurance system, but you can imagine a lot ****of different decentralized applications \(dapps\) each with their own business logic, relying on Websensors to act as the link between real world data and smart contracts on the blockchain.![](https://miro.medium.com/max/30/0*xkJdqiMZuC9yVOJJ?q=20)![](https://miro.medium.com/max/1600/0*xkJdqiMZuC9yVOJJ)

The algorithm used is the [nearest neighbour algorithm](https://en.wikipedia.org/wiki/Nearest_neighbour_algorithm) model. The Websensors builder page, allows users to very easily utilise sophisticated machine learning practices and can:

* Enter keywords to search for historical events
* Set date ranges to filter these events
* Define the region of the events
* Select a training set of events that will be used to set an event classifier
* Build a new sensor using machine learning

When you click on the BUILD SENSOR button, you actually train the model and deploy the corresponding smart contract \(like [this one](https://websensors.net.br/sensors/dc76ea8242e7456bb12c4b265e8c7c00fb767672) for example\) that will be called by other smart contracts.

So in this case, when the user clicks this button, he has to sign a transaction using Metamask to interact with the blockchain and send the requested amount of RLC, the native iExec token.

One of the strengths of this system is that it will allow data providers to monetise their datasets. Application providers already can monetise services or micro-services, and workers on the network also get rewarded.

![](https://miro.medium.com/max/1600/0*IupN3XBj1bdzXH-8)

## Powered by iExec <a id="63f0"></a>

Here at iExec, we’re excited about this app in particular because it uses some of the key features of iExec:

* Since the core features of Websensors are built on iExec, the whole application can go ‘fully decentralized’ faster than its competitors. The process of removing third parties not only makes sense from a technical standpoint, users directly benefit from it: no single point of failure, no downtime, low prices.
* The computation is done off-chain, meaning done by one of the available workers of the network. This type of computation would have been costly to get executed on Ethereum or any other blockchain
* The function is triggered by a user when he pays in ETH and RLC. This pay-per-task approach is another big advantage of iExec: no subscription plan and no limit in the design of your app.

