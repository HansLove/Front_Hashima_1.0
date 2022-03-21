import React from 'react';
import styled from 'styled-components';

function SingleCollection({onClick,name,color1='pink'}) {

    const Button=styled.button`
        background: linear-gradient(-45deg,transparent,${color1});
        color: whitesmoke;
        display: inline-block;
        width: fit-content;
        font-size: 2rem;
        border: 1px solid ${color1};
        border-radius: 15%;
        padding: 1% 3%;
        margin-left: 2%;
    `
  return <Button onClick={onClick}>{name}</Button>
}

export default SingleCollection;
