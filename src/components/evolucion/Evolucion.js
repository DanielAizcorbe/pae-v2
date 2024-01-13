import React, { useState } from "react";
import { EvolucionesAnteriores } from "./EvolucionesAnteriores";
import { DatosPaciente } from "./DatosPaciente";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { AvisoCambios } from "../avisos/AvisoCambios";
import { AvisoEtapaCompletada } from "../avisos/AvisoEtapaCompletada";
import { ModalEvolucionAnterior } from "./ModalEvolucionAnterior";
import { Columns, Rows } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";


const nombrePaciente = "JUAN PEREZ GONZALES";
const documentoPaciente = "20333012";
const fechaNacPaciente = "09-09-1990";
const etapaCambiada = "VALORACIÓN"
const huboCambios = false;
const seCompletoUnaEtapa = false;

const Evolucion = () => {

    const [showEvolucionAnterior, setShowEvolucionAnterior] = useState(false);
    const [evolucionSeleccionada, setevolucionSeleccionada] = useState({});

    const abrirEvolucion = (evolucion) => {
        setevolucionSeleccionada(evolucion);
        setShowEvolucionAnterior(true);
    }

    /* return (
        <div className="col-container">
            
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
            {showEvolucionAnterior ? <ModalEvolucionAnterior evolucionSeleccionada={evolucionSeleccionada} closeModal={() => setShowEvolucionAnterior(false)} /> : ""}
        </div>
    ); */

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
                        nombre={nombrePaciente}
                        documento={documentoPaciente}
                        fechaNac={fechaNacPaciente}
                    />
                </Columns>
                <EtapasEvolucion />
                {huboCambios ? <AvisoCambios etapaCambiada={etapaCambiada} /> : ""}
                {seCompletoUnaEtapa ? <AvisoEtapaCompletada etapaCambiada={etapaCambiada} /> : ""}
            </Columns>
        </Rows>
    );
}




export { Evolucion }