import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeatherChart = () => {
  const data = [
    { name: 'Day 1', temperature: 20 },
    { name: 'Day 2', temperature: 22 },
    { name: 'Day 3', temperature: 25 },
    { name: 'Day 4', temperature: 23 },
    { name: 'Day 5', temperature: 21 },
    // Add more data points for other weather attributes (e.g., humidity, precipitation)
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="blue" />
        {/* Add more Lines for other weather attributes */}
      </LineChart>
    </div>
  );
};

export default WeatherChart;
