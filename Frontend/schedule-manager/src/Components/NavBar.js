import React, { useState } from 'react';
import img from './logo.jpg';
import { useNavigate } from 'react-router-dom';
import defaultimg from './images/profile.png' ;
function NavBar({ activeSection, setActivesection }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

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

  return (
    <div className='fixed w-full z-50 mt-10'>
      <nav className="relative min-h-[48px] shrink-0 backdrop-blur-xl border bg-[rgba(5,7,10,0.4)] 
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
          {
            isLoggedIn ?(
            <div className="flex space-x-4" >
            <button
              onClick={() => handleCategoryClick('profile')}
              className=""
            >
              <img className='h-8 w-8 rounded-full mr-3' src={defaultimg}></img>
            </button>
            <button
                  onClick={handleLogout}
                  className="text-white hover:text-red-500 transition-all duration-300"
                >
                  Logout
                </button>
                </div>
            

              
            ) :(<div>
              <div className="flex space-x-4" >
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
            </div> )
          }
        </div>
      </div>
    </nav>

    </div>
  );
}

export default NavBar;
