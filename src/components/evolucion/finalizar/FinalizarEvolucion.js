import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { Flex, message } from "antd";
import GuardarPDF from "./GuardarPDF";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";
import ContenidoBorrador from "../borrador/ContenidoBorrador";
import ModalCopiar from "./modals/ModalCopiar";

const FinalizarEvolucion = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [showModalCopiar, setShowModalCopiar] = useState(false);

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

    const abrirModalCopiar = () => {
        setShowModalCopiar(true);
    }

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
                        openModal={abrirModalCopiar}
                    />
                    <Finalizar

                    />
                    <ModalCopiar 
                        open={showModalCopiar}
                        close={() => setShowModalCopiar(false)}
                    />
                </Flex>
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }