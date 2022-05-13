import React from 'react'
import Bitcoin from '../../image/bitcoin_1.png'
import HashimaSprite from '../../components/sprites/HashimaSprite'
import WhatIs from './WhatIs'
import RedesSociales from '../../components/redes_sociales/RedesSociales'
import OurCoin from '../ourcoin/OurCoin'
import {animateScroll as scroll} from 'react-scroll'
import './estilo.scss'
import { NavLink } from '../../components/navbar/Style_1'
import MarketPlace from '../marketplace/MarketPlace'
import Seccion from '../marketplace/Seccion'
import ButtonLaser from '../../components/Button/ButtonLaser/ButtonLaser'


function Home() {

    
    const WhitePaperLink='https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/Docs%2Fwhite_paper_hashimas.pdf?alt=media&token=7bf83928-9f80-4544-9e28-2bf394d7df78'
    
    const LocalMenu=()=>{
        return <ul style={{display:'flex',margin:'1%'}}>
            <li onClick={()=>scroll.scrollTo(1000)}
            className='sub_local_menu'>What is?</li>
            <li onClick={()=>scroll.scrollTo(2000)}
            className='sub_local_menu'>$HASHI</li>
            {/* <li onClick={()=>scroll.scrollTo(3000)} className='sub_local_menu'>Mision</li> */}
        </ul>
    }

    // const Cuadro=()=>{
    //     return <div style={{width:'50%',display:'inline-block',marginTop:'1%'}}>
            
    //         <div>

    //             <div style={{border:'1px solid gold',borderTopLeftRadius:'10%',
    //             width:'49%',display:'inline-block',height:'33vh'}}>
    //             <HashimaSprite 
    //             onClick={()=>{}}
    //             display='inline-block' scale={6} width='45%' id={1}/>
    //             </div>

    //             <div style={{border:'1px solid lightgreen',borderTopRightRadius:'10%',
    //             width:'49%',display:'inline-block',height:'33vh'}}>
    //             <HashimaSprite display='inline-block' scale={6} width='45%' id={12}/>
    //             </div>

    //         </div>
            
    //         <div>

    //             <div style={{border:'1px solid hotpink',width:'49%',display:'inline-block',height:'33vh'}}>
    //             <HashimaSprite display='inline-block' scale={6} width='45%' id={6}/>
    //             </div>

    //             <div style={{border:'1px solid orange',width:'49%',display:'inline-block',height:'33vh'}}>
    //             <HashimaSprite display='inline-block' scale={6} width='45%' id={10}/>
    //             </div>

    //         </div>
    //     </div>
    // }




    return (
        <div>

        <LocalMenu/> 

        

        <img 
        style={{display:'inline-block',width:'85%',
        opacity:'0.1',zIndex:'-1',position:'absolute'}}
        src={Bitcoin}/>
    



      

        <div style={{display:'inline-flex',marginLeft:'3%'}}>

            <NavLink 
            to='/marketplace' activeStyle>
                <button className='button_white_paper' >Explore</button>

            </NavLink>

            <button 
            onClick={()=>window.open(WhitePaperLink)}
            className='button_white_paper' 
            style={{display:'inline-block',marginLeft:'1%'}}>White Paper</button>

        </div>
        <RedesSociales/>

        
        <WhatIs/>

        <OurCoin/>




            
        
        </div>
    )
}

export default Home
