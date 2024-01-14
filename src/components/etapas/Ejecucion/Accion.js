import React, { useState } from "react";
import { styled } from "styled-components";

const Accion = ({children}) => {

    const [selected, setSelected] = useState(false);

    const toggleSelectAccion = () => {
        setSelected(!selected);
    }

    return (
        <AccionBody selected={selected} onClick={toggleSelectAccion}>
            {children}
        </AccionBody>
    );
}

const AccionBody = styled.label`
    display: flex;
    align-items: center;
    width: 35rem;
    height: 2rem;
    margin-bottom: 0.4rem;
    font-size: 1.1rem;
    background-color: ${props => props.selected ? "blue" : "var(--fondo-resaltado)"};
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    color: var(--color-fondo);
    border-radius: 1rem;
    cursor: pointer;
`;


export { Accion }