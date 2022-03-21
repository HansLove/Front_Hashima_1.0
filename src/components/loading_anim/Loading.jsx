import React from 'react'
import styled from 'styled-components'
import './estilo.scss'

function Loading({largo='80px',altura='80px'}) {

    const Div=styled.div`
    display: block;
    margin: auto;
    margin-top: 3%;
    width:${largo};
    height: ${altura};
    transition: ease-in-out 1s all;
    animation: anim 1s ease-in-out 1s;
    @keyframes anim {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    
    `
    return (
        <Div className="lds-hourglass"/>
    )
}

export default Loading
