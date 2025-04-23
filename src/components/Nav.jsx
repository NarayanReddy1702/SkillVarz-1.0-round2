import React from 'react'

const Nav = () => {
    const navInfo=["Home","About","Work","Shop","Contact"]
  return (
    <nav className='w-full px-10 py-8 flex justify-between bg-black text-white fixed top-0 '>
        <span className='text-3xl'>Logo</span>
        <div className='flex '>
           
               <div className=' hidden md:flex items-center justify-center'>
               <ul className='flex gap-x-8'>
                    {navInfo.map((item)=>{
                        return(
                    <li className={` text-[15px] cursor-pointer font-["font-5"]  ${item=="Contact"?"pr-6 border-r-[1px] border-amber-50":""}`}>{item}</li>
                        )
                    })}
                </ul>
               </div>
          <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center flex-col gap-y-2 pl-6  '>
                    <div className='w-18 h-[0.1px]  bg-white'></div>
                    <div className='w-18 h-[0.1px] bg-white'></div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav