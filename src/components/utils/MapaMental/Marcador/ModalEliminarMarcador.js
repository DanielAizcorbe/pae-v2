import React from "react";
import { VentanaModal } from "../../VentanaModal";
import { styled } from "styled-components";
import { BotonContainer, Columns } from "../../Containers";

const ModalEliminarMarcador = ({closeModalFunction, numero, remove }) => {

    return (
        <VentanaModal
            position={"center"}
            width={"20rem"}
            height={"10rem"}
        >
            <Columns>
                <Texto>
                    {"Desea remover el punto " + numero + "?"}
                </Texto>
                <BotonContainer>
                    <button onClick={closeModalFunction}>
                        Cancelar
                    </button>
                    <button onClick={remove}>
                        Borrar
                    </button>
                </BotonContainer>
            </Columns>
        </VentanaModal>
    );
}

const Texto = styled.p`
    text-aligh: center; 
    display: flex;
    justify-content: center;
    align-items: center;
`;


export { ModalEliminarMarcador }