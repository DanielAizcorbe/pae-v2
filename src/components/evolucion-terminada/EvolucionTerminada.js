import React, { useState } from "react";
import "./evolucion-terminada.css";
import { useNavigate } from "react-router-dom";
import { TextArea } from "../utils/TextArea";
import { BotonContainer, Columns, Rows } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";
import { styled } from "styled-components";

const EvolucionTerminada = ({text, nextPage }) => {

    const [texto, setTexto] = useState(text);
    const [fueGuardado, setFueGuardado] = useState(false);
    const guardar = () => setFueGuardado(true);

    const navegar = useNavigate();

    const next = () => {
        navegar(nextPage);
    }

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"1rem"}
        >
            <Titulo texto="Finalizar Evolución" />
            <Columns
                elementPosition={"top-center"}
            >
                <TextArea
                    text={texto}
                    setText={setTexto}
                />
                <BotonContainer
                    width={"50rem"}
                >
                    <button className="btn-copiar-texto">
                        Copiar al portapapeles
                    </button>
                    {fueGuardado ?
                        <div className="btn-guardado">V Guardado</div>
                        : <button className="btn-guardar" onClick={next}>
                            Guardar
                        </button>}
                </BotonContainer>
            </Columns>
        </Columns>
    );
}



export { EvolucionTerminada }