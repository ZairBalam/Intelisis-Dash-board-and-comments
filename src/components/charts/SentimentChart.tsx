
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Positivos', value: 65, color: '#4CAF50' },
  { name: 'Neutrales', value: 25, color: '#FFC107' },
  { name: 'Negativos', value: 10, color: '#F44336' },
];

const COLORS = ['#4CAF50', '#FFC107', '#F44336'];

const SentimentChart = () => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Distribución de Comentarios</h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              
              return (
                <text 
                  x={x} 
                  y={y} 
                  fill="white" 
                  textAnchor="middle" 
                  dominantBaseline="central"
                  fontSize={12}
                  fontWeight="bold"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center" 
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Porcentaje']}
            wrapperStyle={{ backgroundColor: 'white', border: '1px solid #f0f0f0', borderRadius: '4px', padding: '5px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;
