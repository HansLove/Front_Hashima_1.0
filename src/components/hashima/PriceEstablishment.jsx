import React,{useEffect, useState} from 'react'
import {FaBackspace} from 'react-icons/fa'
import { TransformarToWei } from '../../blockchain/Blockchain'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import Loading2 from '../animations/loading/Loading2/Loading2'
import Button from '../Button/Button'
import CurrentCoin from '../coins/CurrentCoin'



function PriceEstablishment({
    setViewPrice=()=>{},
    EstadoCuenta=()=>{},
    setChange,
    id,
    HandleIndexing=()=>{},
    modoActualizacion=false,
    CheckLoading=()=>{}
}) {

    const [loading, setloading] = useState(false)
    const [price, setPrice] = useState('')
    let objeto=new ObjetoHashima()

    useEffect(async() => {
        
    
      return () => {
        setPrice('')
      
      }
    }, [])
    

    const CambiarPrecio=async()=>{
        if(price<=0)return
        await objeto.loadHashima()
        HandleIndexing()
        var _bol=await objeto.cambiarPrecioHashima(id,price)
        console.log('check loading: ',_bol)
        await CheckLoading(_bol)

    }

  return (
    <div className='div_hashima_price_establishment'
    style={{display:'block',
    width:'100%',}}>
    <FaBackspace 
    onClick={()=>{
        setViewPrice(false)
        setChange(false)
        setPrice('')
    }}
    style={{display:'block'}}
    size={55}/>
    
    
    {loading?<Loading2/>:
    <>
    <input 
    className='input_nice_1'
    style={{fontSize:'4rem',width:'55%'}}
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
    type='number' placeholder='Price'></input>
    <CurrentCoin largo='30%'/>
    </>
    }
    
    {price>0.0099&&price<10000&&!loading&&
    <Button
    color1='green'
    color2='lightgreen'
    text='OK'
    display='flex'
    marginLeft='40%'
    margin='auto'
    onClick={()=>{
        setViewPrice(false)  
        modoActualizacion?CambiarPrecio():EstadoCuenta(TransformarToWei(price))  
    
        }
    }
        />
    }

    </div>     
  )
}

export default PriceEstablishment