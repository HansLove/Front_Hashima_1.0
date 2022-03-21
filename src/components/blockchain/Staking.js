import Web3 from "web3"
import HashimaJson from '../build/Hashi.json'
// import { dameCurrentChain } from "./Blockchain"
import { actulizarCuenta } from "./Pago"

const web3=new Web3(window.ethereum)

export class ObjetoStaking{
    constructor(){
        this.contrato={}
        this.account=''
        // this.chainId=''
    }

    async loadStaking(chainId='0x38'){
        const id=await web3.eth.net.getId()
        const deployedNetwork=HashimaJson.networks[id]
        var winner=''  
        this.account=await actulizarCuenta()
        

        if(chainId=='0x539'){
          winner=deployedNetwork.address
        }else if(chainId=='0x38'){
          // winner='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
          winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'
        }else{
          
          winner='0x99Dc4a0CF0823b329F75D21278B2941bAffe1Ed7'
        }
        
        try {
          const contrato=new web3.eth.Contract(
            HashimaJson.abi,
            // winner
            deployedNetwork.address
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con Staking hashima: ",error)
          return {}
        }
      
      
    }
    async aprovarStake(_index){
        try {
            var _res=await this.contrato.methods.aprovar(_index).send({from:this.account})
            return _res.status
        } catch (error) {
            console.log('error en aprovacion staking: ',error)
            return false
        }
    
    
    }

    async balanceHashi(){
        var _res=await this.contrato.methods.balanceOf(this.account).call()
        return _res

    }

    async depositarStake(_index){
        try {
            var _res=await this.contrato.methods.deposit(_index).send({from:this.account})
            return _res.status
        } catch (error) {
            console.log('deposit stake: ',error)
            return false
        }
    
    
    }

    async collect(_tokenId){
        try {
            var _res=await this.contrato.methods.collect(this.account,_tokenId).send({from:this.account})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async retirarStake(_tokenId){
        try {
            var _res=await this.contrato.methods.withdraw(_tokenId).send({from:this.account})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async calculateReward(_address,_tokenId){
        try {
            var _res=await this.contrato.methods.calculateReward(_address,_tokenId).call()
            return _res
        } catch (error) {
            console.log('error al calucluar stake reard: ',error)
            return 0
        }
    
    
    }

    async isStaking(_tokenId){
        try {
            var _res=await this.contrato.methods.hashimaOnStaking(_tokenId).call()
            return _res
        } catch (error) {
            console.log('error al obtener isStaking en Staking.js:',error)
            return 0
        }
        
    }

    
}