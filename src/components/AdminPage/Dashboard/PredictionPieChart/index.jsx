import React from 'react';
import { Card } from 'antd';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const COLORS = ['#00C49F', '#FFBB28',];

const RADIAN = Math.PI / 180;

const getTotalTypePredictions = ( surveys ) => {
  const negatives = surveys.reduce((total, current) => current.prediction === '0' ? ++total : total, 0);
  const positives =  surveys.reduce((total, current) => current.prediction === '1' ? ++total: total,0);
  return { negatives, positives};
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PredictionPieChart = ({surveys}) => {
  const { negatives, positives } = getTotalTypePredictions( surveys );
  const data = [
    { name: 'Positive', value: positives},
    { name: 'Negative', value: negatives},
  ];
  
  return (
        <Card bordered={false}>
            <PieChart width={250} height={250}>
            <Legend verticalAlign='top' align='center'/>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            </PieChart>
        </Card>
  );
}
  
export default PredictionPieChart;