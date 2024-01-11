import React, { useState } from "react";
import { colorByTipo } from "../../datos/datos-diagnostico";

const DiagnosticoItem = ({ id, nombre, tipo }) => {
    const [selected, setSelected] = useState(false);

    return (
        <li
            key={id}
            className={"item-diagnostico " + colorByTipo(tipo) + (selected ? " selected" : "")}
            onClick={() => setSelected(!selected)}
        >
            {nombre}
        </li>
    );
}

export { DiagnosticoItem }