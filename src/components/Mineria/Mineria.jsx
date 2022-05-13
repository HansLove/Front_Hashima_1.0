import React, { useState } from 'react'
import HashimasList from'../../colecciones/Pex.json'
import ChileList from '../../colecciones/ChileList.json'
import HeroesList from '../../colecciones/Heroes.json'
import BekeValero from '../../colecciones/BekeValero.json'
import Chester from '../../colecciones/Chester.json'
import PickCollections from '../pick_collection/PickCollections'
import EstandarCard from '../hashima/EstandarCard/EstandarCard'
import ClassicCard from '../ClasicCard/ClassicCard'


function Generador({setHashima}) {

    const [coleccion, setcoleccion] = useState(0);

    const ListaActual=()=>{
        return coleccion==0?HashimasList:coleccion==1?HeroesList:coleccion==2?ChileList:coleccion==3?BekeValero:Chester
    }

    return (<>
        <div style={{display:'block',margin:'auto',width:'fit-content'}}>
            
            <PickCollections setcoleccion={setcoleccion}/>

           {ListaActual().map((pex,index)=>
            <>
            {coleccion==0?
            <ClassicCard key={index}
            setHashima={setHashima} hashima={pex}></ClassicCard>
                :
            <EstandarCard color2={coleccion==1?'lightgreen':'darkorange'}
            color1={coleccion==1?'blue':'purple'}
             item={pex}/>
            }
            </>
            
           )} 
        </div>
        </>
    )
}

export default Generador
