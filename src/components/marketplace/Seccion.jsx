import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading1 from '../animations/loading/Loading1'
import { ObjetoHashima } from '../blockchain/HashimaContract'
import MarketCard from '../hashima/MarketCard/MarketCard'
import HashimaSprite from '../sprites/HashimaSprite'



export default function Seccion({lista,name='Satoshi',color='white'}) {

  const [datos, setdatos] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(async() => {
    await ProcesoDeCarga()

  }, [])
  
  const ProcesoDeCarga=async()=>{

    const Elemento=async(numero)=>{
      let objeto=new ObjetoHashima()
      await objeto.loadHashima()
      var hashimaObtenido=await objeto.dameHashima(numero)
      // console.log('hashima obtneido seccion ',hashimaObtenido)
      return hashimaObtenido
    }

    var data=[]

    for (let index = 0; index < lista.length; index++) {
      let id_hashima_usuario=lista[index]
      var hashi=await Elemento(id_hashima_usuario)
      data.push(hashi)
      
    }
    setdatos(data)
    setloading(false)

  }

  

  const Div=styled.div`
    background: linear-gradient(-45deg,transparent,${color});
    margin: 1%;
    border-radius: 2%;
  `

  const P=styled.p`
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 3.5rem;
    display: block;
    margin: auto;
    width: fit-content;
  `


  return (<>
    {!loading?
    <Div style={{border:'1px solid silver',
    display:'block',margin:'auto',marginTop:'1%'}}>

      <P>{name}</P>

    {datos.map((item,index)=><>

      <MarketCard key={index} item={item}/>
    </>)}
  </Div>:
  <Loading1/>
  }
  </>

  )
}

