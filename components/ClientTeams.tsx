import { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge } from "@/components/ui/primitives"
import Link from "next/link"
import { ExternalLink, Twitter, Github } from "lucide-react"
import { ClientTeam, clientTeamsData } from "@/lib/client-teams-data"
import { useState } from "react"

export function ClientTeams() {
  const [filter, setFilter] = useState<"new" | "existing" | null>(null)
  
  const filteredTeams = clientTeamsData.filter((team) => {
    if (filter === null) return true
    return team.status === filter
  })

  const toggleFilter = (selectedFilter: "new" | "existing") => {
    setFilter(current => current === selectedFilter ? null : selectedFilter)
  }

  const clearFilter = () => setFilter(null)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => toggleFilter("new")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === "new" 
                ? "bg-slate-900 text-white" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ✨ New Teams
          </button>
          <button 
            onClick={() => toggleFilter("existing")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === "existing" 
                ? "bg-slate-900 text-white" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            💪 Existing Teams
          </button>
          {filter !== null && (
            <button
              onClick={clearFilter}
              className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="bg-white border-slate-200 h-full">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-slate-900">{team.name}</CardTitle>
                <Badge 
                  variant={team.status === "existing" ? "outline" : "success"}
                >
                  {team.status === "existing" ? "💪 Existing" : "✨ New"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{team.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {team.links.website !== "#" && (
                  <Link
                    href={team.links.website}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    Website
                  </Link>
                )}
                {team.links.twitter !== "#" && (
                  <Link
                    href={team.links.twitter}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <Twitter className="h-4 w-4 shrink-0" />
                    Twitter
                  </Link>
                )}
                {team.links.github !== "#" && (
                  <Link
                    href={team.links.github}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    GitHub
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
