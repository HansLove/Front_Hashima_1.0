import Nakamotos from '../../colecciones/Pex.json'
import Heroes from '../../colecciones/Heroes.json'
import Chiles from '../../colecciones/ChileList.json'
import BekeValero from '../../colecciones/BekeValero.json'
import Chester from '../../colecciones/Chester.json'



export const DatosHashima=(_uri)=>{
    //Esta funcion busca en un ArrayColeccionesColecciones hecho por todas las coleccions
    //guardadas en los metadatos del mercado
    const DefaultHashima={
        look:{color:['black','snow']},
        type:["natural","natural"],
        ability:["Satoshi","Nakamoto"],
        name:'.'
    }
    
    const ArrayColecciones=[
        Nakamotos,Heroes,Chiles,BekeValero,Chester
    ]
    
    for (let index = 0; index < Nakamotos.length; index++) {
    
        if(Nakamotos[index]!=undefined&&_uri==Nakamotos[index].img)return Nakamotos[index]
        if(Heroes[index]!=undefined&&_uri==Heroes[index].img)return Heroes[index]
        if(Chiles[index]!=undefined&&_uri==[Chiles[index].img])return Chiles[index]
        if(BekeValero[index]!=undefined&&_uri==[BekeValero[index].img])return BekeValero[index]
        if(Chester[index]!=undefined&&_uri==[Chester[index].img])return Chester[index]

    }
    return DefaultHashima
}
