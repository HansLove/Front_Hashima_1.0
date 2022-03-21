import React,{ useEffect, useState} from 'react'
import Cadenas from '../cadenas/Cadenas.jsx'
import {Nav,NavLink,
Bars,NavMenu,Button1, NavBtnLink} from './Style_1.js'
import Logo from '../image/logo_1.png'


function StyleNav({setScreen,chainId}) {


    const [visible, setVisible] = useState(false)

    const Check=async()=>{
        var resFinal=true

        if (window.ethereum !== 'undefined') {
            console.log('window es diferente')
            await window.ethereum
           .request({ method: 'eth_accounts' })
           .then(accounts=>{
             if (accounts.length === 0) {
               // MetaMask is locked or the user has not connected any accounts
               resFinal=false            
             }
            
    
           })
          }
        return resFinal
    }


    useEffect(async() => {
        const _bol=await Check()
        setVisible(!_bol)
    }, [])

    return (
        
        <Nav>
        <NavMenu>     

            <NavLink 
            onClick={()=>setScreen(0)}
            to='/home' activeStyle>
            
            <img width='30%' src={Logo}></img>
            </NavLink>
            

            <NavLink 
            onClick={()=>setScreen(0)}
            to='/home' activeStyle>
            Home
            </NavLink>
        
            <NavLink 
            onClick={()=>setScreen(1)}
            to='/cards' activeStyle>
            Hashimas
            </NavLink>

            <NavLink 
            onClick={()=>setScreen(1)}
            to='/marketplace' activeStyle>
            Market Place
            </NavLink>


            <NavLink 
            onClick={()=>setScreen(2)}
            to='/collection' activeStyle>
                My Collection
            </NavLink>
            
  

            {visible&&
            <Button1 onClick={async()=>await window.ethereum.request({ method: 'eth_requestAccounts' })}>Conect Wallet</Button1>
            }


            <Cadenas chainId={chainId}/>

      


        </NavMenu>
       
        
        </Nav>
            
       
    )
}

export default StyleNav
