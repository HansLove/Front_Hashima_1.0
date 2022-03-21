import React,{useState,useEffect,useRef} from 'react'
import {ObjetoHashima } from '../blockchain/HashimaContract'
import { actulizarCuenta} from '../blockchain/Pago'
import { DatosHashima } from '../utils/Utils'
import Secciones from '../../colecciones/Secciones.json'
import Seccion from './Seccion'


export default class MarketPlace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: true};
      }
    

    render() {
        return (
        <div>

            {Secciones.map((item,index)=><div key={index}>

                <Seccion lista={item.list} name={item.name} color={item.color[0]}/>
        
            </div>
                
             )}   

        </div>
    )}
}


