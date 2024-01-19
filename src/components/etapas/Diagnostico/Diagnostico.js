import React from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { EtapaContainer } from "../EtapaContainer";
import { Columns } from "../../utils/Containers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchOrder } from "../../../store/slices/prioridades";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionDiagnosticos } from "./SeccionDiagnosticos";


const Diagnostico = () => {

    const diagnosticos = useSelector(state => state.diagnosticos);

    const dispatch = useDispatch();

    const onClickFunction = () => {
        dispatch(switchOrder(diagnosticos.filter(d => d.selected)));
        dispatch(completarEtapa({etapa:"diagnostico",completada: true, text:""}))
    }

    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding={"1rem"}
        >
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
        </EtapaContainer>
    );
}

export { Diagnostico }
