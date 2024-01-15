import React, { useState } from "react";
import { TextArea } from "../utils/TextArea";
import { BotonContainer, Columns } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";
import { BotonSiguiente } from "../botones/BotonSiguiente";

const EvolucionTerminada = ({ text, nextPage }) => {

    const [texto, setTexto] = useState(text);

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
                    <BotonSiguiente text={"Copiar al portapapeles"} />
                    <BotonSiguiente text={"Guardar"} nextPage={nextPage} />
                </BotonContainer>
            </Columns>
        </Columns>
    );
}



export { EvolucionTerminada }