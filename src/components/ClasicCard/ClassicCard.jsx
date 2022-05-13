import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import WorkShop from '../../pages/workshop/WorkShop';
import { StyledDiv } from '../StyledDiv/StyledDiv';
import './estilo.scss'


export default function ClassicCard({hashima,setHashima}) {


    return (
        <StyledDiv 
        style={{display:'inline-block',marginLeft:'1%',verticalAlign:'top',
        marginTop:'1%',
        width:'23%',height:'60vh',}}
        color1={hashima.look.color[0]} 
        color2={hashima.look.color[1]} 
        >
        <>
        
        <h1 className='h1_titulo_carta'>{hashima.name}</h1>
        </>

           <img
           onClick={()=>setHashima(hashima)}
           className='imagen_hashima_card_'
           width={'70%'}
           src={hashima.img}/>
           

        <div className='div_bottom_carta'>

            <WorkShop image={hashima.img}/>           
  

        </div>
            

        </StyledDiv>

    )
}

