import React from "react";
import medicoImagen from "./medico.png";
import { Columns } from "../../utils/containers/Containers";

const IconoPaciente = () => {

    const iconoStyle = {
        userSelect: "none",
        pointerEvents: "none",
        position: "absolute",
        bottom: "-125px",
    }

    return (
        <Columns
            width="9rem"
            height="9rem"
            elementPosition="center"
            margin="2.5rem 5rem"
            style={iconoStyle}
        >
            <img
                src={medicoImagen}
                alt="icono paciente"
                style={{
                    width: "8rem",
                    height: "8rem"
                }}
            />
            <span style={{ fontSize: "1.5rem" }}>
                Juan
            </span>
        </Columns>
    );
}

export { IconoPaciente }