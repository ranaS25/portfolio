import React from 'react'
import TechStack from './TechStack'

const Main = () => {
  return (
    <div className='flex flex-col items-center w-full justify-between'>
      <div className='flex flex-col w-full p-4 gap-4 justify-center md:gap-8 '>
        <div className='flex flex-col gap-4 mx-auto md:py-6 lg:gap-8 justify-center  lg:h-[60dvh]'>
          <p className="text-2xl font-semibold text-wrap md:text-4xl lg:text-7xl">Hi, I am Sankit Rana 👋</p>
          <p className='text-base ml-4 md:text-lg lg:text-3xl'>- Frontend developer</p>
        </div>
        <div className=' flex flex-col p-6 bg-slate-500 rounded w-full gap-4 md:gap-8 lg:p-14 lg:gap-16'>
          <p className='text-xl font-bold text-white md:text-2xl lg:text-3xl'>Social</p>
          <div className="flex justify-evenly md:justify-center md:gap-8 font-semibold flex-wrap gap-2 text-white/80 lg:gap-20">
            <p className='p-2 cursor-pointer  hover:bg-black/20  md:py-4 md:px-6 md:text-lg bg-black/15 rounded lg:py-8 lg:px-10 lg:text-xl'>Linkedin</p>
            <p className='p-2 cursor-pointer hover:bg-black/20  md:py-4 md:px-6 md:text-lg bg-black/15 rounded lg:py-8 lg:px-10 lg:text-xl'>Github</p>
            <p className='p-2 cursor-pointer  hover:bg-black/20 md:py-4 md:px-6 md:text-lg bg-black/15 rounded lg:py-8 lg:px-10 lg:text-xl'>Email</p>
          </div>
          
        </div>
      </div>


      <TechStack/>

    </div>
  )
}

export default Main