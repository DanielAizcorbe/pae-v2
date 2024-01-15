import React, { useState } from "react";
import { styled } from "styled-components";

const Necesidad = ({ nombre, id, toggleSelection, selected }) => {

    return (
        <NecesidadItem 
            key={id}
            selected={selected}
            onClick={() => toggleSelection(id)}
        >
            {nombre}
        </NecesidadItem>
    );
}

const NecesidadItem = styled.li`
    background-color: ${props => props.selected ? "blue" : "var(--fondo-resaltado)"};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    width: 48%;
    min-width: 400px;
    height: 6rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items:center;
`;

export { Necesidad }