import React from "react";
import { Marcador } from "./Marcador";

const ListaMarcadores = ({marcadores, openModal}) => {

    return (
        <>
            {marcadores.map(m =>
                <Marcador
                    posX={m.x}
                    posY={m.y}
                    numero={marcadores.findIndex(n => n.id == m.id) + 1}
                    openModal={openModal}
                />)
            }
        </>
    );
}

export { ListaMarcadores }