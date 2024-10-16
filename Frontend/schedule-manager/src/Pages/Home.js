import React from 'react';
import { useState } from 'react';
import Profile from '../Components/Profile';
import Ask from '../Components/Ask'
import NavBar from '../Components/NavBar';
import EnterName from '../Components/EnterName';
import Goals from '../Components/Goals';
import Highlights from '../Components/Highlights';
// import Faqs from '../Components/FAQ';
// const userId = '67011cf9122020cfe0bf42b3';
const Home = () => {
  const [activeSection, setActivesection] = useState(null);

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
      case 'goals':
        return (
          <div>
            <Goals />
          </div>
        )
      default:
        return (
          <div className='bg-[radial-gradient(ellipse_at_top,#121861_0%,#10103a_20%,#000000_100%)] w-[100vw] h-[100vh]'>
            <NavBar activeSection={activeSection} setActivesection={setActivesection} />
            <EnterName activeSection={activeSection} setActivesection={setActivesection} />
            <Highlights />
            {/* <Faqs /> */}
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