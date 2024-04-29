import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { Flex, message } from "antd";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";
import ContenidoBorrador from "../borrador/ContenidoBorrador";
import ModalCopiar from "./modals/ModalCopiar";
import { useSelector } from "react-redux";
import { getResumenFinal } from "../../etapas/generarResumenes";
import { BotonGuardarPDF } from "./modals/BotonGuardarPDF";
import CuerpoPDF from "../../generar-pdf/CuerpoPDF";

const FinalizarEvolucion = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [showModalCopiar, setShowModalCopiar] = useState(false);

    const etapas = useSelector(state => state.estadoEtapas);
    const resumenes = Object.values(etapas).map(e => e.resumen);
    const paciente = useSelector(state => state.paciente);
    const textoEtapas = Object.values(etapas).map(e => e.resumen);

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
                    <BotonGuardarPDF 
                        paciente={paciente}
                    />
                    <Copiar
                        openModal={abrirModalCopiar}
                    />
                    <Finalizar

                    />
                    <ModalCopiar 
                        open={showModalCopiar}
                        close={() => setShowModalCopiar(false)}
                        value={getResumenFinal(resumenes)}
                    />
                </Flex>
                <CuerpoPDF 
                    paciente={paciente}
                    textoEtapas={textoEtapas}
                />
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }