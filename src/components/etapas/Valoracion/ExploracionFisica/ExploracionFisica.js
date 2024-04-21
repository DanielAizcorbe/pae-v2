import React from 'react'
import { Columns } from '../../../utils/containers/Containers'
import Title from 'antd/es/typography/Title'
import { TextoEditable } from './TextoEditable'

export const ExploracionFisica = ({estado}) => {

    return (
        <Columns
            elementPosition={"top-left"}
        >
            <Title level={3}>
                Inspección
            </Title>
            <TextoEditable
                text={estado.inspeccion.text}
                setText={estado.inspeccion.change}
            />
            <Title level={3}>
                Auscultación
            </Title>
            <TextoEditable
                text={estado.auscultacion.text}
                setText={estado.auscultacion.change}
            />  
            <Title level={3}>
                Percusión
            </Title>
            <TextoEditable
                text={estado.percusion.text}
                setText={estado.percusion.change}
            />
            <Title level={3}>
                Palpación
            </Title>
            <TextoEditable
                text={estado.palpacion.text}
                setText={estado.palpacion.change}
            />
        </Columns>
    )
}
