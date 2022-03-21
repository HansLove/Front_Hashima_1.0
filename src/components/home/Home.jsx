import React from 'react'
import Bitcoin from '../image/bitcoin_1.png'
import Animacion_letrero_1 from '../animations/letrero_1/Animacion_letrero_1'
import './estilo.scss'
import HashimaSprite from '../sprites/HashimaSprite'
import WhatIs from './WhatIs'
import RedesSociales from '../redes_sociales/RedesSociales'


function Home() {

    const Cuadro=()=>{
        return <div style={{width:'50%',display:'inline-block',marginTop:'1%'}}>
            
            <div>

                <div style={{border:'1px solid gray',width:'49%',display:'inline-block',height:'33vh'}}>
                <HashimaSprite display='inline-block' scale={6} width='45%' />
                </div>

                <div style={{border:'1px solid gray',width:'49%',display:'inline-block',height:'33vh'}}>
                <HashimaSprite display='inline-block' scale={6} width='45%' id={12}/>
                </div>

            </div>
            
            <div>

                <div style={{border:'1px solid gray',width:'49%',display:'inline-block',height:'33vh'}}>
                <HashimaSprite display='inline-block' scale={6} width='45%' id={6}/>
                </div>

                <div style={{border:'1px solid gray',width:'49%',display:'inline-block',height:'33vh'}}>
                <HashimaSprite display='inline-block' scale={6} width='45%' id={10}/>
                </div>

            </div>
        </div>
    }

    return (
        <div>

        <img 
        style={{display:'inline-block',width:'85%',
        opacity:'0.1',zIndex:'-1',position:'absolute'}}
        src={Bitcoin}/>
        <div>
        <Animacion_letrero_1 fontSize='6rem' display='inline-block'
        width='40%'/> 
        <Cuadro/>
        </div>

        <div style={{display:'block',marginLeft:'3%'}}>
            <button className='button_white_paper' >Explore</button>
            <button className='button_white_paper' 
            style={{display:'inline-block',marginLeft:'1%'}}>White Paper</button>

        </div>
        <RedesSociales/>
        
        <WhatIs/>

            
            
        
        </div>
    )
}

export default Home
