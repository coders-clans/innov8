import React from 'react';
import { FaTasks, FaCrown, FaChartLine, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
// import schedule from './image/schedule-img.avif';

const Help = () => {
  const navigate = useNavigate();
  function handleBack (){
    navigate('/');
  }
  return (
<div className="bg-[radial-gradient(100%_80%_at_top,#00365d_0%,#080b16_30%)] py-12">
  <div className='flex justify-end'>
    <button onClick={handleBack} className='text-white px-5 font-bold'>
      <IoClose fontSize="1.725rem" fontWeight={700} />
    </button>
  </div>
  
  <div className="max-w-7xl mx-auto shadow-lg rounded-3xl p-10 md:p-16 
    relative min-h-[48px] shrink-0 ">
    
    <header className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-white">Welcome to Your Personal Schedule Manager</h1>
      <p className="mt-4 text-xl text-gray-200">
        Track your progress, stay consistent, and achieve your goals with ease.
      </p>
    </header>

    {/* About Us Section */}
    <section className="description mb-12">
      <h2 className="text-4xl font-semibold text-white mb-6">About Us</h2>
      <p className="text-gray-200 mb-4 leading-relaxed">
        Our schedule manager is your companion in building productive habits and reaching your personal or professional goals. We help you break down your big goals into daily actionable tasks. Whether you're looking to learn a new skill, stay fit, or complete a project, we offer tools to keep you on track every step of the way.
      </p>
      <p className="text-gray-200 leading-relaxed">
        With streak tracking, motivational leaderboards, and a real-time dashboard, you’ll stay committed and organized. Get reminders, measure progress, and make every day count.
      </p>
    </section>

    {/* Features Section */}
    <section className="features mb-12">
      <h2 className="text-4xl font-semibold text-white mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaTasks className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Daily Task Management</h3>
          <p className="text-gray-700">
            Get a personalized list of tasks to work on every day, based on your input and goals.
          </p>
        </div>
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaCrown className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Leaderboard & Competition</h3>
          <p className="text-gray-700">
            Compete with others and climb the leaderboard by staying consistent with your goals.
          </p>
        </div>
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaChartLine className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Progress Tracking Dashboard</h3>
          <p className="text-gray-700">
            Monitor your task completion, goals, and streaks in real-time with a detailed dashboard.
          </p>
        </div>
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaClock className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reminders & Notifications</h3>
          <p className="text-gray-700">
            Never miss a task with regular reminders and notifications sent directly to you.
          </p>
        </div>
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaTasks className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Streaks & Achievements</h3>
          <p className="text-gray-700">
            Stay motivated by building streaks and unlocking achievements as you go.
          </p>
        </div>
        <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
          <FaChartLine className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">24/7 Customer Support</h3>
          <p className="text-gray-700">
            Have questions? Our dedicated support team is available anytime to assist you.
          </p>
        </div>
      </div>
    </section>

    {/* Help Section */}
    <section className="help mt-16">
      <h2 className="text-4xl font-semibold text-white mb-6">Need Help?</h2>
      <p className="text-gray-200 text-lg mb-4">
        We understand that sometimes things might get overwhelming, and you may need assistance. Don’t worry! We’re here to help.
      </p>
      <p className="text-gray-200 text-lg mb-4">
        You can reach our support team by email or phone. We’ll be happy to walk you through any challenges you’re facing.
      </p>

   

 
    </section>


  </div>
</div>

  );
};

export default Help;