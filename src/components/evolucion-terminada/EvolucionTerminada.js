import React, { useRef, useState } from "react";
import { TextArea } from "../utils/TextArea";
import { BotonContainer, Columns } from "../utils/Containers";
import { Titulo } from "../utils/Titulos";
import { BotonCopiar, BotonSiguiente } from "../botones/BotonSiguiente";
import { styled } from "styled-components";

const EvolucionTerminada = ({ text, nextPage }) => {

    const [texto, setTexto] = useState(text);

    const copiarAlPortapapeles = async () => {
        try {
            // Seleccionar el contenido del textarea
            textareaRef.current.select();

            // Utilizar el API de Clipboard para copiar al portapapeles
            await navigator.clipboard.writeText(textareaRef.current.value);

            // Quitar el enfoque del textarea para deseleccionar el texto
            textareaRef.current.blur();

            alert('Texto copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar al portapapeles', err);
            alert('Error al copiar al portapapeles');
        }
    };

    const textareaRef = useRef(null);

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
                <HiddenTxtArea ref={textareaRef} defaultValue={texto}/>
                <BotonContainer
                    width={"50rem"}
                >
                    {/* <BotonSiguiente text={"Copiar al portapapeles"} /> */}
                    <BotonCopiar
                        onClick={copiarAlPortapapeles}
                    >
                        Copiar al Portapapeles
                    </BotonCopiar>
                    <BotonSiguiente text={"Guardar"} nextPage={nextPage} />
                </BotonContainer>
            </Columns>
        </Columns>
    );
}



const HiddenTxtArea = styled.textarea`
    display: none;
`;


export { EvolucionTerminada }