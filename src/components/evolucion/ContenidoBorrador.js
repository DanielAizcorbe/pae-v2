import React, { useState } from 'react'
import { Columns } from '../utils/containers/Containers'
import { useSelector } from 'react-redux';
import { ParrafoEvolucion } from './ParrafoEvolucion';
import { MapaMental } from '../utils/MapaMental/MapaMental';
import { AZUL_PROFUNDO } from '../datos/colores';
import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';

const ContenidoBorrador = ({ editable }) => {

    const etapas = useSelector(state => state.estadoEtapas);
    const paciente = useSelector(state => state.paciente);

    const [valoracionTexto, setValoracionTexto] = useState(etapas.valoracion.resumen);
    const [planeacionTexto, setplaneacionTexto] = useState(etapas.planeacion.resumen);
    const [ejecucionTexto, setejecucionTexto] = useState(etapas.ejecucion.resumen);
    const [evaluacionTexto, setevaluacionTexto] = useState(etapas.evaluacion.resumen);

    const containerStyle = {
        border: "1px solid " + AZUL_PROFUNDO,
        borderRadius: "15px",
    }

    return (
        <Columns
            elementPosition={"top-left"}
            width={"1000px"}
            style={containerStyle}
            padding="2rem"
        >
            <Title level={1} style={{width: "100%", textAlign: "center"}}>
                {paciente.nombreCompleto}
            </Title>
            <ParrafoEvolucion
                text={valoracionTexto}
                setText={setValoracionTexto}
                title={"Valoración"}
                editable={editable}
            />
            <Divider />
            <MapaMental
                disabled
                mostrarSoloLosDeLaEtapa
                etapa={"valoracion"}
            />
            <Divider />
            <ParrafoEvolucion
                text={planeacionTexto}
                setText={setplaneacionTexto}
                title={"Planeación"}
                editable={editable}
            />
            <ParrafoEvolucion
                text={ejecucionTexto}
                setText={setejecucionTexto}
                title={"Ejecución"}
                editable={editable}
            />
            <Divider />
            <MapaMental
                disabled
                mostrarSoloLosDeLaEtapa
                etapa={"ejecucion"}
            />
            <Divider />
            <ParrafoEvolucion
                text={evaluacionTexto}
                setText={setevaluacionTexto}
                title={"Evaluación"}
                editable={editable}
            />
        </Columns>
    )
}

export default ContenidoBorrador
