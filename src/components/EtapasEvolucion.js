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
                    completado={true}
                />
            </div>
            <div className="mid">
                <Etapa
                    nombre={"DIAGNÓSTICO"}
                    onClick={() => alert("abrir DIAGNÓSTICO")}
                    completado={true}
                />
                <BotonCentral
                    flag={FALTA_CONFIRMAR_EDICION}
                />
                <Etapa
                    nombre={"PLANEACIÓN"}
                    onClick={() => alert("abrir PLANEACIÓN")}
                    completado={true}
                />
            </div>
            <div className="bottom">
                <Etapa
                    nombre={"EJECUCIÓN"}
                    onClick={() => alert("abrir EJECUCIÓN")}
                    completado={false}
                />
                <Etapa
                    nombre={"EVALUACIÓN"}
                    onClick={() => alert("abrir EVALUACIÓN")}
                    completado={false}
                />
            </div>
        </div>
    );
}

export { EtapasEvolucion }