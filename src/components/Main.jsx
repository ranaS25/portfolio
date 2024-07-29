import React from 'react'
import TechStack from './TechStack'

const Main = () => {
  return (
    <div className='flex flex-col items-center w-full justify-between'>
      <div className='flex w-full p-10'>
        <div className='flex flex-col gap-4'>
          <p className="text-6xl font-semibold text-wrap">Hi, I am Sankit Rana 👋</p>
          <p className='text-xl'>- Frontend developer</p>
        </div>
        <div className='p-24 bg-slate-500 rounded'>
          <p>Profiles</p>
          <p>Linkedin - <span></span></p>
          <p>Github</p>
          <p>Email - <span></span></p>
          <p></p>
        </div>
      </div>


      <TechStack/>

    </div>
  )
}

export default Main