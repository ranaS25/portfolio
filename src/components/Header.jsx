import React from 'react'

const Header = () => {
  return (
    <div className="flex bg-sky-300 justify-between p-4 items-baseline">
      <p className="text-3xl font-bold font-sans">Portfolio</p>
      <ul className='flex gap-4 font-semibold'>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </div>
  )
}

export default Header