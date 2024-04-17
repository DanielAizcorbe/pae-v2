import React, { useState } from 'react'
import { Columns } from '../utils/Containers'
import { useSelector } from 'react-redux';
import { ParrafoEvolucion } from './ParrafoEvolucion';
import { CollapsableMap } from './CollapsableMap';

const ContenidoBorrador = ({ editable }) => {

    const etapas = useSelector(state => state.estadoEtapas);

    const [valoracionTexto, setValoracionTexto] = useState(etapas.valoracion.resumen);
    const [diagnosticoTexto, setdiagnosticoTexto] = useState(etapas.diagnostico.resumen);
    const [planeacionTexto, setplaneacionTexto] = useState(etapas.planeacion.resumen);
    const [ejecucionTexto, setejecucionTexto] = useState(etapas.ejecucion.resumen);
    const [evaluacionTexto, setevaluacionTexto] = useState(etapas.evaluacion.resumen);


    return (
        <Columns
            elementPosition={"top-center"}
            width={"1000px"}
            height={"auto"}
        >
            <ParrafoEvolucion
                text={valoracionTexto}
                setText={setValoracionTexto}
                title={"Valoración"}
                editable={editable}
            />
            <CollapsableMap
                etapa={"valoracion"}
            />
            <ParrafoEvolucion
                text={diagnosticoTexto}
                setText={setdiagnosticoTexto}
                title={"Diagnóstico"}
                editable={editable}
            />
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
            <CollapsableMap
                etapa={"ejecucion"}
            />
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