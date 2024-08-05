import React from 'react'
import TechStack from './TechStack'

const Main = () => {
  return (
    <div className='flex flex-col items-center w-full justify-between'>
      <div className='flex flex-col w-full p-4 gap-4'>
        <div className='flex flex-col gap-4 mx-auto '>
          <p className="text-2xl font-semibold text-wrap">Hi, I am Sankit Rana 👋</p>
          <p className='text-base ml-4'>- Frontend developer</p>
        </div>
        <div className=' flex flex-col p-6 bg-slate-500 rounded w-full gap-4'>
          <p className='text-xl font-bold text-white '>Social</p>
          <div className="flex justify-evenly font-semibold flex-wrap gap-2">
            <p className='p-2 bg-black/15 rounded'>Linkedin</p>
            <p className='p-2 bg-black/15 rounded'>Github</p>
            <p className='p-2 bg-black/15 rounded'>Email</p>
          </div>
          
        </div>
      </div>


      <TechStack/>

    </div>
  )
}

export default Main