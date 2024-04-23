import { Button, Popover } from 'antd'
import React from 'react'
import { FieldTimeOutlined } from '@ant-design/icons';

export const BotonCronometrar = ({ openModal }) => {
    return (
        <Popover
            trigger={"hover"}
            content="Cronometrar acción"
        >
            <Button
                type='primary'
                size='large'
                onClick={openModal}
                icon={<FieldTimeOutlined />}
                style={{ marginRight: "10px" }}
            />
        </Popover>
    )
}
