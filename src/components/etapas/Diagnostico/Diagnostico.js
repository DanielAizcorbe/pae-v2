import React from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { Columns, ContentContainer } from "../../utils/containers/Containers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchOrder } from "../../../store/slices/prioridades";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionDiagnosticos } from "./SeccionDiagnosticos";


const Diagnostico = () => {

    const diagnosticos = useSelector(state => state.diagnosticos);

    const dispatch = useDispatch();

    const getResumen = (diagnosticosSeleccionados) => {
        return `En base a las necesidades observadas, se diagnostica\n${diagnosticosSeleccionados.map(d => `> ${d.nombre}`).join('\n')}`;
    }

    const onClickFunction = () => {
        console.log(getResumen(diagnosticos.filter(d => d.selected)));
        dispatch(switchOrder(diagnosticos.filter(d => d.selected)));
        dispatch(completarEtapa({ etapa: "diagnostico", completada: true, resumen: getResumen(diagnosticos.filter(d => d.selected)) }))
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
