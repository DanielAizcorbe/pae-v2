import React from "react";
import { EvolucionesAnteriores } from "./EvolucionesAnteriores";
import { DatosPaciente } from "./DatosPaciente";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { AvisoCambios } from "../avisos/AvisoCambios";
import { AvisoEtapaCompletada } from "../avisos/AvisoEtapaCompletada";

const nombrePaciente = "JUAN PEREZ GONZALES";
const documentoPaciente = "20333012";
const fechaNacPaciente = "09-09-1990";
const etapaCambiada = "VALORACIÓN"
const huboCambios = true;
const seCompletoUnaEtapa = false;

const Evolucion = () => {
    return (
        <div className="col-container">
            <EvolucionesAnteriores />
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
        </div>
    );
}

export { Evolucion }