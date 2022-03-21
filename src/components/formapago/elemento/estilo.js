import styled from "styled-components";


export const NiceDiv=styled.div`
    background-image:linear-gradient(45deg,${props=>props.coloralt},${props=>props.color});
    &:hover{
        background-image:linear-gradient(45deg,${props=>props.coloralt},${props=>props.color});

    }
`