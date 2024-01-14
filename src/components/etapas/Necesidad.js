import React, { useState } from "react";
import { styled } from "styled-components";

const Necesidad = ({ nombre, id }) => {

    const [selected, setSelected] = useState(false);

    return (
        <NecesidadBody 
            key={id}
            selected={selected}
            onClick={() => setSelected(!selected)}
        >
            {nombre}
        </NecesidadBody>
    );
}

const NecesidadBody = styled.li`
    background-color: ${props => props.selected ? "blue" : "var(--fondo-resaltado)"};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 33rem;
    width: 100%;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`;

export { Necesidad }