export interface LeanSigDataPoint {
  date: string;
  signing?: number;
  verification?: number;
}

// Time in seconds
export const leanSigTimingData: LeanSigDataPoint[] = [
  // Add data points as they become available
  // { date: '01/01', signing: 0.5, verification: 0.3 },
];

export const leanSigSeriesConfig = {
  signing: {
    label: 'Signing',
    color: '#8b5cf6',
  },
  verification: {
    label: 'Verification',
    color: '#06b6d4',
  },
};
