import React from "react";
import { Marcador } from "./Marcador";

const MarcadorTemporal = ({ marcador, nextId, numero, etapa }) => {
    return (
        <>
            {
                marcador.id !== -1 ?
                    <Marcador
                        posX={marcador.x}
                        posY={marcador.y}
                        numero={numero}
                        id={nextId}
                        showModal={false}
                        etapa={etapa}
                    /> : ""
            }
        </>
    );
}

export { MarcadorTemporal }