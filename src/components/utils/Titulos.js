import Title from "antd/es/typography/Title";
import React from "react";

const Titulo = ({ texto, id }) => {

    return (
        <Title level={1} id={id}>
            {texto}
        </Title>
    );
}

export { Titulo }