import React from "react";

export const ListaDeAcciones = ({ nombre, acciones }) => {

    return <div>
        <h3>{nombre}</h3>
        {acciones.map(a =>
            <div>
                <label htmlFor={a}>
                    <input type="checkbox" id={a} value={a} />
                    {a}
                </label>
            </div>
        )}
    </div>;
}

export default ListaDeAcciones;
/* export { ListaDeAcciones } */