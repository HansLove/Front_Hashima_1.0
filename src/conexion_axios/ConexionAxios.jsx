import axios from 'axios'
import md5 from 'md5'
const base_url='http://localhost:5001/hashima/'
const base_url_2='http://localhost:5001/data/'


export const minarHashima=async(diff,_hashString,bloqueTolerancia)=>{
    var paso=false
    var estrellas=0
    var hash_calculado=''
    var nonce=''
    
    await axios.get(base_url+diff.toString()+"/"+_hashString+"/"+bloqueTolerancia.toString()).then(
        result=>{
            paso=result.data.status
            estrellas=result.data.estrellas
            hash_calculado=result.data.hash
            nonce=result.data.nonce
            
        }
    
    )
    return {paso,estrellas,hash_calculado,nonce}
}


export const guardarAddress=async(_address)=>{
    
    await axios.post(base_url,{address:_address}).then(
        result=>{
            console.log(result)
            
        }
    
    )
   
}

export const CalcularDatosHashima=async(_nonce,_hash)=>{
    var _Res={}
    await axios.get(base_url_2+_nonce+'/'+_hash).then(
        result=>{
            _Res=result.data.object
            
        }
    )
    return _Res
   
}

export const CalcularDatosFront=async(_hash='123')=>{

    const NewParameter=(_num)=>{
        var _input=md5(_hash.toString()+_num).substr(0,2)
        var _je=parseInt(_input)
        var cont=0
        var _input2=md5(_hash,(cont+_num).toString())
        while(_je.toString()=='NaN'){
            cont++
            var _preinput=md5(_input2+cont.toString())
            _input2=md5(_preinput+(cont+_num).toString()).substr(0,2)
            _je=parseInt(_input2)
        }
        return _je
    }

    return {
        hp:100-NewParameter(1),
        attack:100-NewParameter(2),
        defense:100-NewParameter(3),
        specialAttack:100-NewParameter(4),
        specialDefense:100-NewParameter(5),
        speed:100-NewParameter(6)

    }

   
}
