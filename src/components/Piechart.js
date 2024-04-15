import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ categoryData }) => {
  const data = {
    labels: Object.keys(categoryData),
    datasets: [{
      data: Object.values(categoryData),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ]
    }]
  };

  return (
    <div className='pie-chart'>
      <h2>Category Spending Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
