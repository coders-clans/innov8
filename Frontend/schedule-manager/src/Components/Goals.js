import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { toast } from 'react-toastify';




const Goals = ({setActivesection}) => {
  const navigate = useNavigate();
  const [aiResponse, setAiResponse] = useState(null); // AI response
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [isSatisfied, setIsSatisfied] = useState(false);  // User satisfaction
  const [isRegenerating, setIsRegenerating] = useState(false);  // Regeneration state
  const [isGenerated, setIsGenerated] = useState(false);
  const [formData, setFormData] = useState({
    // userId: '', // Hardcoded or retrieve from auth context
    goal: '',
    totalDays: '',
    freeHoursPerDay: ''
  });
  const userId = localStorage.getItem('user_id');
  // console.log(userId);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsGenerated(true);
    setAiResponse(null); // Clear previous response
    setIsSatisfied(false); // Reset satisfaction
    setIsRegenerating(false); // Reset regeneration

    try {
      const res = await axios.post('http://localhost:7001/user/goal/getPath', formData);
      setAiResponse(res.data.dailyPlan); // Set AI response

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user satisfaction and save the data to the database
  const handleSatisfied = async () => {
    setIsSatisfied(true);

    // Prepare the data to save
    // console.log(aiResponse);
    const dayPlansData = aiResponse; // The AI-generated response

    // console.log(formData.goal, ", ", formData.totalDays, ",", formData.freeHoursPerDay);
    // console.log(dayPlansData);
    const saveData = {
      userId: userId,
      goal: formData.goal,
      totalDays: formData.totalDays,
      freeHoursPerDay: formData.freeHoursPerDay,
      dayPlansData, // AI-generated daily plan
    };


    try {
      const res = await axios.post('http://localhost:7001/user/goal/createPath', saveData);
      console.log(res);
      if (res.data.success) {
        toast.success("Data Saved Successfully");
      } else {
        alert('Failed to save Goal Path. Please try again.');
      }
      console.log(res);
     setActivesection('')
      // const goalId = res.
      // localStorage.setItem('goalId',)
      // navigate('/taskManager')
      
    } catch (error) {
      toast.error("There was an issue saving your goal path.");
    }
  };

  // Handle regeneration of AI response
  const handleRegenerate = async () => {
    setIsRegenerating(true);
    setIsLoading(true); // Show loading while regenerating

    try {
      const res = await axios.post('http://localhost:7001/user/goal/getPath', formData);
      setAiResponse(res.data.dailyPlan); // Set regenerated response
      setIsSatisfied(false); // Reset satisfaction
    } catch (error) {
      console.error('Error regenerating response:', error);
      alert('Failed to regenerate response. Please try again.');
    } finally {
      setIsLoading(false);
      setIsRegenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="container mx-auto p-4 mb-10">
      {isLoading ? (
        <Spinner />
      ) : aiResponse ? (
        <div className="form-container max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Generated Plan:
          </h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {aiResponse.map((day, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-teal-600 mb-2">
                  Day {day.day}: {day.title}
                </h4>
                <p className="text-gray-700">{day.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {day.tasks.map((task, idx) => (
                    <li key={idx} className="text-gray-600">
                      {task.task} -{" "}
                      <span className="font-semibold">{task.time} hours</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Satisfaction and Regeneration buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleSatisfied}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
              disabled={isSatisfied}
            >
              {isSatisfied ? "You are happy with this!" : "Am I happy with this?"}
            </button>
  
            <button
              onClick={handleRegenerate}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
              disabled={isRegenerating || isLoading}
            >
              {isRegenerating ? "Regenerating..." : "Regenerate Response"}
            </button>
          </div>
        </div>
      ) : (
        <div className="form-container max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="form-heading text-2xl font-bold text-gray-800 mb-6">
            Enter the following details to proceed ..
          </h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Your Goal
              </label>
              <input
                name="goal"
                type="text"
                value={formData.goal}
                onChange={handleChange}
                required
                className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
  
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-1">
                Number of days to achieve your goal
              </label>
              <input
                name="totalDays"
                type="number"
                value={formData.totalDays}
                onChange={handleChange}
                required
                className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
  
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-1">
                Free hours per day
              </label>
              <input
                name="freeHoursPerDay"
                type="number"
                value={formData.freeHoursPerDay}
                onChange={handleChange}
                required
                className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
  
          <div className='flex gap-2' >
          <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Generating Plan..." : "Submit"}
            </button>
            <button onClick={ () => {
              setActivesection('')
            }} className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200">
            go back
            </button>
          </div>
          </form>
        </div>
      )}
    </div>
  </div>
  
  
  );
};

export default Goals;
