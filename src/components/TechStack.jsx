import React from 'react'
import TechStackItems from './TechStackItems'

'react-icon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

import { ReduxIcon, TailwindIcon } from '../assets/icons'








const TechStack = () => {
  return (
    <div className="w-full flex flex-col bg-black p-6 gap-4 md:gap-8 items-center">
    <div><p className='text-white/90 text-xl font-bold my-2 md:text-3xl'>Tech Stack</p></div>
    <div className='w-full  flex  gap-4 flex-wrap justify-center sm:grid sm:grid-cols-3 sm:grid-flow-row sm:gap-8 sm:max-w-[80%]  md:flex md:max-w-full'>
      <TechStackItems title="HTML5" ic={faCode} svg={ false} />
      <TechStackItems title="CSS" ic={faCss3}  svg={ false}/>
      <TechStackItems title="CSS" ic={faJs}  svg={ false}/>
      <TechStackItems title="React Js" ic={faReact}  svg={ false}/>
        <TechStackItems title="Tailwind CSS" link={ TailwindIcon} svg={ true} />
        <TechStackItems title="Redux" link={ReduxIcon} svg={ true}/>
      </div>
      
      </div>
  )
}

export default TechStack