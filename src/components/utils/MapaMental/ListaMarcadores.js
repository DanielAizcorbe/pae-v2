import React from 'react'
import { ItemMarcadorDeshabilitado } from './ItemMarcadorDeshabilitado'

const ListaMarcadores = ({marcadores}) => {

    return (
        <ol>
            {marcadores.map(m => <ItemMarcadorDeshabilitado practica={m.text}/>)}
        </ol>
    )
}

export default ListaMarcadores
