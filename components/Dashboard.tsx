'use client';

import { Badge } from '@/components/ui/primitives';
import { ClientTeams } from '@/components/ClientTeams';
import { LeanCalls } from '@/components/LeanCalls';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { ResearchTracks } from '@/components/ResearchTracks';
import { Overview } from '@/components/Overview';

export function Dashboard() {
  return (
    <div className="container mx-auto space-y-12 px-8 md:px-6">
      {/* Hero Header */}
      <header className="relative pt-2 md:pt-6">
        {/* Decorative background element */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-teal-500 to-teal-300" />
              <span className="text-xs font-medium tracking-widest uppercase text-teal-600">
                Lean Ethereum
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl tracking-tight">
              <span className="font-semibold text-slate-900">Lean Consensus</span>{' '}
              <span className="font-display text-slate-600">R&D Progress</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-500 max-w-md md:max-w-lg leading-relaxed">
              Track <span className="text-slate-700 font-medium">Lean Consensus</span> research & engineering progress across all workstreams
            </p>
          </div>

          {/* Status badge */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <Badge
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-slate-200/80 text-slate-600 px-3 py-1.5 text-xs font-mono-data shadow-sm"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Last updated: December 2025
            </Badge>
          </div>
        </div>
      </header>

      <section className="space-y-4">
        <h2>Timeline</h2>
        <Timeline />
      </section>

      <section className="space-y-4">
        <h2>Overview</h2>
        <Overview />
      </section>

      <section className="space-y-4">
        <ResearchTracks />
      </section>

      <section className="space-y-4">
        <h2>Client Teams</h2>
        <ClientTeams />
      </section>

      <section className="space-y-4">
        <h2>Lean Calls</h2>
        <LeanCalls />
      </section>

      <Footer />
    </div>
  );
}
