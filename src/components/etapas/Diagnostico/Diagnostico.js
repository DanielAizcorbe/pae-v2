import React from "react";
import { BotonSiguiente } from "../BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { Columns, ContentContainer } from "../../utils/containers/Containers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchOrder } from "../../../store/slices/prioridades";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionDiagnosticos } from "./SeccionDiagnosticos";
import { setMensaje } from "../../../store/slices/avisosSlice";
import { getResumenDiagnosticos } from "../generarResumenes";


const Diagnostico = () => {

    const diagnosticos = useSelector(state => state.diagnosticos);
    const fueCompletadaLaEtapaSiguiente = useSelector(state => state.estadoEtapas.planeacion.completada);

    const dispatch = useDispatch();


    const onClickFunction = () => {
        dispatch(switchOrder(diagnosticos.filter(d => d.selected)));
        dispatch(completarEtapa({ etapa: "diagnostico", completada: true, resumen: getResumenDiagnosticos(diagnosticos.filter(d => d.selected)) }))

        if (fueCompletadaLaEtapaSiguiente) {
            dispatch(setMensaje("DIAGNÓSTICO"));
        }
    }

    return (
        <ContentContainer>
            <Titulo texto={"Diagnóstico"} />
            <SeccionDiagnosticos />
            <Columns
                padding={"1rem"}
                elementPosition="bottom-center"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={onClickFunction}
                    sePuedeActivar={diagnosticos.some(d => d.selected)}
                />
            </Columns>
        </ContentContainer>
    );
}

export { Diagnostico }
