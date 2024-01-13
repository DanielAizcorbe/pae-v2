import React from "react";
import { Marcador } from "./Marcador";

const ListaMarcadores = ({marcadores}) => {

    return (
        <>
            {marcadores.map(m =>
                <Marcador
                    posX={m.x}
                    posY={m.y}
                    numero={marcadores.findIndex(n => n.id == m.id) + 1}
                />)
            }
        </>
    );
}

export { ListaMarcadores }