import md5 from "md5"
import Web3 from "web3"
import HashimaJson from '../build/Hashima.json'
import { minarHashima } from "../conexion_axios/ConexionAxios"
import { dameCurrentChain, TransformarToWei } from "./Blockchain"
import { actulizarCuenta } from "./Pago"
import { ObjetoStaking } from "./Staking"

const web3=new Web3(window.ethereum)

export class ObjetoHashima{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async loadHashima(){
        const id=await web3.eth.net.getId()
        const deployedNetwork=HashimaJson.networks[id]
        var winner=''  
        this.account=await actulizarCuenta()
        // let binanceChainContract='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
        let chainId=await dameCurrentChain()


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
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con HashimaContract.jsx: load: ",error)
          return {}
        }
      
      
    }

    async dameHashima(_index){
        try {
            var _hashi=await this.contrato.methods.getHashima(_index).call()
            return _hashi        
        } catch (error) {
            console.log('error en HashimaContract.jsx ,dameHashima: ',error)
            return {}       
        }
    
    
    }
    
    async comprarHashima(_index,price){
        try {
            var _res=await this.contrato.methods.buyToken(_index).send({from:this.account,value:price})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }

    async aprovar(_address,_index){
        try {
            var _res=await this.contrato.methods.approve(_address,_index).send({from:this.account})
            return _res.status
        } catch (error) {
            return false
        }
    
    
    }


    async balanceHashimasCliente(_account){
        try {
            var _bal=await this.contrato.methods.balanceOf(_account).call()
            return _bal
        } catch (error) {
            console.log('error en HashimaContract.jsx: balanceHashimasCliente: ',error)
            return {}
    
        }
    
    
    }
 
    async dameTotalHashimas(){
        console.log('contrato: ',this.contrato)
        try {
            var _res=await this.contrato.methods.dameTotal().call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

    async LlenarDatos(){
       
        const _account=await actulizarCuenta()
        
        var totalHashimas=await this.dameTotalHashimas()
    
        let con=new ObjetoStaking()
        let contratoStaking=await con.loadStaking()
    
        var _mycollection=[]
        var _onstaking=[]
            
        for (let index = 1; index < totalHashimas+1; index++) {
            
            try {      
                var hashimaObtenido=await this.dameHashima(index)
                // console.log('hashima obtenido Colection.jsx:',hashimaObtenido)
                if(hashimaObtenido['currentOwner']!='0x0000000000000000000000000000000000000000'){
                    
                    if(hashimaObtenido['currentOwner']==contratoStaking._address){
                        if(hashimaObtenido['previousOwner']==_account){
                            _onstaking.push(hashimaObtenido)
                        }
    
                    }
                    if(hashimaObtenido['currentOwner']==_account){
                        _mycollection.push(hashimaObtenido)
                    }
    
                }
    
            } catch (error) {
                break;
            }
    
        }
        return {collection:_mycollection,staking:_onstaking}
       
    
        
    }

    async ChecarHash(_input,_nonce){
        var _resultado=await this.contrato.methods.checkingHash(_input,_nonce).call()
        return _resultado
     
    }

    async EsOriginal(_tokenId){
        try {
            var _resultado=await this.contrato.methods.original(_tokenId).call()
            return _resultado   
        } catch (error) {
            return false
        }
    
     
    }

    async cambiarPrecioHashima(_index,_price){
        var _unidades=TransformarToWei(_price)
    
        try {
            var _status=await this.contrato.methods.changeTokenPrice(_index,_unidades).send({from:this.account})
            return _status.status        
        } catch (error) {
            return false
        }
    
    
    }

    async cambiarEstadoVenta(_index,_currentPrice){
        // El input ya viene en wei, no es necesario convertirlo
        try {
            var _res=await this.contrato.methods.toggleForSale(_index,_currentPrice).send({from:this.account})
            return _res.status       
        } catch (error) {
            return false     
        }
    
        
    
    }

    async IniciarJuego(){   
            let res=await this.contrato.methods.initGame().send({from:this.account})
            // await this.ProcesoParte2(diff)    
            return res.status
                   
        

    }

    async GeneracionNonce(diff,_image){ 
        var signData=this.CalcularFirma()
      
        //Envio los datos al backend para que el hashima sea minado
        var data=await minarHashima(diff,signData)
        let _resultado=await this.GenerarHashima(diff,signData,data.nonce,_image)
        return {_resultado,data}
        // if(_resultado.status==true){setEstado({...estado, paso:4,
        //     hash:data.hash_calculado,nonce:data.nonce,estrellas:data.estrellas})
  
        
        // setLoading(false)
        // }
    
    }


    async GenerarHashima(diff,signData,_nonce,_image){
        var _resultado=await this.contrato.methods.check(diff/2,signData,_nonce,_image).send({from:this.account})
        return _resultado.status
    }

    CalcularFirma(){
        var _date=new Date().getMilliseconds().toString()
        var _date2=new Date().getDate().toString()
        var _string=_date+_date2
        //genero una string random con la fecha en milisegundos para utilizarla como
        //firma para el 'HashLock' contract.
        var _firma=md5(_string+new Date().getMilliseconds().toString())        
        return _firma
    }


    async transferirHashima(account,_to,_tokenId){
        try {
            var _res=await this.contrato.methods.safeTransferFrom(this.account,_to,_tokenId)
            .send({from:account})
            return _res        
        } catch (error) {
            console.log('error en Hashima Contract: ',error)
            return {}
        }
    
    }
    
}




