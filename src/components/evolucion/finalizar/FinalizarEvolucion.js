import React from "react";
import { Columns } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { Flex, message } from "antd";
import GuardarPDF from "./GuardarPDF";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";
import ContenidoBorrador from "../borrador/ContenidoBorrador";

const FinalizarEvolucion = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const copiar = () => {
        messageApi.open({
            type: 'success',
            content: 'Se copió al portapapeles',
        });
    };

    const notificarGurdado = () => {
        messageApi.open({
            type: 'success',
            content: 'Se guardo como PDF',
        });
    };

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
        >
            {contextHolder}
            <Columns
                width={"80%"}
                height={"auto"}
            >
                <Title level={1}>
                    Finalizar
                </Title>
                <ContenidoBorrador 
                    editable={true}
                />
                <Flex
                    justify="space-between"
                    style={{ width: "60%", padding: "2rem" }}
                >
                    <GuardarPDF 
                        
                    />
                    <Copiar 
                    />
                    <Finalizar 
                        
                    />
                </Flex>
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }