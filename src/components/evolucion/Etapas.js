import React from "react";
import { Etapa } from "../etapas/Etapa";

const EtapaValoracion = ({ completada }) => {

    const style = {
        bottom: "50px"
    };

    return (
        <Etapa
            nombre={"VALORACIÓN"}
            link={"/evolucion/valoracion"}
            completada={completada}
            bgcolor={"#F94144"}
            sePuedeCompletar={true}
            style={style}
        />
    );
}

const EtapaPlaneacion = ({ completada, sePuedeCompletar }) => {

    const style = {
        left: "-70px",
        top: "60px",
        transform: "rotate(-220deg)",
    };

    return (
        <Etapa
            nombre={"PLANEACIÓN"}
            link={"/evolucion/planeacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#4D908E"}
            style={style}
            rotar={true}
        />
    );
};


const EtapaDiagnostico = ({ completada, sePuedeCompletar }) => {

    const style = {
        left: "-20px",
        bottom: "-40px",
        transform: "rotate(80deg)",
    };

    return (
        <Etapa
            nombre={"DIAGNÓSTICO"}
            link={"/evolucion/diagnostico"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#90BE6D"}
            style={style}
        />
    );
}

const EtapaEjecucion = ({ completada, sePuedeCompletar }) => {

    const style = {
        right: "-70px",
        top: "60px",
        transform: "rotate(220deg)",
    };

    return (
        <Etapa
            nombre={"EJECUCIÓN"}
            link={"/evolucion/ejecucion"}
            completada={completada}
            bgcolor={"#F9844A"}
            sePuedeCompletar={sePuedeCompletar}
            style={style}
            rotar={true}
        />
    );
}

const EtapaEvaluacion = ({ completada, sePuedeCompletar }) => {

    const style = {
        right: "-20px",
        bottom: "-40px",
        transform: "rotate(-80deg)",
    };

    return (
        <Etapa
            nombre={"EVALUACIÓN"}
            link={"/evolucion/evaluacion"}
            completada={completada}
            sePuedeCompletar={sePuedeCompletar}
            bgcolor={"#577590"}
            style={style}
        />
    );

};

export { EtapaValoracion, EtapaDiagnostico, EtapaPlaneacion, EtapaEjecucion, EtapaEvaluacion }