import Modal from 'antd/es/modal/Modal'
import React from 'react'
import { Columns } from '../../../utils/Containers'
import Title from 'antd/es/typography/Title'
import { Button, InputNumber } from 'antd'

export const ModalTiempo = ({ open, closeModal, tareaIniciada, setMinutos, value }) => {

    const onChange = (value) => {
        setMinutos(value);
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
                    {tareaIniciada}
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
                    value={value}
                />
                <Columns padding={"2rem"}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={closeModal}
                    >
                        Finalizar
                    </Button>
                </Columns>
            </Columns>
        </Modal>
    )
}
