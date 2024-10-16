import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultimg from '../Components/images/profile.png';
import img from './logo.jpg';
import Profile from '../Components/Profile';
import Ask from '../Components/Ask'
import EnterName from '../Components/EnterName';
import Goals from '../Components/Goals';
import Highlights from '../Components/Highlights';
import Faqs from '../Components/FAQ';

const Home = () => {
  const [activeSection, setActivesection] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [isClicked, setisClicked] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCategoryClick = (category) => {
    if (isLoggedIn) {
      setActivesection(category);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleHelp = () => {
    navigate('/help');
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'ask':
        return (
          <div>
            <Ask />
          </div>
        )
      case 'goals':
        return (
          <div>
            <Goals />
          </div>
        )
      default:
        <div></div>
        return (
          <div className='bg-[radial-gradient(ellipse_at_top,#121861_0%,#10103a_20%,#000000_100%)] w-[100vw] h-[100vh]'>
            <NavBar activeSection={activeSection} setActivesection={setActivesection} />
            <EnterName activeSection={activeSection} setActivesection={setActivesection} />
            <Highlights />
            <Faqs />
          </div>
        )
    }
  }
  return (
    <div className='fixed w-full z-50 mt-10'>
      <nav className="relative z-0 min-h-[48px] shrink-0 backdrop-blur-xl border bg-[rgba(5,7,10,0.4)] 
      shadow-[rgba(9,11,17,0.7)_0px_4px_16px_0px,rgba(19,23,32,0.8)_0px_8px_16px_-5px] px-3 py-2 rounded-[calc(16px)] 
      border-solid border-[rgba(51,60,77,0.6)] w-[1300px] mx-auto">

        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className='flex justify-between items-center'>
            <div className="select-none inline-flex shrink-0 h-[21px] w-[100px] transition-[fill] duration-200 ease-in-out mr-4 items-center">
              <img src={img} alt="Logo" className="h-8 w-8 rounded-full mr-3" />
              <span className="text-white text-1xl font-bold">MyApp</span>
            </div>

            <div className="hidden md:flex space-x-4">
              {/* after login */}
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleHelp}
                    className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                  >
                    Help
                  </button>
                  <button
                    onClick={() => handleCategoryClick('ask')}
                    className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                  >
                    Ask
                  </button>
                </>
              ) : (
                // before login
                <>
                  <button
                    onClick={handleHelp}
                    className="inline-flex items-center justify-center relative cursor-pointer select-none
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                  >
                    Help
                  </button>
                  <button
                    onClick={() => handleCategoryClick('ask')}
                    className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                  >
                    Ask
                  </button>
                </>
              )}
            </div>
          </div>

          {/* before login */}
          <div>
            {isLoggedIn ? (
              <div className="flex space-x-4">
                <button onClick={() => { setisClicked(!isClicked) }} className="relative">
                  <img className='h-8 w-8 rounded-full mr-3 cursor-pointer' src={defaultimg} alt='#'></img>
                </button>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-red-500 transition-all duration-300"
                >
                  Logout
                </button>
                {isClicked && (
                  <div className="absolute top-12 right-0 w-[300px] bg-white text-black rounded-lg shadow-lg p-4">
                    <Profile />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex space-x-4">
                  <button
                    className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <button
                    className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] text-[0.8125rem]
                  h-9 m-0 px-3 py-2 rounded-lg border-0 bg-white text-black hover:bg-[#ddd] 
                  transition-all duration-300"
                    onClick={handleSignIn}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className='flex flex-col '>
        <h1 className='mx-auto'>RANDON HEading to go</h1>
        <div>Positioning the Profile component: I used absolute positioning to make sure the Profile component appears next to the profile icon when clicked. This keeps it inline with the rest of the page layout</div>
      </div>

      <div className=''>
        <EnterName activeSection={activeSection} setActivesection={setActivesection} />
      </div>
      {/* Scrollable content wrapper */}
      <div className="overflow-y-auto h-[calc(100vh-48px-40px)] mt-4">
        <div>{renderContent()}</div>
        <div>
          <Highlights />
        </div>
      </div>
    </div>

  )
};
export default Home;
