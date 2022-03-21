import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Type from '../type/Type'
import Successful_1 from '../../poster/Successful/Successful_1'
import Loading from '../../loading_anim/Loading'
import CurrentCoin from '../../coins/CurrentCoin'
import './estilo.scss'
import NumeroEstrellas from '../NumeroEstrellas'
import NumeroBloque from '../NumeroBloque'
import BotonAvaliable from '../BotonAvaliable'
import HashimaSprite from '../../sprites/HashimaSprite'
import { DatosHashima } from '../../utils/Utils'
import { TransformWei } from '../../blockchain/Blockchain'
import Loading1 from '../../animations/loading/Loading1'



const Figure=styled.figure`
  background: linear-gradient(110deg,${props=>props.color1} 0%, ${props=>!props.original?props.color2:'#e4d01b'});
  vertical-align:top;
  border-radius: 15px;
  margin: auto;
  margin-bottom:1%;
  /* text-align: left; */
  box-shadow: 1px 5px 20px -5px ${props=>!props.original?'transparent':'yellow'};
  position: relative;
  transition: all ease-in 0.5s;


  @media (min-width: 360px) { 
      width: 80%;
      display: block;
      margin: auto;
      min-height: 30vh;
      margin-top: 3%;
        
      
  }

  @media (min-width: 1000px) { 
      width: 32%;
      min-height: 60vh;
      max-height: 80vh;
      display: inline-block;
      margin-left: 0.5%;
      margin-top:1%;
      margin-bottom:0.5%;
      
      &:hover{
        border:3px solid ${props=>!props.original?'transparent':'gold'};
        transition: all 0.2s ease-in 1s;
        
        }
        
  }

  &:hover{
    transition: all 0.5s ease-in-out 1s;
    box-shadow: 1px 5px 20px 0px ${props=>!props.original?'transparent':'yellow'};

}


`


function MarketCard({item,account='0x00000',}) {

    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({
        fire:'',
        look:{color:['transparent','black']}
    })
    // const [original, setOriginal] = useState(false)
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
    <Figure className='main_div_battle_card'
    color1={data.look.color[0]} color2={data.look.color[1]} original={item['sign']}>
    
    <NumeroEstrellas 
    marginLeft='1%' item={item} width='55%' display='inline-block'/>
    <NumeroBloque fontSize='1.4rem'  display='inline-block' item={item} size={26}/>

    <>
        {!loading?
        <HashimaSprite display='block' width='99%' item={item} data={data}/> 
        :
        <Loading1/>}

        <div style={{display:'block',width:'100%'}}>
    

        <p className="card__name">{data.name}</p>

        <>

        {item['forSale']&&<div style={{width:'45%',display:'inline-block'}}
        className="div_price_battle_card">

            <p style={{fontFamily:'Impact, Haettenschweiler, Arial Narrow Bold,sans-serif',
                width:'60%',display:'inline-block',textAlign:'end'
            }}>{TransformWei(item['price'])}</p>

            <CurrentCoin
            largo='20%'/>
        </div>
        }

        {item['currentOwner']!=account&&!success&&
        <BotonAvaliable display='inline-block' width='35%'  setLoading={setLoading} 
        setSuccess={setSuccess} item={item}/>}
        </>

        {/* <div style={{width:'45%',}}
        className='div_types_card'>
            {DatosHashima(item[2]).type.map((type,number)=>  
                <Type
                largo='40%'
                left='2%'
                height='2vh'
                fontSize='1rem'
                marginTop='1%'
                key={number}
                type={type}/>
            )}
        </div> */}




        </div>
    </>
    
    {success&&
    <Successful_1/>}

    </Figure>

    )
}

export default MarketCard
