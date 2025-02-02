import React, { useEffect, useState } from "react";
import axios from "axios";
import { TiTickOutline, TiTimesOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import DonutChart from '../Components/TaskCompeletionTracker';
import { IoClose
 } from "react-icons/io5";
const TaskManager = ({ tasks, setTasks,completedTasks, setCompletedTasks,setActivesection, setPendingTasks, pendingTasks }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("user_id");
  const [day, setDay] = useState(1);
  const [totalDays, setTotalDays] = useState(null); // Track the total number of days in the goal
  const [goalCompleted, setGoalCompleted] = useState(false); // Track if the goal is complete

  const fetchDay = async () => {
    try {
      const resData = await axios.get(`http://localhost:7001/user/getDay/${id}`, { withCredentials: true });
      let days = resData.data.currStat;
      if (days === 0) {
        days++;
      }
      setDay(days);
    } catch (error) {
      console.error("Failed to fetch the current day:", error);
    }
  };

  const fetchGoalDetails = async () => {
    try {
      const resData = await axios.get(`http://localhost:7001/user/goal/${id}`, { withCredentials: true });
      const goalId = resData.data._id;
      const totalDaysInGoal = resData.data.totalDays; // Assuming your API provides the total number of days in the goal
      setTotalDays(totalDaysInGoal);
      localStorage.setItem("goalId", goalId);
    } catch (error) {
      console.error("Failed to fetch goal details:", error);
    }
  };

  const fetchTasks = async (day) => {
    try {
      const goalId = localStorage.getItem("goalId");
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
      const updatedTasks = tasks.map((task) => (task._id === taskId ? { ...task, completed } : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error(`Failed to ${completed ? "mark as completed" : "undo completion"}:`, error);
    }
  };

  const handleNextDayClick = async () => {
    try {
      const nextDay = day + 1;

      // Check if the goal has more days
      if (nextDay > totalDays) {
        setGoalCompleted(true);
        setDay(0);
        await axios.patch(
          `http://localhost:7001/user/updateDay/${id}`,
          { currStat: 0 },
          { withCredentials: true }
        );

        // Send DELETE request to delete the goal
        await deleteGoal();
        window.location.reload();
        return;
      }

      await axios.patch(
        `http://localhost:7001/user/updateDay/${id}`,
        { currStat: nextDay },
        { withCredentials: true }
      );

      setDay(nextDay); // Increment the day locally
      setTasks([]); // Clear current tasks while fetching new ones
    } catch (error) {
      console.error("Failed to update day on the backend:", error);
    }
  };

  const deleteGoal = async () => {
    try {
      const goalId = localStorage.getItem("goalId");
      console.log(goalId)
      await axios.delete(`http://localhost:7001/user/goal/delete/${goalId}`, { withCredentials: true });

      // Clear the local storage after deleting the goal
      localStorage.removeItem("goalId");


      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the goal:", error);
    }
  };

  useEffect(() => {
    fetchGoalDetails(); 
    const goalId = localStorage.getItem("goalId");
  if (!goalId) {
    console.log("No goalId found, skipping fetch.");
    return;
  }
    // Fetch total days in the goal
    
    fetchDay(); // Fetch the current day
  }, []);

  useEffect(() => {
    if (day && totalDays !== null) {
      fetchTasks(day); // Fetch tasks only when day and totalDays are ready
    }
  }, [day, totalDays]);

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed).length);
  }, [tasks, setCompletedTasks]);

  const allTasksCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="p-6 mt-20 relative">
    <h1 className="text-3xl font-bold mb-6 text-center text-white">Today's tasks</h1>
  
    {/* Overlapping container with blurred background */}
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
      <div className="max-w-[900px] mx-auto my-12 mb-20 flex items-center justify-evenly bg-customBlue p-8 rounded-3xl shadow-xl relative w-full sm:w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
  
        {/* Close Button */}
        <button
          onClick={() => setActivesection('')}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
        >
          <IoClose />
        </button>
  
        {/* Task Content */}
        <div className="w-full">
          {goalCompleted ? (
            <div className="text-center">
              <p className="text-2xl text-green-600">🎉 Congratulations! You've completed your entire goal! 🎉</p>
              <button
                onClick={() => setActivesection('')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Go to Home Page
              </button>
            </div>
          ) : tasks.length === 0 ? (
            <p className="text-center text-white">No tasks available for this day.</p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li key={task._id} className="flex w-[80%] items-center justify-between p-4 bg-customBlue rounded border shadow-lg hover:translate-y-[-20px] transition duration-500">
                  <span style={{ textDecoration: task.completed ? "line-through" : "none" }} className="text-lg text-gray-200">
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
        </div>
  
        {/* All tasks completed message */}
        {allTasksCompleted && !goalCompleted && (
          <div className="mt-6">
            <p className="text-lg text-green-600">Congratulations! All tasks for Day {day} completed!</p>
            <button onClick={handleNextDayClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Go to Next Day
            </button>
          </div>
        )}
  
        {/* Donut chart */}
        <div className="w-full lg:w-1/3 lg:justify-end">
          <DonutChart tasksCompleted={completedTasks} totalTasks={tasks.length} />
        </div>
  
      </div>
    </div>
  </div>
  
    
    
  );
};

export default TaskManager;