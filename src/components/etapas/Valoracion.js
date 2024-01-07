import React, { useRef, useState } from "react";
import { ToggleSection } from "../utils/ToggleSection";
import { necesidades } from "../datos/datos-necesidades";
import "./etapas.css";
import { Necesidad } from "./Necesidad";
import {MapaMental} from "../utils/MapaMental/MapaMental";
import {AgregarNecesidad} from "./AgregarNecesidad";
import { useNavigate } from "react-router-dom";

const Valoracion = ({completada, setCompletada}) => {

    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);
    const [necesidades2, setNecesidades2] = useState(necesidades);
    const mapRef = useRef();

    const agregarNecesidad = (nuevaNecesidad) => {
        setNecesidades2([...necesidades2, nuevaNecesidad])
    }

    const navegar = useNavigate();

    const nextPage = () => {
        /* setCompletada(true); */
        navegar("/evolucion/valoracion/finalizar");

    }

    return (
        <div className="valoracion-container">
            <h1> Valoracion </h1>
            <ToggleSection 
                showCondition={showMapa}
                toggleFunction={setShowMapa}
                title={"Mapa Mental"}
            >
                <MapaMental />
            </ToggleSection>
            <ToggleSection 
                showCondition={showNecesidades}
                toggleFunction={setShowNecesidades}
                title={"Necesidades"}
            >
                <ul className="necesidades-container">
                    {necesidades2.map( n => <Necesidad nombre={n.nombre} id={n.id}/>)}
                    <AgregarNecesidad addNecesidad={agregarNecesidad} placeholder={"Nueva necesidad"}/>
                </ul>
               
            </ToggleSection>
            <button onClick={nextPage}>
                Siguiente
            </button>
        </div>
    );
}

export { Valoracion }