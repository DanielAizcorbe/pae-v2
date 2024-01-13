import React from "react";
import { styled } from "styled-components";

const Titulo = ({ texto }) => {

    return (
        <H1>
            {texto}
        </H1>
    );
}

const H1 = styled.h1`
    background-color: var(--fondo-resaltado);
    color: var(--color-fondo);
    padding: 1rem;
    border-radius: 1rem;
    margin: 2rem;
    font-size: 3rem;
    text-align: center;
`;

export { Titulo }