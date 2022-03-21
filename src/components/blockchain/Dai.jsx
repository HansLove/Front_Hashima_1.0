import Web3 from 'web3'
import DaiJson from '../build/Dai.json'

const web3 = new Web3(window.ethereum||Web3.givenProvider)
// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export const loadDai=async() =>{
    const id=await web3.eth.net.getId()
    const deployedNetwork2=DaiJson.networks[id]

    const contrato=new web3.eth.Contract(
        DaiJson.abi,
        deployedNetwork2.address
    )

    return  contrato


}

export const daiAddress=async() =>{
    const id=await web3.eth.net.getId()
    const deployedNetwork2=DaiJson.networks[id]

    return  deployedNetwork2


}
