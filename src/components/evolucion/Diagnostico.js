import React, { useState } from "react";
import { ToggleSection } from "../utils/ToggleSection";
import { AgregarNecesidad } from "../etapas/AgregarNecesidad";
import { Necesidad } from "../etapas/Necesidad";
import { useNavigate } from "react-router-dom";

const Diagnostico = ({completada, setCompletada}) => {

    const [showSection, setShowSection] = useState();
    const [showSectionNANDA, setShowSectionNANDA] = useState();

    const diagnosticos = [
        {nombre:"Alteración del patrón respiratorio", id:1},
        {nombre:"Desequilibrio nutricional", id:2},
        {nombre:"Deterioro de la eliminación", id:3},
        {nombre:"Deterioro de la movilidad física", id: 4}
    ];

    const diagnosticosNanda = [
        {nombre:"Diagnóstico 1", id:1},
        {nombre:"Diagnóstico 2", id:2},
        {nombre:"Diagnóstico 3", id:3},
        {nombre:"Diagnóstico 4", id: 4}
    ];

    const [diagnosticosActuales, setDiagnosticosActuales] = useState(diagnosticos);

    const addDiagnostico = (diagnosticoNuevo) => {
        setDiagnosticosActuales([...diagnosticosActuales, diagnosticoNuevo])
    }

    const [diagnosticosActualesNANDA, setDiagnosticosActualesNANDA] = useState(diagnosticosNanda);

    const addDiagnosticonNANDA = (diagnosticoNuevo) => {
        setDiagnosticosActualesNANDA([...diagnosticosActualesNANDA, diagnosticoNuevo])
    }

    const navegar = useNavigate();

    const siguientePag = () => {
        /* setCompletada(true); */
        navegar("/evolucion");
    }

    return (
        <div className="valoracion-container">
            <h1> Diagnóstico </h1>
            <ToggleSection 
                title={"Diagnosticos de enfermería"}
                showCondition={showSection}
                toggleFunction={() => setShowSection(!showSection)}
            >
                <ul className="necesidades-container">
                    {diagnosticosActuales.map( n => <Necesidad nombre={n.nombre} id={n.id}/>)}
                    <AgregarNecesidad placeholder={"Nuevo diagnóstico"} addNecesidad={addDiagnostico}/>
                </ul>
            </ToggleSection>
            <ToggleSection
                title={"Diagnósticos NANDA"}
                showCondition={showSectionNANDA}
                toggleFunction={() => setShowSectionNANDA(!showSectionNANDA)}
            >  
                <ul className="necesidades-container">
                    {diagnosticosActualesNANDA.map( n => <Necesidad nombre={n.nombre} id={n.id}/>)}
                    <AgregarNecesidad placeholder={"Nuevo diagnóstico NANDA"} addNecesidad={addDiagnosticonNANDA}/>
                </ul>
            </ToggleSection>
            <button onClick={siguientePag}>
                Siguiente
            </button>
        </div>
    );
}

export { Diagnostico }