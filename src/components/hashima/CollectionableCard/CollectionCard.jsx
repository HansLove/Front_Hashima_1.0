import React,{useEffect, useState} from 'react'
import {FaBackspace} from 'react-icons/fa'
import { GiCubes } from 'react-icons/gi'
import CurrentCoin from '../../coins/CurrentCoin'
import Type from '../type/Type'
import Loading from '../../loading_anim/Loading'
import styled from 'styled-components'
import BotonStake from '../BotonStake'
import NumeroEstrellas from '../NumeroEstrellas'
import './estilo.scss'
import { DatosHashima } from '../../utils/Utils'
import HashimaSprite from '../../sprites/HashimaSprite'
import { TransformarToWei, TransformWei } from '../../blockchain/Blockchain'


const Div=styled.div`
    width: 30%;
    display:inline-block;
    transition: all 1s ease-in-out 2s;
    background-image:radial-gradient(${props=>props.color2},${props=>props.color1},${props=>!props.original?'rgba(255, 255, 255, 0.6)':props.color2});
    /* background-image:radial-gradient(${props=>props.color2},${props=>props.color1}); */
    background-size: 300% 300%;
    margin-top: 1%;
    margin-left: 1%;
    border-radius: 8%;
    margin-bottom: 1%;
    padding: 0%;
    max-height: 100vh;
    /* border: 2px solid ; */
    /* box-shadow:-1px 0 ${props=>props.original?'gold':props.color2}, 0 1px ${props=>props.color2}, 2px 0 ${props=>props.original?'gold':props.color2}, 0 -1px ${props=>props.original?'gold':props.color2}; */
    box-shadow: 1px 5px 20px -5px ${props=>!props.original?'transparent':'yellow'};
    vertical-align: top;
    transition: all 1s ease-in-out;


@media (min-width:320px) {
    width: 80%;
    min-height: 50vh;
    margin: auto;
    margin-top: 10%;
    display: block;
    
}
@media (min-width:1024px) {
    width: 30%;
    /* min-height: 80vh; */
    margin-top: 5%;
    margin-left: 1%;
    display: inline-block;
    
}


&:hover{
    transition: all 0.5s ease-in-out 1s;
    box-shadow: 1px 5px 20px 1px ${props=>!props.original?'transparent':'yellow'};

}


`

function CollectionCard({item,
    contrato,loading,setLoading,Rellenar,
    index,setCurrentIndex,currentIndex}) {


    const [change, setChange] = useState(false)
    const [price, setPrice] = useState('')
    const [viewPrice, setViewPrice] = useState(false)
    const [original, setOriginal] = useState(false)
    const [prueba, setPrueba] = useState('')


    useEffect(async() => {

        
        
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
                setPrice('')
                setLoading(false)
            }
        }
        await Reload(_bol)
    }

    const SeparadorDecimal=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
             
    }

    const CambiarPrecio=async()=>{
        // console.log('price:; ',price)
        if(price<=0)return
        HandleIndexing()
        var _bol=await contrato.cambiarPrecioHashima(item[0],price)
        // =await cambiarPrecioHashima(contrato,item[0],account,price)
        await CheckLoading(_bol)

    }

    
    const EstadoCuenta=async(_price=item['price'])=>{
        HandleIndexing()
        var _bol=await contrato.cambiarEstadoVenta(item[0],_price)
        await CheckLoading(_bol)
 
    }

    const GoShowCase=()=>{
        // console.log('page: ',window.location.href)
        window.open(window.location.href+'/showcase/'+item[0])

    }

    
    const BotonDisponible=()=>{
        return                 <button
        style={{width:'65%',display:'block',
        marginRight:'1%'}}
        className='button_disponible_card'
        onClick={!item['forSale']&&item['price']==0?
        ()=>setViewPrice(!viewPrice)
        :
        ()=>EstadoCuenta()
        } 
        style={{
        background:item['forSale']?'green':'firebrick'}}>

            {item['forSale']?'Avaliable':'Not Avaliable'}
            
        </button>
    }

    const NumeroBloques=({})=>{

        return <div className='div_abajo_collection_card'>
            <GiCubes size={50} style={{width:'50%',display:'inline-block'}}/>
            <h2 style={{width:'50%',display:'inline-block'}}>{SeparadorDecimal(item['blockNumber'])}</h2>

        </div>
    }
    return (
    <Div
            className='div_main_hashima_card'
            color1={DatosHashima(item[2]).look.color[0]} 
            color2={DatosHashima(item[2]).look.color[1]}
            original={original}
            >

                {loading&&currentIndex==index?
                
                <Loading/>
                : 

                <HashimaSprite scale={6} item={item}/> 

                } 

            {viewPrice?
            
                <div className='div_hashima_price_establishment'
                style={{display:'block',
                width:'100%',}}>
                <FaBackspace 
                onClick={()=>{
                    setViewPrice(false)
                    setPrice('')
                }}
                style={{display:'block'}}
                size={55}/>
                
                
                {loading?<Loading/>:
                <>
                <input 
                className='input_nice_1'
                style={{fontSize:'4rem',width:'45%'}}
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                type='number' placeholder='Price'></input>
                <CurrentCoin largo='50%'/>
                </>
                }
                
                {price>0.0099&&price<10000&&!loading&&
                <button
                className='boton_cool_3'
                style={{marginTop:'5%'}}
                onClick={()=>{
                    setViewPrice(false)  
                    EstadoCuenta(TransformarToWei(price))  

                    }
                }
                    >Ok</button>
                }
                </div>            
                    :   
                    <>
                {change?

                <div className='div_hashima_price_establishment'>

                <FaBackspace 
                onClick={()=>{
                    setViewPrice(false)
                    setChange(false)
                    setPrice('')
                }
                }
                style={{display:'block'}}
                size={55}/>
                                
                <input       
                max='600'
                maxLength='4'
                style={{fontSize:'3rem',width:'45%'}}
                placeholder={TransformWei(item['price'])}
                className='input_nice_1'
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                type="number"/>
                <CurrentCoin largo={'50%'}/>


                {price>0.0099&&price<10000&&
                <button 
                style={{display:'block',marginLeft:'5%',marginTop:'10%',marginBottom:'2%'}}
                className='boton_cool_4'
                onClick={()=>{
                    setChange(false)
                    CambiarPrecio()  
                    }}>Update</button>}

                </div>
                    :
                    <>
                <div className='div_main_structure'>  

                <div className='div_block_number_2'>
                    
                    <div style={{display:'inline-block',width:'60%'}}>

                    <BotonDisponible/>
                    <BotonStake setLoading={setLoading} CheckLoading={CheckLoading} item={item}/>

                    <div style={{display:'block',width:'95%',marginLeft:'1%'}}>
                    <NumeroEstrellas item={item}/>
                    </div>

                </div>

                
                {item['price']!=0&&
                    <div className='div_precio_hashima_card'>
                        <p 
                        style={{fontSize:'3rem',fontFamily:'monospace',
                            width:'50%',display:'inline-block'}}>{TransformWei(item['price'])}</p>
                        <CurrentCoin 
                        // style={{display:'block'}}
                        largo='45%'
                        setChange={setChange} change={change}/>

                    </div>
                }

                </div>
    
                {!loading&&<h1 
                className='name_hashima_card_1'
                style={{fontSize:'2.4rem',display:'block',marginTop:'2%',
                marginLeft:'10%'
                }}>{DatosHashima(item[2]).name}
                </h1>}


   
                </div>

                    </>
                    
                }

                </>
                
            }

            <div className='div_bottom_collection_card'>

            {DatosHashima(item[2]).type.map((type,number)=>
            
                <Type
                largo={'20%'}
                left='2%'
                fontSize='2rem'
                marginTop='10%'
                key={number}
                type={type}></Type>
                )}  


            
            

            </div>
            {!loading&&
            <NumeroBloques/>}
        </Div>
        


        
    )
}


export default CollectionCard
