import React from "react";

const ItemEvolucionAnterior = ({evolucionAnterior}) => {

    return (
        <li key={evolucionAnterior.id} onClick={() => alert("APRETASTE EL BOTON CON ID: " + evolucionAnterior.id)}>
            <span>{evolucionAnterior.hora + "-" + evolucionAnterior.fecha}</span>
            {"-" + evolucionAnterior.sector}
        </li>
    );
};

export {ItemEvolucionAnterior}