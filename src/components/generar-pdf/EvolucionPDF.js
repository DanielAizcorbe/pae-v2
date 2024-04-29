import React from 'react'
import CuerpoPDF from './CuerpoPDF';

const EvolucionPDF = ({ mostrarMapaValoracion, mostrarMapaEjecucion, textoEtapas, paciente }) => {

    return (

        <CuerpoPDF
            mostrarMapaValoracion={mostrarMapaValoracion}
            mostrarMapaEjecucion={mostrarMapaEjecucion}
            textoEtapas={textoEtapas}
            paciente={paciente}
        />
    )
}

export default EvolucionPDF
