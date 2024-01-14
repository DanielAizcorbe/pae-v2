import React, { useState } from "react";
import "./evolucion-terminada.css";
import { TextArea } from "../utils/TextArea";
import { BotonContainer, Columns, Rows } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";
import { styled } from "styled-components";
import { BotonSiguiente } from "../botones/BotonSiguiente";

const EvolucionTerminada = ({text, nextPage }) => {

    const [texto, setTexto] = useState(text);
    const [fueGuardado, setFueGuardado] = useState(false);
    const guardar = () => setFueGuardado(true);

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
                    <BotonSiguiente text={"Copiar al portapapeles"}/>
                    {fueGuardado ?
                        <BotonSiguiente>V Guardado</BotonSiguiente>
                        : <BotonSiguiente text={"Guardar"} nextPage={nextPage}>
                            
                        </BotonSiguiente>}
                </BotonContainer>
            </Columns>
        </Columns>
    );
}



export { EvolucionTerminada }