import Web3 from 'web3'
import HashimaJson from './build/Hashima.json'

const web3=new Web3(window.ethereum)


let currentAccount = null;

export const actulizarCuenta=async()=>{
  try {
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

    } catch (error) {
      console.log('error en Pago.js: ',error)
      return 0
      
    }

    if(currentAccount==null) return 0
    return web3.utils.toChecksumAddress(currentAccount)
    
}




