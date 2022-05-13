import React from 'react'
import styled from 'styled-components'

function Button({
    onClick=()=>{},
    padding='2%',
    color1='red',
    display='flex',
    margin='0%',
    marginLeft='0%',
    fontSize='2rem',
    color2='orange',
    text='',
    color='white',
    secundaryText='',
    borderRadius='11%'
}) {

    const StyledButton=styled.button`
        display: ${display};
        background: linear-gradient(-45deg,${color1},${color2});
        color:${color};
        font-size: ${fontSize};
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-radius:${borderRadius};
        z-index: 1;
        margin:${margin};
        margin-left: ${marginLeft};
        padding: 0.5%;
        transition: all 0.5s ease-in-out;

        &:hover{
            padding:${padding};
            border-radius: 12%;
            transition: all 0.5s ease-in-out;
        }

        p{
          display: none;
        }
        &:hover p{
          display: flex;
          position: absolute;
          color: whitesmoke;
          background: black;
          font-family: monospace;
          top: 5%;
          font-size: 1.2rem;
          padding: 1%;
          border-radius: 5%;

        }
    `
  return (
    <StyledButton onClick={onClick}>{text}
    {secundaryText!=''&&<p>{secundaryText}</p>}
    </StyledButton>
  )
}

export default Button