import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const getTotalGenderPredictionType = ( surveys ) => {
  const totalPMale = surveys.reduce((total,current) => current.gender === 'Masculino' && current.prediction === '1' ? ++total : total, 0);
  const totalPFemale = surveys.reduce((total,current) => current.gender === 'Femenino' && current.prediction === '1' ? ++total : total, 0);
  const totalPOther = surveys.reduce((total,current) => current.gender === 'Otro' && current.prediction === '1' ? ++total : total, 0);

  const totalNMale = surveys.reduce((total,current) => current.gender === 'Masculino' && current.prediction === '0' ? ++total : total, 0);
  const totalNFemale = surveys.reduce((total,current) => current.gender === 'Femenino' && current.prediction === '0' ? ++total : total, 0);
  const totalNOther = surveys.reduce((total,current) => current.gender === 'Otro' && current.prediction === '0' ? ++total : total, 0);

  return { totalPMale,totalPFemale,totalPOther, totalNMale, totalNFemale, totalNOther};
}

const GenderPredictionChart =  ({ surveys }) => {
  const { totalPMale,
          totalPFemale,
          totalPOther,
          totalNMale,
          totalNFemale,
          totalNOther } = getTotalGenderPredictionType(surveys);
  const data = [
    {
        name: 'Positivo',
        masculino: totalPMale,
        femenino: totalPFemale,
        otro: totalPOther,
    },
    {
        name: 'Negativo',
        masculino: totalNMale,
        femenino: totalNFemale,
        otro: totalNOther,
    }
  ];

  return (
      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
       >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="masculino" stackId="a" fill="#8884d8" />
        <Bar dataKey="femenino" stackId="a" fill="#82ca9d" />
         <Bar dataKey="otro" stackId="a" fill="#00C49F" />
      </BarChart>
    );
}

export default GenderPredictionChart;