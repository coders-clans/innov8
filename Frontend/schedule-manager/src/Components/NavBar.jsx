import React, { useState } from 'react';
import img from './logo.jpg'
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileView, setProfileView] = useState(false);
const navigate = useNavigate();
  const handleSignIn = () => {

    setLoggedIn(true);
    setProfileView(false);
    navigate('/signup')
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setProfileView(false);
  };

  const handleProfile = () => {
    if (loggedIn) {
      setProfileView(true);
    } else {
      alert("Please log in first.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setProfileView(false);
    navigate();
  };

  const handleHelp = () => {
    navigate('/help')
  };
  const handleAsk = () => {
    alert("Help section");
  };
  return (
    <div className="App">
      <nav className="navbar">
        {/* <img src={img}/> */}
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleProfile}>Profile</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleHelp}>Help</button>
        <button onClick={handleAsk}>Ask</button>
      </nav>
      <div className="content">
        {profileView ? <p>Welcome to your Profile</p> : <p>Please log in to view your profile.</p>}
        {loggedIn ? <p>You are logged in!</p> : <p>You are logged out.</p>}
      </div>

    </div>
  );
}

export default NavBar;
