import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3'
import { dameCurrentChain } from '../blockchain/Blockchain';
import { ObjetoHashima, transferirHashima } from '../blockchain/HashimaContract';
import { actulizarCuenta, loadHashima } from '../blockchain/Pago';

const Input=styled.input`
font-size: 2rem;
width: 90%;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
border-radius: 10%;
color: whitesmoke;
/* border: none; */
background: linear-gradient(-45deg,black,transparent);
padding: 3% 1%;
text-align: center;
`

function TransferHashima({id,Reload=()=>{}}) {

  const [modoInput, setModoInput] = useState(false);
  const [isValid, setIsValid] = useState(false)
  const [to, setTo] = useState('')
  const [account, setAccount] = useState('')

  useEffect(async() => {
    let _acc=await actulizarCuenta()
    setAccount(_acc)
  
  }, []);
  


  const Button=styled.button`
    background: linear-gradient(-45deg,blue,navy);
    color: white;
    border-radius: 10%;
    font-size: 2.5rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: all 1s ease-in-out;
    padding: 3% 1%;
    margin-top: 1%;
    &:hover{
      border-radius: 25%;
      transition: all 1s ease-in-out;
    }
  `  
  const ButtonConfirm=styled.button`
  background: linear-gradient(-45deg,olive,green);
  color: white;
  border-radius: 10%;
  font-size: 2rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: all 1s ease-in-out;
  padding: 1% 1%;
  display: block;
  margin-left: auto;
  margin-right: 5%;
  margin-top: 1%;
  &:hover{
    border-radius: 15%;
    transition: all 1s ease-in-out;
  }
`  
const IniciarTransferencia=async()=>{
  let _account=await actulizarCuenta()
  let objeto=new ObjetoHashima()
  await objeto.loadHashima()
  var _Res=await objeto.transferirHashima(_account,to,id)
  
  if(_Res.status)await Reload()
}

const EsValido=async(_address)=>{
  var res=await Web3.utils.isAddress(_address)
  
  if(account==_address) return
  setIsValid(res)
}

  return <div>
    {modoInput?
    <>
      <Input onChange={(e)=>{setTo(e.target.value)
      EsValido(e.target.value)}}
      value={to}
      type='text' placeholder='Address'/>
      {isValid&&<ButtonConfirm
      onClick={IniciarTransferencia}>Transfer</ButtonConfirm>}
    </>

        :
      <Button onClick={()=>setModoInput(!modoInput)}>Transfer Hashima</Button>
    }
  </div>;
}

export default TransferHashima;

