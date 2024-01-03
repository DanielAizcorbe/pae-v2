import React from "react";
import { VentanaModal } from "../modal/VentanaModal";

const ItemEvolucionAnterior = ({evolucionAnterior}) => {

    return (
        <li key={evolucionAnterior.id}>
            <span>{evolucionAnterior.hora + "-" + evolucionAnterior.fecha}</span>
            {"-" + evolucionAnterior.sector}
        </li>
    );
};

export {ItemEvolucionAnterior}