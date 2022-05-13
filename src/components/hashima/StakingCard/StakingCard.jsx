import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TransformWei } from '../../../blockchain/Blockchain';
import { actulizarCuenta } from '../../../blockchain/Pago';
import { ObjetoStaking } from '../../../blockchain/Staking';
import Hashi from '../../../image/hashi_1.png'
import { SeparadorDecimal } from '../../../utils/SeparadorDecimal';
import { DatosHashima } from '../../../utils/Utils';
import Loading1 from '../../animations/loading/Loading1';
import Button from '../../Button/Button';
import RetiroExitoso from '../../RetiroExitoso/RetiroExitoso';
import HashimaSprite from '../../sprites/HashimaSprite';
import { Div, Div2 } from '../../StyledDiv/StyledDiv';
import NumeroEstrellas from '../NumeroEstrellas';

function StakingCard({item=[]}) {

    const [staking, setstaking] = useState(0);
    const [loading, setLoading] = useState(false);
    const [retiroExitoso, setRetiroExitoso] = useState(false);
    let con=new ObjetoStaking()
    

    useEffect(async() => {
        
        await con.loadStaking()
        await CalcularReward()

        async function ciclo(){
          // do whatever you like here
          await CalcularReward()
          setTimeout(ciclo, 15000);
        }
        
        ciclo();
        

    }, []);



  const CalcularReward=async()=>{
    let acc=await actulizarCuenta()
    let reward=await con.calculateReward(acc,item[0],'stakingCard')
    setstaking(reward)
  }
 
  const CollectStake=async()=>{
    setLoading(true)
    await con.loadStaking()
    let res=await con.collect(item[0])  
    if(res){
      setLoading(false)
      setstaking(0)
    }
  }

  const Retirar=async()=>{
    setLoading(true)
    await con.loadStaking()
    let res=await con.retirarStake(item[0])  
    if(res){
      setLoading(false)
      setRetiroExitoso(true)
    }
  }




  return <Div2
      style={{width:'25%',display:'inline-block'}}     
      color1={DatosHashima(item[2]).look.color[0]} 
      color2={DatosHashima(item[2]).look.color[1]}>

      {!retiroExitoso?
      <>
      
      <Button 
      padding='0%'
      secundaryText='Take out Hashima from staking'
      color1='firebrick'
      display='flex'
      marginLeft='15%'
      margin='auto'
      color2='black'
      onClick={Retirar} text='Withdraw'/>

      <NumeroEstrellas size='45' color='gold' item={item}/>

      <HashimaSprite scale={6} item={item}/> 

      
      <div style={{width:'fit-content',display:'block'}}>

        <p style={{fontSize:'2.2rem',width:'100%',textAlign:'center',
          display:'inline-block',marginLeft:'1%',
          fontFamily:'monospace'}}>
            {SeparadorDecimal(TransformWei(staking).toString().substring(0,9))}
            
            <Button 
            padding='0%'
            onClick={CollectStake}
            color1='hotpink'
            display='flex'
            marginLeft='auto'
            color2='navy'
            text='Collect'
            secundaryText='Withdraw your $HASHI only'/>     
        </p>

        <div style={{display:'inline-block',width:'100%',
          marginLeft:'1%'}}>


            {loading?<Loading1
            color1='skyblue'
            color2='blue'
            color3='navy' 
            width='100px' height='100px' />
            :
            <img src={Hashi} style={{width:'20%',display:'block',margin:'auto'}} />
            }

            <p style={{fontSize:'1.8rem',width:'fit-content',
            display:'block',margin:'auto',fontFamily:'monospace'}}>HASHI´s</p>

        </div>


      </div>

      </>
      :
    <RetiroExitoso height='65vh'/>
            
    }
  </Div2>

}

export default StakingCard;
