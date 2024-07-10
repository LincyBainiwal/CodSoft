import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { chartData } from '../assets/data';

const Chart = () => {
  return (
    <div >
       <ResponsiveContainer width={"100%"} height={350}>
      <BarChart width={150} height={30} data={chartData}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total" isAnimationActive={false}>
          {chartData.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.colors} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
    
  );
}

export default Chart;
