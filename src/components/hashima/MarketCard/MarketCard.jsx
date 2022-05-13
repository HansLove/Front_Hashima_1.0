import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Successful_1 from '../../poster/Successful/Successful_1'
import CurrentCoin from '../../coins/CurrentCoin'
import './estilo.scss'
import NumeroEstrellas from '../NumeroEstrellas'
import NumeroBloque from '../NumeroBloque'
import HashimaSprite from '../../sprites/HashimaSprite'
import { DatosHashima } from '../../../utils/Utils'
import { TransformWei } from '../../../blockchain/Blockchain'
import Loading1 from '../../animations/loading/Loading1'
import ButtonMakeOffer from '../../ButtonMakeOffer/ButtonMakeOffer'
import BotonComprar from '../BotonComprar'
import Loading2 from '../../animations/loading/Loading2/Loading2'
import {Div3 } from '../../StyledDiv/StyledDiv'


function MarketCard({item,account='0x00000'}) {

    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({
        fire:'',
        look:{color:['transparent','black']}
    })
    const [loading, setLoading] = useState(true)



    useEffect(async() => {
        await ChargingProcess()

    }, [])


    

    const ChargingProcess=async()=>{
        //Con el URI oficial del Hashima buscamos su objeto JSON en los metadatos 
        //del mercado, para asi asociarlo con un archivo(sprite, imagen,video)
        let _hashi=DatosHashima(item[2])
        setData(_hashi)
        //una vez terminado, parar loading.
        setLoading(false)
    }


    return (
    <Div3 
    className='main_div_battle_card'
    color1={data.look.color[0]} 
    color2={data.look.color[1]} 
    original={item['sign']}>
    
    <NumeroEstrellas 
    marginLeft='1%' item={item} width='55%' display='inline-block'/>
    <NumeroBloque fontSize='1.4rem'  display='inline-block' item={item} size={26}/>

    <ButtonMakeOffer item={item[0]}/>

    <>
        {!loading?
        <HashimaSprite
        onClick={()=>{}}
         display='block' width='99%' item={item} data={data}/> 
        :
        <Loading2 image={false}/>}

        {item['forSale']&&
        <div 
        style={{width:'45%',display:'inline-flex'}}
        className="div_price_battle_card">

            <p style={{fontFamily:'Impact, Haettenschweiler, Arial Narrow Bold,sans-serif',
                width:'60%',display:'inline-block',textAlign:'end'
            }}>{TransformWei(item['price'])}</p>

            <CurrentCoin
            largo='20%'/>
        </div>
        }


        <div style={{display:'inline-flex',width:'40%'}}>
    
        {item['currentOwner']!=account&&!success&&
        <BotonComprar 
        display='flex' 
        width='45%'  
        setLoading={setLoading} 
        setSuccess={setSuccess} item={item}/>}

        <p className="card__name">{data.name}</p>
        


        </div>
    </>
    
    {success&&
    <Successful_1/>}

    </Div3>

    )
}

export default MarketCard
