import React, { useState, useEffect } from 'react';

// Helper function to get today's date in a specific format (YYYY-MM-DD)
const getTodayDate = () => new Date().toISOString().split('T')[0];

const StreakManager = () => {
  const [streak, setStreak] = useState(0);  // Keeps track of the current streak
  const [lastCheckedDate, setLastCheckedDate] = useState(getTodayDate());  // Tracks the last date streak was checked
  const res = localStorage.getItem('isTaskCompleted');
  useEffect(() => {
    const today = getTodayDate();

    // If today is a new day, check if the task was completed the previous day
    if (lastCheckedDate !== today) {
      if (res === false) {
        // If no task was completed the previous day, reset the streak
        setStreak(0);
      }
      // Update last checked date to today
      setLastCheckedDate(today);
    }
  }, [lastCheckedDate, res]);

  // When a task is completed for today, increment the streak
  useEffect(() => {
    if (res) {
      setStreak(prevStreak => prevStreak + 1);
    }
  }, [res]);

  return (
    <div className="text-white  text-center">
      <p className="text-lg ">{streak} {streak === 1 ? 'day' : 'days'}</p>
    </div>
  );
};

export default StreakManager;