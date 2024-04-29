import React from 'react'
import { ParrafoPDF } from './ParrafoPDF';
import { Columns } from '../utils/containers/Containers';
import Title from 'antd/es/typography/Title';
import { getNombreCompletoFormateado } from '../buscar-paciente/utilsBusqueda';
import { Divider } from 'antd';
import { MapaMental } from '../utils/MapaMental/MapaMental';

const CuerpoPDF = ({ paciente, textoEtapas }) => {

    return (
        <Columns
            elementPosition="top-center"
            padding="1rem 2rem"
            style={{ display: "none" }}
            idContainer="pdfdocument"
        >
            <Title level={1}>
                {getNombreCompletoFormateado(paciente)}
            </Title>
            <Divider />
            <ParrafoPDF
                text={textoEtapas[0]}
            />
            <Divider />
            <MapaMental
                mostrarSoloLosDeLaEtapa
                etapa={"valoracion"}
                disabled
            />
            <Divider />
            <ParrafoPDF
                text={textoEtapas[2]}
            />
            <ParrafoPDF
                text={textoEtapas[3]}
            />
            <Divider />
            <MapaMental
                mostrarSoloLosDeLaEtapa
                etapa={"ejecucion"}
                disabled
            />
            <Divider />
            <ParrafoPDF
                text={textoEtapas[4]}
            />
        </Columns>
    )
}

export default CuerpoPDF
