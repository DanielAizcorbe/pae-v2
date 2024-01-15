import React from "react";
import { Marcador } from "./Marcador";

const ListaMarcadores = ({marcadores, removeMarcador}) => {

    

    return (
        <>
            {marcadores.map(m =>
                <Marcador
                    posX={m.x}
                    posY={m.y}
                    id={m.id}
                    numero={marcadores.findIndex(n => n.id === m.id) + 1}
                    remove={removeMarcador}
                    key={m.id}
                />)
            }
        </>
    );
}

export { ListaMarcadores }