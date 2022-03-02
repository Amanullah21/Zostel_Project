import React from 'react'
import style from './IntroCard.module.css'
function IntroCard() {
  return (
    <div>
        <div className={style.zo}>
            <h1>Zo World</h1>
            <div>A GLobel <span>Travel</span> Community</div>
        </div>
        <div className={style.intro}>
            <span>Introduction</span>
            <h1>Zo World Founder NFTs</h1>
            <button className={style.founderBtn}>Mint a Founder NFTs</button>
        </div>
    </div>
  )
}

export default IntroCard