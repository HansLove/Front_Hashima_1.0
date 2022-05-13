import React, { useEffect,useState } from 'react'
import Eth from '../../image/ethereum_1.png'
import Polygon from '../../image/polygon_1.png'
import Avalanche from '../../image/avalanche_1.png'
import Binance from '../../image/binance_1.png'
import styled from 'styled-components'
import Button from '../Button/Button'



function Cadenas({chainId}) {

    const [hasWallet, setHasWallet] = useState(true)

    useEffect(async() => {
        const _bol=await Check()
        setHasWallet(_bol)
    }, [])


    const Check=async()=>{
        var resFinal=true
        try {          
        if (window.ethereum !== 'undefined') {
            await window.ethereum
           .request({ method: 'eth_accounts' })
           .then(accounts=>{
             if (accounts.length === 0) {
               // MetaMask is locked or the user has not connected any accounts
               resFinal=false            
             }
    
           })
          }
          
        } catch (error) {
            console.log('error conexion web3 BotonConnectWallet.jsx: ',error.message)
            resFinal=false
        }
        return resFinal
    }

    var array=[
        {name:'Ethereum', id:'0x1',image:Eth},
        {name:'Smart Chain', id:'0x38',image:Binance},
        {name:'Polygon', id:'0x89',image:Polygon},
        {name:'Avalanche', id:'0xa86a',image:Avalanche},
        {name:'ETH', id:'0x539',image:Eth},
        {name:'Testnet Smart Chain', id:'0x61',image:Binance},

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




    const CambiarChain=async()=>{
       try {
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]});
 
       } catch (error) {
           
       }
            
    }

    return (
        <div style={{display:hasWallet?'inline-block':'none',width:'26%'}}>
        
            {chainId!='0x38'?<Button 
            text='Wrong Chain'
            fontSize='1.6rem'
            color1='red'
            color2='crimson'
            onClick={CambiarChain}> 
            {/* <img src={Binance} width='10%' /> */}
            </Button>:
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
