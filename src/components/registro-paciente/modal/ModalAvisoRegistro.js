import { Modal } from 'antd'
import React from 'react'
import { Columns, Rows } from '../../utils/containers/Containers';
import IconModal from './IconModal';
import { ModalContent } from './ModalContent';
import ModalButton from './ModalButton';
import Title from 'antd/es/typography/Title';

export const ModalAvisoRegistro = ({ open, close, status }) => {
    return (
        <Modal
            closable={false}
            centered
            open={open}
            mask
            footer={[<ModalButton onClick={close}/>]}
            width={"700px"}
        >
            <Columns
                elementPosition="top-left"
            >
                <Rows
                    elementPosition="top-left"
                >
                    <IconModal statusType={status.type} />
                    <Title
                        level={3}
                        style={{
                            margin: "0",
                            marginLeft: "1rem"
                        }}
                    >
                        {status.type}
                    </Title>
                </Rows>
                <ModalContent
                    status={status}
                />
            </Columns>
        </Modal>
    )
}
