import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import Calendar
import 'react-calendar/dist/Calendar.css'; // Default Calendar CSS
import { FaCheckCircle, FaUndo } from 'react-icons/fa'; // Icons

const TaskCalendar = () => {
  const [completedTasks, setCompletedTasks] = useState(false); // Track task completion
  const [date, setDate] = useState(new Date()); // Store selected date

  // Get today's date
  const today = new Date().toLocaleDateString();

  // Handler for marking tasks as completed (toggle state)
  const toggleTaskCompletion = () => {
    setCompletedTasks((prevState) => !prevState);
  };

  // CSS for custom date tiles
  const tileContent = ({ date, view }) => {
    const dateString = date.toLocaleDateString();
    if (view === 'month' && dateString === today) {
      return (
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full shadow-md transition-transform duration-300 ${
            completedTasks ? 'bg-green-500 scale-110' : 'bg-green-300 scale-100'
          }`}
        >
          {completedTasks && <FaCheckCircle className="text-white text-xl" />}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-100 shadow-2xl rounded-xl max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
        🗓️ Task Calendar
      </h2>

      <Calendar
        value={date}
        onChange={setDate}
        tileContent={tileContent}
        className="w-full mx-auto text-center bg-white shadow-lg rounded-lg p-4"
      />

      <button
        onClick={toggleTaskCompletion}
        className={`mt-6 w-full px-5 py-3 text-lg font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
          completedTasks
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white shadow-lg transform hover:scale-105`}
      >
        {completedTasks ? (
          <>
            <FaUndo className="text-2xl" />
            <span>Undo Task Completion</span>
          </>
        ) : (
          <>
            <FaCheckCircle className="text-2xl" />
            <span>Mark Tasks Completed</span>
          </>
        )}
      </button>
    </div>
  );
};

export default TaskCalendar;