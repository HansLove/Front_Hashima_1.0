import React, { useEffect, useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { GrStakeholder } from 'react-icons/gr';
import styled from 'styled-components';
import { dameCurrentChain } from '../../blockchain/Blockchain';
import { ObjetoHashima } from '../../blockchain/HashimaContract';
import { actulizarCuenta } from '../../blockchain/Pago';
import { ObjetoStaking } from '../../blockchain/Staking';
import Loading1 from '../animations/loading/Loading1';

function BotonStake({
    item,
    CheckLoading,
    loading,
    setLoading,
    HandleIndexing}) {
    const [approve, setapprove] = useState(false);
    const [loadingApprove, setLoadingApprove] = useState(false);
    const [loadingStaking, setLoadingStaking] = useState(false);
    
    useEffect(async() => {
        let con=new ObjetoStaking()
        await con.loadStaking()
 
    }, []);
    

    const Aprovar=async()=>{
        setLoadingApprove(true)
        let con=new ObjetoStaking()
        let _state=await con.loadStaking()
        let chain=await dameCurrentChain()
        let hashi=new ObjetoHashima()
        await hashi.loadHashima(chain)
        let res=await hashi.aprovar(_state._address,item[0])
        
        if(res){
        setapprove(true)
        setLoadingApprove(false)
        }
        if(!res)setLoadingApprove(false)
            
        
    }

    const IniciarStake=async()=>{
        setLoadingStaking(true)
        let con=new ObjetoStaking()
        await con.loadStaking()
        let res=await con.depositarStake(item[0])
      
        if(res){
            setLoading(true)
            setLoadingStaking(false)
            HandleIndexing()
            await CheckLoading(true)

        }
        if(!res)setLoadingStaking(false)
        
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

        &:hover p{
            animation: 1s ease-in-out caca;
            position: absolute;
            color: white;
            background: black;
            font-family: monospace;
            border-radius: 5%;
            display: inline-flex;
            font-size: 1.2rem;
            padding: 1% 2%;
            left: 100%;
            margin: auto;
        }

        &:hover{
           border-radius :20%; 
           border: 1px solid pink;
           transition: all ease-in-out 1s;
        }

        @keyframes caca{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
        
    
    `


  return <>
  {!approve&&!loadingApprove&&
  <>
        <Button1  onClick={Aprovar}>
        <GrStakeholder size={50}/>
        <p>staking</p>
        </Button1>
        
      </>}

  {approve&&!loadingStaking&&!loading&&
  <Button1 onClick={IniciarStake}>
  <GiConfirmed size={50} color='green'/>
  <p>Confirm</p>
  </Button1>}

  {loadingApprove&&<Loading1 color1='green' color2='lightgreen' color3='olive' display='inline-flex' width='50px' height='50px'/>}
  {loadingStaking&&<Loading1 color1='white' color2='red' color3='orange' display='inline-flex' width='50px' height='50px'/>}

   
  </>
}

export default BotonStake;
