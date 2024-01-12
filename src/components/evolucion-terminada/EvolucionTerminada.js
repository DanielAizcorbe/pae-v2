import React, { useState } from "react";
import "./evolucion-terminada.css";
import { useNavigate } from "react-router-dom";
import { TextArea } from "../utils/TextArea/TextArea";

const EvolucionTerminada = ({ title, text, nextPage }) => {

    const [texto, setTexto] = useState(text);
    const [fueGuardado, setFueGuardado] = useState(false);
    const guardar = () => setFueGuardado(true);

    const navegar = useNavigate();

    const next = () => {
        navegar(nextPage);
    }

    return (
        <div className="resumen-container">
            <h1>{title}</h1>
            <div className="resumen-cuerpo">
                <TextArea
                    text={texto}
                    setText={setTexto}
                />
                <div className="botones-resumen">
                    <button className="btn-copiar-texto">
                        Copiar al portapapeles
                    </button>
                    {fueGuardado ?
                        <div className="btn-guardado">V Guardado</div>
                        : <button className="btn-guardar" onClick={next}>
                            Guardar
                        </button>}
                </div>
            </div>
        </div>
    );
}

export { EvolucionTerminada }