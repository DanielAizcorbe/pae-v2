import { DragDropPlaneacion } from "./Draggable/DragDropPlaneacion";
import { BotonSiguiente } from "../BotonSiguiente";
import { Columns, ContentContainer } from "../../utils/containers/Containers";
import { Titulo } from "../../utils/Titulos";
import { switchOrder } from "../../../store/slices/prioridades";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completarEtapa } from "../../../store/slices/etapas";
import Title from "antd/es/typography/Title";
import { setMensaje } from "../../../store/slices/avisosSlice";


const Planeacion = () => {
    const dispatch = useDispatch();

    const diagnosticosPriorizados = useSelector(state => state.prioridades);
    const [diagnosticosOrdenados, setDiagnosticosOrdenados] = useState(diagnosticosPriorizados);
    const fueCompletadaLaEtapaSiguiente = useSelector(state => state.estadoEtapas.ejecucion.completada);


    const getResumen = (diagnosticosOrdenados) => {
        return `Se priorizan los diagnósticos según su urgencia\n${diagnosticosOrdenados.map(n => `${(diagnosticosOrdenados.indexOf(n) + 1) + ". " + n.nombre}`).join('\n')}`;
    }

    const setPrioridades = () => {
        console.log(getResumen(diagnosticosOrdenados));
        dispatch(switchOrder(diagnosticosOrdenados));
        dispatch(completarEtapa({ etapa: "planeacion", completada: true, resumen: getResumen(diagnosticosPriorizados) }))

        if (fueCompletadaLaEtapaSiguiente) {
            dispatch(setMensaje("PLANEACIÓN"));
        }
    }

    return (
        <ContentContainer>
            <Titulo texto="Planeación" />
            <Title level={3}>Ordene los diagnósticos según su urgencia</Title>
            <DragDropPlaneacion
                diagnosticos={diagnosticosOrdenados}
                switchOrderFunction={setDiagnosticosOrdenados}
            />
            <Columns
                elementPosition={"center"}
                padding={"1rem"}
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={setPrioridades}
                    sePuedeActivar={true}
                />
            </Columns>
        </ContentContainer>
    );
}

export { Planeacion }