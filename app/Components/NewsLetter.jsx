import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter w-[65%] h-[40vh] flex flex-col justify-center items-center m-auto px-32 mb-32 bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)]'>
      <h1 className='text-[#454545] text-3xl font-medium'>Get Exclusive Offer On Your Email</h1>
      <p className='text-xs mt-3'>Subscribe to our newsletter and stay updates</p>
      <form className='flex items-center justify-center mt-4 w-full'>
        <input type="email" placeholder="Enter your email" className='outline-none border rounded-full text-xs py-2.5 px-4 w-[58%]' />
        <button type="submit" className='text-white border rounded-full bg-black text-[1.8vh] py-2.5 px-6 -ml-10'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter