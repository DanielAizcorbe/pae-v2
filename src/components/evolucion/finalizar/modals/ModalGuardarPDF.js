import { Checkbox, Modal } from 'antd';
import React, { useState } from 'react'
import Title from 'antd/es/typography/Title';
import { Columns } from '../../../utils/containers/Containers';
import { BotonGuardarPDF } from './BotonGuardarPDF';

export const ModalGuardarPDF = ({ showModal, closeModal, textoEtapas, paciente }) => {

    const [incluirMapaValoracion, setIncluirMapasValoracion] = useState(true);
    const [incluirMapaEjecucion, setIncluirMapasEjecucion] = useState(true);

    const handleChangeValoracion = () => {
        setIncluirMapasValoracion(!incluirMapaValoracion);
    }

    const handleChangeEjecucion = () => {
        setIncluirMapasEjecucion(!incluirMapaEjecucion);
    }

    return (
        <Modal
            mask
            okText="Guardar"
            open={showModal}
            onCancel={closeModal}
            closeIcon
            centered
            footer={null}
        >
            <Columns
                padding="1rem"
                elementPosition="top-center"
            >
                <Title level={2} style={{ margin: "0" }}>
                    Guardar PDF
                </Title>
                <Columns
                    padding="1rem"
                    elementPosition="top-left"
                >
                    <Checkbox
                        autoFocus
                        onChange={handleChangeEjecucion}
                        defaultChecked={false}
                    >
                        <p style={{ fontSize: "1rem" }}>
                            Incluir mapa de la valoración
                        </p>
                    </Checkbox>
                    <Checkbox
                        autoFocus
                        onChange={handleChangeValoracion}
                        defaultChecked={false}
                    >
                        <p style={{ fontSize: "1rem" }}>
                            Incluir mapa de la ejecución
                        </p>
                    </Checkbox>
                </Columns>
                <Columns>
                    <BotonGuardarPDF
                        mostrarMapaEjecucion={incluirMapaEjecucion}
                        mostrarMapaValoracion={incluirMapaValoracion}
                        textoEtapas={textoEtapas}
                        paciente={paciente}
                    />
                </Columns>
            </Columns >
        </Modal >
    )
}
