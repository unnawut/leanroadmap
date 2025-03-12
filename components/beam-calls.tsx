import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BeamCall {
  id: string
  title: string
  date: string
  summary: string
  thumbnail: string
  youtubeUrl: string
}

const beamCallsData: BeamCall[] = [
  {
    id: "call-1",
    title: "Beam Chain R&D Call #1: Post-Quantum Cryptography",
    date: "March 15, 2025",
    summary:
      "Discussion of post-quantum cryptography approaches including Poseidon 2, Winternitz signatures, and XMSS implementation progress.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-2",
    title: "Beam Chain R&D Call #2: ZKVM Performance Benchmarks",
    date: "February 28, 2025",
    summary:
      "Presentation of benchmarking results for various ZKVMs including Plancky3, Blake3, and Keccak implementations.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-3",
    title: "Beam Chain R&D Call #3: Cryptanalysis Initiative Update",
    date: "February 15, 2025",
    summary:
      "Update on the Cryptanalysis Initiative with Dmitry Khovratovich covering bounties, research grants, and workshop results.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-4",
    title: "Beam Chain R&D Call #4: Formal Verification Progress",
    date: "January 30, 2025",
    summary:
      "Alex Hicks presents progress on the ZKVM formal verification project using Lean 4 framework and executable specifications.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
]

export function BeamCalls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {beamCallsData.map((call) => (
        <Card key={call.id} className="bg-white border-slate-200 overflow-hidden">
          <div className="relative">
            <Image
              src={call.thumbnail || "/placeholder.svg"}
              alt={call.title}
              width={320}
              height={180}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Link href={call.youtubeUrl} target="_blank">
                <Button size="icon" variant="secondary" className="rounded-full bg-white bg-opacity-90 h-12 w-12">
                  <Play className="h-6 w-6 text-red-600" />
                </Button>
              </Link>
            </div>
          </div>
          <CardContent className="pt-4">
            <h3 className="font-semibold text-lg mb-1 text-slate-900">{call.title}</h3>
            <p className="text-xs text-slate-500 mb-2">{call.date}</p>
            <p className="text-sm text-slate-600">{call.summary}</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Link
              href={call.youtubeUrl}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
              target="_blank"
            >
              Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

