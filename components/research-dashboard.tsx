"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ResearchTrackCard } from "@/components/research-track-card"
import { ClientTeams } from "@/components/client-teams"
import { BeamCalls } from "@/components/beam-calls"
import { ResearchData } from "@/lib/data"

export function ResearchDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTracks = ResearchData.filter(
    (track) =>
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Beam Chain R&D Progress</h1>
          <p className="text-slate-600 mt-1">Track research progress across all workstreams</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search research tracks..."
              className="pl-8 bg-white border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Research Tracks</h2>
          <Badge variant="outline" className="bg-white text-slate-600">
            Last updated: March 2025
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => (
            <ResearchTrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Client Teams</h2>
        <ClientTeams />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Beam Calls</h2>
        <BeamCalls />
      </section>
    </div>
  )
}

