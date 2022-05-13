import React, { useEffect } from 'react'
import { ObjetoStaking } from '../../blockchain/Staking'

function ButtonWithdrawHashi() {


    useEffect(async() => {
      await beginWithdraw()
    }, [])
    


    const beginWithdraw=async()=>{
        let objeto=new ObjetoStaking()
        let contrato=await objeto.loadStaking()
        console.log('contrato address:' ,contrato._address)
        await objeto.retirarStake()
        let res=await objeto.balanceHashi()
        console.log('balance hashis:',res )
    }
  return (
    <button>Withdraw $HASHI</button>
  )
}

export default ButtonWithdrawHashi