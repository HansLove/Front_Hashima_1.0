import React, { useEffect, useState } from 'react'
import ImgDai from '../image/dai_1.png'
import Elemento from './elemento/Elemento'
import CrearContrato from '../crear_contrato/CrearContrato'
import { daiAddress, loadDai } from '../blockchain/Dai'


function EligeMoneda({estrellas,minerAddress,firma,setContractId}) {

    const [cryptos, setCrypto] = useState([])
    const [coin, setCoin] = useState({})
    const [step, setStep] = useState(0)
    const [cost, setCost] = useState(0)



    useEffect(async() => {

        var _daiAddress=await daiAddress()
        console.log('dai address: ',_daiAddress.address)
        var array=[
            {name:'DAI',img:ImgDai,address:_daiAddress.address,price:0.996,symbol:'USD'},
            // {name:'USDC',img:ImgUsdc,address:'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',price:0.998,symbol:'USD'},
            // {name:'USDT',img:ImgUsdt,address:'0xdAC17F958D2ee523a2206206994597C13D831ec7',price:0.99,symbol:'USD'},

        ]

        setCrypto(array)
        
    }, [])


    return (
        <div>
        {step==0?
        <>
        {cryptos.map((elemento,index)=><Elemento
        elemento={elemento}
        estrellas={estrellas}
        setCost={setCost}
        index={index}
        setStep={setStep}
        setCoin={setCoin}
        ></Elemento>)}
        </>
        
        :
        <CrearContrato
        setContractId={setContractId}
        minerAddress={minerAddress}
        cost={cost}
        coin={coin}
        firma={firma}
        />

        }

            
        </div>
    )
}

export default EligeMoneda
