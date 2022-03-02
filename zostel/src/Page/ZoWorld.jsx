import React from 'react'
import style from './ZoWorld.module.css'
import Travel from './Card/Travel'
import IntroCard from './Card/IntroCard'
import NavbarZoWorld from './NavbarZoWorld'

function ZoWorld() {
  return (
    <div>
        <div>
            <NavbarZoWorld/>
        </div>
        <div>
            <IntroCard/>
        </div>
        <div className={style.display}>
            <Travel/>
            <Travel/>
        </div>
        <div className='footer'>
            <h1>footer</h1>
        </div>

    </div>
  )
}

export default ZoWorld