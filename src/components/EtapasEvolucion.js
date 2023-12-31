import React from "react";
import { Valoracion } from "./etapas/Valoracion";
import { BotonCentral } from "./botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "./datos/ToggleBotonCentral";
import { Etapa } from "./etapas/Etapa";

const etapas = [
    {
        nombre: "VALORACIÓN",
        onClick: () => alert("abrir Valoración")
    },
    {
        nombre: "DIAGNÓSTICO",
        onClick: () => alert("abrir DIAGNÓSTICO")
    },
    {
        nombre: "PLANEACIÓN",
        onClick: () => alert("abrir PLANEACIÓN")
    },
    {
        nombre: "EJECUCIÓN",
        onClick: () => alert("abrir EJECUCIÓN")
    },
    {
        nombre: "EVALUACIÓN",
        onClick: () => alert("abrir EVALUACIÓN")
    },
];

const EtapasEvolucion = () => {

    return (
        <div className="etapas-container">
            <div className="b1" >
                <Etapa
                    nombre={"VALORACIÓN"}
                    onClick={() => alert("abrir VALORACIÓN")}
                />
            </div>
            <div className="b2">
                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={() => alert("abrir DIAGNÓSTICO")}
                />
                <BotonCentral flag={FALTA_CONFIRMAR_EDICION} />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={() => alert("abrir PLANEACIÓN")}
                />
            </div>
            <div className="b3">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={() => alert("abrir EJECUCIÓN")}
                />
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={() => alert("abrir EVALUACIÓN")}
                />
            </div>
        </div>
    );
}

export { EtapasEvolucion }