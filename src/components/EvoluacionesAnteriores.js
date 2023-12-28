import React from "react";
import { ItemEvolucionAnterior } from "./ItemEvolucionAnterior";
import { evoluciones } from "./datos/datos-evoluciones";

const EvoluacionesAnteriores = () => {
    return (
        <div className="evoluaciones-container">
            <h2>Evoluciones Anteriores</h2>
            <ol >
                {
                    evoluciones
                        .map(evolucion => <ItemEvolucionAnterior evolucionAnterior={evolucion} />)
                }
            </ol>
        </div>
    );
}

export { EvoluacionesAnteriores };