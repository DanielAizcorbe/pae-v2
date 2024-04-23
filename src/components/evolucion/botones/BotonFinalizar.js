import React from 'react'
import { Columns } from '../../utils/containers/Containers';
import { AZUL_PRIMARIO } from '../../datos/colores';

const botonStyles = {
    userSelect: "none",
    position: "absolute",
    bottom: "-125px",
    lineHeight: "2rem",
    borderRadius: "50%",
    backgroundColor: AZUL_PRIMARIO,
    color: "white",
    fontSize: "1.25rem",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    zIndex: 2
}

export const BotonFinalizar = ({ onClick }) => {

    return (
        <Columns
            width="9rem"
            height="9rem"
            elementPosition="center"
            margin="2.5rem"
            style={botonStyles}
            onClick={onClick}
        >
            Finalizar
        </Columns>
    );
}