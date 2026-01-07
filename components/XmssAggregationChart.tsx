'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '08/26', i9: 35 },
  { date: '09/02', i9: 37 },
  { date: '09/05', i9: 53 },
  { date: '09/09', i9: 62 },
  { date: '09/12', i9: 76 },
  { date: '09/19', i9: 107 },
  { date: '09/27', i9: 137 },
  { date: '10/02', i9: 172 },
  { date: '10/05', i9: 177 },
  { date: '10/07', i9: 193 },
  { date: '10/12', i9: 214 },
  { date: '10/14', i9: 234, m4: 465 },
  { date: '10/21', i9: 255 },
  { date: '10/28', i9: 314, m4: 555 },
  { date: '11/04', i9: 350, m4: 660 },
  { date: '11/11', i9: 380, m4: 720 },
  { date: '12/02', m4: 940, m4vm: 755 },
  { date: '12/05', m4: 970, m4vm: 815 },
];

export function XmssAggregationChart() {
  return (
    <div className="w-full">
      <h4 className="text-sm font-medium text-slate-700 mb-3 text-center">
        XMSS Aggregated / Second
      </h4>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={{ stroke: '#cbd5e1' }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            domain={[0, 1100]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={{ stroke: '#cbd5e1' }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            formatter={(value: number, name: string) => {
              const labels: Record<string, string> = {
                i9: 'i9-12900H',
                m4: 'M4 Max',
                m4vm: 'M4 Max (lean-vm-simple)',
              };
              return [value, labels[name] || name];
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
            formatter={(value: string) => {
              const labels: Record<string, string> = {
                i9: 'i9-12900H',
                m4: 'M4 Max',
                m4vm: 'M4 Max (lean-vm-simple)',
              };
              return labels[value] || value;
            }}
          />
          <ReferenceLine
            y={1000}
            stroke="#555555"
            strokeDasharray="7 3"
            strokeWidth={2}
            label={{
              value: 'Target (1000/s)',
              position: 'insideTopLeft',
              fontSize: 11,
              fill: '#555555',
            }}
          />
          <Line
            type="monotone"
            dataKey="i9"
            stroke="#2e86ab"
            strokeWidth={2}
            dot={{ fill: '#2e86ab', strokeWidth: 0, r: 4 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="m4"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', strokeWidth: 0, r: 4 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="m4vm"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ fill: '#22c55e', strokeWidth: 0, r: 4 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
