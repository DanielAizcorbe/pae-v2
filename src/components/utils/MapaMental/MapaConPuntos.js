import React from 'react'
import ImagenMapa from './ImagenMapa'
import { ListaMarcadores } from './Marcador/ListaMarcadores'
import { CELESTE } from '../../datos/colores'

export const MapaConPuntos = ({ disabled, addMarcadores, mostrarTodos, etapa, marcadores, remove}) => {
    return (
        <div style={{ position: "relative", border: "1px solid " + CELESTE }}>
            <ImagenMapa
                disabled={disabled}
                addMarcadores={addMarcadores}
            />
            <ListaMarcadores
                marcadores={mostrarTodos ? marcadores :  marcadores.filter(m => m.etapa === etapa) }
                etapaActual={etapa}
                removeMarcador={disabled ? null : remove}
            />
        </div>
    )
}
