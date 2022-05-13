import React, { useEffect, useState } from 'react'
import { ObjetoAuction } from '../../blockchain/Auction'
import { TransformWei } from '../../blockchain/Blockchain'
import Button from '../Button/Button'
import ButtonMakeOffer from '../ButtonMakeOffer/ButtonMakeOffer'
import './estilo.scss'
import CurrentCoin from '../coins/CurrentCoin'
import LoadingSpinner from '../animations/loading/LoadingSpinner/LoadingSpinner'
import { Div, Div2 } from '../StyledDiv/StyledDiv'
import HashimaSprite from '../sprites/HashimaSprite'
import { DatosHashima } from '../../utils/Utils'

function AuctionCard({item,
  cargar=()=>{},
  onSale=false}) {

    let objetoAuction=new ObjetoAuction()

    const [maxBid, setmaxBid] = useState('0')
    const [timeToWait, setTimeToWait] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(async() => {
      await objetoAuction.load()
      let num=await objetoAuction.maxBid(item[0])
      
      setmaxBid(TransformWei(num))

      async function ciclo(){
        // do whatever you like here
        await CalcularWait()
        setTimeout(ciclo, 11000);
      }
      
      ciclo();

    }, [])


    const CalcularWait=async()=>{
      await objetoAuction.load()
      let resu=await objetoAuction.timeToWait(item[0])
      setTimeToWait(resu)
    }



    const RetirarHashima=async()=>{
      setLoading(true)
      await objetoAuction.load()
      await objetoAuction.auctionEnd(item[0])
      await cargar()
      setLoading(false)
    }
    
  return (
    <Div2
      color1={DatosHashima(item[2]).look.color[0]} 
      color2={DatosHashima(item[2]).look.color[1]}
      style={{width:'25%',display:'inline-block',marginTop:'1%'}}>

        {/* <img
        style={{position:'relative',opacity:'0.3'}}
        width='20%' src={item[2]}/> */}

        <HashimaSprite scale={6} item={item}/> 


        {loading&&<LoadingSpinner/>}

        <h1 
        style={{display:'inline-flex'}}
        className='h1_max_bid'>Max Bid: {maxBid}</h1>
        <CurrentCoin largo='20%' display='inline-flex'/>
        {onSale&&<ButtonMakeOffer item={item}/>}
        

        {timeToWait!=0&&
        <h1>You need to wait: {timeToWait} Blocks</h1>}
        {timeToWait==0&&
        <Button
          text='Withdraw Hashima'
          color1='navy'
          color2='red'
          onClick={RetirarHashima}/>}
    </Div2>
  )
}

export default AuctionCard