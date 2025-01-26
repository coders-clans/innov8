// DonutChart.js
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DonutChart = ({ tasksCompleted, totalTasks }) => {
  const [percentage, setPercentage] = useState(0);

  // Calculate percentage based on completed tasks
  useEffect(() => {
    const calcPercentage = ((tasksCompleted / totalTasks) * 100).toFixed(0);
    setPercentage(calcPercentage);
  }, [tasksCompleted, totalTasks]);

  return (
    <div
      className="flex flex-col items-center justify-center space-y-4"
      style={{ minHeight: '300px' }}
    >
      <div
        className="w-40 h-40"
        style={{
          width: '10rem',
          height: '10rem',
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#4f46e5', // Indigo text
            pathColor: '#6366f1', // Indigo path color
            trailColor: '#e0e7ff', // Light Indigo trail
            textSize: '18px',
            strokeLinecap: 'round',
          })}
        /> 
      </div>

      <p
        className="text-lg font-semibold"
        style={{ color: '#fff' /* Dark gray */ }}
      >
        {tasksCompleted}/{totalTasks} Tasks Completed
      </p>
    </div>
  );
};

export default DonutChart;







