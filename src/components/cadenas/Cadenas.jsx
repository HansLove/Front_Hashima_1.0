import React, { useEffect } from 'react'
import Eth from '../image/ethereum_1.png'
import Polygon from '../image/polygon_1.png'
import Avalanche from '../image/avalanche_1.png'
import Binance from '../image/binance_1.png'
import styled from 'styled-components'



function Cadenas({chainId}) {

    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Smart Chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        {name:'Avalanche', id:'0xa86a',image:Avalanche},
        {name:'ETH', id:'0x539',image:Eth},
        {name:'Smart Chain', id:'0x61',image:Binance},

    ]

    const Div=styled.div`
        visibility: ${props=>props.chainId==chainId?'visible':'collapse'};
        width: 30%;
        border-radius: 15%;
        /* border:1px solid silver; */
        /* background: linear-gradient(45deg,transparent,silver); */
        padding:0% 4%;
        display:${props=>props.chainId==chainId?'block':'none'};
        margin-left: 50%;
        font-size: 1rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        transition: 0.5s all ease-in-out;

        &:hover{
            transition: 0.5s all ease-in-out;
            border-radius: 20%;
            /* border:1px solid snow; */
 
        }
        @media (min-width:320px){
        font-size:0.5rem;
        width:100%;
        margin-left:0%;
        }

        @media (min-width:1000px){
        font-size:0.8rem;
        }




 
    `
    const Img=styled.img`
        display: block;
        margin: auto;
       
        
        @media (min-width:320px){
            display:none;
        }

        @media (min-width:1000px){
        width:15%;
        display:flex;

        }
    `

    const H2=styled.h2`
        width: fit-content;
        @media (min-width:400px){
        fontSize:1.5rem;
    }
    @media (min-width:1000px){
        display:block;
        margin:auto;
    }
        
    `

    const Boton=styled.button`
    background: hotpink;
    font-size: 1.5rem;
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 1% 0%;
    border-radius: 5%;
    transition: all 1s ease-in-out;

    &:hover{
        background: purple;
        transition: all 1s ease-in-out;
        border-radius: 10%;
    }
    `



    const CambiarChain=async()=>{
       
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]});
            
    }

    return (
        <div style={{display:'inline-block',width:'26%'}}>
        
            {chainId!='0x38'?<Boton 
            onClick={CambiarChain}>Change Blockchain</Boton>:
            <>
            {array.map((item,index)=>
            <Div 
            key={index}
            chainId={item.id}>

            <H2>{item.name}</H2>

            <Img src={item.image}/>
    
            </Div>
            )}</>}
            



        </div>
    )
}

export default Cadenas
