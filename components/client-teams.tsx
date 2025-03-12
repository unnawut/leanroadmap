import { ExternalLink, Twitter, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, Badge } from "@/components/ui/primitives"
import Link from "next/link"

interface ClientTeam {
  id: string
  name: string
  description: string
  status: "existing" | "new"
  links: {
    website?: string
    twitter?: string
    github?: string
  }
}

const clientTeamsData: ClientTeam[] = [
  {
    id: "ream",
    name: "Ream",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "zeam",
    name: "Zeam",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "quadrivium",
    name: "Quadrivium",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "nethermind",
    name: "Nethermind",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "lantern",
    name: "Lantern",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "lambdaclass",
    name: "LambdaClass",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "colibri",
    name: "Colibri",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "afream",
    name: "Afream",
    description: "Lorem ipsum dolor sit amet.",
    status: "new",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: "lodestar",
    name: "Lodestar",
    description:
      "A TypeScript implementation of the Ethereum consensus client focused on modularity and extensibility.",
    status: "existing",
    links: {
      website: "https://lodestar.chainsafe.io/",
      twitter: "https://twitter.com/lodestar_eth",
      github: "https://github.com/ChainSafe/lodestar",
    },
  },
  {
    id: "teku",
    name: "Teku",
    description:
      "An enterprise-grade Ethereum consensus client built in Java by ConsenSys, designed for institutional staking.",
    status: "existing",
    links: {
      website: "https://consensys.io/teku",
      twitter: "https://twitter.com/Teku_ConsenSys",
      github: "https://github.com/ConsenSys/teku",
    },
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    description: "A high-performance Ethereum consensus client built in Rust, focused on security and efficiency.",
    status: "existing",
    links: {
      website: "https://lighthouse.sigmaprime.io/",
      twitter: "https://twitter.com/sigp_io",
      github: "https://github.com/sigp/lighthouse",
    },
  },,
  {
    id: "prysm",
    name: "Prysm",
    description: "Lorem ipsum dolor sit amet.",
    status: "existing",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },,
  {
    id: "nimbus",
    name: "Nimbus",
    description: "Lorem ipsum dolor sit amet.",
    status: "existing",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },,
  {
    id: "grandine",
    name: "Grandine",
    description: "Lorem ipsum dolor sit amet.",
    status: "existing",
    links: {
      website: "#",
      twitter: "#",
      github: "#",
    },
  },
]

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
                {team.status === "existing" ? "Existing" : "New"}
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

