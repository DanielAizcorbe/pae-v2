import React from 'react'
import { ItemMarcadorDeshabilitado } from './ItemMarcadorDeshabilitado'
const { v4: uuidv4 } = require('uuid');

const ListaMarcadores = ({ marcadores }) => {

    const id = uuidv4();

    return (
        <ol>
            {marcadores.map(m => <ItemMarcadorDeshabilitado practica={m.text} id={id} />)}
        </ol>
    )
}

export default ListaMarcadores
