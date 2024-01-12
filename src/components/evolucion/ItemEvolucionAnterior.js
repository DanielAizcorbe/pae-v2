import React from "react";
import { VentanaModal } from "../utils/VentanaModal";

const ItemEvolucionAnterior = ({evolucionAnterior, onClick}) => {

    return (
        <li key={evolucionAnterior.id} onClick={() => onClick(evolucionAnterior)}>
            <span>{evolucionAnterior.hora + "-" + evolucionAnterior.fecha}</span>
            {"-" + evolucionAnterior.sector}
        </li>
    );
};

export {ItemEvolucionAnterior}