import React, { useState } from "react";
import { VentanaModal } from "../../modal/VentanaModal";

const CreadorDeMarcador = ({ closeModalFunction }) => {

    const cancel = () => {
        closeModalFunction();
    }

    const create = () => {

    };

    return (
        <VentanaModal 
            showBackground={true}
            position={"center-right"}
            width={"30rem"}
            height={"30rem"}
            showAnimation={false}
        >
            <h2>Nuevo Marcador</h2>
            <select id="lista" name="lista">
                <option value="" disabled selected required >Selecciona una práctica</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
            </select>
            <button onClick={cancel}>
                Cancelar
            </button>
            <button onClick={create}>
                Crear
            </button>
        </VentanaModal>
    );
};

export { CreadorDeMarcador }