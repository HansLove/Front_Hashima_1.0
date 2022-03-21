import React from 'react'
import HashimaSprite from '../sprites/HashimaSprite'

function WhatIs({marginTop='10%'}) {
  return (
    <div style={{marginTop:marginTop}}>

        <h1 style={{display:'block',margin:'auto',width:'fit-content',
        fontSize:'3rem'}}>What is a Hashima?</h1>

        <div>              
        <ul className='ul_list_home'>
            <li>Collectibles NFT´s</li>
            <li>Play and earn digital assets</li>
            
            <li>NFT Bitcoinean protocol</li>
            <li>Passive income generator</li>

        </ul>

        <HashimaSprite scale={4}
         id={2} display='inline-block' width='45%'/>
        </div>    

    </div>
  )
}

export default WhatIs