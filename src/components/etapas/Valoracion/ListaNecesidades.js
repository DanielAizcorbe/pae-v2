import React from "react";
import { Necesidad } from "../Necesidad";
import { necesidades } from "../../datos/datos-necesidades";

const ListaNecesidades = () => {

    return (
        <div className="container">
            <ul className="necesidades-container">
                {necesidades.map(n => <Necesidad nombre={n.nombre} id={n.id} />)}
            </ul>
        </div>
    );
}

export { ListaNecesidades }