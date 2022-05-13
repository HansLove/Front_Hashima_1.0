import md5 from "md5"
import Web3 from "web3"
import HashimaJson from './build/Hashima.json'
import { TransformarToWei } from "./Blockchain"
import { actulizarCuenta } from "./Pago"
import { ObjetoStaking } from "./Staking"
import { minarHashima } from "../conexion_axios/ConexionAxios"
import { ObjetoAuction } from "./Auction"
import { determinarChain } from "./utils/FiltroChains"

const web3=new Web3(window.ethereum)

export class ObjetoHashima{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async loadHashima(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=HashimaJson.networks[id]
        this.account=await actulizarCuenta()
        
        let winner=await determinarChain(deployedNetwork,0)


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
            console.log('error en HashimaContract.jsx ,dameHashima: ',
            error)
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

        try {
            var _res=await this.contrato.methods.getTotal().call()
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
        let auction_object=new ObjetoAuction()
        
        let contratoStaking=await con.loadStaking()
        let contratoAuction=await auction_object.load() 
    
        var _mycollection=[]
        var _onstaking=[]
        var _onAuction=[]
            
        for (let index = 1; index < totalHashimas+1; index++) {
            
            try {      
                var hashimaObtenido=await this.dameHashima(index)
                // console.log('hashima obtenido Colection.jsx:',hashimaObtenido)
                if(hashimaObtenido['currentOwner']!='0x0000000000000000000000000000000000000000'){
                    
                    //Filtro para hashimas que estan 'onStaking'
                    if(hashimaObtenido['currentOwner']==contratoStaking._address){
                        if(hashimaObtenido['previousOwner']==_account){
                            _onstaking.push(hashimaObtenido)
                        }
    
                    }

                    //Filtro para los que se encuentran en Subasta
                    if(hashimaObtenido['currentOwner']==contratoAuction._address){
                        if(hashimaObtenido['previousOwner']==_account){
                            _onAuction.push(hashimaObtenido)
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
        return {collection:_mycollection,staking:_onstaking,auction:_onAuction}
       
    
        
    }

    async EnSubasta(){
        //Devuelve todos los Hashimas que se encuentran en subasta actualmente
        var totalHashimas=await this.dameTotalHashimas()
        let auction_object=new ObjetoAuction()    
        let contratoAuction=await auction_object.load() 
    
        var _onAuction=[]
            
        for (let index = 1; index < totalHashimas+1; index++) {
            
            try {      
                var hashimaObtenido=await this.dameHashima(index)
                // console.log('hashima obtenido Colection.jsx:',hashimaObtenido)
                if(hashimaObtenido['currentOwner']!='0x0000000000000000000000000000000000000000'){
                
                    //Filtro para los que se encuentran en Subasta
                    if(hashimaObtenido['currentOwner']==contratoAuction._address){
                        _onAuction.push(hashimaObtenido)
                        
                    }
    
                }
    
            } catch (error) {
                break;
            }
    
        }
        return _onAuction
       
    
        
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

    async getURI(_tokenId){
        try {
            var _resultado=await this.contrato.methods.tokenURI(_tokenId).call()
            return _resultado   
        } catch (error) {
            return false
        }
    }

    async getMarket(_tokenId){
        try {
            var _resultado=await this.contrato.methods.getMarket(_tokenId).call()
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
            console.log('error cambir precio: ',error)
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
            let res=await this.contrato.methods.Init().send({from:this.account})
            let bloqueTolerancia=res.events.GameStart.returnValues[0]
            let status=res.status
            
            return [status,bloqueTolerancia]
                   
        

    }

    async GeneracionNonce(stars,_image,bloqueTolerancia){ 
        
        function CalcularFirma(){
            var _date=new Date().getMilliseconds().toString()
            var _date2=new Date().getDate().toString()
            var _string=_date+_date2
            //genero una string random con la fecha en milisegundos para utilizarla como
            //firma para el 'HashLock' contract.
            var _firma=md5(_string+new Date().getMilliseconds().toString())        
            return _firma
        }

        var signData=CalcularFirma()
      
        //Envio los datos al backend para que el hashima sea minado
        var data=await minarHashima(stars,signData,bloqueTolerancia)
        let _resultado=await this.GenerarHashima(stars,signData,data.nonce,_image)
        return {_resultado,data}
    
    
    }


    async GenerarHashima(stars,signData,_nonce,_image){
        var _resultado=await this.contrato.methods.Mint(stars/2,signData,_nonce,_image).send({from:this.account})
        return _resultado.status
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




