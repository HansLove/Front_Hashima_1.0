import React from 'react';
import styled from 'styled-components';
import WorkShop from '../../../pages/workshop/WorkShop';



function EstandarCard({item,color1='red',color2='silver'}) {
    

    
    const Div=styled.div`
        background-image:${color1};background-image:  
        radial-gradient(at 40% 20%, hsla(131,88%,43%,1) 0, transparent 50%),  
        radial-gradient(at 80% 0%, ${color1} 0, transparent 50%),  
        radial-gradient(at 0% 50%, hsla(141,47%,40%,1) 0, transparent 50%),  
        radial-gradient(at 80% 50%, hsla(210,64%,30%,1) 0, transparent 50%),  
        radial-gradient(at 0% 100%, hsla(99,79%,45%,1) 0, transparent 50%),  
        radial-gradient(at 80% 100%, ${color2} 0, transparent 50%),  
        radial-gradient(at 0% 0%, hsla(153,30%,39%,1) 0, transparent 50%);
        width: 35%;
        border-radius: 10%;
        margin-left: 1%;
        display: inline-block;
        margin-top: 2%;
    `
  
  return <Div>
      <img style={{width:'100%',borderRadius:'10%'}}
       className='imagen_zombie' src={item.img} />
      <h1 className='h1_zombie_card_name' 
      style={{display:'block',margin:'auto',
          fontSize:'2.6rem',width:'fit-content'}}>{item.name}</h1>


      <WorkShop image={item.img}/>
  </Div>;
}

export default EstandarCard;
