import React from 'react'

const Tablet = () => {
  return (
    <div className='absolute -bottom-4 w-[65%] py-10 px-10 rounded-full bg-[#f7f4ed] flex justify-between items-center'>
        <button className='text-2xl text-[#595959] mx-auto flex'>Request Callback</button>
        <div className='w-[2px] h-12 bg-[#d16f52]'></div>
        <button className='text-2xl text-[#595959] mx-auto flex'>Schedule Visit</button>
        <div className='w-[2px] h-12 bg-[#d16f52]'></div>
        <button className='text-2xl text-[#595959] mx-auto flex'>Brochure</button>
    </div>
  )
}

export default Tablet