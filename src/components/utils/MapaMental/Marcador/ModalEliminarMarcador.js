import React from "react";
import { VentanaModal } from "../../VentanaModal";

const ModalEliminarMarcador = ({showBorrar, removeMarcador, closeModalFunction, numero }) => {

    return (
        <>
            {showBorrar ?
                <VentanaModal
                    position={"center"}
                    width={"20rem"}
                    height={"9rem"}
                    showbackground={false}
                >
                    <p style={{ textAligh: "center", display: "flex", }}>
                        {"Desea remover el punto " + numero + "?"}
                    </p>
                    <button onClick={() => closeModalFunction(false)}>
                        Cancelar
                    </button>
                    <button onClick={removeMarcador}>
                        Borrar
                    </button>
                </VentanaModal> : ""
            }
        </>
    );
}

export { ModalEliminarMarcador }