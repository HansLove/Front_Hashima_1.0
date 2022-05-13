import React,{useEffect, useState} from 'react'
import CurrentCoin from '../../coins/CurrentCoin'
import BotonStake from '../BotonStake'
import NumeroEstrellas from '../NumeroEstrellas'
import './estilo.scss'
import { DatosHashima } from '../../../utils/Utils'
import HashimaSprite from '../../sprites/HashimaSprite'
import {TransformWei} from '../../../blockchain/Blockchain'
import { ObjetoHashima } from '../../../blockchain/HashimaContract'
import ButtonBid from '../../ButtonBid/ButtonBid'
import PriceEstablishment from '../PriceEstablishment'
import NumeroBloque from '../NumeroBloque'
import LoadingSpinner from '../../animations/loading/LoadingSpinner/LoadingSpinner'
import { Div } from '../../StyledDiv/StyledDiv'
import BotonAvaliable from '../../ButtonAvaliable/BotonAvaliable'
import Button from '../../Button/Button'


function CollectionCard({
    item,
    loading,
    setLoading,
    Rellenar,
    index,
    setCurrentIndex,
    currentIndex}) {


    const [change, setChange] = useState(false)
    const [viewPrice, setViewPrice] = useState(false)
    const [original, setOriginal] = useState(false)
    const [uri_hashima, setUriHashima] = useState('')
    const [price, setPrice] = useState(0)

    let objeto=new ObjetoHashima()

    useEffect(async() => {
        
        await objeto.loadHashima()
        let imagen=await objeto.getURI(item[0])  
        let _price=await objeto.getMarket(item[0])
        console.log('item collection card: ',item,'price: ',_price)
        setPrice(_price['price'])
        setUriHashima(imagen)
        
    }, [])


    
    

    function HandleIndexing(){
        setCurrentIndex(index)
        setLoading(true)
    }

    
    const CheckLoading=async(_bol)=>{
        if(!_bol)setLoading(false)
        
        const Reload=async(_bol)=>{
            if(_bol){
                await Rellenar()
                setViewPrice(false)
                setChange(false)
                setLoading(false)
            }
        }
        await Reload(_bol)
    }


    const EstadoCuenta=async(_price=price)=>{
        HandleIndexing()
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        var _bol=await objeto.cambiarEstadoVenta(item[0],_price)
        await CheckLoading(_bol)
 
    }
    

    return (
    <Div
        className='div_main_hashima_card'
        color1={DatosHashima(uri_hashima).look.color[0]} 
        color2={DatosHashima(uri_hashima).look.color[1]}
        original={original}>

        <ButtonBid 
        Reload={Rellenar}
        id={item[0]}/>

        <BotonAvaliable 
        setViewPrice={setViewPrice}
        viewPrice={viewPrice}
        EstadoCuenta={EstadoCuenta}
        item={item}/>

        <Button
        text='go'
        fontSize='1.5rem'
        padding='0.5%'
        color2='transparent'
        color1='transparent'
        borderRadius='15%'
        onClick={()=>window.open(window.location.href+'/showcase/'+item[0])}></Button>
        
        {loading&&currentIndex==index?
        <LoadingSpinner/>
        : 

        <HashimaSprite 
        scale={6} 
        uri={uri_hashima}
        item={item}/> 
        } 

        {viewPrice||change?
            <PriceEstablishment 
            id={item[0]}  
            setViewPrice={setViewPrice} 
            setChange={setChange}
            EstadoCuenta={EstadoCuenta}
            modoActualizacion={change&&true}
            CheckLoading={CheckLoading}
            HandleIndexing={HandleIndexing}/>

        :
        <div className='div_main_structure'>  

            <div className='div_block_number_2'>
                
                <div style={{display:'inline-block',width:'60%'}}>
                    
                    <BotonStake 
                    HandleIndexing={HandleIndexing}
                    setLoading={setLoading} 
                    loading={loading}
                    CheckLoading={CheckLoading} 
                    item={item}/>

            <NumeroEstrellas item={item}/>

            </div>

            
            {price!=0&&
                <div className='div_precio_hashima_card'>
                    <p 
                    style={{
                        fontSize:'2.7rem',fontFamily:'monospace',
                        textAlign:'end',
                        width:'65%',display:'inline-block'}}>
                            {TransformWei(item['price']!=undefined?item['price']:item[5])}
                            </p>

                    <CurrentCoin 
                    largo='35%'
                    setChange={setChange} change={change}/>

                </div>
            }

            </div>

            {!loading&&<h1 
            className='name_hashima_card_1'
            style={{fontSize:'2.4rem',display:'block',marginTop:'2%',
            marginLeft:'10%'
            }}>{DatosHashima(uri_hashima).name}
            </h1>}


        </div>

    }

    {!loading&&
    <NumeroBloque 
    blockNumber={item['blockEnd']}
    item={item}/>}

    </Div>
    )
}


export default CollectionCard
