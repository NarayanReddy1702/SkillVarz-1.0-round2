
import React, { useRef } from 'react'

const Home = () => {

  return (
    <div className='min-h-screen bg-black text-white flex items-center  gap-y-6 justify-center flex-col px-4'>
         <div><h1 ref={useHead} className='font-["font-2"] text-6xl md:text-[9vw]  mt-26 md:mt-24'>VisuaLab,</h1></div>
         <div className='font-[font-1] flex justify-end  md:w-[32%] '><h1 ref={useHead} className='text-3xl md:text-5xl'>Design Web Studio</h1></div>
         <div className='md:w-[40%] flex ml-10'><h1 className='tracking-[10px] text-xs md:text-base font-[font-4]'>We design bold gamified experiences that captivate, engage, and make brands unforgettable</h1></div>
         <div><div className='w-[0.1px] h-20 bg-amber-50'></div></div>
         <div className='uppercase font-[font-4] md:text-xl tracking-wider'>View Our Work</div>
         <div className='w-full  px-5'><h1 className='font-[font-1] text-4xl'>2025</h1></div>
    </div>
  )
}

export default Home