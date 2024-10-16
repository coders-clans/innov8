import React from 'react'
const EnterName = ({ activeSection, setActivesection }) => {


  const handleCategoryClick = (category) => {

    console.log("ok")
    setActivesection(category);
  }
  return (
    <div className=' flex m-5'>
      <div className='mx-auto'>
        <input placeholder='Enter your name' />
        <button onClick={() => handleCategoryClick('goals')}>Start now</button>
      </div>
    </div>
  )
}

export default EnterName;
