import Web3 from "web3"


const web3=new Web3(window.ethereum)

export const prenderCambioCuenta=(setAccount)=>{
      window.ethereum.on('accountsChanged',(acc)=>{
        console.log("cuenta cambiada: ",acc[0])
        setAccount(acc[0])
        window.location.reload(false);
      });
    
  }

  export const colocarBotonConnect=()=>{
    window.ethereum.on('accountsChanged',(acc)=>{
      console.log("cuenta cambiada: ",acc[0])
      // window.location.reload(false);

    });
  
}


  export const CancelarListener=async()=>{
      window.ethereum.removeListener('accountsChanged',()=>{
        console.log("oidos de cambio de cuenta desactivados")
      });
  }


  export const prenderCambioCadena=(setChain)=>{
    var chain=''
    window.ethereum.on('chainChanged', (_chainId) =>{
        console.log("Cambiando a: ",_chainId)
        chain= _chainId
        setChain(chain)
        window.location.reload(false)
        
    });
    return chain
}


export const dameCurrentChain=async()=>{
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId

}

export const TransformWei=(_num)=>{
  return web3.utils.fromWei(_num)
}

export const TransformarToWei=(_num)=>{
  return web3.utils.toWei(_num)
}