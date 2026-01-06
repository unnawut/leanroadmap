export interface BenchmarkCategory {
  id: string;
  title: string;
  description?: string;
  metrics: BenchmarkMetric[];
}

export interface BenchmarkMetric {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  highlight?: boolean;
}

export const benchmarksData: BenchmarkCategory[] = [
  {
    id: 'leansig',
    title: 'leanSig',
    description: 'Hash-based signature scheme',
    metrics: [
      { label: 'Public key size', value: '50', unit: 'bytes', note: '8 elements for root; 5 for randomiser' },
      { label: 'Signature size', value: '3', unit: 'KiB', highlight: true, note: 'Excellent for hash-based sigs' },
      { label: 'Signing time', value: '~500', unit: 'μs', note: 'Single core; Raspberry Pi Pico friendly' },
      { label: 'Verification time', value: '~300', unit: 'μs', highlight: true, note: 'Single core; ultra fast' },
      { label: 'Verification hashes', value: '146', note: '70 of size 24, 76 of size 16' },
      { label: 'Keygen time', value: '3.5', unit: 'hours', note: '10-core MacBook Pro; 8 years lifetime' },
    ],
  },
  {
    id: 'leanmultisig',
    title: 'leanMultisig',
    description: 'Aggregate signature scheme',
    metrics: [
      { label: 'XMSS aggregated (M4 Max)', value: '~1000', unit: '/sec', highlight: true, note: 'lean-vm-simple; approaching target' },
      { label: 'XMSS aggregated (i9-12900H)', value: '~250', unit: '/sec', note: 'Baseline Intel performance' },
      { label: 'Target', value: '1000', unit: 'XMSS/s', note: 'Performance goal' },
      { label: 'Aggregate size', value: '~128', unit: 'KiB' },
    ],
  },
];
