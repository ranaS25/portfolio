import React from 'react'
import TechStackItems from './TechStackItems'

'react-icon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'








const TechStack = () => {
  return (
    <div className='w-full p-12 bg-black flex gap-4 flex-wrap justify-center'>
      <TechStackItems title="HTML5" ic={faCode} svg={ false} />
      <TechStackItems title="CSS" ic={faCss3}  svg={ false}/>
      <TechStackItems title="CSS" ic={faJs}  svg={ false}/>
      <TechStackItems title="HTML5" ic={faReact}  svg={ false}/>
      <TechStackItems title="Tailwind CSS"  svg={ true}/>
      <TechStackItems title="Redux"  svg={ true}/>
    </div>
  )
}

export default TechStack