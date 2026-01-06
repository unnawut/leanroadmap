import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
} from '@/components/ui/primitives';
import Link from 'next/link';
import { ExternalLink, Twitter, Github, FileText } from 'lucide-react';
import { ClientTeam, clientTeamsData } from '@/data/client-teams';
import { useState } from 'react';

export function ClientTeams() {
  const [filter, setFilter] = useState<'new' | 'existing' | null>(null);

  const filteredTeams = clientTeamsData.filter((team) => {
    if (filter === null) return true;
    return team.status === filter;
  });

  const toggleFilter = (selectedFilter: 'new' | 'existing') => {
    setFilter((current) => (current === selectedFilter ? null : selectedFilter));
  };

  const clearFilter = () => setFilter(null);

  // Helper function to find a link by type and ensure it's a valid URL (not "#")
  const getLinkUrl = (links: ClientTeam['links'], type: string): string | null => {
    const link = links.find((link) => link.type === type);
    return link?.url && link.url !== '#' ? link.url : null;
  };

  const newCount = clientTeamsData.filter((team) => team.status === 'new').length;
  const existingCount = clientTeamsData.filter((team) => team.status === 'existing').length;

  return (
    <div className="space-y-5">
      {/* Summary with stats */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 -mt-4">
        <p className="text-sm text-slate-500 leading-relaxed">
          <span className="font-mono-data text-lg font-semibold text-slate-800">
            {clientTeamsData.length}
          </span>{' '}
          client teams committed to building Lean Consensus
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md">
            <span className="font-mono-data font-semibold">{newCount}</span> new
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
            <span className="font-mono-data font-semibold">{existingCount}</span> existing
          </span>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toggleFilter('new')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            filter === 'new'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25'
              : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/50'
          }`}
        >
          New Teams
        </button>
        <button
          onClick={() => toggleFilter('existing')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            filter === 'existing'
              ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-md shadow-slate-500/25'
              : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          Existing Teams
        </button>
        {filter !== null && (
          <button
            onClick={clearFilter}
            className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTeams.map((team) => (
          <Card
            key={team.id}
            className={`group relative h-full overflow-hidden bg-white/80 backdrop-blur-sm border-slate-200/60 hover:border-slate-300/80 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 plausible-event-name=${team.name.replace(' ', '+')}+Client+Team+Click`}
          >
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-base font-semibold text-slate-800 tracking-tight">
                  {team.name}
                </CardTitle>
                <Badge
                  variant={team.status === 'existing' ? 'outline' : 'success'}
                  className={`shrink-0 text-[10px] font-medium ${
                    team.status === 'new'
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200'
                      : 'bg-slate-50 text-slate-500 border-slate-200'
                  }`}
                >
                  {team.status === 'existing' ? 'Existing' : 'New'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-sm text-slate-600 leading-relaxed">{team.description}</p>
            </CardContent>
            <CardFooter className="pt-3 border-t border-slate-100/80">
              <div className="flex flex-wrap gap-1.5">
                {/* Website Link */}
                {getLinkUrl(team.links, 'website') && (
                  <Link
                    href={getLinkUrl(team.links, 'website') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 shrink-0" />
                    Web
                  </Link>
                )}
                {/* Twitter Link */}
                {getLinkUrl(team.links, 'twitter') && (
                  <Link
                    href={getLinkUrl(team.links, 'twitter') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    <Twitter className="h-3 w-3 shrink-0" />
                    Twitter
                  </Link>
                )}
                {/* GitHub Link */}
                {getLinkUrl(team.links, 'github') && (
                  <Link
                    href={getLinkUrl(team.links, 'github') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  >
                    <Github className="h-3 w-3 shrink-0" />
                    GitHub
                  </Link>
                )}
                {/* HackMD Link */}
                {getLinkUrl(team.links, 'hackmd') && (
                  <Link
                    href={getLinkUrl(team.links, 'hackmd') || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-slate-500 bg-slate-50 rounded-md hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    <FileText className="h-3 w-3 shrink-0" />
                    Docs
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
