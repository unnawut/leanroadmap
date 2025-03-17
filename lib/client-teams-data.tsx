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
    description: "The high-performance Beam consensus client written in Rust, focusing on delivering the most performant and user-friendly Beam Chain client.",
    status: "new",
    links: {
      website: "#",
      twitter: "https://twitter.com/reamlabs",
      github: "https://github.com/reamlabs",
    },
  },
  {
    id: "zeam",
    name: "Zeam",
    description: "The Zig-based client team focused on representing Asia in the Ethereum ecosystem, building foundational components and integrating with various ZKVMs.",
    status: "new",
    links: {
      website: "https://zeam.dev",
      twitter: "https://x.com/zeamETH",
      github: "https://github.com/blockblaz/zeam",
    },
  },
  {
    id: "quadrivium",
    name: "Quadrivium",
    description: "The blockchain infrastructure team based in Kazakhstan with expertise in C++ implementations, notably maintaining a C++ libp2p library previously used in Polkadot.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "lantern",
    name: "Lantern",
    description: "The team developing C-based Ethereum consensus layer libraries focused on enabling devices with limited compute to verify state root with zk proofs.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "lambdaclass",
    name: "LambdaClass",
    description: "The team with experience in ZK development across multiple projects, currently working on both an Elixir consensus client and considering Rust or their own language called Concrete for their Beam client.",
    status: "new",
    links: {
      website: "https://lambdaclass.com",
      twitter: "https://x.com/class_lambda",
      github: "https://github.com/lambdaclass",
    },
  },
  {
    id: "colibri",
    name: "Colibri",
    description: "The client team focused on ultra-light client development for resource-constrained IoT devices, with experience building small-footprint implementations.",
    status: "new",
    links: {
      website: "#",
      twitter: "https://x.com/CorpusCoreHQ",
      github: "https://github.com/corpus-core/c4",
    },
  },
  {
    id: "afream",
    name: "Afream",
    description: "The African-led Beam consensus client initiative focusing on regional blockchain adoption.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "nethermind",
    name: "Nethermind",
    description: "The high-performance .NET Beacon Chain client with enterprise-grade features and extensive APIs.",
    status: "new",
    links: {
      website: "https://nethermind.io",
      twitter: "https://twitter.com/nethermindeth",
      github: "https://github.com/nethermindeth/nethermind",
    },
  },
  {
    id: "grandine",
    name: "Grandine",
    description: "The research-focused Ethereum consensus client implementing novel approaches to consensus mechanisms.",
    status: "existing",
    links: {
      website: "https://grandine.io",
      twitter: "https://x.com/grandineio",
      github: "https://github.com/grandinetech/grandine",
    },
  },
  {
    id: "lodestar",
    name: "Lodestar",
    description: "The JavaScript/TypeScript implementation of the Ethereum consensus client focused on modularity and extensibility.",
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
    description: "The enterprise-grade Ethereum consensus client built in Java by ConsenSys, designed for institutional staking.",
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
    description: "The high-performance Ethereum consensus client built in Rust, focused on security and efficiency.",
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
    description: "The Go implementation of Ethereum consensus, emphasizing usability and reliability for validators.",
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
    description: "The lightweight Ethereum consensus client in Nim, optimized for resource-restricted devices.",
    status: "existing",
    links: {
      website: "https://nimbus.team",
      twitter: "https://twitter.com/ethnimbus",
      github: "https://github.com/status-im/nimbus-eth2",
    },
  },
]
