import React from 'react'

function Pagination({handlePrv,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 flex justify-center mt-8  p-5  rounded-xl'>
        <div onClick={handlePrv} className='text-5xl hover:cursor-pointer hover:text-red-400'><i className="fa-solid fa-arrow-left-long"></i></div>
        <div className=' text-5xl px-8 font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='text-5xl hover:cursor-pointer hover:text-red-400'><i className="fa-solid fa-arrow-right-long"></i></div>
    </div>
  )
}

export default Pagination