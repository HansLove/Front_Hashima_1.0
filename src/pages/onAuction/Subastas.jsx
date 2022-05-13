import React, { useEffect, useState } from 'react'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import AuctionCard from '../../components/AuctionCard/AuctionCard'

export default function Subastas({
  cargar=()=>{},
  onSale=false,
  userAuctionList=[]
  }) {

  const [listaOnAuction, setlistaOnAuction] = useState([])
  let objeto=new ObjetoHashima()
    
    useEffect(async() => {
        
        await objeto.loadHashima()
        var lista=[]
        if(onSale){
          //obtener todos los hashimas en subasta
          lista=await objeto.EnSubasta()
        }else{
          //solo necesito los hashimas del usuario
          if(userAuctionList.length==0){
            let con=await objeto.LlenarDatos()
            lista=con.auction
          }else{
            lista=userAuctionList
          }

        }
       

        setlistaOnAuction(lista)

    }, [])
    
  return (
    <div>
        {listaOnAuction.map((item,index)=><>
            <AuctionCard 
            cargar={cargar}
            item={item} 
            key={index}
            onSale={onSale}/>

        </>)}
    </div>
  )
}

