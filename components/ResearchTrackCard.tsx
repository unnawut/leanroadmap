'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { ExternalLink, Plus, Minus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
  Separator,
} from '@/components/ui/primitives';
import type { ResearchTrack } from '@/data/research-tracks';
import Link from 'next/link';

interface ResearchTrackCardProps {
  track: ResearchTrack;
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

// Refined color mapping with gradients and glows
const colorMap = {
  purple: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    progressBg: 'bg-gradient-to-r from-violet-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    accent: 'border-violet-200',
  },
  blue: {
    bg: 'bg-sky-50',
    text: 'text-sky-600',
    progressBg: 'bg-gradient-to-r from-sky-400 to-blue-500',
    iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/20',
    accent: 'border-sky-200',
  },
  green: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    progressBg: 'bg-gradient-to-r from-emerald-400 to-green-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
    glow: 'shadow-emerald-500/20',
    accent: 'border-emerald-200',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    progressBg: 'bg-gradient-to-r from-amber-400 to-orange-500',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    glow: 'shadow-amber-500/20',
    accent: 'border-amber-200',
  },
  red: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    progressBg: 'bg-gradient-to-r from-rose-400 to-red-500',
    iconBg: 'bg-gradient-to-br from-rose-500 to-red-600',
    glow: 'shadow-rose-500/20',
    accent: 'border-rose-200',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    progressBg: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    glow: 'shadow-indigo-500/20',
    accent: 'border-indigo-200',
  },
  teal: {
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    progressBg: 'bg-gradient-to-r from-teal-400 to-teal-500',
    iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
    glow: 'shadow-teal-500/20',
    accent: 'border-teal-200',
  },
  pink: {
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    progressBg: 'bg-gradient-to-r from-pink-400 to-pink-500',
    iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600',
    glow: 'shadow-pink-500/20',
    accent: 'border-pink-200',
  },
} as const;

const defaultColors = {
  bg: 'bg-slate-50',
  text: 'text-slate-600',
  progressBg: 'bg-gradient-to-r from-slate-400 to-slate-500',
  iconBg: 'bg-gradient-to-br from-slate-500 to-slate-600',
  glow: 'shadow-slate-500/20',
  accent: 'border-slate-200',
} as const;

export function ResearchTrackCard({ track, isExpanded, onToggle }: ResearchTrackCardProps) {
  const [isOpen, setIsOpen] = useState(isExpanded); // Start with parent's expanded state

  // Update local state when parent state changes
  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  const colorClasses = colorMap[track.colorClass as keyof typeof colorMap] ?? defaultColors;

  // Handle resource link clicks without toggling the card
  const handleResourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  const isInactive = track.status === 'inactive';

  return (
    <div className="grid transition-all duration-300 ease-in-out h-fit">
      <Card
        className={`relative bg-white/80 backdrop-blur-sm border-slate-200/60 hover:border-slate-300/80 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer group plausible-event-name=${track.title.replace(' ', '+')}+Research+Card+Click ${
          isInactive ? 'opacity-60 grayscale' : ''
        }`}
        onClick={handleToggle}
      >
        {/* Subtle accent border on hover */}
        <div
          className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 ${colorClasses.accent}`}
        />

        {/* Toggle indicator */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className={`p-1 rounded-md transition-all duration-200 ${isOpen ? 'bg-slate-100' : 'bg-transparent group-hover:bg-slate-50'}`}
          >
            {isOpen ? (
              <Minus className="h-4 w-4 text-slate-500" />
            ) : (
              <Plus className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
            )}
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl ${colorClasses.iconBg} text-white shadow-lg ${colorClasses.glow} transition-transform duration-200 group-hover:scale-105`}
            >
              {track.icon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <CardTitle
                  className={`text-base tracking-tight ${isInactive ? 'text-slate-500' : 'text-slate-800'}`}
                >
                  {track.title}
                </CardTitle>
                {isInactive && (
                  <Badge
                    variant="outline"
                    className="text-[10px] bg-slate-50 text-slate-400 border-slate-200 px-1.5 py-0"
                  >
                    Inactive
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Progress section */}
          <div className="mt-4 mb-3">
            <div className="flex justify-between items-baseline mb-1.5">
              <span
                className={`text-xs uppercase tracking-wide font-medium ${isInactive ? 'text-slate-300' : 'text-slate-400'}`}
              >
                Progress
              </span>
              <span
                className={`font-mono-data text-sm font-semibold ${isInactive ? 'text-slate-400' : colorClasses.text}`}
              >
                {track.progress}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${colorClasses.progressBg} rounded-full transition-all duration-500 ${
                  isInactive ? 'opacity-50' : ''
                }`}
                style={{ width: `${track.progress}%` }}
              />
            </div>
          </div>

          <p
            className={`text-sm leading-relaxed ${isInactive ? 'text-slate-400' : 'text-slate-600'}`}
          >
            {track.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1">
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={`bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 rounded-xl border border-slate-100 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              >
                <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-500 mb-3">
                  Key Milestones
                </h4>
                <div className="space-y-2.5 mb-4">
                  {track.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${milestone.completed ? colorClasses.progressBg : 'bg-slate-200'} ${
                          isInactive ? 'opacity-50' : ''
                        }`}
                      />
                      <div>
                        <p
                          className={`leading-snug ${
                            milestone.completed
                              ? isInactive
                                ? 'text-slate-400'
                                : 'text-slate-700 font-medium'
                              : isInactive
                                ? 'text-slate-300'
                                : 'text-slate-500'
                          }`}
                        >
                          {milestone.title}
                        </p>
                        {milestone.date && (
                          <p
                            className={`text-xs font-mono-data mt-0.5 ${isInactive ? 'text-slate-300' : 'text-slate-400'}`}
                          >
                            {milestone.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4 bg-slate-200/60" />

                <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-500 mb-3">
                  Resources
                </h4>
                <div>
                  {track.resources.map((resource, index) => (
                    <Link
                      href={resource.url}
                      key={index}
                      className={`flex items-center gap-2 text-sm px-2 -mx-2 rounded-lg transition-colors ${
                        isInactive
                          ? 'text-slate-400 hover:text-slate-500 hover:bg-slate-100/50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                      target="_blank"
                      onClick={handleResourceClick}
                    >
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                      <span className="truncate">{resource.title}</span>
                      <span
                        className={`text-[10px] uppercase tracking-wide ml-auto shrink-0 px-1.5 py-0.5 ${isInactive ? 'text-slate-300' : 'text-slate-400'}`}
                      >
                        {resource.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lead section */}
          <div
            className={`flex items-center gap-1.5 mt-3 text-sm ${isInactive ? 'text-slate-400' : 'text-slate-500'}`}
          >
            <span className="text-xs uppercase tracking-wide font-medium">Lead:</span>
            <Link
              href={track.leadLink}
              className={`font-medium transition-colors ${
                isInactive
                  ? 'text-slate-400 hover:text-slate-500'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
              onClick={handleResourceClick}
            >
              {track.lead}
            </Link>
          </div>
        </CardContent>

        <CardFooter className="pt-3 border-t border-slate-100/80">
          <div className="flex gap-1.5 flex-wrap">
            {track.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`text-[10px] font-medium tracking-wide ${isInactive ? 'bg-slate-50/50 text-slate-400 border-slate-200/60' : 'bg-white text-slate-500 border-slate-200/80 hover:border-slate-300'}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
