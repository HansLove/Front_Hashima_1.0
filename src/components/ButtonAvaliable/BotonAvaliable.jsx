import React from 'react'
import styled from 'styled-components'

function BotonAvaliable({
    width='30%',
    item,
    viewPrice,
    setViewPrice,
    EstadoCuenta,
    display='block',
    fontSize='1.3rem'}) {

    let forSale=item['forSale']!=undefined?item['forSale']:item[6]
    let price=item['price']!=undefined?item['price']:item[5]


    const Button=styled.button`
        text-decoration: none;
        text-align: center;
        background: linear-gradient(45deg,transparent,${item['forSale']?'green':'red'});
        display: ${display};
        width: ${width};
        margin: auto;
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

  return <Button
        
        onClick={!forSale&&price==0?
        ()=>setViewPrice(!viewPrice)
        :
        ()=>EstadoCuenta()
        } 
        style={{
        background:forSale?'green':'firebrick'}}>

            {forSale?'Avaliable':'Not Avaliable'}
            
        </Button>
  
}

export default BotonAvaliable