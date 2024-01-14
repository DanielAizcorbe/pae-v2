import React from "react";
import { Necesidad } from "../Necesidad";
import { necesidades } from "../../datos/datos-necesidades";
import { styled } from "styled-components";
import { Columns } from "../../utils/Containers";

const ListaNecesidades = () => {

    return (
            <Necesidades>
                {
                    necesidades.map(
                        n => <Necesidad nombre={n.nombre} id={n.id} />
                    )
                }
            </Necesidades>
    );
}

const Necesidades = styled.ul`
    height: 100%;
    max-height: 90rem;
    max-width: 1200px;
    width: 80%;
    list-style-type: none;
    padding: 0 3rem;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
`;

export { ListaNecesidades }