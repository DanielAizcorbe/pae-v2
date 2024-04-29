import React from 'react'
import { ItemMarcadorDeshabilitado } from './ItemMarcadorDeshabilitado'
const { v4: uuidv4 } = require('uuid');

const ListaMarcadores = ({ marcadores }) => {

    return (
        <ol>
            {marcadores.map(m => <ItemMarcadorDeshabilitado practica={m.text} key={uuidv4()}/>)}
        </ol>
    )
}

export default ListaMarcadores
