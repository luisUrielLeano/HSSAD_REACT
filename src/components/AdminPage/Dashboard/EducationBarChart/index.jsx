import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { Card } from 'antd';

  const getTotalTypeEducationLevel = ( surveys ) => {
      const totalKindergarten= surveys.reduce((total,current) => current.educationLevel === 'Preescolar' ? ++total : total, 0);
      const totalElementary = surveys.reduce((total,current) => current.educationLevel === 'Educación Primaria' ? ++total : total, 0);
      const totalMiddle = surveys.reduce((total,current) => current.educationLevel === 'Educación Secundaria' ? ++total : total, 0);
      const totalHigh = surveys.reduce((total,current) => current.educationLevel === 'Educación Media Superior' ? ++total : total, 0);
      const totalNoFormal = surveys.reduce((total,current) => current.educationLevel === 'Educación No Formal' ? ++total : total, 0);
      const totalCollege = surveys.reduce((total,current) => current.educationLevel === 'Licenciatura' ? ++total : total, 0);
      const totalMaster = surveys.reduce((total,current) => current.educationLevel === 'Maestría' ? ++total : total, 0);
      const totalDoctoral = surveys.reduce((total,current) => current.educationLevel === 'Doctorado' ? ++total : total, 0);

      return {totalKindergarten,totalElementary,totalMiddle,totalHigh,totalNoFormal,totalCollege,totalMaster,totalDoctoral};
  }

  const EducationBarChart = ( { surveys }) => {
      const {
            totalKindergarten,
            totalElementary,
            totalMiddle,
            totalHigh,
            totalNoFormal,
            totalCollege,
            totalMaster,
            totalDoctoral} = getTotalTypeEducationLevel(surveys);
    const data = [
        {
          name: 'Preescolar',
          cantidad: totalKindergarten,
        },
        {
          name: 'Primaria',
          cantidad: totalElementary,
        },
        {
          name: 'Secundaria',
          cantidad: totalMiddle,
        },
        {
          name: 'Media Superior',
          cantidad: totalHigh,
        },
        {
          name: 'No Formal',
          cantidad: totalNoFormal,
        },
        {
          name: 'Licenciatura',
          cantidad: totalCollege,
        },
        {
          name: 'Maestría',
          cantidad: totalMaster,
        },
        {
          name: 'Doctorado',
          cantidad: totalDoctoral,
        }
      ];
      return(
        <Card bordered={false}>
            <BarChart
            width={500}
            height={250}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 1,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cantidad" fill="#8884d8" />
            </BarChart>
            
        </Card>
    );
}

export default EducationBarChart;



