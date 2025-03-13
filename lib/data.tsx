import type { ReactNode } from "react"
import { Shield, Lock, FileCheck, Cpu, Feather, FileCode, Pill, Beaker, Hammer, FlaskConical } from "lucide-react"

export interface Milestone {
  title: string
  completed: boolean
  date?: string
}

export interface Resource {
  title: string
  url: string
  type: "paper" | "code" | "presentation" | "website"
}

export interface ResearchTrack {
  id: string
  title: string
  description: string
  icon: ReactNode
  colorClass: string
  progress: number
  status: "On Track" | "At Risk" | "Completed" | "Paused"
  lead: string
  tags: string[]
  milestones: Milestone[]
  resources: Resource[]
}

export interface ClientTeam {
  id: string
  name: string
  description: string
  status: "existing" | "new"
  links: {
    website?: string
    twitter?: string
    github?: string
  }
}

export interface BeamCall {
  id: string
  title: string
  date: string
  summary: string
  thumbnail: string
  youtubeUrl: string
}

export interface TimelineItem {
  id: string
  title: string
  startDate: { year: number; month: number }
  endDate: { year: number; month: number }
  icon: ReactNode
  color: string
}

export const ResearchData: ResearchTrack[] = [
  {
    id: "post-quantum",
    title: "Post-Quantum Cryptography",
    description:
      "Developing hash-based cryptography throughout the system, including Poseidon 2, Winternitz, XMSS, WER, and SSK.",
    icon: <Shield className="h-5 w-5" />,
    colorClass: "bg-purple-100 text-purple-600",
    progress: 10,
    status: "On Track",
    lead: "Vitalik Buterin",
    tags: ["Cryptography", "PQ-Resistant"],
    milestones: [
      { title: "Poseidon 2 hash function implementation", completed: true, date: "Jan 2025" },
      { title: "Winternitz variant of Lamport signatures", completed: true, date: "Feb 2025" },
      { title: "XMSS implementation", completed: true, date: "Feb 2025" },
      { title: "WER for post-quantum SNARKs", completed: false },
      { title: "SSK for recursive aggregation", completed: false },
    ],
    resources: [
      { title: "Original 2018 Proposal", url: "#", type: "paper" },
      { title: "Strawman Proposal", url: "#", type: "paper" },
      { title: "Implementation Repository", url: "#", type: "code" },
    ],
  },
  {
    id: "cryptanalysis",
    title: "Cryptanalysis Initiative",
    description: "Studying security of Poseidon hash function in various prime bit fields with a 600k budget for 2025.",
    icon: <Lock className="h-5 w-5" />,
    colorClass: "bg-blue-100 text-blue-600",
    progress: 10,
    status: "On Track",
    lead: "Dmitry Khovratovich",
    tags: ["Security", "Analysis"],
    milestones: [
      { title: "Bounties established (66k already earned)", completed: true, date: "Jan 2025" },
      { title: "Research grants (three recipients chosen)", completed: true, date: "Feb 2025" },
      { title: "First workshop completed", completed: true, date: "Jan 2025" },
      { title: "Additional workshops at encryption conferences", completed: false },
      { title: "Research awards distribution", completed: false },
      { title: "Grobner Basis Exploratory hardware purchase", completed: false },
    ],
    resources: [
      { title: "Security Analysis Report", url: "#", type: "paper" },
      { title: "Bounty Program", url: "#", type: "website" },
      { title: "Workshop Recordings", url: "#", type: "presentation" },
    ],
  },
  {
    id: "xmss-signatures",
    title: "XMSS Signatures",
    description:
      "Published paper on hash-based multi-signatures for post-quantum Ethereum with signature size below 3 kilobytes.",
    icon: <FileCheck className="h-5 w-5" />,
    colorClass: "bg-green-100 text-green-600",
    progress: 10,
    status: "On Track",
    lead: "Benedikt Wagner",
    tags: ["Signatures", "Optimization"],
    milestones: [
      { title: "Paper publication", completed: true, date: "Jan 2025" },
      { title: "Signature size below 3 kilobytes", completed: true, date: "Feb 2025" },
      { title: "Verification time below 1 millisecond", completed: true, date: "Feb 2025" },
      { title: "Key generation time reduction", completed: true, date: "Mar 2025" },
      { title: "Reduce Poseidon permutation calls (<200)", completed: true, date: "Mar 2025" },
      { title: "Further optimizations", completed: false },
    ],
    resources: [
      { title: "XMSS Paper", url: "#", type: "paper" },
      { title: "Implementation Code", url: "#", type: "code" },
      { title: "Benchmarking Results", url: "#", type: "presentation" },
    ],
  },
  {
    id: "minimal-zkvm",
    title: "Minimal ZKVMs & Performance",
    description:
      "Benchmarking various ZKVMs with Plancky3 showing most promising results (2M Poseidon permutations/sec).",
    icon: <Cpu className="h-5 w-5" />,
    colorClass: "bg-amber-100 text-amber-600",
    progress: 10,
    status: "At Risk",
    lead: "Thomas Coratger",
    tags: ["Performance", "VM"],
    milestones: [
      { title: "Plancky3 benchmarking (2M Poseidon perm/sec)", completed: true, date: "Feb 2025" },
      { title: "Blake3 implementation (30k ops/sec)", completed: true, date: "Feb 2025" },
      { title: "Keccak implementation (4k ops/sec)", completed: true, date: "Mar 2025" },
      { title: "Starkware's STU performance testing", completed: true, date: "Mar 2025" },
      { title: "Specialized VM for signature aggregation", completed: false },
      { title: "VM options exploration (Binus M3, SP1, KRU, STU, Jolt, OpenVM)", completed: false },
    ],
    resources: [
      { title: "Benchmarking Results", url: "#", type: "presentation" },
      { title: "VM Comparison", url: "#", type: "paper" },
      { title: "Performance Optimization Code", url: "#", type: "code" },
    ],
  },
  {
    id: "falcon-signatures",
    title: "Falcon Signatures Alternative",
    description:
      "Exploring lattice-based signatures as an alternative approach with smaller size (600 bytes vs 3 kilobytes for XMSS).",
    icon: <Feather className="h-5 w-5" />,
    colorClass: "bg-red-100 text-red-600",
    progress: 10,
    status: "On Track",
    lead: "Josh Beal",
    tags: ["Signatures", "Alternative"],
    milestones: [
      { title: "Proposal for Falcon signature aggregation", completed: true, date: "Feb 2025" },
      { title: "Size comparison (600 bytes vs 3 kilobytes)", completed: true, date: "Mar 2025" },
      { title: "Validator capacity analysis", completed: true, date: "Mar 2025" },
      { title: "Combining Falcon signatures with code-based SNARKs", completed: false },
      { title: "Performance testing", completed: false },
    ],
    resources: [
      { title: "Falcon Signatures Proposal", url: "#", type: "paper" },
      { title: "Comparison Analysis", url: "#", type: "presentation" },
      { title: "Implementation Repository", url: "#", type: "code" },
    ],
  },
  {
    id: "formal-verification",
    title: "Formal Verification",
    description: "Building executable and formally verified specifications for proof systems using Lean 4 framework.",
    icon: <FileCode className="h-5 w-5" />,
    colorClass: "bg-indigo-100 text-indigo-600",
    progress: 10,
    status: "On Track",
    lead: "Alex Hicks",
    tags: ["Verification", "Proofs"],
    milestones: [
      { title: "ZKVM formal verification project initiation", completed: true, date: "Jan 2025" },
      { title: "Executable specifications development", completed: true, date: "Feb 2025" },
      { title: "Lean 4 framework implementation", completed: true, date: "Mar 2025" },
      { title: "FRI proof system specification", completed: false },
      { title: "STU proof system specification", completed: false },
      { title: "WER proof system specification", completed: false },
      { title: "Lean Blueprints organization", completed: false },
    ],
    resources: [
      { title: "Formal Verification Framework", url: "#", type: "paper" },
      { title: "Lean 4 Implementation", url: "#", type: "code" },
      { title: "Verification Methodology", url: "#", type: "presentation" },
    ],
  },
]

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
    description: "An Zig-based Beam consensus client optimized for concurrent processing and fault tolerance.",
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

export const beamCallsData: BeamCall[] = [
  {
    id: "call-1",
    title: "Beam Call #1: Social Layer Updates",
    date: "February 14, 2025",
    summary:
      "The kickoff call covering social layer progress, funding structures, legal updates, introductions of research specialists and client teams, and coordinator presentations",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "https://www.youtube.com/watch?v=sSx6juIu4AI",
  },
  {
    id: "call-2",
    title: "Beam Call #2: Technical Layer Updates",
    date: "February 28, 2025",
    summary:
      "Technical updates on post-quantum cryptography solutions, featuring technical presentations from researchers on signature schemes, hash functions, minimal zkVMs, and formal verification.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "https://www.youtube.com/watch?v=BtYb_guRq78",
  },
  {
    id: "call-3",
    title: "Beam Call #3: P2P Networking",
    date: "April 4, 2025",
    summary:
      "TBD",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
]

export const timelineData: TimelineItem[] = [
  {
    id: "pilling",
    title: "Pilling",
    startDate: { year: 2024, month: 1 }, // Starts at beginning of 2024
    endDate: { year: 2025, month: 1 }, // Ends at beginning of 2025
    icon: <Pill className="h-5 w-5" />,
    color: "bg-slate-300",
  },
  {
    id: "speccing",
    title: "Speccing",
    startDate: { year: 2025, month: 1 }, // Starts at beginning of 2025
    endDate: { year: 2026, month: 1 }, // Ends at beginning of 2026
    icon: <Beaker className="h-5 w-5" />,
    color: "bg-amber-500",
  },
  {
    id: "building",
    title: "Building",
    startDate: { year: 2026, month: 1 }, // Starts at beginning of 2026
    endDate: { year: 2028, month: 1 }, // Ends at beginning of 2028
    icon: <Hammer className="h-5 w-5" />,
    color: "bg-blue-500",
  },
  {
    id: "testing",
    title: "Testing",
    startDate: { year: 2027, month: 1 }, // Starts at beginning of 2027
    endDate: { year: 2029, month: 1 }, // Ends at beginning of 2029
    icon: <FlaskConical className="h-5 w-5" />,
    color: "bg-green-500",
  },
]

export const TIMELINE_CONFIG = {
  START_YEAR: 2024,
  END_YEAR: 2030,
  TOTAL_MONTHS: (2030 - 2024) * 12
}
