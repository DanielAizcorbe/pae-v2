import React from "react";
import { AvisoWarning } from "../avisos/AvisoWarning";
import "./busqueda-paciente.css";

const BusquedaPaciente = ({ seBuscoDocumentoInexistente }) => {

    return (
        <div className="busqueda-container">
            <h1>Evolución de pacientes</h1>
            <form className="busqueda-paciente">
                <div className="container">
                    <label for="nro-documento">
                        <input
                            type="text"
                            name="nro-documento"
                            autoComplete="off"
                            maxLength={30}
                            minLength={1}
                            required
                            spellCheck={false}
                            placeholder="Ingrese el documento del paciente"
                        />
                    </label>
                    <button>
                        <div className="flecha-derecha">

                        </div>
                    </button>
                </div>
            </form>
            {seBuscoDocumentoInexistente ? <AvisoWarning text={"No hay ningún paciente registrado con ese documento"} /> : ""}
        </div>
    );
}

export { BusquedaPaciente }