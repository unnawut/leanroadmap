import type { ReactNode } from "react"
import { Shield, Lock, FileCheck, Cpu, Feather, FileCode } from "lucide-react"

export interface ResearchTrack {
  id: string
  title: string
  status: "On Track" | "At Risk" | "Completed" | "Paused"
  description: string
  icon: ReactNode
  colorClass: string
  progress: number
  lead: string
  tags: string[]
  milestones: Milestone[]
  resources: Resource[]
}

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

export const researchTracksData: ResearchTrack[] = [
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
