import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti"; // Import the undo icon

const TaskManager = () => {
  const id = localStorage.getItem('user_id');
  console.log(id);
  const [tasks, setTasks] = useState([]);
  const [day, setDay] = useState(1);
  const [nextDayAvailable, setNextDayAvailable] = useState(false);

  // Fetch tasks for a specific day
  const fetchTasks = async (day) => {
    try {
      const resData = await axios.get(`http://localhost:7001/user/goal/${id}`, { withCredentials: true });
      console.log(resData);
      const goalId = resData.data._id;

      console.log(goalId);
      if (goalId) {
        const response = await axios.get(`http://localhost:7001/user/goal/${goalId}/day/${day}`, { withCredentials: true });
        console.log(response);
        setTasks(response.data.tasks);
        setNextDayAvailable(false);
      } else {
        console.log("Goal Id not found");
      }
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Mark a task as completed
  const markTaskAsCompleted = async (taskId) => {
    try {
      await axios.patch(``, { completed: true });
      setTasks(tasks.map(task => task._id === taskId ? { ...task, completed: true } : task));
    } catch (error) {
      console.error("Failed to mark task as completed:", error);
    }
  };

  // Undo task completion
  const undoTaskCompletion = async (taskId) => {
    try {
      await axios.put(`http://localhost:7001/api/tasks/${taskId}`, { completed: false });
      setTasks(tasks.map(task => task._id === taskId ? { ...task, completed: false } : task));
    } catch (error) {
      console.error("Failed to undo task completion:", error);
    }
  };

  // Move to the next day's tasks
  const moveToNextDay = () => {
    setDay(day + 1);
    setNextDayAvailable(false);
    fetchTasks(day + 1);
  };

  // Automatically show the next day's tasks after 24 hours
  useEffect(() => {
    const timer = setTimeout(() => {
      setNextDayAvailable(true);
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [day]);

  // Fetch tasks when the component mounts or the day changes
  useEffect(() => {
    fetchTasks(day);
  }, [day]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 flex justify-center items-center"> Tasks for Day {day}</h1>
      {tasks.length === 0 ? (
        <p>No tasks available for this day.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id} className="flex items-center gap-2">
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task} - {task.time} hours
              </span>
              {task.completed ? (
                <button onClick={() => undoTaskCompletion(task._id)}>
                  <TiTimesOutline />
                </button>
              ) : (
                <button onClick={() => markTaskAsCompleted(task._id)}>
                  <TiTickOutline />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {nextDayAvailable ? (
        <div>
          <p>You can start the next day's tasks now.</p>
          <button onClick={moveToNextDay}>Go to Next Day</button>
        </div>
      ) : (
        <p>Next day's tasks will be available in 24 hours.</p>
      )}
    </div>
  );
};

export default TaskManager;