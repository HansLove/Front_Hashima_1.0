import React,{useState,useEffect} from 'react'
import { AprovarGasto, loadHashLockContract} from '../../blockchain/HashLock'
import { actulizarCuenta } from '../../blockchain/Pago'
import './estilo.css'


function CrearContrato({firma,cost,coin,minerAddress,
    setContractId}) {

    // const [contractId, setCotractId] = useState('')
    const [account,setAccount]=useState(0)
    const [hashContract,setHashContract]=useState({})
    const [step, setStep] = useState(0)
    const [tiempo, _] = useState({
        seconds:91536000 //a lot of seconds for block
    })

    
    useEffect(async()=>{

        var cuenta=await actulizarCuenta()       
        var contrato_lock=await loadHashLockContract()

        //Guardo en el estado el contrato Hash-Time
        setHashContract(contrato_lock)

        setAccount(cuenta)
    
    },[])

    const nuevoContratoHash=async()=>{
        //Genero un nuevo contrato Hash lock
        if(!firma.length>0){
            console.log('firma no detectada')
            return
        }
        var hash=await hashContract.methods.calcular(firma).call()
        
        var _fecha=new Date()
        _fecha.setSeconds(_fecha.getSeconds() + tiempo.seconds);
        
        // await NuevoContrato()
        try {
            var hashlock=await hashContract.methods.newContract(
                minerAddress,
                hash,
                _fecha.getTime(),
                coin.address,
                cost
            ).send({
                from:account,
                gas:5000000})
            
                
            var resultado=hashlock.events.HTLCERC20New.returnValues 
            console.log("Hash lock: ",resultado)
            // console.log("contract id: ",resultado['contractId'])
            if(resultado!=null){
                
                setContractId(resultado['contractId'])
                
            }else{
                setStep(4)
            }
            // emitirPedido(hashlock.events.HTLCERC20New.returnValues)

            
        } catch (error) {
            console.log("Error en proveedor nuevo contrato hash: ",error)
        }
        

    }


    const aprovarGasto=async()=>{
        var approve=false
        var _pickCoinAddress=coin.address
        try {
            var res=await AprovarGasto(hashContract,account,_pickCoinAddress,cost)
            
            approve=res.status
            // console.log('resultado aprovacion: ',res)
        
        } catch (error) {
            console.log("error approve: ",error)
        }
        if(approve){
            setStep(2)
        }


        
    }
 
    return (
        <div>
            {step==0&&
            <>
                
                <button className='button_aprovar_gasto' onClick={aprovarGasto}>Approve</button>

            </>
            }

            {step==1&& 
                <div>
                <h1>vmaos csjabcj</h1>                    

                </div>
            }


            {step==2&&
                <>
                <button 
                className='btn_crear_contrato_hash' 
                onClick={nuevoContratoHash}>Pay Hashima Miner</button>                
                </>

            }

            
            <div>

 
            </div>
                
        </div>
    )
}

export default CrearContrato
