import React from "react";
import { styled } from "styled-components";
import { practicasprueba } from "../../../datos/practicas";

const ListaDePracticas = ({ selected, setSelected }) => {

    return (
        <Practicas
            required
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
        >
            <Practica value={""} disabled>
                {"Seleccione una práctica"}
            </Practica>
            {
                practicasprueba.map(
                    p => <Practica key={p} value={p}>
                        {p}
                    </Practica>
                )
            }
        </Practicas>
    );
}

const Practicas = styled.select`
    width: 25rem;
    height: 2.5rem;
    overflow-y: scroll;
    font-size: 1.2rem;
    outline:none;
    border-radius: 1rem;
    padding-left: 0.3rem;
`;

const Practica = styled.option`

`;

export { ListaDePracticas }