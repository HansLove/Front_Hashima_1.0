import React from 'react'
import Hashi from '../../image/hashi_1.png'
import CoinGecko from '../../image/coin_gecko_2.webp'
import CoinMarketPlace from '../../image/coinmarketcap_1.png'
import '../../estilo/estilo_1.css'
import Button from '../../components/Button/Button'


function OurCoin() {
  return (
    <div style={{height:'90vh'}}>

        <div style={{display:'inline-block',width:'75%',fontSize:'1.7rem',
            margin:'1%',fontFamily:'monospace'}}>

            <h2>The $HASHI is our NFT ERC20 native token of Hashima.</h2>

            <h2>A proof of work base currency with no pre-mined inspired on 
                Bitcoin. Not looking for been an store of value but more a voting 
                currency base on Hash power of Satoshi Nakamoto.
            </h2>

        </div>
        <img style={{display:'inline-block',width:'20%'}}
        className='imagen_moneda_hashi' src={Hashi}></img>

        <div style={{display:'inline-block',width:'25%'}}>

            <img className='img_style_1' style={{background:'black',borderRadius:'15%',
            width:'45%',height:'6vh',
                display:'inline-flex'}} 
            src={CoinGecko}></img>
            <img className='img_style_1'  style={{background:'snow',borderRadius:'15%',
            width:'45%',height:'6vh',marginLeft:'2%',
                display:'inline-flex'}} src={CoinMarketPlace}></img>
            

        </div>
        <div style={{display:'inline-block',width:'25%',marginLeft:'26%'}}>
            <Button fontSize='3rem' color1='purple' text='White Paper'></Button>
        </div>
        


    </div>
  )
}

export default OurCoin