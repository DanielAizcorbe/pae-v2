import React from 'react'
const { v4: uuidv4 } = require('uuid');

export const ItemMarcadorDeshabilitado = ({practica, id}) => {


    return (
        <li key={uuidv4()}>
            {practica}
        </li>
    )
}
