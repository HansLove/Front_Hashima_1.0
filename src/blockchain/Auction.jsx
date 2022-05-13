import Web3 from "web3"
import HashimaJson from './build/Auction.json'
import { actulizarCuenta } from "./Pago"
import { determinarChain } from "./utils/FiltroChains"


const web3=new Web3(window.ethereum)

export class ObjetoAuction{
    
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
            const id=await web3.eth.net.getId()
            const deployedNetwork=HashimaJson.networks[id]
            this.account=await actulizarCuenta()
            let winner=await determinarChain(deployedNetwork,2)

            const contrato=new web3.eth.Contract(
            HashimaJson.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con HashimaContract.jsx: load: ",error)
          return {}
        }
      
      
    }

    //primero tienes que aprovar poder sobre le contrato inteligente
    async aprovar(_index){

      try {
          var _res=await this.contrato.methods.approve(this.contrato._address,_index).send({from:this.account})
          return _res.status
      } catch (error) {
          console.log('res: ',error)
          return false
      }
   }

    async newAuction(_tokenId,_tolerance,_minPrice){
        try {
            var _hashi=await this.contrato.methods.
            NewAuction(_tokenId,_tolerance,_minPrice).send({from:this.account})
            return _hashi        
        } catch (error) {
            console.log('error en Auction.jsx, newAuction: ',error)
            return {}       
        }
    
    
    }

    async auctionEnd(_tokenId){
        try {
            var _hashi=await this.contrato.methods.
            auctionEnd(_tokenId).send({from:this.account})
            return _hashi        
        } catch (error) {
            console.log('error en Auction.jsx, auctionEnd: ',error)
            return {}       
        }
    
    
    }
    
    
    async bid(_tokenID,price){
        try {
            var _res=await this.contrato.methods.bid(_tokenID).send({from:this.account,value:price})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async maxBid(_tokenID){
        try {
            var _res=await this.contrato.methods.getMaxBid(_tokenID).call()
            return _res
        } catch (error) {
            return false
        }
    
    
    }

    async onAuction(_tokenID){
        try {
            var _res=await this.contrato.methods.onAuction(_tokenID).call()
            return _res
        } catch (error) {
            console.log('error en onAuction: ',error.message)
            return false
        }
    
    
    }

    async timeToWait(_tokenID){
        try {
            var _res=await this.contrato.methods.period(_tokenID).call()
            return _res
        } catch (error) {
            console.log('error time to wait: ',error)
            return 0
        }
    
    
    }

    async getMinPrice(_tokenID){
        try {
            var _res=await this.contrato.methods.getMinPrice(_tokenID).call()
            return _res
        } catch (error) {
            console.log('error min price: ',error)
            return 0
        }
    
    
    }

}