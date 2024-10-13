import React, { useState } from 'react';
import img from './logo.jpg'
import { useNavigate } from 'react-router-dom';

function NavBar({ activeSection, setActivesection }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });


  const [profileView, setProfileView] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    setProfileView(false);
    navigate('/signup')
  };

  const handleLogin = () => {
    navigate('/login')
    setProfileView(false);

  };

  const handleCategoryClick = (category) => {
    if (isLoggedIn) {
      setActivesection(category);
    }
    else {
      navigate('/login')
    }

  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setProfileView(false);

  };

  const handleHelp = () => {
    navigate('/help')
  };
  return (
    <div >
      <nav>
        {
          isLoggedIn ? (
            <div>
              <button onClick={() => handleCategoryClick('profile')} >Profile</button>
              <button onClick={handleLogout} >logout</button>
              <button onClick={handleHelp}>Help</button>
              <button onClick={() => handleCategoryClick('ask')} >Ask</button>
            </div>
          ) : (
            <div>
              <button onClick={handleLogin}>Log in</button>
              <button onClick={handleSignIn}>SignUp</button>
              <button onClick={handleHelp}>Help</button>
              <button onClick={() => handleCategoryClick('ask')} >Ask</button>
            </div>
          )
        }

        {/* <img src={img}/> */}

      </nav>
      <div>
      </div>
    </div>

  );
}

export default NavBar;
