import { xmssLatest, XMSS_TARGET, AGGREGATE_SIZE_TARGET, aggregateSize } from './xmss-aggregation';

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
  subValue?: string;
  note?: string;
  highlight?: boolean;
}

export const benchmarksData: BenchmarkCategory[] = [
  {
    id: 'leansig',
    title: 'leanSig',
    description: 'Hash-based signature scheme',
    metrics: [
      {
        label: 'Public key size',
        note: '8 elements for root; 5 for randomiser',
        value: '50',
        unit: 'bytes',
      },
      {
        label: 'Signature size',
        note: 'Excellent for hash-based sigs',
        value: '3',
        unit: 'KiB',
      },
      {
        label: 'Signing time',
        note: 'Single core; Raspberry Pi Pico friendly',
        value: '~500',
        unit: 'μs',
      },
      {
        label: 'Verification time',
        note: 'Single core; ultra fast',
        value: '~300',
        unit: 'μs',
      },
      {
        label: 'Verification hashes',
        note: '70 of size 24, 76 of size 16',
        value: '146',
      },
      {
        label: 'Keygen time',
        note: '10-core MacBook Pro; 8 years lifetime',
        value: '3.5',
        unit: 'hours',
      },
    ],
  },
  {
    id: 'leanmultisig',
    title: 'leanMultisig',
    description: 'Aggregate signature scheme',
    metrics: [
      {
        label: 'XMSS aggregated (Target)',
        note: 'Performance goal',
        value: String(XMSS_TARGET),
        unit: 'XMSS/s',
        highlight: true,
      },
      {
        label: 'XMSS aggregated (M4 Max - Efficient)',
        note: 'main branch; optimized for prover efficiency',
        value: `~${xmssLatest.m4}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.m4! / XMSS_TARGET) * 100)}% of target`,
      },
      {
        label: 'XMSS aggregated (M4 Max - Simple)',
        note: 'lean-vm-simple branch; optimized for simplicity',
        value: `~${xmssLatest.m4vm}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.m4vm! / XMSS_TARGET) * 100)}% of target`,
      },
      {
        label: 'XMSS aggregated (i9-12900H)',
        note: 'Baseline Intel performance',
        value: `~${xmssLatest.i9}`,
        unit: '/sec',
        subValue: `${Math.round((xmssLatest.i9! / XMSS_TARGET) * 100)}% of target`,
      },
      {
        label: 'Aggregate size (Target)',
        note: 'Performance goal',
        value: `~${AGGREGATE_SIZE_TARGET}`,
        unit: 'KiB',
        highlight: true,
      },
      {
        label: 'Aggregate size (Efficient)',
        note: 'main branch; optimized for prover efficiency',
        value: `~${aggregateSize.efficient.min} - ${aggregateSize.efficient.max}`,
        unit: 'KiB',
        subValue: `${Math.round((aggregateSize.efficient.min / AGGREGATE_SIZE_TARGET) * 100)} - ${Math.round((aggregateSize.efficient.max / AGGREGATE_SIZE_TARGET) * 100)}% of target`,
      },
      {
        label: 'Aggregate size (Simple)',
        note: 'lean-vm-simple branch; optimized for simplicity',
        value: `~${aggregateSize.simple}`,
        unit: 'KiB',
        subValue: `${Math.round((aggregateSize.simple / AGGREGATE_SIZE_TARGET) * 100)}% of target`,
      },
    ],
  },
];
