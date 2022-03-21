import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { minarHashima } from '../conexion_axios/ConexionAxios'
import {NiceH2 } from '../estilo/Estilo1'
import { Button3 } from '../estilo/EstilosBotones'
import Mineros from '../miners/Mineros'
import Animacion_Pico from '../pico/Animacion_Pico'
import Poster from '../poster/Poster'
import md5 from 'md5'
import './estilo.css'
import { ObjetoHashima } from '../blockchain/HashimaContract'



function WorkShop({image}) {

    const [estado, setEstado] = useState({paso:1})
    const [loading, setLoading] = useState(false)
    const [stars, setStars] = useState(0)
    const [error, setError] = useState(false)
    // const [firma, setFirma] = useState('')


    const MinarHashima=async()=>{   
        try {
            let objeto=new ObjetoHashima()
            await objeto.loadHashima()
        
            let res=await objeto.IniciarJuego(stars)
            if(res)await Parte2Minado(objeto) 
          

        } catch (error) {
            setEstado({...estado,paso:5})
            setError(true)
            console.log('error al iniciar el juego en WorkShop.jsx',error)
        }

    }

    const Parte2Minado=async(objeto)=>{
        
        let res=await objeto.GeneracionNonce(stars,image)
        let data=res.data
        if(res._resultado){
            setEstado({...estado, paso:4,
            hash:data.hash_calculado,nonce:data.nonce,estrellas:data.estrellas
        })
        setLoading(false)
        }
    }

    return (
        <div className='main_div_workshop'>
        
            <div style={{whiteSpace:'nowrap',overflow:'auto'}}>
            
            {!loading&&
            
            <>
        
            {error&&<p className='mensaje_error_2'>No conexion</p>}


            {estado.paso==1&&
            <>
          
            
            <Button3 onClick={()=>{
                setStars(2)
                setEstado({...estado,paso:2})
            }
                
            }>
                <FaStar size={55}/>
                <FaStar size={55}/>
            </Button3>

            <Button3 onClick={()=>{
                setStars(4)
                setEstado({...estado,paso:2})
                }}>
                <FaStar size={55}/>
                <FaStar size={55}/>
                <FaStar size={55}/>
                <FaStar size={55}/>
            </Button3>

                </>}

                </>}

            {estado.paso==2&&
            <Mineros
            setEstado={setEstado} estado={estado} 
            MinarHashima={MinarHashima} estrellas={stars}/>}


            {estado.paso==3&&
                
                <Animacion_Pico/>
            }

            {estado.paso==4&&
                <Poster estado={estado}/>
            
            }

            </div>

        </div>
    )
}

export default WorkShop
