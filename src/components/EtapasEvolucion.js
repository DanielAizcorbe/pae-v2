import React from "react";
import { BotonCentral } from "./botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "./datos/ToggleBotonCentral";
import { Etapa } from "./etapas/Etapa";


const EtapasEvolucion = () => {

    return (
        <div className="etapas-container">
            <div className="top" >
                <Etapa
                    nombre={"VALORACIÓN"}
                    onClick={() => alert("abrir VALORACIÓN")}
                    completado={false}
                    classes={"valoracion"}
                />
            </div>
            <div className="mid">
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={() => alert("abrir EVALUACIÓN")}
                    completado={false}
                    classes={"evaluacion"}
                />
                <BotonCentral
                    flag={GENERAR_EVOLUCION}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={() => alert("abrir DIAGNÓSTICO")}
                    completado={false}
                    classes={"diagnostico"}
                />
            </div>
            <div className="bottom">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={() => alert("abrir EJECUCIÓN")}
                    completado={false}
                    classes={"ejecucion"}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={() => alert("abrir PLANEACIÓN")}
                    completado={false}
                    classes={"planeacion"}
                />
            </div>
        </div>
    );
}

export { EtapasEvolucion }