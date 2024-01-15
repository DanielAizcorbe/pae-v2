import { DragDropDiagnostico } from "./DragDropDiagnostico";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns } from "../../utils/Containers";
import { Titulo } from "../../utils/Titulos";
import { styled } from "styled-components";
import { switchOrder } from "../../../store/slices/prioridades";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Planeacion = () => {
    const dispatch = useDispatch();

    const diagnosticosPriorizados = useSelector(state => state.prioridades);
    const [diagnosticosOrdenados, setDiagnosticosOrdenados] = useState(diagnosticosPriorizados);

    const setPrioridades = () => {
        dispatch(switchOrder(diagnosticosOrdenados));
    }


    return (
        <Columns
            elementPosition={"top-center"}
        >
            <Titulo texto="Planeación" />
            <Subtitulo>Ordene los diagnósticos según su urgencia</Subtitulo>
            <DragDropDiagnostico
                diagnosticos={diagnosticosOrdenados}
                switchOrderFunction={setDiagnosticosOrdenados}
            >
            </DragDropDiagnostico>
            <Columns
                elementPosition={"center"}
                padding={"1rem"}
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={setPrioridades}
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