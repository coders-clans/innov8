import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskManager = ({ userId }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [day, setDay] = useState(1);
  const [nextDayAvailable, setNextDayAvailable] = useState(false);

  // Fetch tasks for a specific day
  // const fetchGoal = async () => {
  //   try {

  //     console.log(goalId);
  //   }
  //   catch (error) {
  //     console.log("Id not found", error);
  //   }
  // }
  const fetchTasks = async (day) => {
    try {
      const resData = await axios.get(`http://localhost/7001/user/goal/${userId}`)
      const goalId = resData._id;
      if (goalId) {
        const response = await axios.get(`http://localhost/7001/user/goal/${goalId}/day/${day}`);
        console.log(response);
        setTasks(response.data.tasks);
        setNextDayAvailable(false);
      }
      else {
        console.log("Goal Id not found");
      }

    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Mark a task as completed
  const markTaskAsCompleted = async (taskId) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { completed: true });
      setTasks(tasks.map(task => task._id === taskId ? { ...task, completed: true } : task));
    } catch (error) {
      console.error("Failed to mark task as completed:", error);
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
      <h1>Tasks for Day {day}</h1>
      {tasks.length === 0 ? (
        <p>No tasks available for this day.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task} - {task.time} hours
              </span>
              {!task.completed && (
                <button onClick={() => markTaskAsCompleted(task._id)}>Mark as Done</button>
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