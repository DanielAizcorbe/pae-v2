import { Button, Popover } from 'antd'
import React from 'react'
import { FormOutlined } from '@ant-design/icons';

const BotonSetearTiempo = ({openModal, message, type, minutos}) => {

    const text = type === "edit" ? minutos + " minutos" : ""; 

    return (
        <Popover
            trigger={"hover"}
            content={message}
        >
            <Button
                type='default'
                size='large'
                onClick={openModal}
                icon={type === "set" ? <FormOutlined /> : ""}
            >
                {text}
            </Button>
        </Popover>
    )
}

export default BotonSetearTiempo
