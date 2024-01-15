import React, { useState } from "react";
import { styled } from "styled-components";
import { ModalEliminarMarcador } from "./ModalEliminarMarcador";

const Marcador = ({ posX, posY, numero, remove, id }) => {

    const [showModal, setShowModal] = useState(false);

    const removeMarcador = () => {
        const idDelete = id;
        remove(idDelete);
        closeModalFunction();
    }

    const closeModalFunction = () => {
        console.log("cerrar modal");
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <MarcadorBody
                $posX={posX + "px"}
                $posY={posY + "px"}
                onClick={openModal}
            >
                <NumeroMarcador>
                    {numero}
                </NumeroMarcador>
            </MarcadorBody>
            {showModal ?
                <ModalEliminarMarcador
                    numero={numero}
                    closeModalFunction={closeModalFunction}
                    remove={removeMarcador}
                /> : ""
            }
        </>
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
    background-color: blue;
    cursor: pointer;
`;

const NumeroMarcador = styled.span`
    position: relative;
    bottom: 15px;
    left: 8px;
    color: black;
`;


export { Marcador }