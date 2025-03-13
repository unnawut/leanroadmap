export interface BeamCall {
  id: string
  title: string
  date: string
  summary: string
  thumbnail: string
  youtubeUrl: string
}

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
