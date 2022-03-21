import React, { useEffect, useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { GrStakeholder } from 'react-icons/gr';
import styled from 'styled-components';
import { dameCurrentChain } from '../blockchain/Blockchain';
import { ObjetoHashima } from '../blockchain/HashimaContract';
import { actulizarCuenta } from '../blockchain/Pago';
import { ObjetoStaking } from '../blockchain/Staking';

function BotonStake({item,CheckLoading,setLoading}) {
    const [staking, setstaking] = useState(0);
    const [approve, setapprove] = useState(false);
    
    useEffect(async() => {
        let con=new ObjetoStaking()
        await con.loadStaking()
        let acc=await actulizarCuenta()
        let reward=await con.calculateReward(acc,item[0])
        setstaking(reward)

    }, []);
    

    const Aprovar=async()=>{

        let con=new ObjetoStaking()
        let _state=await con.loadStaking()

        let chain=await dameCurrentChain()
        let hashi=new ObjetoHashima()
        let contratoHashima=await hashi.loadHashima(chain)
        let res=await hashi.aprovar(_state._address,item[0])
      
        if(res)setapprove(true)
        
    }

    const IniciarStake=async()=>{
        let con=new ObjetoStaking()
        let _state=await con.loadStaking()
        let res=await con.depositarStake(item[0])
        console.log('res stake: ',res)
        if(res){
            setLoading(true)
            await CheckLoading(true)

        }
        
    }
  
    
    const Button1=styled.button`
        background: linear-gradient(-45deg,snow,transparent);
        border: 10%;
        border: none;
        border-radius: 10%;
        transition: all ease-in-out 0.5s;
        margin-left:30%;
        position: relative;
        /* margin-top: 2%; */
        display: inline-flex;
        margin-left: 10%;
        /* margin-right: 5%; */
        p{
            display: none;
        }
/* 
        &:hover p{
            display: block;
            margin: auto;
        } */
        &:hover{
           border-radius :20%; 
           border: 1px solid pink;
           transition: all ease-in-out 1s;
        }
        
    
    `


  return <>
  {!approve&&
  <Button1  onClick={Aprovar}>
      <GrStakeholder size={50}/>
      <p style={{fontSize:'0.8rem'}}>Stake</p>
      </Button1>}

  {approve&&
  <Button1 onClick={IniciarStake}>
  <GiConfirmed size={50} color='green'/>
  <p style={{fontSize:'0.8rem'}}>Confirm</p>
  </Button1>}

   
  </>
}

export default BotonStake;
