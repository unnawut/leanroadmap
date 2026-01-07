'use client';

import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { keyResourcesData } from '@/data/key-resources';

const getYear = (date: string): number => {
  return new Date(date).getFullYear();
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

function TwitterTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    containerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[400px] overflow-y-auto">
      <a
        className="twitter-timeline"
        data-height="400"
        data-chrome="noheader nofooter noborders"
        href="https://twitter.com/leanEthereum"
      >
        Loading tweets...
      </a>
    </div>
  );
}

export function KeyResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Key Resources List */}
      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Articles & Videos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[2025, 2024].map((year) => {
            const resourcesForYear = keyResourcesData
              .filter((r) => getYear(r.date) === year)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            if (resourcesForYear.length === 0) return null;
            return (
              <div key={year}>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                  {year}
                </h4>
                <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
                  {resourcesForYear.map((resource, index) => (
                    <li key={index} className="flex items-start">
                      <resource.icon className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
                      <a href={resource.url} className="text-blue-600 hover:underline">
                        {resource.title}
                      </a>
                      <span className="text-gray-500 pl-1">({formatDate(resource.date)})</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Twitter Feed */}
      <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
        <CardHeader>
          <CardTitle>
            Latest from{' '}
            <a
              href="https://x.com/leanEthereum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-blue-600 transition-colors"
            >
              @leanEthereum
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TwitterTimeline />
        </CardContent>
      </Card>
    </div>
  );
}
