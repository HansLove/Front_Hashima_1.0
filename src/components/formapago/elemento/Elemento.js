import React, { useState } from 'react'
import { NiceDiv } from './estilo'
import './estilo_elemento.css'

function Elemento({index,elemento,setStep,setCoin,estrellas,setCost}) {

    const [seePrice, setSeePrice] = useState(false)

    var Precios=[
        {name:"USDT",cost:[2,5]},{name:"DAI",cost:[2,4.5]}
    ]

    const ColocarPrecio=()=>{
        var _costo=0
        for (let index = 0; index < Precios.length; index++) {
            const entrada = Precios[index];
            if(elemento.name==entrada.name){
                if(estrellas==2){
                    _costo=entrada.cost[0]
                }
                if(estrellas==4){
                    _costo=entrada.cost[1]         
                }
            }
        }
        setCost(_costo)
        return <h1 style={{fontSize:'2rem'}}>{_costo}</h1>
    }


    return (
        <>
            <NiceDiv
            onClick={()=>setSeePrice(!seePrice)}
            color={'silver'} 
            coloralt={'olive'}
            key={index} 
            className='container_elige_moneda'>
            <h1 className='titulo_crypto'>{elemento.name}</h1>
            <ColocarPrecio></ColocarPrecio>
                
            <img className='imagen_crypto'  src={elemento.img}></img>

            <button 
            onClick={()=>{
                setCoin(elemento)
                setStep(1)
                }}
            className='btn_elegir_moneda'>Elegir</button>

                {seePrice&&
                    <div
                    className='div_precio_crypto'
                    >
                        <p className='p_elemento_precio'>Precio en USD:</p>
                        <p 
                        style={{fontSize:'2rem'}}
                        className='p_elemento_precio'>{elemento.price}  {elemento.symbol}</p>
                        
                    </div>
                }
            </NiceDiv>
        </>
    )
}

export default Elemento
