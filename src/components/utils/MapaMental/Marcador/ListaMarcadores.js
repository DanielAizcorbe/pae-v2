import React from "react";
import { Marcador } from "./Marcador";

const ListaMarcadores = ({marcadores, removeMarcador, etapaActual}) => {

    

    return (
        <ul style={{textDecoration: "none", listStyleType: "none"}}>
            {marcadores.map(m =>
                <Marcador
                    key={m.id}
                    posX={m.x}
                    posY={m.y}
                    id={m.id}
                    numero={marcadores.findIndex(n => n.id === m.id) + 1}
                    remove={removeMarcador}
                    etapa={m.etapa}
                    etapaActual={etapaActual}
                />)
            }
        </ul>
    );
}

export { ListaMarcadores }