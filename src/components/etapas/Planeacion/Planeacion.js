import React from "react";
import { diagnosticos } from "../../datos/datos-diagnostico"
import { DragDropDiagnostico } from "./DragDropDiagnostico";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns } from "../../utils/Containers";
import { Titulo } from "../../utils/Titulos";
import { styled } from "styled-components";


const Planeacion = () => {

    const diagnosticosPrueba = diagnosticos.filter(d => d.tipo == "Fisiológicas");

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <Titulo texto="Planeación" />
            <Subtitulo>Ordene los diagnósticos según su urgencia</Subtitulo>
            <DragDropDiagnostico
                diagnosticos={diagnosticosPrueba}
            >
            </DragDropDiagnostico>
            <Columns
                elementPosition={"center"}
                padding={"1rem"}
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                />
            </Columns>
        </Columns>
    );
}

const Subtitulo = styled.h2`
    margin: 0;
    padding: 1rem;
`;



export { Planeacion }