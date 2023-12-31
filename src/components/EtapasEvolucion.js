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
                />
            </div>
            <div className="mid">
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={() => alert("abrir EVALUACIÓN")}
                    completado={false}
                />
                <BotonCentral
                    flag={FALTA_CONFIRMAR_EDICION}
                />

                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={() => alert("abrir DIAGNÓSTICO")}
                    completado={false}
                />
            </div>
            <div className="bottom">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={() => alert("abrir EJECUCIÓN")}
                    completado={false}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={() => alert("abrir PLANEACIÓN")}
                    completado={false}
                />
            </div>
        </div>
    );
}

export { EtapasEvolucion }