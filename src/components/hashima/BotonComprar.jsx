import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading1 from '../animations/loading/Loading1';
import { dameCurrentChain } from '../blockchain/Blockchain';
import { ObjetoHashima } from '../blockchain/HashimaContract';
import Loading from '../loading_anim/Loading';

function BotonComprar({item={forSale:true},Reload,Display='block'}) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    const Comprar=async(_index,_price)=>{
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        let res=await objeto.comprarHashima(_index,_price)
        console.log('res: ',res)
        if(res){
            setSuccess(true)
            await Reload()
        }
        }

    const Button=styled.button`
      border-radius: 10%;
      color: snow;
      font-size: 2.3rem;
      font-family: Georgia, 'Times New Roman', Times, serif;
      margin: auto;
      display: ${Display};
      padding: 2% 0%;
      transition: all 1s ease-in-out;
      opacity: 0.8;
      &:hover{
        border-radius: 15%;
        opacity: 1;
        transition: all 0.5s ease-in-out;
      }
    `
    
  return<> {success?
    <h1>Exito de compra!</h1>
    :
    <>
  {!loading&&
  <Button
  // className='boton_hashima_disponible'
  onClick={item['forSale']?
  ()=>{
      setLoading(true)
      Comprar(item[0],item['price'])
      }
  :
  ()=>{}} 
  style={{background:item['forSale']?'green':'red'}
  
  }>

  {item['forSale']?'Buy':'Not Avaliable'}
  </Button>}
  {loading&&
  <Loading/>}</>
  }
  </>
}

export default BotonComprar;
