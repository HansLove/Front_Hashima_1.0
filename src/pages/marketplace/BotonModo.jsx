import React from 'react';
import styled from 'styled-components';

function BotonModo({modo,setModo}) {

    const Button=styled.button`
        background: transparent;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size:2.6rem;
        display: block;
        margin-left: auto;
        margin-right: 5%;
        color: whitesmoke;
        border:1px hotpink solid;
        background: linear-gradient(45deg,transparent,green);
        border-radius: 5%;
        padding: 1% 0%;
        transition: all ease-in-out 1s;
        &:hover{
            transition: all ease-in-out 1s;
            border:0.5px pink solid;
            border-radius: 15%;
        }
    
    `
    

    return <Button onClick={()=>setModo(modo<2?modo+1:0)}>
      {modo==0?'All':modo==1?'Originals':'Clasics'}</Button>
}

export default BotonModo;
