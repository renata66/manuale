
import React from 'react';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { ChartData } from '../types';

interface BarChartProps {
  data: ChartData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-700 p-2 border border-slate-600 rounded-md shadow-lg">
          <p className="label text-blue-300">{`${label}`}</p>
          <p className="intro text-white">{`Efficacia: ${payload[0].value}%`}</p>
        </div>
      );
    }
  
    return null;
  };

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" unit="%" />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(30, 64, 175, 0.2)'}} />
          <Legend wrapperStyle={{ color: '#cbd5e1' }}/>
          <Bar dataKey="value" name="Efficacia (%)" fill="#3b82f6" barSize={30} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
