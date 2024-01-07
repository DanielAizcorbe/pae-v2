import React, { useState } from "react";
import { EvolucionesAnteriores } from "./EvolucionesAnteriores";
import { DatosPaciente } from "./DatosPaciente";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { AvisoCambios } from "../avisos/AvisoCambios";
import { AvisoEtapaCompletada } from "../avisos/AvisoEtapaCompletada";
import { ModalEvolucionAnterior } from "./ModalEvolucionAnterior";


const nombrePaciente = "JUAN PEREZ GONZALES";
const documentoPaciente = "20333012";
const fechaNacPaciente = "09-09-1990";
const etapaCambiada = "VALORACIÓN"
const huboCambios = false;
const seCompletoUnaEtapa = false;

const Evolucion = () => {

    const [showEvolucionAnterior, setShowEvolucionAnterior] = useState(false);
    const [evolucionSeleccionada, setevolucionSeleccionada] = useState( {
        id: 0,
        hora: "00:00",
        fecha: "01/01/2000",
        sector: "NINGUNO",
        evolucion: "",
      });

    const abrirEvolucion = (evolucion) => {
        setevolucionSeleccionada(evolucion);
        console.log(evolucionSeleccionada);
        setShowEvolucionAnterior(true);
    }

    return (
        <div className="col-container">
            <EvolucionesAnteriores openEvolucion={abrirEvolucion}/>
            <main>
                <div className="main-container">
                    <h1>Evolución paciente</h1>
                    <DatosPaciente
                        nombre={nombrePaciente}
                        documento={documentoPaciente}
                        fechaNac={fechaNacPaciente}
                    />
                </div>
                <EtapasEvolucion />
                {huboCambios ? <AvisoCambios etapaCambiada={etapaCambiada} /> : ""}
                {seCompletoUnaEtapa ? <AvisoEtapaCompletada etapaCambiada={etapaCambiada} /> : ""}
            </main>
            {showEvolucionAnterior ? <ModalEvolucionAnterior evolucionSeleccionada={evolucionSeleccionada} closeModal={() => setShowEvolucionAnterior(false)}/>: ""}
        </div>
    );
}

export { Evolucion }