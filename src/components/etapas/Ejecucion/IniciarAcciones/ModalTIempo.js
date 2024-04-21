import Modal from 'antd/es/modal/Modal'
import React, { useState } from 'react'
import { Columns } from '../../../utils/containers/Containers'
import Title from 'antd/es/typography/Title'
import { Button, InputNumber } from 'antd'

export const ModalTiempo = ({ open, closeModal, tareaIniciada, setMinutos, value }) => {

    const [newValue, setNewValue] = useState(value || "");

    const onChange = (value) => {
        setNewValue(value);
    }

    const onClick = () => {
        setMinutos(newValue)
        closeModal(tareaIniciada.id, newValue);
        console.log("info enviada: ", tareaIniciada.id, newValue);
    }

    return (
        <Modal
            open={open}
            footer={null}
            onCancel={closeModal}
            width={"30%"}
        >
            <Columns
                padding={"1rem"}
                elementPosition={"top-center"}
            >
                <Title level={2}>
                    {tareaIniciada.nombre}
                </Title>
                <InputNumber
                    min={1}
                    size='large'
                    addonAfter="minutos"
                    addonBefore="Tiempo empleado"
                    style={{ width: "300px", margin: "2rem 0", padding: "0" }}
                    variant='borderless'
                    placeholder='XX'
                    controls={false}
                    onChange={onChange}
                    value={newValue}
                />
                <Columns padding={"2rem"}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={onClick}
                        disabled={newValue < 1}
                    >
                        Finalizar
                    </Button>
                </Columns>
            </Columns>
        </Modal>
    )
}
