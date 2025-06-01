
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { month: 'Ene', satisfaction: 72 },
  { month: 'Feb', satisfaction: 68 },
  { month: 'Mar', satisfaction: 75 },
  { month: 'Abr', satisfaction: 80 },
  { month: 'May', satisfaction: 79 },
  { month: 'Jun', satisfaction: 85 },
  { month: 'Jul', satisfaction: 87 },
  { month: 'Ago', satisfaction: 84 },
  { month: 'Sep', satisfaction: 88 },
  { month: 'Oct', satisfaction: 92 },
  { month: 'Nov', satisfaction: 89 },
  { month: 'Dic', satisfaction: 94 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded">
        <p className="text-sm font-medium">{`${label} 2025`}</p>
        <p className="text-sm text-intelisis-blue">{`Satisfacción: ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const SatisfactionChart = () => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Tendencia de Satisfacción</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="gradientSatisfaction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#009EFF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#009EFF" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="satisfaction"
            stroke="#009EFF"
            fillOpacity={1}
            fill="url(#gradientSatisfaction)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SatisfactionChart;
