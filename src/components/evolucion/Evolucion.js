import React, { useState } from "react";
import { EvolucionesAnteriores } from "./EvolucionesAnteriores";
import { DatosPaciente } from "./DatosPaciente";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { AvisoCambios } from "../avisos/AvisoCambios";
import { AvisoEtapaCompletada } from "../avisos/AvisoEtapaCompletada";
import { ModalEvolucionAnterior } from "./ModalEvolucionAnterior";
import { Columns, Rows } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";

const etapaCambiada = "VALORACIÓN"
const huboCambios = false;
const seCompletoUnaEtapa = true;

const Evolucion = () => {

    const [showEvolucionAnterior, setShowEvolucionAnterior] = useState(false);
    const [evolucionSeleccionada, setevolucionSeleccionada] = useState({});

    const abrirEvolucion = (evolucion) => {
        setevolucionSeleccionada(evolucion);
        setShowEvolucionAnterior(true);
    }

    return (
        <Rows
            elementPosition="top-center"
        >
            <EvolucionesAnteriores openEvolucion={abrirEvolucion} />
            <Columns
                elementPosition="top-center"
            >
                <Columns
                    elementPosition="center"
                    height="20vh"
                >
                    <Titulo texto="Evolución paciente" />
                    <DatosPaciente
                    />
                </Columns>
                <EtapasEvolucion />
                {huboCambios ? <AvisoCambios etapaCambiada={etapaCambiada} /> : ""}
                {seCompletoUnaEtapa ? <AvisoEtapaCompletada etapaCambiada={etapaCambiada} /> : ""}
            </Columns>
            {showEvolucionAnterior ? <ModalEvolucionAnterior evolucionSeleccionada={evolucionSeleccionada} closeModal={() => setShowEvolucionAnterior(false)} /> : ""}
        </Rows>
    );
}




export { Evolucion }