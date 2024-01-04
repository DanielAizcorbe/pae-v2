import React, { useRef, useState } from "react";
import { ToggleSection } from "../utils/ToggleSection";
import { necesidades } from "../datos/datos-necesidades";
import "./etapas.css";
import { Necesidad } from "./Necesidad";
/* import mapaMental from "./cuerpo-humano-mapa.png"; */
import {MapaMental} from "./MapaMental";

const Valoracion = () => {

    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);
    const mapRef = useRef();

    return (
        <div className="valoracion-container">
            <h1> Valoracion </h1>
            <ToggleSection 
                showCondition={showMapa}
                toggleFunction={setShowMapa}
                title={"Mapa Mental"}
            >
                <MapaMental/>
            </ToggleSection>
            <ToggleSection 
                showCondition={showNecesidades}
                toggleFunction={setShowNecesidades}
                title={"Necesidades"}
            >
                <ul className="necesidades-container">
                    {necesidades.map( n => <Necesidad nombre={n.nombre} id={n.id}/>)}
                </ul>
               
            </ToggleSection>
        </div>
    );
}

export { Valoracion }