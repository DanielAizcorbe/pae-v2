import React, { useRef, useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection/ToggleSection";
import { necesidades } from "../../datos/datos-necesidades";
import "../etapas.css";
import { Necesidad } from "../Necesidad";
import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { useNavigate } from "react-router-dom";

const Valoracion = ({ completada, setCompletada }) => {

    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);

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
                <div className="container">
                    <ul className="necesidades-container">
                        {necesidades.map(n => <Necesidad nombre={n.nombre} id={n.id} />)}
                    </ul>
                </div>
            </ToggleSection>
            <button onClick={nextPage}>
                Siguiente
            </button>
        </div>
    );
}

export { Valoracion }