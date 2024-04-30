import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";
import ContenidoBorrador from "../borrador/ContenidoBorrador";
import ModalCopiar from "./modals/ModalCopiar";
import { useSelector } from "react-redux";
import { getResumenFinal } from "../../etapas/generarResumenes";

const FinalizarEvolucion = () => {

    const [showModalCopiar, setShowModalCopiar] = useState(false);

    const etapas = useSelector(state => state.estadoEtapas);
    const resumenes = Object.values(etapas).map(e => e.resumen);

    const abrirModalCopiar = () => {
        setShowModalCopiar(true);
    }

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
        >
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
                    style={{ width: "30%", padding: "2rem" }}
                >

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
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }