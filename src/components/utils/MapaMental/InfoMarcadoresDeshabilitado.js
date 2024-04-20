import React from 'react'
import { Columns } from '../Containers';
import Title from 'antd/es/typography/Title';
import ListaMarcadores from './ListaMarcadores';

const InfoMarcadoresDeshabilitado = ({ marcadores, etapa }) => {

    const tituloLista = etapa === "valoracion" ? "Prácticas Observadas" : "Prácticas Realizadas";

    return (
        <Columns
            elementPosition="top-left"
            width="100%"
            height="100%"
            padding="0 0 0 1rem"
        >
            <Title level={3}
                style={{
                    margin: "0"
                }}
            >
                {tituloLista}
            </Title>
            <ListaMarcadores 
                marcadores={marcadores}
            />
        </Columns>
    )
}

export default InfoMarcadoresDeshabilitado
