import React from 'react'
import { Columns } from '../../utils/containers/Containers'
import Paragraph from 'antd/es/typography/Paragraph'

export const ModalContent = ({ status }) => {
    return (
        <Columns
            elementPosition="top-left"
            margin="0"
            padding="1rem"
        >
            
            <Paragraph
                style={{
                    margin: "0",
                    fontSize: "1.3rem",
                }}
            >
                {status.message} 
            </Paragraph>
        </Columns>
    )
}
