import React, { useState } from 'react';
import img from './logo.jpg'
import { useNavigate } from 'react-router-dom';

function NavBar({activeSection,setActivesection}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileView, setProfileView] = useState(false);
const navigate = useNavigate();
  const handleSignIn = () => {
    setProfileView(false);
    navigate('/signup')
  };

  const handleLogin = () => {
    navigate('/login')
    setLoggedIn(true);
    setProfileView(false);
  };

  const handleCategoryClick = (category) => {
    setActivesection(category);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setProfileView(false);
    navigate();
  };

  const handleHelp = () => {
    navigate('/help')
  };
  return (
    <div >
    <nav>
      {/* <img src={img}/> */}
      <button onClick={loggedIn ? (handleLogout)  : (handleSignIn)} className='mr-10'>{loggedIn ? (<div>Log out</div>):(<div>SignUp</div>)}</button>
      <button onClick= {handleLogin}>{!loggedIn ? (<div>Log in</div>):(<div></div>)}</button>
      <button onClick={()=>handleCategoryClick('profile')} >Profile</button>
      <button onClick={handleHelp}>Help</button>
      <button onClick={()=>handleCategoryClick('ask')}>Ask</button>
    </nav>
    <div>
    </div>

  </div>
  
  );
}

export default NavBar;
