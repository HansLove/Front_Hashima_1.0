import React from 'react'
import './estilo.css'
import Web3 from 'web3'
import { useState } from 'react'

function Address({setReceptor,receptor,step,setStep}) {

    const [isValid, setIsValid] = useState(false)


    const EsValido=async(_address)=>{
        var res=await Web3.utils.isAddress(_address)
        setIsValid(res)
    }
    
    return (

        <>
        <div>
            <h1
            className='h1_address_titulo'
            >
                Ingresa la direccion del beneficiario
            </h1>
            <input 
            className='input_address'
            type='text'
            placeholder='0x00000000000000000000'
            value={receptor}
            onChange={(e)=>{setReceptor(e.target.value)
            EsValido(e.target.value)
            }}
            ></input>


        {isValid&&
            <button
            onClick={()=>setStep(step+1)}
            
            >Siguiente</button>
        }


        <div>

            <ul>

                <li>Check twice the address</li>
                
                <li>Example: 0xf7a4759F85C60475DdB8Fca55B81a0593104D346</li>
            </ul>
        </div>

        </div>




        </>
    )
}

export default Address
