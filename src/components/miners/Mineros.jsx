import React, { useState } from 'react'
import Tolentinos from '../image/miners_tolentinos_1.png'
import Bitcoin from '../image/bitcoin_1.png'
import '../estilos_css/Estilo1.scss'
import { Link } from 'react-router-dom'
import EligeMoneda from '../formapago/EligeMoneda'
import { ObjetoHashima } from '../blockchain/HashimaContract'



var arrayMineros=[
    {image:Tolentinos,address:'0xf7a4759F85C60475DdB8Fca55B81a0593104D346'}
    // ,{image:Bitcoin}

]
function Mineros({setEstado,estado,MinarHashima
}) {

    const [minerAddress, setMinerAddress] = useState('')
   
    return (
        <div style={{width:'80%'}}>

            {arrayMineros.map((item,index)=><div
            key={index} 
            onClick={()=>{
                MinarHashima()
                setEstado({...estado,paso:3})
                setMinerAddress(item.address)
            }}
            className="minero1">

            <img 
            style={{width:'50%',display:'block',margin:'auto'}}
            src={item.image}>
            </img>

            </div> )}

                <Link className='button_verde_1'
                to='/beminer'>
                I Want to be a Hashima Miner
                </Link>

    
                
        </div>
    )
}

export default Mineros
