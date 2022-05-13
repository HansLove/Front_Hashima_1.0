import Web3 from "web3"
import { dameCurrentChain } from "./Blockchain"
import HashimaJson from './build/Hashi.json'
import { actulizarCuenta } from "./Pago"
import { determinarChain } from "./utils/FiltroChains"


const web3=new Web3(window.ethereum)

export class ObjetoStaking{
    constructor(){
        this.contrato={}
        this.account=''
        // this.chainId=''
    }

    async loadStaking(){
        try {
            const id=await web3.eth.net.getId()
            const deployedNetwork=HashimaJson.networks[id]

            this.account=await actulizarCuenta()

            let winner=await determinarChain(deployedNetwork,1)

            const contrato=new web3.eth.Contract(
            HashimaJson.abi,
            winner
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

    async calculateReward(_address,_tokenId,messageError='no'){
        try {
            var _res=await this.contrato.methods.calculateReward(_address,_tokenId).call()
            return _res
        } catch (error) {
            console.log('error en calculaReward Staking.js: ',error,messageError)
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