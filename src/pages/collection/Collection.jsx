import React, { useEffect, useState } from 'react'
import Loading1 from '../../components/animations/loading/Loading1'
import CollectionCard from '../../components/hashima/CollectionableCard/CollectionCard'
import StakingCard from '../../components/hashima/StakingCard/StakingCard'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import Cookies from 'js-cookie'
import { actulizarCuenta } from '../../blockchain/Pago'
import Subastas from '../onAuction/Subastas'
import './estilo.scss'

//En esta funcion el usuario cambia el precio de sus Hashimas
function Collection() {

    const [coleccion, setColeccion] = useState([])
    const [loading, setLoading] = useState(false)
    const [auctionVisible, setAuctionVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cargandoPagina, setCargandoPagina] = useState(true)
    const [staking, setStaking] = useState([])
    const [auction, setAuction] = useState([])

    let objeto=new ObjetoHashima()


    useEffect(async() => {
        await Rellenar()
        
    }, [])


    



    const Rellenar=async()=>{
        setCargandoPagina(true)
        await objeto.loadHashima()
        let datos=await objeto.LlenarDatos()
        setColeccion(datos.collection)
        setStaking(datos.staking)
        setAuction(datos.auction)
        setCargandoPagina(false)
        return datos
    }


    return (<div style={{display:'block',margin:'auto'}}>

        {cargandoPagina&& 
        <>
        <h1 style={{fontSize:'2.3rem'}} className='h1_titulo_charging'>Charging your collection</h1>
        <Loading1 text='hashima.city'
        color1='red' color2='orange' color3='hotpink'/>
        
        </>
        }

        {auctionVisible&&
            <Subastas 
            cargar={Rellenar}
            userAuctionList={auction}
            onSale={false}/>}


        <div style={{display:'inline-block',width:'95%',verticalAlign:'top'}}>
            {coleccion.map((item,index)=>
                <CollectionCard 
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

        <div style={{display:'block',width:'99%',marginTop:'1%'}}>
            {staking.map((item,index)=>
            <StakingCard 
            key={index} item={item}/>
            )}
        </div>

        </div>
    )
}

export default Collection
