import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/primitives"
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

export function BeamCalls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            { call.youtubeUrl != "#" &&
              <Link
                href={call.youtubeUrl}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1"
                target="_blank"
              >
                Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            }
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
