import React, { useState } from "react";
import { Columns } from "../utils/containers/Containers";
import { useSelector } from "react-redux";
import {
    EtapaDiagnostico,
    EtapaEjecucion,
    EtapaEvaluacion,
    EtapaPlaneacion,
    EtapaValoracion
}
    from "../etapas/EtapaGenerica/Etapas";
import ModalConfirmarFinalizar from "./ModalConfirmarFinalizar";
import BotonCentral from "./botones/BotonCentral";


const EtapasEvolucion = () => {

    const estadoEtapas = useSelector((state) => state.estadoEtapas);
    const [showModal, setShowModal] = useState(false);

    const finalizar = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const estanTodasCompletadas = Object.values(estadoEtapas)
        .every((etapa) => etapa.completada === true);

    return (
        <Columns
            elementPosition="top-center"
            margin="5rem"
            width="100%"
            style={{
                maxWidth: "60rem",
                minWidth: "16rem",
                minHeight: "16rem",
                maxHeight: "32rem",
            }}
        >
            <Columns
                elementPosition={"center"}
                height={"200px"}
                width={"100vw"}
            >
                <Columns
                    elementPosition="center"
                    width={"0"}
                    height={"0"}
                    position={"relative"}
                >
                    <BotonCentral
                        estanTodasCompletadas={estanTodasCompletadas}
                        finalizar={finalizar}
                    />
                    <EtapaValoracion
                        completada={estadoEtapas.valoracion.completada}
                    />
                    <EtapaDiagnostico
                        completada={estadoEtapas.diagnostico.completada}
                        sePuedeCompletar={estadoEtapas.valoracion.completada}
                    />
                    <EtapaPlaneacion
                        completada={estadoEtapas.planeacion.completada}
                        sePuedeCompletar={estadoEtapas.diagnostico.completada}
                    />
                    <EtapaEjecucion
                        completada={estadoEtapas.ejecucion.completada}
                        sePuedeCompletar={estadoEtapas.planeacion.completada}
                    />
                    <EtapaEvaluacion
                        completada={estadoEtapas.evaluacion.completada}
                        sePuedeCompletar={estadoEtapas.ejecucion.completada}
                    />
                    <ModalConfirmarFinalizar
                        open={showModal}
                        closeModal={closeModal}
                    />
                </Columns>
            </Columns>
        </Columns>
    );

}

export { EtapasEvolucion }