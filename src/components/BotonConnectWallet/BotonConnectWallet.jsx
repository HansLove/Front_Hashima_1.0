import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Metamask from '../../image/metamask_1.svg'
import styled from 'styled-components'


function BotonConnectWallet() {

    const [hasWallet, setHasWallet] = useState(true)
    const [connected, setConnected] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(async() => {
        const _bol=await Check()
        setHasWallet(_bol)
    }, [])


    const Check=async()=>{
        var resFinal=true
        try {          
        if (window.ethereum !== 'undefined') {
            await window.ethereum
           .request({ method: 'eth_accounts' })
           .then(accounts=>{
             if (accounts.length === 0) {
               // MetaMask is locked or the user has not connected any accounts
               resFinal=false    
               setConnected(true)        
             }else{
                 //ya conecto alguna
                 setVisible(false)
             }
    
           })
          }
          
        } catch (error) {
            console.log('error conexion web3 BotonConnectWallet.jsx: ',error.message)
            resFinal=false
        }
        return resFinal
    }
    

    const NoWallet=()=>{
        const Div=styled.div`
            
            width: 30%;
            height: 100%;
            div {
                display: none;
            }
            &:hover div{
                display: block;
                background: black;
                position: absolute;
                font-family: monospace;
                font-size: 0.8rem;
            }
        `
        return <Div>
                <img
                style={{width:'20%'}}
                src={Metamask}/>
                <Descargar/>
                
            </Div>
    }

    const Descargar=()=>{

        const StyledButton=styled.button`
            border-radius: 5%;
            background: linear-gradient(-45deg,navy,blue);
            margin: 1%;
            font-size: 1rem;
            color:white;
            font-family: monospace;
            padding: 0.5%;
            &:hover{
                border-radius: 10%;
                padding: 1%;
            }
        `

        const Ir_a_descargar=()=>{
            window.location.href = 'https://metamask.io/download/'
        }

        return <div style={{background:'black',padding:'0.5%',borderRadius:'5%'}}>
            <p style={{fontSize:'1rem'}}>No web3 detected</p>
            <StyledButton 
            onClick={Ir_a_descargar}>Download Metamask</StyledButton>
        </div>
    }

    const ConectarWallet=async()=>{
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })

        } catch (error){
            console.log(error.message)
        }
    }
  return (<>{hasWallet||connected?
    <Button 
    display={!visible&&'none'}
    onClick={ConectarWallet}
    secundaryText='web3 wallet'
    padding='1%'
    text='Connect'/>
    :
    <NoWallet/>
    }
    </>
        
  )
}

export default BotonConnectWallet