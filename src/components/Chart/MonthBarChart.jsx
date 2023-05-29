import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const MonthBarChart = ({ checkedArray }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      scales: {
        categoryPercentage: 0.1,
      },
    },
  };

  const labels = ['01/5 - 07/5', '08/5 - 14/5', '15/5 - 21/5', '22/5 - 28/5', '29/5 - 31/5'];

  const datasets = checkedArray.map((item) => {
    return {
      label: item,
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: getRandomColor(),
      borderRadius: 6,
    };
  });

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const handleHover = (event, chartElement) => {};

  return <Bar options={options} data={data} getDatasetAtEvent={handleHover} />;
};

// Helper function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default MonthBarChart;
