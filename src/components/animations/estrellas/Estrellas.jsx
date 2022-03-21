import React from 'react'
import styled from 'styled-components'
import './estilo.scss'

function Estrellas({left='80%',
    color1='hotpink',color2='silver',width='300px' ,alto='300px'}) {


    const Planet=styled.div`
        width:${width};
        height:${alto};
        position:fixed;
        border-radius:50%;
        z-index: -1;
        overflow:hidden;
        box-shadow: 0 0 60px -20px rgba(213, 3, 255, 0.72), -14px -15px 40px -10px rgba(149, 113, 235, 0.23);
        left:${left};
        z-index: -1;
        top:50%;
        margin:-150px;
    
        .background{
            animation: translateBackground 40s infinite linear;  
            background: linear-gradient(${color1},${color2});
            width:${width};
            height:${alto};
            position:absolute;
            border-radius:50%;
        }

        .clouds{
            background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat;
            width:${width};
            height:${alto};
            position:relative;
            border-radius:50%;
            animation: translateBackground 30s infinite linear;
            opacity: 0.2;
        }
        .wrap{
            width:${width};
            height:${alto};
            position:absolute;
            border-radius:50%;
            animation: rotatePlanet 150s infinite linear;  
        }
    `
    
    return (
        <Planet className='planet'> 
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>   
        </div>
        <div class="mask"></div>
      </Planet>
    )
}

export default Estrellas
