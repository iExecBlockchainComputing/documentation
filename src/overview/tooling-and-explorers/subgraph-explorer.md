---
title: The Graph Explorer
description:
  Explore and query blockchain data using The Graph's decentralized indexing
  protocol. Access iExec subgraphs on Arbitrum and Bellecour networks.
---

# 🔍 The Graph Explorer

The **iExec protocol** uses **The Graph** as a decentralized protocol for
indexing and querying blockchain data across multiple networks. This powerful
tool allows developers and users to efficiently retrieve and analyze on-chain
data through GraphQL queries.

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/the-graph/image-logo.jpg"
  image-alt="The Graph Protocol"
  link-url="https://thegraph.com/docs/en/subgraphs/quick-start/"
/>

## 🎯 What is The Graph?

The Graph is a decentralized protocol for indexing and querying blockchain data.
It enables developers to build and publish open APIs called **subgraphs** that
applications can query using GraphQL. This makes it easy to access blockchain
data without having to run your own indexing infrastructure.

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
    title="iExec PoCo - Arbitrum Mainnet"
    description="Indexes Proof of Contribution (PoCo) data on Arbitrum mainnet, including apps, deals, tasks, and workerpools"
    icon-image="/assets/icons/arbitrum-logo.png"
    status="available"
    status-label="Live"
    button-label="Explore Subgraph"
    button-icon="mdi:open-in-new"
    button-href="https://thegraph.com/explorer/subgraphs/B1comLe9SANBLrjdnoNTJSubbeC7cY7EoNu6zD82HeKy?view=Query&chain=arbitrum-one"
    button-target="_blank"
    button-rel="noreferrer"
  />
  
  <ProjectCard
    title="iExec DataProtector - Arbitrum Mainnet"
    description="Indexes DataProtector protocol data on Arbitrum mainnet, including protected data, access grants, and sharing mechanisms"
    icon-image="/assets/icons/arbitrum-logo.png"
    status="available"
    status-label="Live"
    button-label="Explore Subgraph"
    button-icon="mdi:open-in-new"
    button-href="https://thegraph.com/explorer/subgraphs/Ep5zs5zVr4tDiVuQJepUu51e5eWYJpka624X4DMBxe3u?view=Query&chain=arbitrum-one"
    button-target="_blank"
    button-rel="noreferrer"
  />

<ProjectCard
    title="iExec PoCo - Bellecour Mainnet"
    description="Indexes Proof of Contribution (PoCo) data on Bellecour mainnet, including apps, deals, tasks, and workerpools"
    icon-image="/assets/icons/iexec-logo.png"
    status="available"
    status-label="Live"
    button-label="Explore Subgraph"
    button-icon="mdi:open-in-new"
    button-href="https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5/graphql?query=query+MyQuery+%7B%0A++apps+%7B%0A++++name%0A++++id%0A++++owner+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D"
    button-target="_blank"
    button-rel="noreferrer"
  />

<ProjectCard
    title="iExec DataProtector - Bellecour Mainnet"
    description="Indexes DataProtector protocol data on Bellecour mainnet, including protected data, access grants, and sharing mechanisms"
    icon-image="/assets/icons/iexec-logo.png"
    status="available"
    status-label="Live"
    button-label="Explore Subgraph"
    button-icon="mdi:open-in-new"
    button-href="https://thegraph.iex.ec/subgraphs/name/bellecour/dataProtector-v2/graphql?query=query+MyQuery+%7B%0A++protectedDatas+%7B%0A++++id%0A++++name%0A++++owner+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D"
    button-target="_blank"
    button-rel="noreferrer"
  />

  </CardGrid>

## 🔍 GraphQL Explorer Interface

The Graph provides an interactive GraphQL explorer that allows you to build and
test queries directly in your browser. This powerful interface makes it easy to
explore the available data and construct complex queries.

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/the-graph/graphql-explorer.png"
  image-alt="GraphQL Explorer Interface"
  link-url="https://thegraph.com/explorer/subgraphs/Ep5zs5zVr4tDiVuQJepUu51e5eWYJpka624X4"
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

#### Query Apps on Arbitrum

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

#### Query Protected Data on Bellecour

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

<div class="bg-gradient-to-r from-blue-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-blue-700 mb-6">
  <h4 class="!mt-0 !mb-2">💡 Pro Tip</h4>
  <p class="!mb-0">Use the GraphQL explorer's auto-completion feature to discover available fields and build complex queries. The schema documentation is always up-to-date with the latest protocol changes.</p>
</div>

<script setup>
import ImageViewer from '../../components/ImageViewer.vue';
import CardGrid from '../../components/CardGrid.vue';
import ProjectCard from '../../components/ProjectCard.vue';
</script>
