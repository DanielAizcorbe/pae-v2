import React from "react";
import { CreadorDeMarcador } from "./CreadorDeMarcador";

const ModalCreacionMarcador = ({showModal, closeModalFunction, addMarcadorALaLista, marcadorNuevo }) => {

    return (
        <>
            {showModal ?
                <CreadorDeMarcador
                    closeModalFunction={closeModalFunction}
                    marcadorNuevo={marcadorNuevo}
                    addNuevoMarcador={addMarcadorALaLista}
                /> : ""}
        </>
    );
}

export { ModalCreacionMarcador }