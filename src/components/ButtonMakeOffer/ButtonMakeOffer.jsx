import React, { useEffect, useState } from 'react'
import { ObjetoAuction } from '../../blockchain/Auction'
import { TransformarToWei } from '../../blockchain/Blockchain'

function ButtonMakeOffer({item=[]}) {

    const [offer, setOffer] = useState(0)
    const [visible, setVisible] = useState(false)
    const [display, setDisplay] = useState(false)

    let objeto=new ObjetoAuction()
    

    useEffect(async() => {
      await objeto.load()
      let res=await objeto.onAuction(item[0])
      console.log('hashima on auction:',res)
      setDisplay(res)
    }, [])
    

    const IngresarEntrada=async()=>{
        await objeto.load()
        await objeto.bid(item[0],TransformarToWei(offer))
    }


  return (<>

    {!visible&&
    <button style={{display:display?'block':'none'}}
    onClick={()=>setVisible(!visible)}>Make Offer</button>}


    {visible&&<>
      
      <input type="number" value={offer} onChange={(e)=>setOffer(e.target.value)} />
      <button onClick={IngresarEntrada}>Go</button>


    </>}
    </>
  )
}

export default ButtonMakeOffer