import React from 'react'
import { ItemMarcadorDeshabilitado } from './ItemMarcadorDeshabilitado'

const ListaMarcadores = ({ marcadores }) => {

    const getIndex = (item) => {
        return marcadores.indexOf(m => m.x === item.x && m.y === item.y);
    }

    return (
        <ol>
            {marcadores.map(m => <ItemMarcadorDeshabilitado practica={m.text} id={m.text + getIndex(m)}/>)}
        </ol>
    )
}

export default ListaMarcadores
