import React,{useState,useEffect,useRef} from 'react'
import {ObjetoHashima } from '../../blockchain/HashimaContract'
import { actulizarCuenta} from '../../blockchain/Pago'
import { DatosHashima } from '../../utils/Utils'
import Secciones from '../../colecciones/Secciones.json'
import Seccion from './Seccion'
import Subastas from '../onAuction/Subastas'


export default function MarketPlace({
    onlyOne=false
}){

    const [auctionVisible, setauctionVisible] = useState(false)


        return (
        <div>
            
            {/* <button onClick={()=>setauctionVisible(!auctionVisible)}>On Auction</button> */}

            {!auctionVisible?<>
            {Secciones.map((item,index)=><div key={index}>
                
                <Seccion 
                lista={item.list} 
                name={item.name} 
                // colorFondo={item.color[0]}
                />
        
            </div>
                
             )}   
             </>
             :
             <Subastas onSale={true}/>
             }

        </div>
    )
}


