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


import FAQ from "../Components/FAQ"
import Footer from '../Components/Footer';
import Testimonials from '../Components/Testimols';

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



  const handleTnC = () => {
    navigate('/TnC');
  }
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
  //ahfjb
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

        return (
          <div>

            {
              isLoggedIn ? (<EnterName activeSection={activeSection} setActivesection={setActivesection} />) : (<div></div>)
            }

          <div className='mx-auto w-[500px] m-5 font-normal leading-normal
         text-[rgb(148,160,184)] text-center text-sm pb-14'>By clicking "Start now" you agree to our <span className='text-white underline font-bold'>Terms & Conditions.</span></div>

          </div>

        )

    }
  }
  return (
    <div className='bg-[radial-gradient(100%_80%_at_top,#00365d_0%,#080b16_30%)] w-[100vw] h-[100%]'>
      <div className='fixed w-full z-50 mt-10'>
        <nav className="relative z-0 min-h-[48px] shrink-0 backdrop-blur-xl border bg-[rgba(5,7,10,0.4)] 
      shadow-[rgba(9,11,17,0.7)_0px_4px_16px_0px,rgba(19,23,32,0.8)_0px_8px_16px_-5px] px-3 py-2 rounded-[calc(16px)] 
      border-solid border-[rgba(51,60,77,0.6)] w-[1200px] mx-auto">

          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className='flex justify-between items-center'>
              <a href='#home'>
              <div className="select-none flex shrink-0 h-[21px] w-[100px] transition-[fill] duration-200 ease-in-out mr-4 items-center">
                <img src={img} alt="Logo" className="h-8 w-8 rounded-full mr-3" />
                <span className="text-white text-1xl font-bold">MyApp</span>
              </div>
              </a>
              

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
                      About
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
                    <a href='#highlights'>
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      Highlights
                    </button>
                    </a>
                    
                    <a href='#Testimonials'>
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      Comments
                    </button>
                    </a>
                    
                    <a href='#faqs'>
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      Faqs
                    </button>
                    </a>
                    
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
                      About
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
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      <a href='#highlights'>Highlights</a>
                    </button>
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      Comments
                    </button>
                    <button
                      // onClick={() => handleCategoryClick('ask')}
                      className="inline-flex items-center justify-center relative cursor-pointer select-none  
                  box-border font-medium leading-[1.75] min-w-[64px] bg-[color:var(--variant-textBg)] text-[0.8125rem]
                  h-9 text-[rgb(245,246,250)] m-0 px-3 py-2 rounded-lg border-0 hover:bg-white/30 
                  transition-all duration-300"
                    >
                      <a href='#faqs'>Faqs</a>
                    </button>
                  </>
                )}
              </div>
            </div>

            <div>
              {isLoggedIn ? (
                <div className="flex space-x-4">
                  <button onClick={() => { setisClicked(!isClicked) }} className="relative">
                    <img className='h-8 w-8 rounded-full mr-3 cursor-pointer' src={defaultimg} alt='#'></img>
                  </button>
                  {/* <button
                    onClick={handleLogout}
                    className="text-white hover:text-red-500 transition-all duration-300"
                  >
                    Logout
                  </button> */}
                  {isClicked && (
                    <div className="absolute top-12 right-0 w-[300px] rounded-lg shadow-lg bg-[rgba(5,7,10,0.7)]">
                      <Profile isLoggedin={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
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
      </div>
      
      <div className='w-[100vw] h-[60vh] flex flex-col justify-end items-center' id="home">
          <div className='flex flex-col '>
            <h1 className='font-semibold leading-[1.2] tracking-[-0.5px] items-center text-[clamp(3rem,10vw,3.5rem)]
          text-white mx-auto'>RANDON HEADING TO GO</h1>
          <div className=' mx-auto w-[500px] m-5 font-normal leading-normal
          text-[rgb(148,160,184)] text-center text-sm'>Positioning the Profile component: I used absolute positioning 
          to make sure the Profile component appears next to the profile icon when clicked. This keeps it inline with the 
          rest of the page layout</div>
      </div>

      
          </div>
      
      {/* Scrollable content wrapper */}
      <div className="">
        <div>{renderContent()}</div>
        <div id="highlights">
          <Highlights />
        </div>
        <div id='Testimonials'>
          <Testimonials/>
        </div>
        <div id='faqs'>
          <FAQ  />
        </div>
        <div>
          <Footer/>
        </div>
      </div>

      
    </div>

  )
};
export default Home;
