import React,{useEffect, useState} from 'react'
import Type from '../type/Type'
import { Link } from 'react-router-dom';
import Tolens from '../../image/miners_tolentinos_1.png'
import { DivHashima, NiceH1 } from '../../estilo/Estilo1';
import './estilo.scss'



function Hashima({hashima,setHashima}) {


    return (
        <DivHashima 
        style={{display:'inline-block',marginLeft:'1%',verticalAlign:'top'}}
        color1={hashima.look.color[0]} 
        color2={hashima.look.color[1]} 
        >
        {/* <p className='p_numero_de_carta'>{hashima.number}</p> */}
        <>
        
        <h1 className='h1_titulo_carta'>{hashima.name}</h1>
        </>
        <Link to='/hashi'>
           <img
            // onError={({ currentTarget }) => {
            //     // currentTarget.onError = null; // prevents looping
            //     currentTarget.src=CacheHashima(hashima.img)
            //     }}
           onClick={()=>setHashima(hashima)}
           className='imagen_hashima_card_'
           width={'70%'}
           src={hashima.img}></img>
           
        </Link>

        <div className='div_bottom_carta'>

           <p className='p_descripcion_carta'>{hashima.description}</p>
           
           {hashima.type.map((type,number)=>
           <>
          
           <Type 
           fontSize='2.5rem'
           left='5%'
           marginTop='5%'
           key={number}
           type={type}></Type>

           </>

           )}

        </div>
            

        
        
        </DivHashima>

    )
}

export default Hashima
