import React, { useState } from "react";
import { styled } from "styled-components";
import { ToggleSection } from "../../utils/ToggleSection";
import { Columns } from "../../utils/Containers";
import { Accion } from "./Accion";

const ListaDeAcciones = ({ categoria, acciones }) => {

    const [showToggle, setShowToggle] = useState(false);

    const toggleFunction = () => {
        setShowToggle(!showToggle);
    }

    return (
        <ToggleSection
            title={categoria}
            elementPosition={"top-left"}
            showCondition={showToggle}
            toggleFunction={toggleFunction}
        >
            <Columns
                elementPosition={"top-left"}

            >
                {acciones.map(a =>
                    <Accion htmlFor={a}>
                        {a}
                    </Accion>
                )}
            </Columns>
        </ToggleSection>
    );
}

const Categoria = styled.h3`
    text-align: left;
    padding: 1rem 2rem;
    width: 50rem;
    background-color: var(--planeacion);
    border-radius: 1rem;
    color: var(--color-fondo);
`;

export { ListaDeAcciones }