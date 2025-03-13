"use client"

import { useState } from "react"
import { Search, ChevronUp, ChevronDown } from "lucide-react"
import { Badge, Input } from "@/components/ui/primitives"
import { ResearchTrackCard } from "@/components/research-track-card"
import { ClientTeams } from "@/components/client-teams"
import { BeamCalls } from "@/components/beam-calls"
import { ResearchData } from "@/lib/research-tracks"
import { Timeline } from "@/components/timeline"

export function ResearchDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [allExpanded, setAllExpanded] = useState(true) // Start with all expanded

  // Get unique tags from all research tracks
  const allTags = Array.from(new Set(ResearchData.flatMap(track => track.tags))).sort()

  const filteredTracks = ResearchData.filter(
    (track) =>
      (searchTerm === "" || 
       track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       track.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || selectedTags.some(tag => track.tags.includes(tag)))
  )

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
  }

  const hasActiveFilters = searchTerm !== "" || selectedTags.length > 0

  return (
    <div className="container mx-auto space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Beam Chain R&D Progress</h1>
          <p className="text-slate-600 mt-1">Track research progress across all workstreams</p>
        </div>
        <Badge variant="outline" className="text-xs font-normal text-slate-400 border-slate-200">
          Last updated: March 2025
        </Badge>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Timeline</h2>
        <Timeline />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Research Tracks</h2>
            <button
              onClick={() => setAllExpanded(!allExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {allExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Expand All
                </>
              )}
            </button>
          </div>
          <div className="relative w-64">
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

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex flex-wrap gap-2 flex-1">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              Clear all filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredTracks.map((track) => (
            <ResearchTrackCard 
              key={track.id} 
              track={track} 
              isExpanded={allExpanded}
              onToggle={(expanded) => {
                // If a card is manually expanded while all others are collapsed,
                // or manually collapsed while all others are expanded,
                // we don't want to affect the global state
              }}
            />
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

      <footer className="text-center text-sm text-slate-500 py-8">
        Made with ❤️ by <a href="https://twitter.com/ReamLabs" className="text-slate-600 hover:text-slate-900">ReamLabs</a>
      </footer>
    </div>
  )
}
