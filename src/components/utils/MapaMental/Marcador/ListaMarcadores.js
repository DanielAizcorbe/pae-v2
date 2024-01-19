import React from "react";
import { Marcador } from "./Marcador";

const ListaMarcadores = ({marcadores, removeMarcador, etapaActual}) => {

    

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
                    etapa={m.etapa}
                    etapaActual={etapaActual}
                />)
            }
        </>
    );
}

export { ListaMarcadores }