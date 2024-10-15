import React from 'react'
const EnterName = ({ activeSection, setActivesection }) => {


  const handleCategoryClick = (category) => {

    console.log("ok")
    setActivesection(category);
  }
  return (
    <div>
      <input placeholder='Enter your name' />
      <button onClick={() => handleCategoryClick('goals')}>Start now</button>
    </div>
  )
}

export default EnterName;
