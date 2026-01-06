'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/primitives';
import { devnetsData } from '@/data/devnets';
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    bg: 'bg-emerald-500',
    text: 'text-emerald-600',
    label: 'Completed',
  },
  active: {
    icon: Clock,
    bg: 'bg-amber-500',
    text: 'text-amber-600',
    label: 'Active',
  },
  planned: {
    icon: Circle,
    bg: 'bg-slate-300',
    text: 'text-slate-500',
    label: 'Planned',
  },
};

export function Devnets() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 xl:-translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-200 transition-all flex items-center justify-center ${
          canScrollLeft
            ? 'text-slate-600 hover:text-slate-900 hover:shadow-xl cursor-pointer'
            : 'text-slate-300 cursor-default opacity-50'
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 xl:translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-200 transition-all flex items-center justify-center ${
          canScrollRight
            ? 'text-slate-600 hover:text-slate-900 hover:shadow-xl cursor-pointer'
            : 'text-slate-300 cursor-default opacity-50'
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide mx-8 md:mx-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {devnetsData.map((devnet) => {
          const status = statusConfig[devnet.status];
          const StatusIcon = status.icon;

          return (
            <Card
              key={devnet.id}
              className="flex-shrink-0 w-80 snap-start bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-mono-data text-base font-semibold text-slate-800">
                      {devnet.name}
                    </h3>
                    {devnet.date && (
                      <span className="text-xs text-slate-400">{devnet.date}</span>
                    )}
                  </div>
                  <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${status.bg}/10`}>
                    <StatusIcon className={`h-3.5 w-3.5 ${status.text}`} />
                    <span className={`text-[10px] font-medium ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-3">
                  <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
                    Goals
                  </h4>
                  <ul className="space-y-1">
                    {devnet.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-teal-500 mt-0.5">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                {devnet.results && devnet.results.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
                      Results
                    </h4>
                    <ul className="space-y-1">
                      {devnet.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clients */}
                {devnet.clients && devnet.clients.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
                      Clients
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {devnet.clients.map((client, index) => (
                        <span
                          key={index}
                          className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Link */}
                {devnet.link && (
                  <Link
                    href={devnet.link}
                    target="_blank"
                    className="flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-700 transition-colors mt-3 pt-3 border-t border-slate-100"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View specification
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
