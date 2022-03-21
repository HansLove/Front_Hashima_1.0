import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Animacion_felicidades from '../animations/congrats/Animacion_felicidades'
import './estilo.css'
import '../estilos_css/Estilo1.scss'


function Poster({estado}) {

    
    const [state, setstate] = useState([])
    useEffect(() => {
        var arrayEstrellas=[]

        for (let index = 0; index < estado.estrellas; index++) {
            arrayEstrellas.push("e")
            
            
        }
        setstate(arrayEstrellas)
    },[])


    return (
        <div className='div_hashima_load'>

            <Animacion_felicidades/>

            <p className='nice_p_1243'>Calculated Hash:</p>
            <p className='nice_p_1243'>{estado.hash}</p>

            <ul style={{display:'inline-block'}}>
                {state.map((_)=><FaStar size={110} color='orange'/>)} 
                <p style={{display:'inline-block',width:'fit-content'}} className='nice_p_anim'>Stars</p>

            </ul>
            
            <p style={{fontSize:'2.5rem'}} className='nice_p_anim'>{estado.nonce} Calculations</p>

        </div>
    )
}

export default Poster
