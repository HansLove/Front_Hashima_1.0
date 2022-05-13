import styled from 'styled-components';


export const DivHashima=styled.div`
    background-image:radial-gradient(${props=>props.color2},${props=>props.color1});
    background-size: 300% 300%;
    margin-top: 1%;
    margin-left: 2%;
    border-radius: 8%;
    margin-bottom: 1%;
    min-height:70vh;
    border: 4px solid ${props=>props.color1};
    transition: all 1s ease-in-out;

    &:hover{
        transition: all 0.5s ease-in-out 1s;
        animation: animacion_borde 10s ease-in infinite alternate;
        
    }

    @media (min-width:320px) {
        width:90%
    }
    @media (min-width:768px) {
        width:45%
    }
    @media (min-width:1000px) {
        width:21%
    }

    @keyframes animacion_borde 
    {
        0%{
        border: 2px solid ${props=>props.color1};
        background-position: 0% 100%;
        
        }

        50%{
        border: 2px groove ${props=>props.color2};
        background-position: 100% 50%;

        
        
        }

        100%{
        border: 2px solid ${props=>props.color1};
        background-position: 50% 0%;
        }
    
}

@media (max-width:400px){
    width: 80%;
}
`

export const NiceH2=styled.h1`
color: whitesmoke;
width:fit-content;
font-size: 3rem;
margin:auto;
margin-bottom:5%;
font-family:cursive;
`


export const Div1=styled.div`
background-image: linear-gradient(45deg,lightgreen,teal);
color: black;
display: inline-block;
width: 20%;

margin-left: 1%;
margin-top: 1%;
border-radius: 10%;

`
export const Div2=styled.div`
background-image: linear-gradient(45deg,green,hotpink);
display: block;
margin-left: 1%;
margin-top: 2%;
padding:5%;
border-radius: 10%;

`




