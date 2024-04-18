import Title from 'antd/es/typography/Title'
import React from 'react'
import { Columns } from '../../utils/Containers'
import { useSelector } from 'react-redux'
import { Acciones } from './Acciones'

export const EjecutarAcciones = () => {

    const acciones = useSelector(state => state.accionesARealizar);

    console.log("acciones del store: ", acciones);
    
    return (
        <Columns
            elementPosition={"top-center"}
        >
            <Title level={2}>
                Iniciar Acciones
            </Title>
            <Acciones
                acciones={acciones}
            />
        </Columns>
    )
}
