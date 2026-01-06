export interface Devnet {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'planned';
  goals: string[];
  results?: string[];
  specs?: string[];
  clients?: string[];
  date?: string;
  link?: string;
}

export const devnetsData: Devnet[] = [
  {
    id: 'pq-devnet-0',
    name: 'pq-devnet-0',
    status: 'completed',
    date: "Oct '26",
    goals: [
      'Create leanSpec framework',
      'Multi-client coordination (no PQ sigs yet)',
      'Interop trials with 4s slots, QUIC, Gossipsub v1.0',
      'Modified 3SF-mini consensus',
    ],
    results: [
      'Ream, Zeam, Qlean clients interop achieved',
      'Local machine infrastructure validated',
      'Foundation for PQ implementation established',
    ],
    specs: ['leanSpec 4b750f2'],
    clients: ['Ream', 'Zeam', 'Qlean'],
    link: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-0.md',
  },
  {
    id: 'pq-devnet-1',
    name: 'pq-devnet-1',
    status: 'completed',
    date: "Dec '26",
    goals: [
      'Deploy leanSig signing & verification',
      'Basic signature aggregation (concatenation)',
      'Baseline PQ consensus metrics',
      '512→1024 validators, 4s slots',
    ],
    results: [
      'leanSig integrated in consensus clients',
      'Ream, Zeam, Qlean interop complete',
      'Lantern, Lighthouse in progress',
    ],
    specs: ['leanSpec 050fa4a', 'leanSig f10dcbe', 'leanMetrics e077ac2'],
    clients: ['Ream', 'Zeam', 'Qlean', 'Lantern', 'Lighthouse'],
    link: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-1.md',
  },
  {
    id: 'pq-devnet-2',
    name: 'pq-devnet-2',
    status: 'active',
    date: "Target: Jan '26",
    goals: [
      'leanMultisig aggregation',
      '400 validators across 4 machines',
      'Baseline performance metrics',
      '4s slots, modified 3SF-mini',
    ],
    specs: ['leanSpec main', 'leanSig adad238', 'leanMultisig main'],
    clients: ['Ream', 'Zeam', 'Qlean', 'Lantern', 'Lighthouse'],
    link: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-2.md',
  },
];
