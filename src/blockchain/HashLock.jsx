import Web3 from 'web3'
import ContractHashJSON from './build/HashLock.json'


const web3 = new Web3(window.ethereum||Web3.givenProvider)
// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



export const loadHashLockContract=async() =>{
  
    const id=await web3.eth.net.getId()
    const deployedNetwork2=ContractHashJSON.networks[id]

    const hash_time_contrato=new web3.eth.Contract(
        ContractHashJSON.abi,
        deployedNetwork2.address
    )

    return  hash_time_contrato


}

// export const NuevoContrato=async(hashContract)=>{
//     try {
//         var hashlock=await hashContract.methods.newContract(
//             receptor,
//             hash,
//             _fecha.getTime(),
//             templus._address,
//             total
//         ).send({
//             from:account,
//             gas:5000000})
           
//         var resultado=hashlock.events.HTLCERC20New.returnValues 
//         console.log("Hash lock: ",resultado)
//         console.log("contract id: ",resultado['contractId'])

//         if(resultado!=null){
//             setStep(3)
//             setCotractId(resultado['contractId'])
//         }else{
//             setStep(4)
//         }
//         // emitirPedido(hashlock.events.HTLCERC20New.returnValues)

        
//     } catch (error) {
//         console.log("Error en proveedor nuevo contrato hash: ",error)
//     }
// }

export const AprovarGasto=async(_contrato,_account,_tokenContract,_cost)=>{
    let res=await _contrato.methods.aprovarGasto(_tokenContract,_cost).send({from:_account})
    return res
}

