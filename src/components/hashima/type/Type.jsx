import React, { useEffect, useState } from 'react'
import { Hashima_types } from '../../tools/Types';
import styled from 'styled-components'
import { FaFire } from 'react-icons/fa';


function Type({display='inline-block',
    type,largo='30%',fontSize='0.7rem',left='1%',marginTop='2%',
        height='5vh'
    }) {
 
    const NiceP=styled.p`
        color: ${props=>props.color3};
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        display: block;
        margin: auto;
        margin-top: ${marginTop};
        font-size: ${fontSize};
        width: fit-content;
        
    `
    const DivType=styled.div`
        height: ${height};
        display: ${display};
        width: ${largo};
        border-radius: 25%;
        margin-left: ${left};
        padding:0% 1%;
        margin-top: 1%;
        margin-bottom: 1%;
        background-image: linear-gradient(45deg,${props=>props.color1},${props=>props.color2});
        &:hover{
            transition:all ease 1s;
            border-radius: 30%;
 
    }

    h1{
        display: none;
    }
    &:hover h1{
        display: block;
        font-size: 1rem;
        margin: auto;
        width: fit-content;
        animation: caca 1s ease-in-out;

        @keyframes caca{
            0%{
                opacity:0;
            }
            100%{
                opacity:1;
            }
        }
    }
`

    const [state, setstate] = useState({color1:'black',color2:'black',color3:'red'})
    
    useEffect(() => {
        BackgroundTypeColor() 
    }, []) 


    const BackgroundTypeColor=()=>{
        var color1='black'
        var color2='black'
        var color3='black'
        var icon=<></>

        Hashima_types.forEach(hashi => {
            if(hashi.type==type){
                color1=hashi.colors[0]
                color2=hashi.colors[1]
                color3=hashi.colors[2]
                icon=hashi.icon
               
            }
        });

        setstate({color1:color1,color2:color2,color3:color3,icon:icon})
        
    }


    return (
        <DivType color1={state.color1} color2={state.color2}
        >
            <NiceP style={{color:state.color3}}>
                {/* {type} */}
                {state.icon}
            </NiceP>
            <h1>{type}</h1>
            
        </DivType>
    )
}

export default Type
