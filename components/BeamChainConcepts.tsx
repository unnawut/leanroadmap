"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/primitives"

export function BeamChainConcepts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Long-term Vision Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Long-term Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Complete the roadmap in 4-5 years so Ethereum can go into maintenance mode</li>
            <li>Start thinking about ossification like Bitcoin</li>
            <li>Renaissance of solo validating through "Zen Staking," "Fish Staking," and "Fiverr Staking"</li>
            <li>Clean and simple protocol worthy of a neutral global base layer</li>
            <li>Fully verifying light clients that can work on even the smallest devices</li>
          </ul>
        </CardContent>
        <CardHeader>
          <CardTitle>Rationales</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Small incremental upgrades are only applicable to certain types of changes</li>
            <li>Governance batching optimization: batch everything to a single fork</li>
            <li>Avoid existing technical debts</li>
          </ul>
        </CardContent>
      </Card>

      {/* Key Resources Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Key Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc pl-5 text-sm">
            <li><a href="https://www.youtube.com/watch?v=Gjuenkv1zrw" className="text-blue-600 hover:underline">Keynote: [title redacted] at Devcon SEA</a> (Nov 2024)</li>
            <li><a href="https://www.youtube.com/watch?v=8mJDt8TGebc" className="text-blue-600 hover:underline">Ethereum Roadmap & Beamchain at Bankless Summit</a> (Nov 2024)</li>
            <li><a href="https://www.youtube.com/watch?v=88FDeg5JaUk" className="text-blue-600 hover:underline">Deep Dive into Ethereum's Beam Chain with The Defiant</a> (Nov 2024)</li>
            <li><a href="https://www.youtube.com/watch?v=63w7kHh737w" className="text-blue-600 hover:underline">Beam chain tldr at Devcon SEA Community-Led Session</a> (Nov 2024)</li>
            <li><a href="https://youtu.be/jUFVOUq0-fc?si=4ayhCrWKLNiv2q10&t=2936" className="text-blue-600 hover:underline">Ethereum's Three Front War on Bankless Podcast</a> (Dec 2024)</li>
            <li><a href="https://medium.com/@organmo/future-of-ethereum-1-beam-chain-52492e39af62" className="text-blue-600 hover:underline">Future of Ethereum: Beam Chain by Seungmin Jeon</a> (Jan 2025)</li>
            <li><a href="https://x.com/VitalikButerin/status/1885046277932552697" className="text-blue-600 hover:underline">Twitter post on the beam chain roadmap by Vitalik Buterin</a> (Jan 2025)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} 
