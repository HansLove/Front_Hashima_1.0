import React, { useEffect, useState } from 'react'
import './estilo.css'

function Contactos({setReceptor}) {

    const [visible, setVisible] = useState(false)
    const [contacto, setContacto] = useState({
        name:'',
        address:''
    })
    const [lista, setLista] = useState([])


    useEffect(async() => {


    }, [])
    return (
        <div>
            <h1>Estos son los contactos:</h1>
            <button onClick={()=>setVisible(!visible)}>Agregar contacto</button>
            

            {visible&&

                <div>
                    <label>Nombre de tu contacto</label>
                    <input 
                    value={contacto.name}
                    onChange={(e)=>setContacto({...contacto,['name']:e.target.value})}
                    type='text' placeholder='nombre'></input>
                    <br/>
                    <label>Address contacto</label>

                    <input
                    value={contacto.address}
                    onChange={(e)=>setContacto({...contacto,['address']:e.target.value})}
                    type='text' placeholder='0x0...'></input>

                    {/* <button onClick={async()=>
                    agregarContacto(contacto,username)
                    }>Sube </button> */}

                </div>
            
            }

            {lista.map((item,index)=><div className='div_contacto_main'>

                <p>{index}</p>
                <p>{item.name}</p>
                <button
                onClick={()=>setReceptor(item.address)}
                >Elegir</button>
            </div>)}
        </div>
    )
}

export default Contactos
