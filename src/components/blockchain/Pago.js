import Web3 from 'web3'
import HashimaJson from '../build/Hashima.json'

const web3=new Web3(window.ethereum)


let currentAccount = null;

export const actulizarCuenta=async()=>{
    await window.ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts=>{
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
        // window.ethereum.request({ method: 'eth_requestAccounts' })

      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // console.log("accounts: ",accounts)
      }
  
    })
    .catch((err) => {
      console.error("Error en actualizarCuenta: Pago.js",err);
    })

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
}

export const loadHashima=async(chainId)=>{
  const id=await web3.eth.net.getId()
  const deployedNetwork=HashimaJson.networks[id]
  var winner=''  
  // let binanceChainContract='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
  
  if(chainId=='0x539'){
    winner=deployedNetwork.address
  }else if(chainId=='0x38'){
    // winner='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
    winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'
  }else{
    // winner='0xc1ae5700776EFE63CC45d8e66D32858642570D5c'
    // winner='0x08D111F18c3F5463b163d3Ae41F1BC6A034eFE5b'
    // winner='0x1F3e28f21569b567758dE2Cb760939fe08D9D64a'//Este si funciona
    // winner='0xeb50576e8ba1b32b3B0fcDdA24C11Ef3F2591fb1'
    // winner='0x6BC1c830DBb5F8Bf019959ffB7c38BC71CC3ab80'
    winner='0x99Dc4a0CF0823b329F75D21278B2941bAffe1Ed7'
  }
  // winner='0xDe002d43CC54d21af12f914C86bBBbEa4D5679A2'
  
  try {
    const contrato=new web3.eth.Contract(
      HashimaJson.abi,
      winner
      )
    
      return contrato  
  } catch (error) {
    console.log("error en conexion con JHashima: ",error)
    return {}
  }


}


