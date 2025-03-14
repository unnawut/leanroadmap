import { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge } from "@/components/ui/primitives"
import Link from "next/link"
import { ExternalLink, Twitter, Github } from "lucide-react"
import { ClientTeam, clientTeamsData } from "@/lib/client-teams-data"

export function ClientTeams() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientTeamsData.map((team) => (
        <Card key={team.id} className="bg-white border-slate-200 h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-slate-900">{team.name}</CardTitle>
              <Badge 
                variant={team.status === "existing" ? "outline" : "success"}
              >
                {team.status === "existing" ? "💪 Existing" : "✨ New"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">{team.description}</p>
          </CardContent>
          <CardFooter className="flex gap-2 pt-2 border-t border-slate-100">
            {team.links.website && (
              <Link
                href={team.links.website}
                className="p-2 rounded-full hover:bg-slate-100"
                target="_blank"
                title="Website"
              >
                <ExternalLink className="h-4 w-4 text-slate-600" />
              </Link>
            )}
            {team.links.twitter && (
              <Link
                href={team.links.twitter}
                className="p-2 rounded-full hover:bg-slate-100"
                target="_blank"
                title="Twitter"
              >
                <Twitter className="h-4 w-4 text-slate-600" />
              </Link>
            )}
            {team.links.github && (
              <Link
                href={team.links.github}
                className="p-2 rounded-full hover:bg-slate-100"
                target="_blank"
                title="GitHub"
              >
                <Github className="h-4 w-4 text-slate-600" />
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
