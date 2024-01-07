import React, { useState } from "react";
import { BotonCentral } from "../botones/BotonCentral";
import { FALTAN_ETAPAS, FALTA_CONFIRMAR_EDICION, GENERAR_EVOLUCION } from "../datos/ToggleBotonCentral";
import { Etapa } from "../etapas/Etapa";
import { useNavigate } from "react-router-dom";


const EtapasEvolucion = () => {

    const navegar = useNavigate();
    
    const goToNextPage = () => {
        navegar("/evolucion/valoracion");
    }

    const goToDiagnostico = () => {
        navegar("/evolucion/diagnostico");
    }

    const goToPlaneacion = () => {
        navegar("/evolucion/planeacion");
    }

    const goToEjecucion = () => {
        navegar("/evolucion/ejecucion");
    }


    const [valoracion, setValoracion] = useState(false);
    const [evaluacion, setEvaluacion] = useState(false);
    const [diagnostico, setDiagnostico] = useState(false);
    const [ejecucion, setEjecucion] = useState(false);
    const [planeacion, setPlaneacion] = useState(false);

    return (
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
                    onClick={() => alert("abrir EVALUACIÓN")}
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
                    onClick={() => alert("abrir EJECUCIÓN")}
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
    );
}

export { EtapasEvolucion }