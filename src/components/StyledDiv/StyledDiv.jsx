import styled from 'styled-components'

//Variables de entorno: 
const transparencia_1='98%'
const transparencia_2='80%'


export const StyledDiv=styled.div`
    border-radius: 10%;
    background: linear-gradient(-45deg,${props=>props.color1},${props=>props.color2});
`

export const Div=styled.div`
    display:inline-block;
    transition: all 1s ease-in-out 2s;
    background-image:radial-gradient(${props=>props.color2},${props=>props.color1},${props=>!props.original?'rgba(255, 255, 255, 0.6)':props.color2});
    background-size: 300% 300%;
    margin-top: 1%;
    margin-left: 1%;
    border-radius: 8%;
    margin-bottom: 1%;
    padding: 0%;
    max-height: 100vh;
    box-shadow: 1px 5px 20px -5px ${props=>!props.original?'transparent':'yellow'};
    vertical-align: top;
    transition: all 1s ease-in-out;


    @media (min-width:320px) {
    width: 80%;
    min-height: 50vh;
    margin: auto;
    margin-top: 10%;
    display: block;

    }
    @media (min-width:1024px) {
    width: 30%;
    /* min-height: 80vh; */
    margin-top: 5%;
    margin-left: 1%;
    display: inline-block;

    }

    &:hover{
    transition: all 0.5s ease-in-out 1s;
    box-shadow: 1px 5px 20px 1px ${props=>!props.original?'transparent':'yellow'};

    }


`



export const Div2=styled.div`
    background-image:${props=>props.color1};background-image:  
    radial-gradient(at 79% 54%, ${props=>props.color1} 0, transparent ${transparencia_2}),  
    radial-gradient(at 62% 31%, ${props=>props.color2} 0, transparent ${transparencia_1}),  
    radial-gradient(at 74% 89%, ${props=>props.color2} 0, transparent ${transparencia_1}),  
    radial-gradient(at 95% 16%, ${props=>props.color1} 0, transparent ${transparencia_2}),  
    radial-gradient(at 3% 37%, ${props=>props.color2} 0, transparent ${transparencia_1}),  
    radial-gradient(at 30% 5%, ${props=>props.color1} 0, transparent ${transparencia_1}),  
    radial-gradient(at 78% 18%, ${props=>props.color2} 0, transparent ${transparencia_1});
    border-radius: 10%;
    margin-left: 1%;
    vertical-align: top;
    padding: 0.5%;
    min-height: 65vh;
    max-height: 70vh;

`   



export const Div3=styled.div`
  background: linear-gradient(110deg,${props=>props.color1} 0%, ${props=>!props.original?props.color2:'#e4d01b'});
  vertical-align:top;
  border-radius: 15px;
  margin: auto;
  height: 69vh;
  margin-bottom:1%;
  /* text-align: left; */
  box-shadow: 5px 5px 20px -5px ${props=>!props.original?'transparent':'yellow'};
  position: relative;
  transition: all ease-in 0.5s;


  @media (min-width: 360px) { 
      width: 80%;
      display: block;
      margin: auto;
      min-height: 30vh;
      margin-top: 3%;
        
      
  }

  @media (min-width: 1000px) { 
      width: 32%;
      min-height: 60vh;
      max-height: 80vh;
      display: inline-block;
      margin-left: 0.5%;
      margin-top:1%;
      margin-bottom:0.5%;
      
      &:hover{
        border:3px solid ${props=>!props.original?'transparent':'gold'};
        transition: all 0.2s ease-in 1s;
        
        }
        
  }

  &:hover{
    transition: all 0.5s ease-in-out 1s;
    box-shadow: 1px 5px 20px 0px ${props=>!props.original?'transparent':'yellow'};

}


`

export const Div4=styled.div`
border-radius: 15%;
padding:2% 3%;
display:inline-block;
margin:auto;
margin-top: 1%;
margin-left: 2%;
background-size: 300% 300%;
box-shadow: 1px 5px 20px 1px ${props=>!props.original?'transparent':'darkorange'};

@keyframes border_anim_22 {
0%{

    background-position: 0% 50%;
}
50%{
    border: 3px solid silver;
    background-position: 100% 50%;
}
70%{
    border: 3px solid golden;
}

}

`

export const Div5=styled.div`
    border-radius: 26%;
    animation: border_anim 5s ease-in-out alternate infinite;
    vertical-align: top;
    margin-left: 1%;
    margin-top: 1%;
    padding: ${props=>props.padding} ${props=>props.paddingLateral};

@keyframes border_anim {
    50%{
        border: 2px solid silver;
        
    }
    70%{
        border: 2px solid golden;
    }

}
`
 