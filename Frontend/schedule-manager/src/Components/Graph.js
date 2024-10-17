import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Monday', tasksCompleted: 5, tasksPending: 2 },
  { day: 'Tuesday', tasksCompleted: 8, tasksPending: 1 },
  { day: 'Wednesday', tasksCompleted: 6, tasksPending: 3 },
  { day: 'Thursday', tasksCompleted: 10, tasksPending: 0 },
  { day: 'Friday', tasksCompleted: 4, tasksPending: 2 },
  { day: 'Saturday', tasksCompleted: 7, tasksPending: 1 },
  { day: 'Sunday', tasksCompleted: 9, tasksPending: 0 },
];

const TaskCompletionGraph = () => {
  return (
    <div className='max-w-[80%] h-[400px] mx-auto'>
      <ResponsiveContainer >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tasksCompleted" stroke="#82ca9d" />
        <Line type="monotone" dataKey="tasksPending" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
    </div>
    
  );
};

export default TaskCompletionGraph;