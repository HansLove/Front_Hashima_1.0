import React from 'react';
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components';
import { SeparadorDecimal } from '../../utils/SeparadorDecimal';


function NumeroEstrellas({
    item=[],
    color='yellow',
    marginLeft='10%',
    display='block',
    width='90%',
    fontSize='1.2rem',size='35'
}) {

    const Estrellas=(_number)=>{
        var array=[]
        for (let index = 0; index < _number; index++) {
            array.push(1)
            
        }
        return array
    }

    const Div=styled.div`
        display:${display};
        width: ${width};
        /* background: red; */
        margin-left: ${marginLeft};

        p{
            display: none;
            
          
        }

        &:hover p{
            display: inline-block;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: white;
            font-size: 2rem;
            opacity: 1;
            margin-left: 2%;
            /* transition: all 1s ease-in-out 1s; */
            animation: caca 0.5s ease-in-out;
        }
        @keyframes caca{
            0%{
                opacity: 0;
            }
            50%{
                
                opacity: 0.5;
            }
            100%{
                opacity: 1;
                display:inline-block;
                /* font-size: 3rem; */
            }
        }

    `
  return <Div>
  {Estrellas(item['stars']!=undefined?item['stars']*2:item[7]*2).map((_,index)=>
    <FaStar key={index} 
    style={{marginLeft:'1%'}}
    size={size} 
    color={item['sign']?color:'gold'}
    />)}
    <p style={{fontSize:fontSize}}>
        {SeparadorDecimal(item['nonce']!=undefined?item['nonce']:item[9])}</p>

</Div>
}

export default NumeroEstrellas;
