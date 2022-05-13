import React, { useEffect, useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { ObjetoHashima } from '../../blockchain/HashimaContract'
import { DatosHashima, DatosHashimaByName } from '../../utils/Utils'


function HashimaSprite({
  uri='',
  scale=0,
  onClick=()=>{},
  item,
  id=1,
  data={fire:''},
  width='100%',
  display='block',
  verticalAlign='top',
  borderRadius='0%'
}) {

  const [modoSprite, setmodoSprite] = useState(true)
  const [archivo, setArchivo] = useState('')


  useEffect(async() => {
    
    try {
      if(uri==''){  
      
      let objeto=new ObjetoHashima()
      await objeto.loadHashima()
      let resu=await objeto.getURI(item[0])
      
      setArchivo(resu)
      }else setArchivo(uri)
      
      
      
    } catch (error) {
      console.log('error useEffect Hashima sprite: ',error.message)
    }

  }, [])

  useEffect(() => {
    setmodoSprite(CurrentItem().sprite!=undefined)
  }, [archivo])
  
  

  const scale_1=5
  const scale_2=6



  
  const CurrentItem=()=>{

    let array=[
      {name:'Trumpy Dumpy',width:3214,height:1936,scale:scale_2+2},
      {name:'Nose Atu',width:2952,sprite:'NoseAtu',height:1936,scale:scale_1},
      {name:'Nice Jerry',width:2355,height:1936,scale:scale_1},
      {name:'Bobi Lovy',width:1988,sprite:'Boby',height:1936,scale:scale_1},
      {name:'Chipi Sharp',width:2267,sprite:'',height:1936,scale:scale_1},
      {name:'Pata Yeye',width:2410,sprite:'https://firebasestorage.googleapis.com/v0/b/hashimas.appspot.com/o/pata_1.png?alt=media&token=6bced7c1-b59f-4b5e-a5d4-d8eb69a46ed1',height:1711,scale:scale_1},
      {name:'Alen Gregory',width:2615,sprite:'Alen',height:1828,scale:scale_2+1},
      {name:'Riku Flaners',width:1442,sprite:'',height:1625,scale:scale_1},
      {name:'Davi Lant',width:1735,sprite:'https://gateway.pinata.cloud/ipfs/QmYLJchFD1sz9dJbj7osMVwhN3TMMTtc66UznNEqotdn7Q/davi_2.png',height:1889,scale:scale_1},
      {name:'Kiby Winton',width:1943,sprite:'https://gateway.pinata.cloud/ipfs/QmYLJchFD1sz9dJbj7osMVwhN3TMMTtc66UznNEqotdn7Q/kiby_1.png',height:1862,scale:scale_1},
      {name:'Keke Tole',width:2688,sprite:'Keke',height:1828,scale:scale_2},
      {name:'Magu Sam',width:1856,sprite:'Magu',height:1839,scale:scale_1},
      {name:'Greto Blow',width:2285,sprite:'Greto',height:1897,scale:scale_1},
      {name:'Lo La',width:1803,sprite:'Lola',height:1963,scale:scale_1},
      {name:'Eli Morfing',width:2811,sprite:'https://gateway.pinata.cloud/ipfs/QmYLJchFD1sz9dJbj7osMVwhN3TMMTtc66UznNEqotdn7Q/eli_1.png',height:1809,scale:scale_1},
      {name:'Supa Flai',width:1752,sprite:'Supa',height:1924,scale:scale_1},
      {name:'Foto Don',width:2452,sprite:'https://gateway.pinata.cloud/ipfs/QmYLJchFD1sz9dJbj7osMVwhN3TMMTtc66UznNEqotdn7Q/foto.png',height:1845,scale:scale_1},
      {name:'Obi Ben',width:2294,sprite:'Obi',height:1845,scale:scale_1},
      {name:'Babi Magnu',width:1727,sprite:'Babi',height:1886,scale:scale_1},
      {name:'Nayix Bukice',width:2395,sprite:'https://gateway.pinata.cloud/ipfs/QmYLJchFD1sz9dJbj7osMVwhN3TMMTtc66UznNEqotdn7Q/nayix.png',height:1926,scale:scale_1},
      {name:'Marc Lotrix',width:2261,sprite:'Marc',height:1929,scale:scale_1},
      {name:'Pain O',width:2327,sprite:'Pain',height:1921,scale:scale_1},
  
    ]
    //Si el item no existe, entonces buscamos por nombre
    if(item==undefined){

      array[id].sprite=DatosHashimaByName(array[id].name).fire
      return array[id]
    }


    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
      let metadataHashima=DatosHashima(archivo)

      if (element.name==metadataHashima.name) {

          element.sprite=metadataHashima.fire
          
          return element
      }
    
      
    }
    return {}
  }


  return (
    <div style={{width:width,display:display,
      verticalAlign:verticalAlign,borderRadius:borderRadius,
      }}>
        {modoSprite?
        <div onClick={()=>onClick}>
        <SpriteAnimator
            sprite={CurrentItem().sprite}
            width={CurrentItem().width}
            scale={scale!=0?scale:CurrentItem().scale}
            fps={4}
            frame={4}
            shouldAnimate={true}
            height={CurrentItem().height}
            />
            </div>
          :
          
     <img style={{width:'100%',maxHeight:'50vh'}} 
        src={data.fire!=''?data.fire:data.fire}/> 
    

          }
    </div>
  )
}

export default HashimaSprite