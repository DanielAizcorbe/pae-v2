import { Button, Popover } from 'antd'
import React from 'react'
import { FormOutlined } from '@ant-design/icons';

const BotonSetearTiempo = ({openModal, message}) => {
    return (
        <Popover
            trigger={"hover"}
            content={message}
        >
            <Button
                type='default'
                size='large'
                onClick={openModal}
                icon={<FormOutlined />}
            />
        </Popover>
    )
}

export default BotonSetearTiempo
