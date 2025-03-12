"use client"

import type React from "react"

import { useState } from "react"
import { ExternalLink, Plus, Minus } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { ResearchTrack } from "@/lib/data"
import Link from "next/link"

interface ResearchTrackCardProps {
  track: ResearchTrack
}

export function ResearchTrackCard({ track }: ResearchTrackCardProps) {
  const [isOpen, setIsOpen] = useState(false) // Closed by default

  // Extract color for progress bar
  const progressColor = track.colorClass.includes("purple")
    ? "bg-purple-500"
    : track.colorClass.includes("blue")
      ? "bg-blue-500"
      : track.colorClass.includes("green")
        ? "bg-green-500"
        : track.colorClass.includes("amber")
          ? "bg-amber-500"
          : track.colorClass.includes("red")
            ? "bg-red-500"
            : track.colorClass.includes("indigo")
              ? "bg-indigo-500"
              : "bg-primary"

  // Handle resource link clicks without toggling the card
  const handleResourceClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Card
      className="bg-white border-slate-200 hover:bg-slate-50 transition-colors h-full flex flex-col cursor-pointer relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute top-3 right-3">
        {isOpen ? <Minus className="h-4 w-4 text-slate-400" /> : <Plus className="h-4 w-4 text-slate-400" />}
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${track.colorClass}`}>{track.icon}</div>
          <CardTitle className="text-slate-900">{track.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-slate-600">Progress</span>
            <span className="text-sm font-medium">{track.progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full ${progressColor} rounded-full`} style={{ width: `${track.progress}%` }}></div>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">{track.description}</p>

        {isOpen && (
          <div className="mt-2 bg-slate-50 p-3 rounded-md">
            <h4 className="font-medium text-sm mb-2">Key Milestones</h4>
            <div className="space-y-2 mb-4">
              {track.milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 ${milestone.completed ? progressColor : "bg-slate-300"}`}
                  />
                  <div>
                    <p className={milestone.completed ? "text-slate-900" : "text-slate-500"}>{milestone.title}</p>
                    {milestone.date && <p className="text-xs text-slate-400">{milestone.date}</p>}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-3" />

            <h4 className="font-medium text-sm mb-2">Resources</h4>
            <div className="space-y-2">
              {track.resources.map((resource, index) => (
                <Link
                  href={resource.url}
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 hover:underline"
                  target="_blank"
                  onClick={handleResourceClick}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{resource.title}</span>
                  <span className="text-xs text-slate-400 ml-auto">{resource.type}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex pt-2 border-t border-slate-100">
        <div className="flex gap-1 flex-wrap">
          {track.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-slate-100 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

