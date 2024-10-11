import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../Components/Profile';
import Ask from '../Components/Ask'
import NavBar from '../Components/NavBar';
// const userId = '67011cf9122020cfe0bf42b3';
const Home = () => {
  const [activeSection, setActivesection] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div>
            <Profile />
          </div>
        )
      case 'ask':
        return (
          <div>
            <Ask />
          </div>
        )
      default:
        return (
          <div>
            <NavBar activeSection={activeSection} setActivesection={setActivesection} />
          </div>
        )
    }
  }
  return (

    <div>
      <h1>hellooo</h1>
      <div>{renderContent()}

      </div>

    </div>
  )
};

export default Home;
/*
Logo 
login signup
logout
streak 
profile
help 
ask ?
*/