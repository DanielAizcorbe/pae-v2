import React, { useState } from "react";
import { BotonCentral } from "../botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "../botones/ToggleBotonCentral";
import { Etapa } from "../etapas/Etapa";
import { Columns, Rows } from "../utils/Containers";
import { styled } from "styled-components";


const EtapasEvolucion = () => {

    const [valoracion, setValoracion] = useState(false);
    const [evaluacion, setEvaluacion] = useState(false);
    const [diagnostico, setDiagnostico] = useState(false);
    const [ejecucion, setEjecucion] = useState(false);
    const [planeacion, setPlaneacion] = useState(false);

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
                    completada={valoracion}
                    bgcolor={"#F94144"}
                />
            </Rows>
            <Rows
                elementPosition="center"
            >
                <Etapa
                    nombre={"EVALUACIÓN"}
                    link={"/evolucion/evaluacion"}
                    completada={evaluacion}
                    bgcolor={"#577590"}
                />
                <BotonCentral
                    flag={FALTAN_ETAPAS}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    link={"/evolucion/diagnostico"}
                    completada={diagnostico}
                    bgcolor={"#90BE6D"}
                />
            </Rows>
            <Rows
                elementPosition="center"
            >
                <Etapa
                    nombre={"EJECUCIÓN"}
                    link={"/evolucion/ejecucion"}
                    completada={ejecucion}
                    bgcolor={"#F9844A"}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    link={"/evolucion/planeacion"}
                    completada={planeacion}
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



/*     return (
        <div className="etapas-container">
            <div className="top" >
                <Etapa
                    nombre={"VALORACIÓN"}
                    onClick={goToNextPage}
                    completada={valoracion}
                    classes={"valoracion"}
                />
            </div>
            <div className="mid">
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={goToEvaluacion}
                    completada={evaluacion}
                    classes={"evaluacion"}
                />
                <BotonCentral
                    flag={FALTAN_ETAPAS}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={goToDiagnostico}
                    completada={diagnostico}
                    classes={"diagnostico"}
                />
            </div>
            <div className="bottom">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={goToEjecucion}
                    completada={ejecucion}
                    classes={"ejecucion"}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={goToPlaneacion}
                    completada={planeacion}
                    classes={"planeacion"}
                />
            </div>
        </div>
    ); */

export { EtapasEvolucion }