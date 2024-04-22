import React, { useState } from "react";
import { styled } from "styled-components";
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

    return (
        <li key={numero} >
            <MarcadorBody
                $posX={posX + "px"}
                $posY={posY + "px"}
                onClick={openModal}
                $bgcolor={etapa === "valoracion" ? AZUL_PRIMARIO : NARANJA}
            >
                <NumeroMarcador>
                    {numero}
                </NumeroMarcador>
            </MarcadorBody>
            <ModalEliminarMarcador
                showModal={showModal}
                numero={numero}
                closeModalFunction={closeModalFunction}
                remove={removeMarcador}
            />
        </li>
    );
}

const MarcadorBody = styled.div`
            position: absolute;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            z-index: 2;
            left: ${props => props.$posX};
            top: ${props => props.$posY};
            background-color: ${props => props.$bgcolor};
            cursor: pointer;
            `;

const NumeroMarcador = styled.span`
            position: relative;
            bottom: 15px;
            left: 8px;
            color: black;
            `;


export { Marcador }