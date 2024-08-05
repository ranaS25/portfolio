import React from 'react'
import TechStackItems from './TechStackItems'

'react-icon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'








const TechStack = () => {
  return (
    <div className="flex flex-col bg-black p-6 gap-4 items-center">
    <div><p className='text-white/90 text-xl font-bold my-2'>Tech Stack</p></div>
    <div className='w-full  flex  gap-4 flex-wrap justify-center'>
      <TechStackItems title="HTML5" ic={faCode} svg={ false} />
      <TechStackItems title="CSS" ic={faCss3}  svg={ false}/>
      <TechStackItems title="CSS" ic={faJs}  svg={ false}/>
      <TechStackItems title="HTML5" ic={faReact}  svg={ false}/>
      <TechStackItems title="Tailwind CSS"  svg={ true}/>
      <TechStackItems title="Redux"  svg={ true}/>
      </div>
      
      </div>
  )
}

export default TechStack