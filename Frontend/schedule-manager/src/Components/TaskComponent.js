import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiTickOutline, TiTimesOutline } from "react-icons/ti";
import StreakManager from './Streaks';

const TaskManager = () => {
  const id = localStorage.getItem('user_id');
  const [tasks, setTasks] = useState([]);
  const [day, setDay] = useState(1);
  const [nextDayAvailable, setNextDayAvailable] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const fetchTasks = async (day) => {
    try {
      const resData = await axios.get(`http://localhost:7001/user/goal/${id}`, { withCredentials: true });
      const goalId = resData.data._id;
      localStorage.setItem("goalId", goalId);

      if (goalId) {
        const response = await axios.get(`http://localhost:7001/user/goal/${goalId}/day/${day}`, { withCredentials: true });
        setTasks(response.data.tasks);
        setNextDayAvailable(false);
      } else {
        console.log("Goal Id not found");
      }
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const toggleTaskCompletion = async (goalPathId, taskId, completed) => {
    try {
      // Update task completion status directly using goalPathId and taskId
      console.log(goalPathId, ",", taskId);
      await axios.patch(`http://localhost:7001/user/goal/updateTaskStatus/${goalPathId}/${taskId}`, { completed });

      // Update local tasks state to reflect changes
      setTasks(tasks.map(task => task._id === taskId ? { ...task, completed } : task));
    } catch (error) {
      console.error(`Failed to ${completed ? 'mark as completed' : 'undo completion'}:`, error);
    }
  };

  const moveToNextDay = () => {
    setDay(day + 1);
    setNextDayAvailable(false);
    fetchTasks(day + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextDayAvailable(true);
    }, 24 * 60 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [day]);

  useEffect(() => {
    fetchTasks(day);
  }, [day]);
  <StreakManager isTaskCompleted={isTaskCompleted} setIsTaskCompleted={setIsTaskCompleted} />
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Tasks for Day {day}</h1>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available for this day.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map(task => (
            <li key={task._id} className="flex items-center justify-between p-4 bg-white rounded shadow">
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="text-lg">
                {task.task} - {task.time} hours
              </span>
              <button onClick={() => toggleTaskCompletion(localStorage.getItem("goalId"), task._id, !task.completed)} className="text-2xl">
                {task.completed ? (<div>
                  {
                    localStorage.setItem('isTaskCompleted', true)
                  }
                  <TiTimesOutline className="text-red-500" />
                </div>)
                  : <TiTickOutline className="text-green-500" />}
              </button>
            </li>
          ))}
        </ul>
      )}
      {nextDayAvailable ? (
        <div className="mt-6 text-center">
          <p className="text-lg text-green-600">You can start the next day's tasks now.</p>
          <button onClick={moveToNextDay} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Next Day</button>
        </div>
      ) : (
        <p className="mt-6 text-center text-gray-600">Next day's tasks will be available in 24 hours.</p>
      )}
    </div>
  );
};

export default TaskManager;