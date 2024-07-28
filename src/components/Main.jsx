import React from 'react'

const Main = () => {
  return (
    <div className='flex items-center w-full p-10 justify-between'>
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
  )
}

export default Main