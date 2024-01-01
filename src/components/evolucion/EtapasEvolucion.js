import React from "react";
import { BotonCentral } from "../botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "../datos/ToggleBotonCentral";
import { Etapa } from "../etapas/Etapa";


const EtapasEvolucion = () => {

    return (
        <div className="etapas-container">
            <div className="top" >
                <Etapa
                    nombre={"VALORACIÓN"}
                    onClick={() => alert("abrir VALORACIÓN")}
                    completada={true}
                    classes={"valoracion"}
                />
            </div>
            <div className="mid">
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={() => alert("abrir EVALUACIÓN")}
                    completada={false}
                    classes={"evaluacion"}
                />
                <BotonCentral
                    flag={FALTAN_ETAPAS}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={() => alert("abrir DIAGNÓSTICO")}
                    completada={false}
                    classes={"diagnostico"}
                />
            </div>
            <div className="bottom">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={() => alert("abrir EJECUCIÓN")}
                    completada={false}
                    classes={"ejecucion"}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={() => alert("abrir PLANEACIÓN")}
                    completada={false}
                    classes={"planeacion"}
                />
            </div>
        </div>
    );
}

export { EtapasEvolucion }