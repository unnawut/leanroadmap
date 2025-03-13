export interface ClientTeam {
  id: string
  name: string
  description: string
  status: "existing" | "new"
  links: {
    website: string
    twitter: string
    github: string
  }
}

export const clientTeamsData: ClientTeam[] = [
  {
    id: "ream",
    name: "Ream",
    description: "A high-performance Beam consensus client written in Rust, focusing on efficiency and reliability.",
    status: "new",
    links: {
      website: "https://reamlabs.com",
      twitter: "https://twitter.com/reamlabs",
      github: "https://github.com/reamlabs",
    },
  },
  {
    id: "zeam",
    name: "Zeam",
    description: "An Elixir-based Beam consensus client optimized for concurrent processing and fault tolerance.",
    status: "new",
    links: {
      website: "https://zeam.dev",
      twitter: "https://twitter.com/zeamdev",
      github: "https://github.com/zeam-dev",
    },
  },
  {
    id: "quadrivium",
    name: "Quadrivium",
    description: "A research-focused Beam consensus client implementing novel cryptographic protocols.",
    status: "new",
    links: {
      website: "https://quadrivium.xyz",
      twitter: "https://twitter.com/quadriviumxyz",
      github: "https://github.com/quadrivium",
    },
  },
  {
    id: "lantern",
    name: "Lantern",
    description: "A lightweight Beam consensus client focused on accessibility and ease of deployment.",
    status: "new",
    links: {
      website: "https://lantern.network",
      twitter: "https://twitter.com/lanternnetwork",
      github: "https://github.com/lantern-network",
    },
  },
  {
    id: "lambdaclass",
    name: "LambdaClass",
    description: "A Beam consensus client built with functional programming principles for enhanced reliability.",
    status: "new",
    links: {
      website: "https://lambdaclass.com",
      twitter: "https://twitter.com/lambdaclass",
      github: "https://github.com/lambdaclass",
    },
  },
  {
    id: "colibri",
    name: "Colibri",
    description: "A modular Beam consensus client designed for flexibility and extensibility.",
    status: "new",
    links: {
      website: "https://colibri.network",
      twitter: "https://twitter.com/colibrinetwork",
      github: "https://github.com/colibri-network",
    },
  },
  {
    id: "afream",
    name: "Afream",
    description: "An African-led Beam consensus client initiative focusing on regional blockchain adoption.",
    status: "new",
    links: {
      website: "https://afream.africa",
      twitter: "https://twitter.com/afreamhq",
      github: "https://github.com/afream",
    },
  },
  {
    id: "nethermind",
    name: "Nethermind",
    description: "A high-performance .NET Beam consensus client with enterprise-grade features and extensive APIs.",
    status: "new",
    links: {
      website: "https://nethermind.io",
      twitter: "https://twitter.com/nethermindeth",
      github: "https://github.com/nethermindeth",
    },
  },
  {
    id: "grandine",
    name: "Grandine",
    description: "A research-focused Ethereum consensus client implementing novel approaches to consensus mechanisms.",
    status: "existing",
    links: {
      website: "https://grandine.io",
      twitter: "https://twitter.com/grandineeth",
      github: "https://github.com/grandinetech",
    },
  },
  {
    id: "lodestar",
    name: "Lodestar",
    description: "A TypeScript implementation of the Ethereum consensus client focused on modularity and extensibility.",
    status: "existing",
    links: {
      website: "https://lodestar.chainsafe.io",
      twitter: "https://twitter.com/lodestar_eth",
      github: "https://github.com/ChainSafe/lodestar",
    },
  },
  {
    id: "teku",
    name: "Teku",
    description: "An enterprise-grade Ethereum consensus client built in Java by ConsenSys, designed for institutional staking.",
    status: "existing",
    links: {
      website: "https://consensys.io/teku",
      twitter: "https://twitter.com/Teku_ConsenSys",
      github: "https://github.com/ConsenSys/teku",
    },
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    description: "A high-performance Ethereum consensus client built in Rust, focused on security and efficiency.",
    status: "existing",
    links: {
      website: "https://lighthouse.sigmaprime.io",
      twitter: "https://twitter.com/sigp_io",
      github: "https://github.com/sigp/lighthouse",
    },
  },
  {
    id: "prysm",
    name: "Prysm",
    description: "A Go implementation of Ethereum consensus, emphasizing usability and reliability for validators.",
    status: "existing",
    links: {
      website: "https://prysmaticlabs.com",
      twitter: "https://twitter.com/prylabs",
      github: "https://github.com/prysmaticlabs/prysm",
    },
  },
  {
    id: "nimbus",
    name: "Nimbus",
    description: "A lightweight Ethereum consensus client in Nim, optimized for resource-restricted devices.",
    status: "existing",
    links: {
      website: "https://nimbus.team",
      twitter: "https://twitter.com/ethnimbus",
      github: "https://github.com/status-im/nimbus-eth2",
    },
  },
]
