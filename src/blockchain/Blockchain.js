import Web3 from "web3"


const web3=new Web3(window.ethereum)

export const prenderCambioCuenta=(setAccount)=>{
    try {

      window.ethereum.on('accountsChanged',(acc)=>{
        console.log("cuenta cambiada: ",acc[0])
        setAccount(acc[0])
        window.location.reload(false);
      });
    } catch (error) {
      
    }
    
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
    try {
      

    window.ethereum.on('chainChanged', (_chainId) =>{
        console.log("Cambiando a: ",_chainId)
        chain= _chainId
        setChain(chain)
        window.location.reload(false)
 
    });
  } catch (error) {
      
  }
    return chain
}


export const dameCurrentChain=async()=>{
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId  
  } catch (error) {
    return 0
  }


}

export const TransformWei=(_num)=>{
  try {
  return web3.utils.fromWei(_num)
} catch (error) {
    console.log('error =>',error.message)
    return 0
}
}

export const TransformarToWei=(_num)=>{
  return web3.utils.toWei(_num)
}