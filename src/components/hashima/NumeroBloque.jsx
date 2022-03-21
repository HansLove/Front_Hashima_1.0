import React from 'react';
import { GiCubes } from 'react-icons/gi'
import styled from 'styled-components';


function NumeroBloque({item,display='block',marginLeft='1%',size=50,
    width='30%',fontSize='1.3rem'}) {

      const Div=styled.div`
        margin-bottom: 1%;
        p{
          display: none;
        }
        &:hover p{
          display: flex;
          font-size: 0.7rem;
          margin-left: 2%;
          position: absolute;
        }
      
      `

    const SeparadorDecimal=(num)=>{
    if(num==undefined)return '0'
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        
    }
  return <Div 
  style={{display:display,marginLeft:marginLeft,width:width}}>
      
      <GiCubes color={'white'} size={size} style={{display:'inline-block'}}/>
          <h2
          style={{display:'inline-block',fontSize:fontSize,width:'65%'}}>
              {SeparadorDecimal(item['blockNumber'])}
              <p>(Block number)</p>
          </h2>
          

  </Div>
}

export default NumeroBloque;
