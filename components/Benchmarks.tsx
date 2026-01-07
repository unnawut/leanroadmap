'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { benchmarksData } from '@/data/benchmarks';
import { XmssAggregationChart } from '@/components/XmssAggregationChart';
import { Activity } from 'lucide-react';

export function Benchmarks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benchmarksData.map((category) => (
        <Card
          key={category.id}
          className="bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-sm"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-slate-800">
                  {category.title}
                </CardTitle>
                {category.description && (
                  <p className="text-xs text-slate-500">{category.description}</p>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {category.id === 'leanmultisig' && (
              <div className="my-4 py-4 border-t border-slate-100">
                <XmssAggregationChart />
              </div>
            )}
            <div className="space-y-3">
              {category.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`flex items-baseline justify-between py-2 border-b border-slate-100 last:border-0 ${
                    metric.highlight ? 'bg-teal-50/50 -mx-2 px-2 rounded-lg border-0' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-600">{metric.label}</span>
                    {metric.note && (
                      <span className="text-[10px] text-slate-400 mt-0.5">{metric.note}</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 shrink-0 ml-4">
                    <span
                      className={`font-mono-data text-lg font-semibold ${
                        metric.highlight ? 'text-teal-600' : 'text-slate-800'
                      }`}
                    >
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="text-xs text-slate-500">{metric.unit}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
