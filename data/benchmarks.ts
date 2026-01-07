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
      { label: 'XMSS aggregated (Target)', value: String(XMSS_TARGET), unit: 'XMSS/s', note: 'Performance goal' },
      { label: 'XMSS aggregated (M4 Max - Efficient)', value: `~${xmssLatest.m4}`, unit: '/sec', subValue: `${Math.round((xmssLatest.m4! / XMSS_TARGET) * 100)}% of target`, highlight: true, note: 'main branch; optimized for prover efficiency' },
      { label: 'XMSS aggregated (M4 Max - Simple)', value: `~${xmssLatest.m4vm}`, unit: '/sec', subValue: `${Math.round((xmssLatest.m4vm! / XMSS_TARGET) * 100)}% of target`, note: 'lean-vm-simple branch; optimized for simplicity' },
      { label: 'XMSS aggregated (i9-12900H)', value: `~${xmssLatest.i9}`, unit: '/sec', subValue: `${Math.round((xmssLatest.i9! / XMSS_TARGET) * 100)}% of target`, note: 'Baseline Intel performance' },
      { label: 'Aggregate size (Target)', value: `~${AGGREGATE_SIZE_TARGET}`, unit: 'KiB' },
      { label: 'Aggregate size (Efficient)', value: `~${aggregateSize.efficient.min} - ${aggregateSize.efficient.max}`, unit: 'KiB', subValue: `${Math.round((aggregateSize.efficient.min / AGGREGATE_SIZE_TARGET) * 100)} - ${Math.round((aggregateSize.efficient.max / AGGREGATE_SIZE_TARGET) * 100)}% of target` },
      { label: 'Aggregate size (Simple)', value: `~${aggregateSize.simple}`, unit: 'KiB', subValue: `${Math.round((aggregateSize.simple / AGGREGATE_SIZE_TARGET) * 100)}% of target` },
    ],
  },
];
