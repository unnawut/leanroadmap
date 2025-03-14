"use client"

import { Badge } from "@/components/ui/primitives"
import { ClientTeams } from "@/components/ClientTeams"
import { BeamCalls } from "@/components/BeamCalls"
import { Timeline } from "@/components/Timeline"
import { Footer } from "@/components/Footer"
import { ResearchTracks } from "@/components/ResearchTracks"

export function Dashboard() {
  return (
    <div className="container mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Beam Chain R&D Progress</h1>
          <p className="text-slate-600 mt-1">Track research progress across all workstreams</p>
        </div>
        <Badge variant="outline">
          Last updated: March 2025
        </Badge>
      </header>

      <section>
        <h2>Timeline</h2>
        <Timeline />
      </section>

      <section>
        <ResearchTracks />
      </section>

      <section>
        <h2>Beam Calls</h2>
        <BeamCalls />
      </section>

      <section>
        <h2>Client Teams</h2>
        <ClientTeams />
      </section>

      <Footer />
    </div>
  )
}
