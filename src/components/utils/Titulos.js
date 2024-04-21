import Title from "antd/es/typography/Title";
import React from "react";
import { AZUL_PROFUNDO } from "../datos/colores";

const Titulo = ({ texto, id }) => {

    return (
        <Title
            style={{ color: AZUL_PROFUNDO}}
            level={1} id={id}
        >
            {texto}
        </Title>
    );
}

export { Titulo }