import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai'


function BotonUpDown({setcurrentId,currentId,Reload}) {

    const Button=styled.button`
        background:transparent;
        color:white;
        font-size: 5rem;
      
    `

    const Accion=async(adelante)=>{
      console.log('curren id: ',currentId)
        if(adelante)setcurrentId(parseInt(currentId)+1)
        if(!adelante)setcurrentId(parseInt(currentId)-1)
        await Reload()
        
        
    }
  return (
    <div>
        <Button  onClick={()=>Accion(false)}><AiOutlineArrowLeft/></Button>
        <Button onClick={()=>Accion(true)}><AiOutlineArrowRight/></Button>
    </div>
  )
}

export default BotonUpDown