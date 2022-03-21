import React from 'react';
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components';


function NumeroEstrellas({item,color='yellow',marginLeft='10%',
        display='block',width='90%',fontSize='1.5rem'
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
  {Estrellas(item['stars']*2).map((_,index)=>
    <FaStar key={index} 
    style={{marginLeft:'1%'}}
    size={item['sign']?35:25} color={item['sign']?color:'gold'}/>)}
    <p style={{fontSize:fontSize}}>{item['nonce']}</p>

</Div>
}

export default NumeroEstrellas;
