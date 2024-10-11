import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../Components/Profile';
// const userId = '67011cf9122020cfe0bf42b3';
const NavBar = () => {
  const [activeSection, setActivesection] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const navigate = useNavigate();

  function handleContactSupport() {
    navigate('/help');
  }


  function handleProfile() {
    setActivesection('profile');


  }
  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }

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

          </div>
        )
      default:
        return (
          <div>
            <NavBar />
          </div>
        )
    }
  }
  return (

    <div>
      <div>{renderContent()}</div>

    </div>
  )
};


export default NavBar;


/*

Logo 
login signup
logout
streak 
profile
help 
ask ?


*/