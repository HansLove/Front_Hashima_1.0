import React from 'react'
import styled from 'styled-components'
import { ObjetoHashima } from '../blockchain/HashimaContract'

function BotonAvaliable({width='100%',
    item,setLoading,setSuccess,display='block',fontSize='1.5rem'}) {

    const Button=styled.button`
        text-decoration: none;
        text-align: center;
        background: linear-gradient(45deg,transparent,${item['forSale']?'green':'red'});
        display: ${display};
        width: ${width};
        height: 7vh;
        border-radius: 5%;
        padding: 2%;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: ${fontSize};
        transition: all 0.5s ease-out;
        &:hover{
            border-radius: 15%;
            border: 1px solid goldenrod;
            transition: all 1s ease-out;

        }

    
    `


const ComprarHashima=async()=>{
    let objeto=new ObjetoHashima()
    await objeto.loadHashima()
    var _statusTxn=await objeto.comprarHashima(item[0],item['price'])
    if(!_statusTxn){
        setLoading(false)
        return
    }
    setSuccess(_statusTxn)
    setLoading(false)
}
  return (<Button
        onClick={item['forSale']?
        ()=>{
            setLoading(true)
            ComprarHashima()
            }
        :
        ()=>{}} 
        // style={{background:item['forSale']?'green':'red'}}
        >
        {item['forSale']?'Buy':'Not Avaliable'}
        </Button>
  )
}

export default BotonAvaliable