import { Button, Checkbox, Modal } from 'antd';
import React, { useState } from 'react'
import { FilePdfOutlined } from "@ant-design/icons";
import Title from 'antd/es/typography/Title';
import { Columns } from '../../../utils/containers/Containers';

export const ModalGuardarPDF = ({ showModal, closeModal }) => {

    const [incluirMapas, setIncluirMapas] = useState(true);

    const handleChange = () => {
        setIncluirMapas(!incluirMapas);
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
                <Title level={2} style={{margin: "0"}}>
                    Guardar PDF
                </Title>
                <Columns
                    padding="1rem"
                >
                    <Checkbox
                        autoFocus
                        onChange={handleChange}
                        defaultChecked={false}
                    >
                        <p style={{ fontSize: "1rem" }}>
                            Incluir mapas
                        </p>
                    </Checkbox>
                </Columns>
                <Columns>
                    <Button
                        type="primary"
                        onClick={closeModal}
                        icon={<FilePdfOutlined />}
                        size='large'
                    >
                        Guardar
                    </Button>
                </Columns>
            </Columns >
        </Modal >
    )
}
