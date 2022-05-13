import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaBackspace} from 'react-icons/fa'
import { ObjetoAuction } from '../../blockchain/Auction'
import { TransformarToWei } from '../../blockchain/Blockchain'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import {RiAuctionFill} from 'react-icons/ri'
import '../../estilo/estilo_1.css'
import './estilo.scss'
import Button from '../Button/Button'
import CurrentCoin from '../coins/CurrentCoin'
import Loading1 from '../animations/loading/Loading1'

function ButtonBid({
    id,

    Reload=()=>{}

}) {

    const [formulario, setformulario] = useState(false)
    const [aprovado, setAprovado] = useState(false)
    const [loading, setLoading] = useState(false)

    const [tolerancia, setTolerancia] = useState('')
    const [price, setPrice] = useState('')
    
    



    const Aprovar=async()=>{
        setLoading(true)
        let objetoHashima=new ObjetoHashima()
        let objetoAuction=new ObjetoAuction()
        await objetoHashima.loadHashima()
        let auction_contract=await objetoAuction.load()
        let res=await objetoHashima.aprovar(auction_contract._address,id)
        setAprovado(res)
        setLoading(false)
        
      
  }


    const IniciarBid=async()=>{
        setLoading(true)
        let objetoAuction=new ObjetoAuction()
        await objetoAuction.load()
        let res=await objetoAuction.newAuction(id,tolerancia,TransformarToWei(price))
        Reload()
        setLoading(false)
    }


    const ButtonStlyed=styled.button`
        color:white;
        background:linear-gradient(40deg,orange,red,gold);
        font-size: 1rem;
        padding: 1% 0.5%;
        border-radius: 10%;
        font-family: monospace;
        transition: all 1s ease-in-out;
        &:hover{
            transition: all 1s ease-in-out;
            border-radius: 12%;
            padding: 1% 2%;
        }

        p{
            
            display: none;
        }
        &:hover p{
            animation: 1s ease-in-out caca;
            display: inline-block;
            background: black;
            color:white;
            padding: 0.5%;
            font-family: monospace;
            border-radius: 5%;
            position: absolute;
            margin-left: 0.5%;
            visibility: visible;
        }

        @keyframes caca{
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }

    `

  return (<div style={{
      position: 'absolute',
      width: '45%',
  }}>
  {!formulario?
    <ButtonStlyed onClick={()=>setformulario(!formulario)}>
        <RiAuctionFill size={40}/>
        <p>Start Bid</p>
        </ButtonStlyed>
    
    :
        <div className='div_main_bid'
         style={{
            height:'45vh',
            zIndex:'1',
            display:'block'
            }}>


            <button
            style={{background:'transparent'}}
             onClick={()=>{
                 setformulario(!formulario)
                 setTolerancia('')
                 setPrice('')
                 }}>
                <FaBackspace size={45} color='white'/>
            </button>

            <input 
                className='input_bid_1'
                style={{fontSize:'2.2rem'}}
                type=" number" 
                placeholder='tolerance'
                value={tolerancia} 
                onChange={(e)=>setTolerancia(e.target.value)}/>
            
            
            {tolerancia>100&&
            <>
            <input className='input_estilo_1'
            style={{
                fontSize:'3.2rem',
                textAlign:'end',
                width:'35%'}}
             type="number" placeholder='price' 
            value={price} onChange={(e)=>setPrice(e.target.value)} 
            />
            <CurrentCoin largo='15%'/>
            </>}

            {price>0.01&&tolerancia>1&&price.length<5&&!loading&&
            <>
                {!aprovado&&
                <Button
                display='block'
                text='Aprovar'
                 onClick={Aprovar}></Button>}

                {aprovado&&
                <Button 
                text='Create Auction'
                onClick={IniciarBid}/>}
            </>
            
            }
            {loading&&<Loading1 
            color2='snow'
            color3='silver'
            color1='white'
            width='50px' height='50px'/>}
       

        </div>
    }
    </div>
  )
}

export default ButtonBid