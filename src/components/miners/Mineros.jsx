import React, { useState } from 'react'
import Tolentinos from '../../image/miners_tolentinos_1.png'

var arrayMineros=[
    {image:Tolentinos,address:'0xf7a4759F85C60475DdB8Fca55B81a0593104D346'}

]
function Mineros({setEstado,estado,MinarHashima
}) {

    // const [minerAddress, setMinerAddress] = useState('')
   
    return (
        <div style={{width:'80%'}}>

            {arrayMineros.map((item,index)=><div
            key={index} 
            onClick={()=>{
                MinarHashima()
                setEstado({...estado,paso:3})
                // setMinerAddress(item.address)
            }}
            className="minero1">

            <img 
            style={{width:'30%',display:'block',margin:'auto'}}
            src={item.image}>
            </img>

            </div> )}

                
        </div>
    )
}

export default Mineros
