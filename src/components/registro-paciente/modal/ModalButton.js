import { Button } from 'antd'
import React from 'react'

const ModalButton = ({ onClick }) => {
    return (
        <Button
            type='primary'
            size='large'
            style={{
                width: "5rem"
            }}
            onClick={onClick}
        >
            Ok
        </Button>
    )
}

export default ModalButton
