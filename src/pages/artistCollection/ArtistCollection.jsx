import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Nakamotos from '../../colecciones/Pex.json'
import Heroes from '../../colecciones/Heroes.json'
import Chiles from '../../colecciones/ChileList.json'
import BekeValero from '../../colecciones/BekeValero.json'
import Chester from '../../colecciones/Chester.json'
import Secciones from '../../colecciones/Secciones.json'
import Logo from '../../image/logo_hashima_white_2.png'
import { DatosHashimaByName } from '../../utils/Utils'
import Seccion from '../marketplace/Seccion'
import Loading1 from '../../components/animations/loading/Loading1'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import MarketCard from '../../components/hashima/MarketCard/MarketCard'
import RedesSociales from '../../components/redes_sociales/RedesSociales'

function ArtistCollection({setVisibleMenu}) {
    const {name}=useParams()


    useEffect(async() => {
        setVisibleMenu(false)
     
      
    }, [])
    
    const EncontrarSeccion=()=>{
      for (let index = 0; index < Secciones.length; index++) {
        const _seccion = Secciones[index];
        if(_seccion.name==name)return _seccion
      }
      
    }

   
  return <div>
    <img onClick={()=>window.location.pathname ='home'}
     src={Logo} width='10%' />

      
      <Seccion lista={EncontrarSeccion().list} 
      color='transparent'  
      colorFondo='transparent'
      name={name}/>

      <div style={{border:'1px solid gray',borderRadius:'5%',margin:'1%'}}>
      <img style={{display:'inline-block',marginLeft:'auto',opacity:'0.7',zIndex:'-1',
      borderRadius:'10%'}}
      src={EncontrarSeccion().imagen} width='20%' />
     <p style={{fontSize:'2rem',display:'inline-block',
     fontFamily:'monospace',verticalAlign:'top',
     width:'70%'}}>
        {EncontrarSeccion().about}
      </p>
      <RedesSociales/>
      </div>

 

      
    </div>

}

export default ArtistCollection