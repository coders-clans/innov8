import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiTickOutline, TiTimesOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import StreakManager from './Streaks';

const TaskManager = ({ tasks, setTasks, setCompletedTasks, setPendingTasks, pendingTasks }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const id = localStorage.getItem('user_id');
  const [day, setDay] = useState(1);

  const fetchTasks = async (day) => {
    try {
      const resData = await axios.get(`http://localhost:7001/user/goal/${id}`, { withCredentials: true });
      const goalId = resData.data._id;
      localStorage.setItem("goalId", goalId);

      if (goalId) {
        const response = await axios.get(`http://localhost:7001/user/goal/${goalId}/day/${day}`, { withCredentials: true });
        setTasks(response.data.tasks);
      } else {
        console.log("Goal Id not found");
      }
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const toggleTaskCompletion = async (goalPathId, taskId, completed) => {
    try {
      await axios.patch(`http://localhost:7001/user/goal/updateTaskStatus/${goalPathId}/${taskId}`, { completed });
      const updatedTasks = tasks.map(task => task._id === taskId ? { ...task, completed } : task);
      setTasks(updatedTasks);
    } catch (error) {
      console.error(`Failed to ${completed ? 'mark as completed' : 'undo completion'}:`, error);
    }
  };

  const handleCongratulationClick = () => {
    setTasks([]); // Clear the tasks
    navigate('/'); // Redirect to the home page
  };

  useEffect(() => {
    setCompletedTasks(tasks.filter(task => task.completed).length);
  }, [tasks, setCompletedTasks]);

  useEffect(() => {
    fetchTasks(day);
  }, [day]);

  const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);

  return (
    <div className="p-6 mt-20 max-w-[900px] mx-auto my-12 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Tasks for Day {day}</h1>
      {tasks.length === 0 ? (
        <p className="text-center text-white">No tasks available for this day.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map(task => (
            <li key={task._id} className="flex items-center justify-between p-4 bg-white rounded border shadow-lg hover:translate-y-[-20px] transition duration-500">
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="text-lg">
                {task.task} - {task.time} hours
              </span>
              <button onClick={() => toggleTaskCompletion(localStorage.getItem("goalId"), task._id, !task.completed)} className="text-2xl">
                {task.completed ? (
                  <TiTimesOutline className="text-red-500" />
                ) : (
                  <TiTickOutline className="text-green-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {allTasksCompleted ? (
        <div className="mt-6 text-center">
          <p className="text-lg text-green-600">Congratulations! All tasks completed!</p>
          <button onClick={handleCongratulationClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go to Home Page
          </button>
        </div>
      ) : (
        <p className="mt-6 text-center text-gray-200">Complete all tasks to unlock the congratulations screen .</p>
      )}
    </div>
  );
}; 

export default TaskManager;
