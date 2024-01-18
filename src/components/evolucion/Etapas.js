import React from "react";
import { Etapa } from "../etapas/Etapa";

const EtapaValoracion = ({ completada }) => {

    const style = `
        bottom: 50px;
    `;

    const hoverStyles = `
        transform: scale(1.1);
        transition: transform 100ms linear;
    `;

    return (
        <Etapa
            nombre={"VALORACIÓN"}
            link={"/evolucion/valoracion"}
            completada={completada}
            bgcolor={"#F94144"}
            sePuedeCompletar={true}
            style={style}
            hoverStyles={hoverStyles}
        />
    );
}

const EtapaPlaneacion = ({ completada, sePuedeCompletar }) => {

    const style = `
        left: -70px;
        top: 60px;
        transform: rotate(-220deg);
    `;

    const hoverStyles = `
        transform: scale(1.1) rotate(-220deg);
        transition: transform 100ms linear;
    `;

    return (
        <Etapa
            nombre={"PLANEACIÓN"}
            link={"/evolucion/planeacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#4D908E"}
            style={style}
            rotar={true}
            hoverStyles={hoverStyles}
        />
    );
};


const EtapaDiagnostico = ({ completada, sePuedeCompletar }) => {

    const style = `
        left: -20px;
        bottom: -40px;
        transform: rotate(75deg);
    `;

    const hoverStyles = `
        transform: scale(1.1) rotate(75deg);
        transition: transform 100ms linear;
    `;

    return (
        <Etapa
            nombre={"DIAGNÓSTICO"}
            link={"/evolucion/diagnostico"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#90BE6D"}
            style={style}
            hoverStyles={hoverStyles}
        />
    );
}

const EtapaEjecucion = ({ completada, sePuedeCompletar }) => {

    const style = `
        right: -70px;
        top: 60px;
        transform: rotate(220deg);
    `;

    const hoverStyles = `
        transform: scale(1.1) rotate(220deg);
        transition: transform 100ms linear;
    `;

    return (
        <Etapa
            nombre={"EJECUCIÓN"}
            link={"/evolucion/ejecucion"}
            completada={completada}
            bgcolor={"#F9844A"}
            sePuedeCompletar={sePuedeCompletar}
            style={style}
            rotar={true}
            hoverStyles={hoverStyles}
        />
    );
}

const EtapaEvaluacion = ({ completada, sePuedeCompletar }) => {

    const style = `
        right: -20px;
        bottom: -40px;
        transform: rotate(-75deg);
    `;

    const hoverStyles = `
        transform:  scale(1.1) rotate(-75deg);
        transition: transform 100ms linear;
    `;

    return (
        <Etapa
            nombre={"EVALUACIÓN"}
            link={"/evolucion/evaluacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#577590"}
            style={style}
            hoverStyles={hoverStyles}
        />
    );

};

export { EtapaValoracion, EtapaDiagnostico, EtapaPlaneacion, EtapaEjecucion, EtapaEvaluacion }