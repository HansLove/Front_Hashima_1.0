import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading1 from '../../components/animations/loading/Loading1'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import MarketCard from '../../components/hashima/MarketCard/MarketCard'



export default function Seccion({lista,
  name='Satoshi',color='transparent',colorFondo='black'
}) {

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
    background: linear-gradient(-45deg,transparent,${colorFondo});
    margin: 2%;
    border: 1px solid ${color};
    border-radius: 2%;
    margin-top: 1%;
  `

  const P=styled.p`
    font-family:monospace;
    font-size: 4.5rem;
    display: block;
    margin: auto;
    width: fit-content;
  `


  return (<div style={{
    // opacity:'0.1',
    // position:'absolute',
    zIndex:'-1'}}>
    {!loading?
    <Div style={{display:'block'}}>

    <P>{name}</P>

    {datos.map((item,index)=><>

      <MarketCard key={index} item={item}/>
    </>)}
    </Div>
      :
    <Loading1 image={false} color1='gold' color2='snow' color3='lightgreen'/>
  }
  </div>

  )
}

