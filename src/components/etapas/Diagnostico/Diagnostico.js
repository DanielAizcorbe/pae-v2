import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection/ToggleSection";
import { useNavigate } from "react-router-dom";
import { diagnosticos } from "../../datos/datos-diagnostico";
import "./diagnostico.css";
import { DiagnosticoItem } from "./DiagnosticoItem";
import { BotonSiguiente } from "../../botones/BotonSiguiente";

const Diagnostico = ({ completada, setCompletada }) => {

    const [showSection, setShowSection] = useState(true);
    
    return (
        <div className="valoracion-container">
            <h1> Diagnóstico </h1>
            <ToggleSection
                title={"Diagnosticos de enfermería"}
                showCondition={showSection}
                toggleFunction={() => setShowSection(!showSection)}
            >
                    <ul className="diagnosticos-list">
                        {diagnosticos
                            .sort((d1, d2) => d1.tipo - d2.tipo)
                            .map(n => <DiagnosticoItem
                                nombre={n.nombre}
                                id={n.id}
                                tipo={n.tipo}
                            />)}
                    </ul>
            </ToggleSection>
            <BotonSiguiente
                nextPage={"/evolucion"}
            />
        </div>
    );
}

export { Diagnostico }