---
title: The Graph Explorer
description:
  Explore and query blockchain data using The Graph's decentralized indexing
  protocol. Access iExec subgraphs on Arbitrum, Arbitrum Sepolia, and Bellecour
  networks.
---

# 🔍 The Graph Explorer

The **iExec protocol** uses **The Graph** as a decentralized protocol for
indexing and querying blockchain data across multiple networks. This powerful
tool allows developers and users to efficiently retrieve and analyze on-chain
data through GraphQL queries.

<ImageViewer
  :image-url-dark="theGraphLogoImage"
  image-alt="The Graph Protocol"
  link-url="https://thegraph.com/docs/en/subgraphs/quick-start/"
/>

## 🎯 What is the Graph?

The Graph is a decentralized protocol for indexing and querying blockchain data.
It enables developers to build and publish open API called **subgraphs** that
applications can query using GraphQL. This makes it easy to access blockchain
data without having to run your own indexing infrastructure.

<ImageViewer
  :image-url-dark="theGraphProtocolImage"
  image-alt="The Graph Protocol"
  link-url="https://thegraph.com/docs/en/subgraphs/quick-start/"
/>

### Key Benefits for iExec

- **Decentralized Indexing**: Data is indexed by a network of decentralized
  indexers
- **Real-time Queries**: Get up-to-date information about deals, tasks, apps,
  and protected data
- **GraphQL Interface**: Powerful query language for flexible data retrieval
- **Multi-network Support**: Access data across different blockchain networks

## 🗂️ Available Subgraphs

iExec has deployed several subgraphs across different networks to provide
comprehensive data access. Each subgraph indexes specific aspects of the iExec
protocol.

<CardGrid>

<ProjectCard
  title="iExec PoCo - Arbitrum"
  description="Indexes Proof of Contribution (PoCo) data on Arbitrum mainnet, including apps, deals, tasks and workerpools"
  :icon-image="arbitrumIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.com/explorer/subgraphs/B1comLe9SANBLrjdnoNTJSubbeC7cY7EoNu6zD82HeKy?view=Query&chain=arbitrum-one"
  button-rel="noreferrer"
/>

<ProjectCard
  title="iExec DataProtector - Arbitrum"
  description="Comprehensive indexing service for iExec DataProtector on Arbitrum mainnet, tracking protected data assets, their schemas and owner"
  :icon-image="arbitrumIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.com/explorer/subgraphs/Ep5zs5zVr4tDiVuQJepUu51e5eWYJpka624X4DMBxe3u?view=Query&chain=arbitrum-one"
  button-rel="noreferrer"
/>

<ProjectCard
  title="iExec PoCo - Arbitrum Sepolia"
  description="Indexes Proof of Contribution (PoCo) data on Arbitrum Sepolia testnet, including apps, deals, tasks and workerpools"
  :icon-image="arbitrumIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.com/explorer/subgraphs/2GCj8gzLCihsiEDq8cYvC5nUgK6VfwZ6hm3Wj8A3kcxz?view=Query&chain=arbitrum-one"
  button-rel="noreferrer"
/>

<ProjectCard
  title="iExec DataProtector - Arbitrum Sepolia"
  description="Comprehensive indexing service for iExec DataProtector on Arbitrum Sepolia testnet, tracking protected data assets, their schemas and owner"
  :icon-image="arbitrumIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.com/explorer/subgraphs/5YjRPLtjS6GH6bB4yY55Qg4HzwtRGQ8TaHtGf9UBWWd?view=Query&chain=arbitrum-one"
  button-rel="noreferrer"
/>

<ProjectCard
  title="iExec PoCo - Bellecour"
  description="Indexes Proof of Contribution (PoCo) data on Bellecour mainnet, including apps, deals, tasks and workerpools"
  :icon-image="iexecLogoIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5/graphql?query=query+MyQuery+%7B%0A++apps+%7B%0A++++name%0A++++id%0A++++owner+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D"
  button-rel="noreferrer"
/>

<ProjectCard
  title="iExec DataProtector - Bellecour"
  description="Comprehensive indexing service for iExec DataProtector on Bellecour, tracking protected data assets, their schemas and owner"
  :icon-image="iexecLogoIcon"
  status="available"
  status-label="Live"
  button-label="Explore Subgraph"
  button-href="https://thegraph.iex.ec/subgraphs/name/bellecour/dataProtector-v2/graphql?query=query+MyQuery+%7B%0A++protectedDatas+%7B%0A++++id%0A++++name%0A++++owner+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D"
  button-rel="noreferrer"
/>

</CardGrid>

## 🔍 GraphQL Explorer Interface

The Graph provides an interactive GraphQL explorer that allows you to build and
test queries directly in your browser. This powerful interface makes it easy to
explore the available data and construct complex queries.

<ImageViewer
  :image-url-dark="graphqlExplorerImage"
  image-alt="GraphQL Explorer Interface"
  link-url="https://thegraph.com/explorer/subgraphs/Ep5zs5zVr4tDiVuQJepUu51e5eWYJpka624X4DMBxe3u?view=Query&chain=arbitrum-one"
/>

### How to Use the GraphQL Explorer

1. **Navigate to a Subgraph**: Click on any of the subgraph links above to
   access the GraphQL explorer
2. **Explore the Schema**: Use the "Schema" tab to browse available entities and
   their fields
3. **Build Queries**: Use the "Query" tab to construct and test GraphQL queries
4. **View Results**: Execute queries to see real-time data from the blockchain
5. **Copy Queries**: Use the generated queries in your applications

### Example Queries

Here are some example queries you can try in the GraphQL explorer:

#### Query iApp

```graphql
query {
  apps {
    id
    name
    owner {
      id
    }
    appType
    appUri
  }
}
```

#### Query Protected Data

```graphql
query {
  protectedDatas {
    id
    name
    owner {
      id
    }
    dataType
    dataUri
  }
}
```

#### Query Deals and Tasks

```graphql
query {
  deals {
    id
    requester {
      id
    }
    app {
      name
    }
    dataset {
      name
    }
    workerpool {
      id
    }
    tasks {
      id
      status
    }
  }
}
```

::: tip 💡 Pro Tip

Use the GraphQL explorer's auto-completion feature to discover available fields
and build complex queries. The schema documentation is always up-to-date with
the latest protocol changes.

:::

<script setup>
import ImageViewer from '@/components/ImageViewer.vue';
import CardGrid from '@/components/CardGrid.vue';
import ProjectCard from '@/components/ProjectCard.vue';

// Assets
import theGraphLogoImage from '@/assets/tooling-&-explorers/the-graph/image-logo.jpg';
import theGraphProtocolImage from '@/assets/tooling-&-explorers/the-graph/protocol-view.jpg';
import arbitrumIcon from '@/assets/icons/arbitrum.svg';
import iexecLogoIcon from '@/assets/icons/iexec-logo.png';
import graphqlExplorerImage from '@/assets/tooling-&-explorers/the-graph/graphql-explorer.png';
</script>
