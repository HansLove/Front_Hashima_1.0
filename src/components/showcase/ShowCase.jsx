import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import {TransformWei } from '../../blockchain/Blockchain'
import { actulizarCuenta } from '../../blockchain/Pago'
import { DatosHashima } from '../../utils/Utils'
import CurrentCoin from '../coins/CurrentCoin'
import { FaStar } from 'react-icons/fa'
import './estilo.scss'
import { GiCubes } from 'react-icons/gi'
import TransferHashima from './TransferHashima'
import Type from '../hashima/type/Type'
import BotonComprar from '../hashima/BotonComprar'
import { ObjetoStaking } from '../../blockchain/Staking'
import HashimaSprite from '../sprites/HashimaSprite'
import BotonUpDown from './BotonUpDown'
import ButtonMakeOffer from '../ButtonMakeOffer/ButtonMakeOffer'
import { Div4, Div5 } from '../StyledDiv/StyledDiv'
import NumeroEstrellas from '../hashima/NumeroEstrellas'
import { SeparadorDecimal } from '../../utils/SeparadorDecimal'

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

    
    }, [])

    const Reload=async()=>{
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        const _hashima=await objeto.dameHashima(currentId)
        setData(_hashima)
        setHashima(DatosHashima(_hashima[2]))
        setPrice(TransformWei(_hashima['price']))
    }

    // const SeparadorDecimal=(num)=>{
    //     if(num==undefined)return '0'
    //     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        
        
    // }

    

    return (
        <div className='div_fondo_show_Case'>
            <BotonUpDown Reload={Reload}
            setcurrentId={setcurrentId} currentId={currentId}/>


            <Div4
            style={{width:'40%'}}
            original={data['sign']}>
                <h1 className='h1_name_showcase'>{hashima.name}</h1>
                {/* <img className='img_showcase' src={hashima.img}></img> */}
                <HashimaSprite borderRadius='10%' item={data} scale={3}/>
                <p className='p_showcase'>{hashima.description}</p>
             
            </Div4>

            <div style={{display:'inline-block',width:'40%',verticalAlign:'top',
            marginLeft:'1%'}}>
            <NumeroEstrellas 
            size={55}
            fontSize='2rem'
            item={data}/>

                <>
                    <Div5 
                    style={{width:'35%',display:'inline-block'}}
                    padding='0%' paddingLateral='0%'>
                    <h2 className='h1_nft_number'># {data[0]}</h2>
                    </Div5>

                    <Div5 padding='1%' paddingLateral='0%' style={{width:'35%',display:'inline-block'}}>
                        <GiCubes size={65} style={{margin:'auto',width:'26%',display:'block'}}/>
                        <h2 style={{marginLeft:'5%'}}
                        className='h2_block_number_showcase'>{SeparadorDecimal(data['blockNumber'])}</h2>
                    </Div5>
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

                <Div5 padding='1%' style={{width:'80%',display:'inline-block'}}>
                    <h1 className='h1_address_owner'>Owner:</h1>
                    <h2 className='h1_address_owner'>{data[3]}</h2>
                    <ButtonMakeOffer item={data}/>
                    <h1>Top offer {topOffer}<CurrentCoin largo='12%'/></h1>
                </Div5>

                {/* <Type fontSize='1.5rem' type={hashima.type[0]}/>
                <Type fontSize='1.5rem' type={hashima.type[1]}/> */}

            </div>

                
        </div>
    )
}

export default ShowCase
