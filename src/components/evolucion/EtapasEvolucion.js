import React from "react";
import { FALTAN_ETAPAS, GENERAR_EVOLUCION, toggleBotonCentral } from "../botones/ToggleBotonCentral";
import { Columns } from "../utils/Containers";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { EtapaDiagnostico, EtapaEjecucion, EtapaEvaluacion, EtapaPlaneacion, EtapaValoracion } from "./Etapas";
import { useNavigate } from "react-router-dom";


const EtapasEvolucion = () => {

    const estadoEtapas = useSelector((state) => state.estadoEtapas);

    const flag = (estadoEtapas) => {
        const estanTodasCompletadas = Object.values(estadoEtapas).every((etapa) => etapa.completada === true);

        if (estanTodasCompletadas) {
            return GENERAR_EVOLUCION;
        }

        return FALTAN_ETAPAS;

    }

    const navegar = useNavigate();

    const finalizar = () => {
        navegar("/evolucion/finalizar");
    }

    return (
        <EtapasContainer
            elementPosition="top-center"
            margin="5rem"
            height="auto"
        >
            <Columns
                elementPosition={"center"}
                height={"200px"}
                width={"100vw"}
            >
                <Columns
                    elementPosition="center"
                    width={"0"}
                    height={"0"}
                    position={"relative"}
                >
                    {toggleBotonCentral(flag(estadoEtapas),finalizar)}
                    <EtapaValoracion
                        completada={estadoEtapas.valoracion.completada}
                    />
                    <EtapaDiagnostico
                        completada={estadoEtapas.diagnostico.completada}
                        sePuedeCompletar={estadoEtapas.valoracion.completada}
                    />
                    <EtapaPlaneacion
                        completada={estadoEtapas.planeacion.completada}
                        sePuedeCompletar={estadoEtapas.diagnostico.completada}
                    />
                    <EtapaEjecucion
                        completada={estadoEtapas.ejecucion.completada}
                        sePuedeCompletar={estadoEtapas.planeacion.completada}
                    />
                    <EtapaEvaluacion
                        completada={estadoEtapas.evaluacion.completada}
                        sePuedeCompletar={estadoEtapas.ejecucion.completada}
                    />
                </Columns>
            </Columns>
        </EtapasContainer>
    );

}

const EtapasContainer = styled(Columns)`
    max-width: 60rem;
    width: 100%;
    min-width: 16rem;
    min-height: 16rem;
    max-height: 32rem;
    margin: 2.5rem;
`;

export { EtapasEvolucion }