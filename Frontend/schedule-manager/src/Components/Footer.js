import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social media icons

const Footer = ({setActivesection}) => {
  return (
    <footer className="bg-[#080b16] text-white py-10 border-t-2 border-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              Our schedule manager helps you stay productive by breaking down your goals into daily tasks. 
              Track your progress, maintain streaks, and compete with others on the leaderboard!
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline text-gray-400">Home</a></li>
              <li><a href="/dashboard" className="hover:underline text-gray-400">Dashboard</a></li>
              <li><a href="/leaderboard" className="hover:underline text-gray-400">Leaderboard</a></li>
              <li><a href="/streaks" className="hover:underline text-gray-400">Streaks</a></li>
              <li><a href="/help" className="hover:underline text-gray-400">Help & Support</a></li>
            </ul>
          </div> */}

          {/* Contact Section */}
          <div className='right-0'>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            
            <p className="text-gray-400">Email: <a href="mailto:info@schedulemanager.com" className="text-teal-500 hover:underline">info@schedulemanager.com</a></p>
            <p className="text-gray-400">Rajasthan, India</p>
          </div>

          <button className='bg-customBlue h-[20%] text-center items-center w-[60%] text-white border rounded-md px-3 font-semibold   ' onClick={()=>{setActivesection('commentForm')}}>Add your reviews</button>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400">&copy; 2024 Schedule Manager. All Rights Reserved.</p>
          {/* Social Media Icons */}
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
