import React,{useEffect, useState} from 'react'
import Ether from '../../image/ethereum_1.png'
import Polygon from '../../image/polygon_1.png'
import Avalanche from '../../image/avalanche_1.png'
import Binance from '../../image/binance_1.png'
import { dameCurrentChain} from '../../blockchain/Blockchain'
import styled from 'styled-components'

//esta funcion debe ser capaz de detectcar la blockchain.
function CurrentCoin({
  setChange=()=>{},
  change,
  largo,
  color='transparent'}) {

    const [chain, setChainId] = useState('')
    
    var array=[
        {name:'Ethers', id:'0x1',image:Ether},
        {name:'BNB', id:'0x38',image:Binance},
        {name:'MATIC', id:'0x89',image:Polygon},
        {name:'AVAX', id:'0xa86a',image:Avalanche},
        {name:'ETH', id:'0x539',image:Ether},
        {name:'BNB', id:'0x61',image:Binance},

    ]

    useEffect(async() => {
        var _cadena=await dameCurrentChain()
        setChainId(_cadena)
    }, [])

    const Div=styled.div`
      width:${largo};
      display:inline-block;
      background: ${color};
    `
    
    return (
        <Div>
          {array.map((item,index)=>
          <>
          <img 
          onClick={()=>setChange(!change)}
          key={index}
          style={{width:'95%',visibility:item.id==chain?'visible':'hidden',
          display:item.id==chain?'block':'none'}}
          src={item.image}/>

          <h1 
          style={{
              textAlign:'center',
              width:'85%',visibility:item.id==chain?'visible':'hidden',
              textAlign:'center',
              fontSize:'1rem',color:'white',margin:'auto',
              display:item.id==chain?'block':'none'
          }}>{item.name}</h1>
        </>
               
          )} 
        </Div>
    )
}

export default CurrentCoin
