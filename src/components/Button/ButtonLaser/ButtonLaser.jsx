import React from 'react'
import styled from 'styled-components'
import './estilo.css'

function ButtonLaser({
    texto='Bitcoin',
    color='hotpink'
}) {

    const A=styled.a`
    &:hover{
        box-shadow: 0 0 35px ${color};
        letter-spacing: 0.2em;
        background: ${color};
        color: ${color};
    }
    `
  return (
    <A
    className='boton_laser'><span>{texto}</span>
    <i></i>
    </A>
  )
}

export default ButtonLaser