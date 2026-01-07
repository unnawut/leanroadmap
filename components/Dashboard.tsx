'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/primitives';
import { Benchmarks } from '@/components/Benchmarks';
import { ClientImplementations } from '@/components/ClientImplementations';
import { Devnets } from '@/components/Devnets';
import { LeanCalls } from '@/components/LeanCalls';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { ResearchTracks } from '@/components/ResearchTracks';
import { Overview } from '@/components/Overview';

const LAST_UPDATED = 'January 2026';

export function Dashboard() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto space-y-12 px-8 md:px-6">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-slate-800/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
          <div className="container mx-auto px-8 md:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-4 w-px bg-gradient-to-b from-teal-400 to-teal-300" />
              <div>
                <div className="text-[9px] uppercase tracking-widest text-slate-500">Lean Ethereum</div>
                <h1 className="text-base font-medium text-white leading-tight">
                  Lean Consensus <span className="font-display text-slate-400">R&D Progress</span>
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-1 ml-auto mr-4">
              {[
                { label: 'Overview', id: 'overview' },
                { label: 'Timeline', id: 'timeline' },
                { label: 'Benchmarks', id: 'benchmarks' },
                { label: 'Devnets', id: 'devnets' },
                { label: 'Research', id: 'research-tracks' },
                { label: 'Clients', id: 'client-implementations' },
                { label: 'Videos', id: 'lean-calls' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-1 text-xs text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <span className="flex items-center text-[11px] text-slate-400 font-mono-data px-2.5 py-1 rounded-full border border-slate-600">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              {LAST_UPDATED}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="relative pt-14 md:pt-16">
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
              Last updated: {LAST_UPDATED}
            </Badge>
          </div>
        </div>
      </header>

      <section id="overview" className="space-y-4 scroll-mt-20">
        <h2>Overview</h2>
        <Overview />
      </section>

      <section id="timeline" className="space-y-4 scroll-mt-20">
        <h2>Timeline</h2>
        <Timeline />
      </section>

      <section id="benchmarks" className="space-y-4 scroll-mt-20">
        <h2>Benchmarks</h2>
        <Benchmarks />
      </section>

      <section id="devnets" className="space-y-4 scroll-mt-20">
        <h2>Devnets</h2>
        <Devnets />
      </section>

      <section id="research-tracks" className="space-y-4 scroll-mt-20">
        <ResearchTracks />
      </section>

      <section id="client-implementations" className="space-y-4 scroll-mt-20">
        <h2>Client Implementations</h2>
        <ClientImplementations />
      </section>

      <section id="lean-calls" className="space-y-4 scroll-mt-20">
        <h2>Lean Calls</h2>
        <LeanCalls />
      </section>

      <Footer />
    </div>
  );
}
