import React from 'react'
import HashimaSprite from '../../components/sprites/HashimaSprite'

function WhatIs() {
  return (
    <div style={{height:'90vh',margin:'10% 2%'}}>

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
        <p style={{fontFamily:'monospace',fontSize:'2.2rem'}}>
          With this new generation of proof of work(POW) Digital assets
          you will get Defi passive income and governance in the protocol. 
          Be part of the new NFT Bitcoinean Standard with Hashima, where you are part of
          the protocol.
          
        </p>

    </div>
  )
}

export default WhatIs