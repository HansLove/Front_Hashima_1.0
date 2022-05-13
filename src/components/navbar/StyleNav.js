import React from 'react'
import Cadenas from '../cadenas/Cadenas.jsx'
import {Nav,NavLink,NavMenu} from './Style_1.js'
import Logo from '../../image/logo_hashima_white_2.png'
import BotonConnectWallet from '../BotonConnectWallet/BotonConnectWallet.jsx'
import ButtonLaser from '../Button/ButtonLaser/ButtonLaser.jsx'


function StyleNav({setScreen,chainId}) {

    return (
        <Nav>
        <NavMenu>     

            <NavLink 
            onClick={()=>setScreen(0)}
            to='/home' activeStyle>
            
            <img width='100vh' height='100%' src={Logo}/>
            
            </NavLink>
            

            <NavLink
            style={{marginLeft:'40%'}} 
            onClick={()=>setScreen(0)}
            to='/home' activeStyle>
            <ButtonLaser
            color='skyblue'
            texto='Home'/>
            
            </NavLink>
        
            <NavLink 
            onClick={()=>setScreen(1)}
            to='/cards' activeStyle>
            Mining
            </NavLink>

            <NavLink 
            onClick={()=>setScreen(1)}
            to='/marketplace' activeStyle>
            <ButtonLaser
            texto='Market Place'/>
            </NavLink>


            <NavLink 
            onClick={()=>setScreen(2)}
            to='/collection' activeStyle>
            <ButtonLaser
            color='orange'
            texto='My Collection'/>
                
            </NavLink>
            
            <BotonConnectWallet/>
           
            <Cadenas chainId={chainId}/>

      


        </NavMenu>
       
        </Nav>
            
       
    )
}

export default StyleNav
