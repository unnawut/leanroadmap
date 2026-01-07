'use client';

import { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/primitives';
import { ResearchTrackCard } from './ResearchTrackCard';
import { researchTracksData } from '@/data/research-tracks';

export function ResearchTracks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allExpanded, setAllExpanded] = useState(true); // Start with all expanded
  const [showInactive, setShowInactive] = useState(false); // Hide inactive by default

  // Get unique tags from all research tracks
  const allTags = Array.from(new Set(researchTracksData.flatMap((track) => track.tags))).sort();

  const filteredTracks = researchTracksData
    .filter(
      (track) =>
        (searchTerm === '' ||
          track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTags.length === 0 || selectedTags.some((tag) => track.tags.includes(tag))) &&
        (showInactive || track.status === 'active'),
    )
    .sort((a, b) => {
      // Sort by status: active first, inactive last
      if (a.status === 'active' && b.status === 'inactive') return -1;
      if (a.status === 'inactive' && b.status === 'active') return 1;
      // If both have same status, maintain original order
      return 0;
    });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const hasActiveFilters = searchTerm !== '' || selectedTags.length > 0;

  return (
    <>
      {/* Header with controls */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-5">
        <div className="flex items-center gap-4">
          <h2 className="mb-0">Research Tracks</h2>
          <button
            onClick={() => setAllExpanded(!allExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {allExpanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" />
                <span>Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" />
                <span>Expand</span>
              </>
            )}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={showInactive}
                onChange={(e) => setShowInactive(e.target.checked)}
                className="peer sr-only"
              />
              <div className="w-4 h-4 border-2 border-slate-300 rounded transition-colors peer-checked:border-teal-500 peer-checked:bg-teal-500 group-hover:border-slate-400" />
              <svg
                className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 6l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="group-hover:text-slate-700 transition-colors">Show inactive</span>
          </label>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search tracks..."
              className="pl-9 bg-white/80 backdrop-blur-sm border-slate-200/80 focus:border-teal-300 focus:ring-teal-200/50 rounded-xl h-10 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filter tags */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex flex-wrap gap-2 flex-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 plausible-event-name=Research+Tag+Click ${
                selectedTags.includes(tag)
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md shadow-teal-500/25'
                  : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-sm'
              }`}
            >
              {tag}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => (
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
          ))
        ) : (
          <div className="col-span-full flex flex-col justify-center items-center py-16 text-slate-400">
            <Search className="h-8 w-8 mb-3 opacity-40" />
            <p className="text-sm">No research tracks found</p>
          </div>
        )}
      </div>
    </>
  );
}
