import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import './ReportsContent.scss'

const GraphComponent = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const data = {
    '2024': [5, 20, 0, 0 ,0, 0, ],
    '2023': [50, 45, 60, 70, 80, 90],
  };

  const renderChart = () => {
    const canvas = document.getElementById('myChart');

    if (canvas.chart) {
      canvas.chart.destroy();
    }

    const ctx = canvas.getContext('2d');
    canvas.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Reports',
          data: data[selectedYear], 
          backgroundColor: 'grey',
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  React.useEffect(() => {
    renderChart();
  }, [selectedYear]);

  return (
    <div>
      <canvas id="myChart"></canvas>
      <div>
        <button onClick={() => handleYearChange('2022')}>2024</button>
        <button onClick={() => handleYearChange('2021')}>2023</button>
       
      </div>
    </div>
  );
};

export default GraphComponent;


