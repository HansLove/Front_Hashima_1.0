import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { ObjetoHashima } from '../blockchain/HashimaContract'
import {TransformWei } from '../blockchain/Blockchain'
import { actulizarCuenta } from '../blockchain/Pago'
import { DatosHashima } from '../utils/Utils'
import CurrentCoin from '../coins/CurrentCoin'
import { FaStar } from 'react-icons/fa'
import './estilo.scss'
import { GiCubes } from 'react-icons/gi'
import Estrellas from '../animations/estrellas/Estrellas'
import TransferHashima from './TransferHashima'
import Type from '../hashima/type/Type'
import BotonComprar from '../hashima/BotonComprar'
import { ObjetoStaking } from '../blockchain/Staking'
import HashimaSprite from '../sprites/HashimaSprite'
import BotonUpDown from './BotonUpDown'

//Show case la estoy construyendo para que no dependa de nada externo

function ShowCase() {
    const {id}=useParams()


    const [hashima, setHashima] = useState({
        look:{color:['white','black']},
        type:['normal','normal']
    })

    const [currentId, setcurrentId] = useState(id)
    const [topOffer, setTopOffer] = useState(0)

    const [data, setData] = useState({})
    const [price, setPrice] = useState(0)
    const [account, setAccount] = useState('')


    useEffect(async() => {
        await Reload()
        setAccount(await actulizarCuenta())
        
        let con=new ObjetoStaking()
        await con.loadStaking()
        let acc=await actulizarCuenta()

    
    }, [])

    const Reload=async()=>{
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        const _hashima=await objeto.dameHashima(currentId)
        setData(_hashima)
        setHashima(DatosHashima(_hashima[2]))
        setPrice(TransformWei(_hashima['price']))
    }


    const ContarEstrellas=(_stars)=>{
        var array=[]
        for (let index = 0; index < _stars; index++) {
            array.push(1)
            
        }
        return array
    }


    const Div=styled.div`
        border-radius: 15%;
        padding:2% 3%;
        display:inline-block;
        margin:auto;
        margin-top: 1%;
        margin-left: 2%;
        background-size: 300% 300%;
        width:45%;
        box-shadow: 1px 5px 20px 1px ${props=>!props.original?'transparent':'yellow'};
        /* background: linear-gradient(-45deg,${hashima.look.color[0]} ,${hashima.look.color[1]},transparent); */
        /* animation: border_anim_22 5s ease-in-out alternate infinite; */

        @keyframes border_anim_22 {
        0%{
            /* border: 3px solid ${hashima.look.color[0]}; */
            background-position: 0% 50%;
        }
        50%{
            border: 3px solid silver;
            background-position: 100% 50%;
        }
        70%{
            border: 3px solid golden;
        }
        100%{
            border: 3px solid ${hashima.look.color[1]};
            background-position: 0% 50%;
        }
    }

    `

    const DivData=styled.div`
        /* background: linear-gradient(transparent,silver,transparent); */
        border-radius: 26%;
        border: 1px solid ${hashima.look.color[0]};
        animation: border_anim 5s ease-in-out alternate infinite;
        vertical-align: top;
        margin-left: 1%;
        margin-top: 1%;
        padding: ${props=>props.padding} ${props=>props.paddingLateral};

        @keyframes border_anim {
        0%{
            border: 2px solid ${hashima.look.color[0]};
        }
        50%{
            border: 2px solid silver;
            
        }
        70%{
            border: 2px solid golden;
        }
        100%{
            border: 2px solid ${hashima.look.color[1]};
        }
    }
    `

    const SeparadorDecimal=(num)=>{
        if(num==undefined)return '0'
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        
        
    }

    

    return (
        <div className='div_fondo_show_Case'>
            <Estrellas color2={hashima.look.color[1]} color1={hashima.look.color[0]} alto='800px' width='800px'/>
            <BotonUpDown Reload={Reload}
            setcurrentId={setcurrentId} currentId={currentId}/>


            <Div original={data['sign']}>
                <h1 className='h1_name_showcase'>{hashima.name}</h1>
                {/* <img className='img_showcase' src={hashima.img}></img> */}
                <HashimaSprite borderRadius='10%' item={data} scale={3}/>
                <p className='p_showcase'>{hashima.description}</p>
                <Type fontSize='1.5rem' type={hashima.type[0]}/>
                <Type fontSize='1.5rem' type={hashima.type[1]}/>
                
            </Div>

            <div style={{display:'inline-block',width:'40%',verticalAlign:'top',
            marginLeft:'1%'}}>

                <div className='div_estrellas_showcase'
                style={{display:'block',marginTop:'5%'}}>
                    {ContarEstrellas(data['stars']*2).map((_,index)=>
                    <FaStar size={75} color={'goldenrod'}
                    key={index}
                    style={{display:'inline-block'}}/>
                    )}
                    <h1 className='h1_number_stars'>{data['nonce']}</h1>
                </div>
                <>
                    <DivData 
                    style={{width:'35%',display:'inline-block'}}
                    padding='0%' paddingLateral='0%'>
                    <h2 className='h1_nft_number'># {data[0]}</h2>
                    </DivData>

                    <DivData padding='1%' paddingLateral='0%' style={{width:'35%',display:'inline-block'}}>
                        <GiCubes size={65} style={{margin:'auto',width:'26%',display:'block'}}/>
                        <h2 style={{marginLeft:'5%'}}
                        className='h2_block_number_showcase'>{SeparadorDecimal(data['blockNumber'])}</h2>
                    </DivData>
                </>
                <div style={{display:'block'}}>
                {price>0&&
                <div className='div_precio_showcase'>
                <p
                className='h3_precio_showcase_numero' 
                style={{display:'inline-block',width:'45%'}}>
                    {price}</p>
                <CurrentCoin largo='30%'/>
                {account!=data['currentOwner']&&
                <BotonComprar Reload={Reload} item={data}/>}
                
                </div>
                }

                {account==data['currentOwner']&&
                
                <TransferHashima Reload={Reload} id={currentId}/>
                }


                </div>

                <DivData padding='1%' style={{width:'80%',display:'inline-block'}}>
                    <h1 className='h1_address_owner'>Owner:</h1>
                    <h2 className='h1_address_owner'>{data[3]}</h2>
                    <button>Make Offer</button>
                    <h1>Top offer {topOffer}<CurrentCoin largo='12%'/></h1>
                </DivData>

            </div>

        </div>
    )
}

export default ShowCase
