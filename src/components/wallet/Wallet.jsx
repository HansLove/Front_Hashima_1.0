import React, { useEffect } from 'react'
import { guardarAddress } from '../conexion_axios/ConexionAxios'
import Metamask from '../image/metamask_1.svg'
import { actulizarCuenta } from '../blockchain/Pago'


function Wallet() {

    useEffect(async() => {
        var _accont=await actulizarCuenta()
        await guardarAddress(_accont)

    }, [])
    
    return (
        <div>
           
            <h1 style={{fontSize:'4.2rem',fontFamily:'fantasy',}}>You will need a wallet to interact with Hashima NFT universe</h1>
            <>
            <img 
            style={{display:'inline-block',width:'20%'}}
            src={Metamask}/>
            <p style={{fontFamily:'fantasy',
                fontSize:'8rem',display:'inline-block',width:'50%'}}>Metamask is one of the most populars in the market</p>
            </>
        </div>
    )
}

export default Wallet
