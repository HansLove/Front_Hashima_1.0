import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { actulizarCuenta } from '../../blockchain/Pago';
import { ObjetoStaking } from '../../blockchain/Staking';
// import Petunia from '../../image/petu_1.png'
import Hashi from '../../image/hashi_1.png'
import { DatosHashima } from '../../utils/Utils';
import NumeroEstrellas from '../NumeroEstrellas';

function StakingCard({item}) {

    const [staking, setstaking] = useState(0);
    const [balanceHashis, setBalance] = useState(0);


    useEffect(async() => {
        let con=new ObjetoStaking()
        await con.loadStaking()
        let acc=await actulizarCuenta()
        let reward=await con.calculateReward(acc,item[0])
        let onStaking=await con.isStaking(item[0])
        console.log('on staking: ',onStaking)
        setstaking(reward)
        await BalanceHashis()

    }, []);

    const Div=styled.div`
        display: block;
        background-image:${props=>props.color1};background-image:  
        radial-gradient(at 79% 54%, ${props=>props.color1} 0, transparent 55%),  
        radial-gradient(at 62% 31%, hsla(5,85%,73%,1) 0, transparent 73%),  
        radial-gradient(at 74% 89%, ${props=>props.color2} 0, transparent 58%),  
        radial-gradient(at 95% 16%, hsla(188,97%,73%,1) 0, transparent 56%),  
        radial-gradient(at 3% 37%, hsla(156,63%,71%,1) 0, transparent 48%),  
        radial-gradient(at 30% 5%, ${props=>props.color1} 0, transparent 40%),  
        radial-gradient(at 78% 18%, ${props=>props.color2} 0, transparent 50%);
        border-radius: 10%;
        width: 90%;
        margin-left: 1%;
        margin-top: 1%;
        min-height: 30vh;
        
    `   
 
  const CollectStake=async()=>{
    let con=new ObjetoStaking()
    await con.loadStaking()
    await con.collect(item[0])  
  }

  const Retirar=async()=>{
    let con=new ObjetoStaking()
    await con.loadStaking()
    await con.retirarStake(item[0])  
  }


  const BalanceHashis=async()=>{
    let con=new ObjetoStaking()
    await con.loadStaking()
    let res=await con.balanceHashi()   
    // console.log('balance hashi: ',res) 
    setBalance(res)

  }
  return <Div     
  color1={DatosHashima(item[2]).look.color[0]} 
  color2={DatosHashima(item[2]).look.color[1]}>
    <img style={{width:'99%',display:'block',borderRadius:'5%'}} src={item[2]}/>
    <NumeroEstrellas color='gold' item={item}/>

    {/* <p style={{color:'red'}}>{balanceHashis}</p> */}

      <div style={{width:'fit-content',display:'block',
      marginBottom:'2%',margin:'auto'}}>

      <p style={{fontSize:'3rem',width:'50%',textAlign:'end',
        display:'inline-block',marginLeft:'1%',
        fontFamily:'monospace'}}>{staking} 
      </p>

      <div style={{display:'inline-block',width:'45%',
        marginLeft:'1%'}}>
        <img src={Hashi} style={{width:'100%'}} />
        <p style={{fontSize:'1.8rem'}}>HASHI´s</p>
      </div>

      <button onClick={CollectStake}>Collect</button>

      <button onClick={Retirar}>Retirar Staking</button>
      </div>
  </Div>
}

export default StakingCard;
