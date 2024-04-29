import React from 'react'
import { ParrafoPDF } from './ParrafoPDF';
import { Columns } from '../utils/containers/Containers';
import Title from 'antd/es/typography/Title';
import { getNombreCompletoFormateado } from '../buscar-paciente/utilsBusqueda';
import { Divider } from 'antd';
import { MapaMental } from '../utils/MapaMental/MapaMental';

const CuerpoPDF = ({ mostrarMapaValoracion, mostrarMapaEjecucion, paciente, textoEtapas }) => {

    return (
        <Columns
            elementPosition="top-center"
            padding="1rem 2rem"
        >
            <Title level={1}>
                {getNombreCompletoFormateado(paciente)}
            </Title>
            <Divider />
            <ParrafoPDF
                text={textoEtapas[0]}
            />
            {mostrarMapaValoracion ? <MapaMental
                mostrarSoloLosDeLaEtapa
                etapa={"valoracion"}
                disabled
            /> : ""}
            <ParrafoPDF
                text={textoEtapas[2]}
            />
            <ParrafoPDF
                text={textoEtapas[3]}
            />
            {mostrarMapaEjecucion ? <MapaMental
                mostrarSoloLosDeLaEtapa
                etapa={"ejecucion"}
                disabled
            /> : ""}
            <ParrafoPDF
                text={textoEtapas[4]}
            />
        </Columns>
    )
}

export default CuerpoPDF
