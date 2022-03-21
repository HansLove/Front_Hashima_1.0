import React, { useEffect, useState } from 'react'
import Loading1 from '../animations/loading/Loading1'
import CollectionCard from '../hashima/CollectionableCard/CollectionCard'
import './estilo.scss'
import FondoLaguna from '../animations/laguna/FondoLaguna'
import StakingCard from '../hashima/StakingCard/StakingCard'
import { ObjetoHashima } from '../blockchain/HashimaContract'
import Cookies from 'js-cookie'


//En esta funcion el usuario cambia el precio de sus Hashimas
function Collection() {

    const [coleccion, setColeccion] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cargandoPagina, setCargandoPagina] = useState(true)
    const [contrato, setContrato] = useState({})
    const [account, setAccount] = useState('')
    const [staking, setStaking] = useState([])


    useEffect(async() => {
        await CheckCookie()

    }, [])

    const CheckCookie=async()=>{

        let value=Cookies.get('ids')
        if(value==undefined) {

            let datos=await Rellenar()
            let coleccionUsuario=datos.collection

            var new_array=[]

            for (let index = 0; index < coleccionUsuario.length; index++) {
                const element = coleccionUsuario[index];
                new_array.push(element[0])
            
            }

            let string_array=new_array.toString()
            let objeto={lista:new_array}
            Cookies.set('ids',JSON.stringify(objeto))

        }else{
            console.log('cargando hashimas con Cache...')
            let objeto_nuevo=JSON.parse(value)
            await GenerarColeccionCache(objeto_nuevo.lista)
        }

    }

    const GenerarColeccionCache=async(lista)=>{
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        var array_hashimas_usuario=[]
        for (let index = 0; index < lista.length; index++) {
            const hashima_id = lista[index];
            let _hashi=await objeto.dameHashima(hashima_id)
            array_hashimas_usuario.push(_hashi)
            
        }
        setColeccion(array_hashimas_usuario)
        setCargandoPagina(false)
        
        
    }

    const Rellenar=async()=>{
        let objeto=new ObjetoHashima()
        await objeto.loadHashima()
        let datos=await objeto.LlenarDatos()
        setContrato(objeto)
        setColeccion(datos.collection)
        setStaking(datos.staking)
        return datos
    }


    return (<div style={{display:'block',margin:'auto'}}>
           {cargandoPagina&& 
           <>
           <h1 className='h1_titulo_charging'>Charging your collection</h1>
            <Loading1/>
            </>
            }
            
            <div style={{display:'inline-block',width:'95%',verticalAlign:'top'}}>
                {coleccion.map((item,index)=>
                    
                    <CollectionCard 
                    contrato={contrato}
                    account={account}
                    key={index}
                    index={index}
                    Rellenar={Rellenar}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    setLoading={setLoading}
                    loading={loading}
                    item={item}/>
                    )}
            </div>

            <div style={{display:'inline-block',width:'25%'}}>
                {staking.map((item,index)=>
                <StakingCard 
                key={index} item={item}/>
                )}
            </div> 

        </div>
    )
}

export default Collection
