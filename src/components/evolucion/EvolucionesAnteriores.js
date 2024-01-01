import React from "react";
import { ItemEvolucionAnterior } from "./ItemEvolucionAnterior";
import { evoluciones } from "../datos/datos-evoluciones";

const EvolucionesAnteriores = () => {
    return (
        <div className="evoluciones">
            <h2>Evoluciones Anteriores</h2>
            <div className="evoluciones-container">
                <ol >
                    {
                        (evoluciones.length === 0) ?
                            (<p className="aviso-sin-evoluciones">No hay evoluciones anteriores registradas</p>) :

                            evoluciones
                                .map(evolucion => <ItemEvolucionAnterior evolucionAnterior={evolucion} />)

                    }
                </ol>
            </div>
        </div>

    );
}

export { EvolucionesAnteriores };