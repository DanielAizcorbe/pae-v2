import React from "react";
import { Etapa } from "./Etapa";

const EtapaValoracion = ({ completada }) => {

    return (
        <Etapa
            etapa={"VALORACIÓN"}
            nextPage={"/evolucion/valoracion"}
            completada={completada}
            sePuedeCompletar={true}
        />
    );
}

const EtapaDiagnostico = ({ completada, sePuedeCompletar }) => {

    return (
        <Etapa
            etapa={"DIAGNÓSTICO"}
            nextPage={"/evolucion/diagnostico"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
        />
    );
}

const EtapaPlaneacion = ({ completada, sePuedeCompletar }) => {

    return (
        <Etapa
            etapa={"PLANEACIÓN"}
            nextPage={"/evolucion/planeacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            rotar
        />
    );
};


const EtapaEjecucion = ({ completada, sePuedeCompletar }) => {

    return (
        <Etapa
            etapa={"EJECUCIÓN"}
            nextPage={"/evolucion/ejecucion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            rotar
        />
    );
}

const EtapaEvaluacion = ({ completada, sePuedeCompletar }) => {

    return (
        <Etapa
            etapa={"EVALUACIÓN"}
            nextPage={"/evolucion/evaluacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
        />
    );

};

export { EtapaValoracion, EtapaDiagnostico, EtapaPlaneacion, EtapaEjecucion, EtapaEvaluacion }