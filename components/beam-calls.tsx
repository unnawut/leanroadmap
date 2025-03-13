import Image from "next/image"
import { ExternalLink, Play } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BeamCall, beamCallsData } from "@/lib/beam-calls"

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
