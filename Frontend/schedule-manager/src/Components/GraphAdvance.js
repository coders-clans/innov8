import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Tasks Completed',
      data: [5, 8, 6, 10, 4, 7, 9],
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.4,
      fill: false,
    },
    {
      label: 'Tasks Pending',
      data: [2, 1, 3, 0, 2, 1, 0],
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.4,
      fill: false,
    },
  ],
};
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Task Progress',
      },
    },
  };
  
  const TaskCompletionADVGraph = () => {
    return( <div className='max-w-[80%] h-[400px] mx-auto'>
      <Line data={data} options={options} />
    </div>
    );
  };
  
export default TaskCompletionADVGraph;
  