import React from "react";
import { styled } from "styled-components";

const BotonIcono = ({onClick, children}) => {

    return (
        <BtnIcn onClick={onClick}>
            {children}
        </BtnIcn>
    );

}

const BtnIcn = styled.button`
    width: 4rem;
    border-radius: 0 10px 10px 0;
    background-color: var(--fondo-resaltado);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 2.5rem;
    border: 2px solid var(--fondo-resaltado);
    outline: none;
`;

export { BotonIcono }