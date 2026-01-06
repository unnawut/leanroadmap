'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { Check, Rocket } from 'lucide-react';
import { keyResourcesData } from '@/data/key-resources';

export function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Long-term Vision Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Key Ideas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Consensus:</strong> A complete redesign of Ethereum&apos;s consensus
                layer — hardened for security, decentralization, and finality in seconds
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Cryptography:</strong> Hash-based signatures ready for both SNARKs and
                quantum computers — one simple building block powering everything
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Governance:</strong> Batched upgrades instead of endless small changes
                — paying down 10 years of technical debt in one go
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Faster Finality:</strong> Transactions confirmed in seconds instead
                of ~15 minutes
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lean Craft:</strong> Minimalism, modularity, and formal verification — when
                we can go the extra mile, we do
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Key Resources Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Key Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            {keyResourcesData.map((resource, index) => (
              <li key={index} className="flex items-start">
                <resource.icon className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
                <a href={resource.url} className="text-blue-600 hover:underline">
                  {resource.title}
                </a>
                <span className="text-gray-500 pl-1">({resource.date})</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
