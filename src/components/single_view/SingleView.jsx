import React,{useState,useEffect} from 'react'
import { DivHashima, NiceH2 } from '../estilo/Estilo1'
import { Button2 } from '../estilo/EstilosBotones'
import * as RiIcons from 'react-icons/gi';
import WorkShop from '../workshop/WorkShop';
import '../estilos_css/Estilo1.scss'
import Type from '../hashima/type/Type';
import Cookies from 'js-cookie'

Cookies.set('foo', 'bar')



//Pagina individual donde los usuarios pueden ver la carta de un Hashima
//y minarla
function SingleView({chainId,contrato,account,hashima={
            look:{color:['black','black']}
        }}) {

    const [mint, setMint] = useState(false)

    useEffect(() => {

        if(hashima.look!=undefined){
            Cookies.set('color1',hashima.look.color[0])
            Cookies.set('color2',hashima.look.color[1])
            Cookies.set('name',hashima.name)
            Cookies.set('description',hashima.description)
                    
        }

    }, [])

    useEffect(() => {
        if(hashima.img!=undefined)Cookies.set('image',hashima.img)
     
    }, [])

    return (
        <div>

        <div 
        style={{
            display:'inline-block',margin:'auto',
            verticalAlign:'top',
            marginLeft:'5%',marginTop:'10%',width:'50%'}}
       >
           
        
        {mint&&
        <WorkShop contrato={contrato} account={account} 
        chainId={chainId} image={hashima.img}/>}
        
        {!mint&&
        <Button2
        style={{marginLeft:'2%'}}
         onClick={()=>setMint(!mint)}>
            <RiIcons.GiWarPick size={105}/>
            <NiceH2>Mine New Hashima</NiceH2>
        </Button2>}
        
        
        </div>

        <DivHashima 
        style={{display:'inline-block',width:'35%'}}
        color1={hashima.look!=undefined?hashima.look.color[0]:Cookies.get('color1')} 
        color2={hashima.look!=undefined?hashima.look.color[1]:Cookies.get('color2')}>

        
        <h1 className='nice_p'>{hashima.name!=undefined?hashima.name:Cookies.get('name')}</h1>

        <img width='80%' style={{display:'block',margin:'auto'}}
        src={hashima.img!=undefined?hashima.img:Cookies.get('image')}></img>

        <h2 
        style={{fontSize:'1.8rem',padding:'1.5%'}}
        className='nice_p'>
            {hashima.description==undefined?Cookies.get('description'):hashima.description}</h2>
           
        
        {hashima.type!=undefined&&
        <>
        {hashima.type.map((type,number)=>
           <>
          
           <Type 
           key={number}
           type={type}></Type>

           </>

           )}
        </>
        }   
            
        </DivHashima>


        </div>
    )
}

export default SingleView
