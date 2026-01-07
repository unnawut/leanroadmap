import { Youtube, FileText, Twitter, Code } from 'lucide-react';

export type LearningResource = {
  icon: typeof Youtube | typeof FileText | typeof Twitter;
  title: string;
  url: string;
  date: string; // Format: "YYYY-MM" e.g. "2024-11"
};

export const learningResourcesData: LearningResource[] = [
  {
    icon: Youtube,
    title: 'Keynote: [title redacted] at Devcon SEA',
    url: 'https://www.youtube.com/watch?v=lRqnFrqpq4k',
    date: '2024-11',
  },
  {
    icon: Youtube,
    title: 'Ethereum Roadmap & Beamchain at Bankless Summit',
    url: 'https://www.youtube.com/watch?v=8mJDt8TGebc',
    date: '2024-11',
  },
  {
    icon: Youtube,
    title: "Deep Dive into Ethereum's Beam Chain with The Defiant",
    url: 'https://www.youtube.com/watch?v=88FDeg5JaUk',
    date: '2024-11',
  },
  {
    icon: Youtube,
    title: 'Beam chain tldr at Devcon SEA Community-Led Session',
    url: 'https://youtu.be/o8n-MCAnxso?si=OQiZl3vrT9ktdzgi&t=2854',
    date: '2024-11',
  },
  {
    icon: Youtube,
    title: "Ethereum's Three Front War on Bankless Podcast",
    url: 'https://youtu.be/jUFVOUq0-fc?si=4ayhCrWKLNiv2q10&t=2936',
    date: '2024-12',
  },
  {
    icon: FileText,
    title: 'Future of Ethereum: Beam Chain by Seungmin Jeon',
    url: 'https://medium.com/@organmo/future-of-ethereum-1-beam-chain-52492e39af62',
    date: '2025-01',
  },
  {
    icon: Twitter,
    title: 'Twitter post on the beam chain roadmap by Vitalik Buterin',
    url: 'https://x.com/VitalikButerin/status/1885046277932552697',
    date: '2025-01',
  },
  {
    icon: FileText,
    title: 'lean Ethereum by Justin Drake',
    url: 'https://blog.ethereum.org/2025/07/31/lean-ethereum',
    date: '2025-07',
  },
  {
    icon: Twitter,
    title: 'lean week 2025 recap by Will Corcoran',
    url: 'https://x.com/corcoranwill/status/1981729293727043864',
    date: '2025-10-24',
  },
  {
    icon: Twitter,
    title: 'leanEthereum 2025 progress recap by Justin Drake',
    url: 'https://x.com/drakefjustin/status/1988626347552288957',
    date: '2025-11-12',
  },
  {
    icon: Youtube,
    title: 'Ethereum (Roadmap) in 30min by Vitalik Buterin - Devconnect',
    url: 'https://www.youtube.com/watch?v=BWvThjrjTmw',
    date: '2025-11-20',
  },
  {
    icon: Youtube,
    title: 'Next 10 Years of Ethereum by Fede - Devconnect',
    url: 'https://www.youtube.com/watch?v=2E-0DF0tFbc',
    date: '2025-11-21',
  },
];
