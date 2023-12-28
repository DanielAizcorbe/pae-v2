import React from "react";
import { ItemEvolucionAnterior } from "./ItemEvolucionAnterior";

const evoluciones = [
    {
        id: 1,
        hora: "22:15",
        fecha: "22/09/2023",
        sector: "HEMODINAMIA"
    },
    {
        id: 2,
        hora: "22:00",
        fecha: "22/09/2023",
        sector: "HEMODINAMIA"
    },
    {
        id: 3,
        hora: "20:00",
        fecha: "22/09/2023",
        sector: "HEMODINAMIA"
    },
    {
        id: 4,
        hora: "22:15",
        fecha: "23/09/2023",
        sector: "HEMODINAMIA"
    }
];

const EvoluacionesAnteriores = () => {
    return (
        <div>
            <ol className="evoluaciones-container">
                {
                evoluciones
                    .map(evolucion => <ItemEvolucionAnterior evolucionAnterior={evolucion}/>)
                }
            </ol>
        </div>
    );
}

export {EvoluacionesAnteriores};