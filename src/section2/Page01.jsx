import React from 'react'

const Page01 = () => {
  return (
    <div className=' max-[599px]:min-h-[60vh] min-h-screen flex  bg-[#d9d9d9]'>
        <div className='  max-[1024px]:w-full w-[50%] flex justify-end flex-col items-center max-[599px]:px-10 pb-14'>
            <h1 className='font-[font-2] max-[599px]:text-5xl max-[1024px]:text-7xl text-9xl'>Wooden</h1>
            <h1 className='font-[font-1] max-[1024px]:text-6xl text-9xl md:ml-42'>Works</h1>
        </div>
        <div className=' max-[599px]:hidden block  max-[1024px]:w-[100%] w-[50%] bg-[url(/src/assets/Images/bgImg1.png)] bg-cover'> </div>
    </div>
  )
}

export default Page01