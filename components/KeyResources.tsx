'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { keyResourcesData, getYear, formatDate } from '@/data/key-resources';

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
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="leanEthereum"
            options={{ height: 400 }}
            noHeader
            noFooter
            noBorders
          />
        </CardContent>
      </Card>
    </div>
  );
}
