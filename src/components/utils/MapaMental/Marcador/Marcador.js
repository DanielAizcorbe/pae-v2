import React, { useState } from "react";
import { ModalEliminarMarcador } from "./ModalEliminarMarcador";
import { AZUL_PRIMARIO, NARANJA } from "../../../datos/colores";


const Marcador = ({ posX, posY, numero, remove, id, etapa, etapaActual }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        if (etapaActual === etapa) {
            setShowModal(true);
        }
    }

    const closeModalFunction = () => {
        setShowModal(false);
    }

    const removeMarcador = () => {
        const idDelete = id;
        remove(idDelete);
        closeModalFunction();

    }

    const marcadorStyle = {
        position: "absolute",
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "50%",
        zIndex: 2,
        left: posX + "px",
        top: posY + "px",
        backgroundColor: (etapa === "valoracion" ? AZUL_PRIMARIO : NARANJA),
        cursor: "pointer",
    }

    const numeroStyle = {
        position: "relative",
        bottom: "15px",
        left: "8px",
        color: "black"
    }

    return (
        <li key={numero} >
            <div
                onClick={openModal}
                style={marcadorStyle}
            >
                <span style={numeroStyle}>
                    {numero}
                </span>
            </div>
            <ModalEliminarMarcador
                showModal={showModal}
                numero={numero}
                closeModalFunction={closeModalFunction}
                remove={removeMarcador}
            />
        </li>
    );
}

export { Marcador }