import React from 'react'
const EnterName = ({ activeSection, setActivesection }) => {


  const handleCategoryClick = (category) => {

    console.log("ok")
    setActivesection(category);
  }
  return (
    <div className='flex justify-start'>
      <div className='mx-auto pt-4'>
        <button onClick={() => handleCategoryClick('goals')}
          className='inline-flex items-center justify-center relative cursor-pointer select-none align-middle 
          appearance-none box-border font-medium leading-[1.75] text-[1rem] normal-case h-9 text-[black] 
          bg-[rgb(245,246,250)] bg-[linear-gradient(rgb(235,238,244),rgb(245,246,250))] shadow-[rgb(189,199,219)_0px_-1px_0px_inset] 
          min-w-fit border px-4 py-5 rounded-lg border-solid border-[rgb(245,246,250)] '>Start now</button>
      </div>
    </div>
  )
}

export default EnterName;
