import React, { useState } from "react";
import { BotonCentral } from "../botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "../botones/ToggleBotonCentral";
import { Etapa } from "../etapas/Etapa";
import { Columns, Rows } from "../utils/Containers";
import { styled } from "styled-components";
import { useSelector } from "react-redux";


const EtapasEvolucion = () => {

    const estadoEtapas = useSelector((state) => state.estadoEtapas);

    const flag = (estadoEtapas) => {
        const estanTodasCompletadas = Object.values(estadoEtapas).every((etapa) => etapa.completada === true);

        if (estanTodasCompletadas) {
            return GENERAR_EVOLUCION;
        }

        return FALTAN_ETAPAS;

    }

    return (
        <EtapasContainer
            elementPosition="top-center"
            margin="5rem"
            height="auto"
        >
            <Rows
                elementPosition="center"
            >
                <Etapa
                    nombre={"VALORACIÓN"}
                    link={"/evolucion/valoracion"}
                    completada={estadoEtapas.valoracion.completada}
                    bgcolor={"#F94144"}
                    sePuedeCompletar={true}
                />
            </Rows>
            <Rows
                elementPosition="center"
            >
                <Etapa
                    nombre={"EVALUACIÓN"}
                    link={"/evolucion/evaluacion"}
                    completada={estadoEtapas.evaluacion.completada}
                    sePuedeCompletar={estadoEtapas.ejecucion.completada}
                    bgcolor={"#577590"}
                />
                <BotonCentral
                    flag={flag(estadoEtapas)}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    link={"/evolucion/diagnostico"}
                    completada={estadoEtapas.diagnostico.completada}
                    sePuedeCompletar={estadoEtapas.valoracion.completada}
                    bgcolor={"#90BE6D"}
                />
            </Rows>
            <Rows
                elementPosition="center"
            >
                <Etapa
                    nombre={"EJECUCIÓN"}
                    link={"/evolucion/ejecucion"}
                    completada={estadoEtapas.ejecucion.completada}
                    bgcolor={"#F9844A"}
                    sePuedeCompletar={estadoEtapas.planeacion.completada}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    link={"/evolucion/planeacion"}
                    completada={estadoEtapas.planeacion.completada}
                    sePuedeCompletar={estadoEtapas.diagnostico.completada}
                    bgcolor={"#4D908E"}
                />
            </Rows>
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