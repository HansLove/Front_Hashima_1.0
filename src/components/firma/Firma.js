import React, { useState } from 'react'
import './estilo.css'



function Firma({setStep,step,firma,setFirma}) {

    const [confirm, setConfirm] = useState('')


    return (
        <>
        <div className='div_main_firma'>
        <h1 className='h1_firma_titulo'>Ingresa una firma para tu pedido</h1>
        <input 
        className='input_firma_1'
        value={firma}
        type='password'
        placeholder='tu firma'
        onChange={(e)=>setFirma(e.target.value)}
        ></input>

        {firma.length>3&&
        <input
        className='input_firma_1'
        style={{marginTop:'10%'}}
        value={confirm}
        onChange={(e)=>setConfirm(e.target.value)}
        placeholder='repetir'
        type='password'></input>
        }

        
        {confirm==firma&&
            <>
            {firma.length>3&&
            <button className='button_next_step'
            onClick={()=>setStep(step+1)}>Siguiente</button>
            }
            </>
        }

        </div>
        
        </>
    )
}

export default Firma
