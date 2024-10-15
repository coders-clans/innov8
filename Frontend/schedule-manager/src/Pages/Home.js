import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../Components/Profile';
import Ask from '../Components/Ask'
import NavBar from '../Components/NavBar';
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
      default:
        return (
          <div className='bg-[radial-gradient(ellipse_at_top,#121861_0%,#10103a_20%,#000000_100%)] w-[100vw] h-[100vh]'>
            <NavBar activeSection={activeSection} setActivesection={setActivesection} />

            {/* <h1 className='text-white'>
            nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

NPM version Backers on Open Collective Sponsors on Open Collective

Installation
Either through cloning with git or by using npm (the recommended way):

npm install -g nodemon # or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

Usage
nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

nodemon [your node app]
For CLI options, use the -h (or --help) argument:

nodemon -h
Using nodemon is simple, if my application accepted a host and port as the arguments, I would start it as so:

nodemon ./server.js localhost 8080
Any output from this script is prefixed with [nodemon], otherwise all output from your application, errors included, will be echoed out as expected.

You can also pass the inspect flag to node through the command line as you would normally:
            </h1> */}

          </div>
        )
    }
  }
  return (

    <div>
      <div >{renderContent()}</div>
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