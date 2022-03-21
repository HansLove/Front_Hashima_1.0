import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const Nav=styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(-45deg,purple,transparent,navy);

`

export const NavLink=styled(Link)`
font-family: Georgia, 'Times New Roman', Times, serif;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
color: whitesmoke;
background: transparent;
transition: all 0.5s ease-in-out;
font-size: 1.3rem;

&.active{
    font-size: 1.5rem;
    color:goldenrod;
}
&:hover{
    color: skyblue;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
}


@media (min-width:320px){
        font-size:0.8rem;
    }
    @media (min-width:1000px){
        font-size:1.4rem;
    }
`



export const NavMenu=styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-right:10%;
    

    /* @media screen and (max-width:750px){
        display: none;
    } */
`




export const Button1=styled.button`
    display: flex;
    align-items: center;
    border-radius: 10%;
    color: whitesmoke;
    font-size: 1.8rem;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background: linear-gradient(45deg,hotpink,olive,deepskyblue);
    margin-left: 5%;

   
`
export const NavBtnLink=styled(Link)`
    display: flex;
    background-image: radial-gradient(green,violet,skyblue);
    border-radius: 6%;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    border:none;
    font-size: 1.6rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: whitesmoke;
    outline: none;
    transition: all 0.2s ease-in-out;
    animation: animacion_2 ease-in 10s infinite alternate;
    background-size: 300% 300%;

    &::hover{
        transition: all 20s ease-in-out;
        background: #fff123;
    }

    @keyframes animacion_2{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 50% 80%;
        }
        100%{
            background-position: 100% 50%;
        }
    }

    
`