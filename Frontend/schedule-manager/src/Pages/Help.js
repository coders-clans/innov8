import React from 'react';
import { FaTasks, FaCrown, FaChartLine, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-3xl p-10 md:p-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">Welcome to Your Personal Schedule Manager</h1>
          <p className="mt-4 text-xl text-gray-600">
            Track your progress, stay consistent, and achieve your goals with ease.
          </p>
        </header>

        <section className="description mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our schedule manager is your companion in building productive habits and reaching your personal or professional goals.
            We help you break down your big goals into **daily actionable tasks**. Whether you aim to learn a new skill, stay fit, or
            complete a project, we offer tools to keep you on track every step of the way.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Achieve Your Goals"
            className="w-full h-72 object-cover rounded-lg shadow-md mb-8"
          />
          <p className="text-gray-700 leading-relaxed">
            With **streak tracking**, motivational **leaderboards**, and a **real-time dashboard**, you’ll stay committed and organized.
            Get reminders, measure progress, and make every day count.
          </p>
        </section>

        <section className="features mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
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
                Monitor your task completion, goals, and streaks in real time from a detailed dashboard.
              </p>
            </div>
            <div className="feature-item bg-blue-50 p-6 rounded-xl shadow-sm">
              <FaClock className="text-4xl text-teal-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reminders & Notifications</h3>
              <p className="text-gray-700">
                Never miss a task with regular reminders and notifications sent to you.
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
                Have questions? Our support team is available anytime to help you out.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer text-center mt-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Need Help?</h2>
          <p className="text-gray-700 text-lg mb-2">
            Email: <a href="mailto:jprasham3@gmail.com" className="text-teal-600 hover:underline">jprasham3@gmail.com</a>
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Phone: <span className="text-teal-600">+91 8209871857</span>
          </p>
          <p className="text-gray-700 text-lg">Rajasthan, India</p>
          <p className="text-gray-700 text-lg mt-4">Follow us on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" target="_blank" className="text-teal-600 hover:text-teal-800 transition duration-200">Facebook</a>
            <a href="#" target="_blank" className="text-teal-600 hover:text-teal-800 transition duration-200">Instagram</a>
            <a href="#" target="_blank" className="text-teal-600 hover:text-teal-800 transition duration-200">Twitter</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Help;
