import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ReduxIcon, TailwindIcon } from '../assets/icons'

const TechStackItems = ({ title, ic, svg }) => {
  
  return (
    <div className='py-4 px-6 flex flex-col w-fit items-center justify-center gap-4 bg-slate-600 rounded hover:bg-slate-600/80 cursor-pointer sm:w-full md:w-fit'>
      {
        !svg?<FontAwesomeIcon icon={ic} style={{ color: "#ffffff" }}
          className='w-16 h-fit' /> : <ReduxIcon />
      }
      
      <p className='w-fit text-wrap text-center  font-bold text-white'>{title}</p>
    </div>
  )
}

export default TechStackItems