import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection/ToggleSection";

import "../etapas.css";

import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { useNavigate } from "react-router-dom";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { styled } from "styled-components";
import { Columns } from "../../utils/Containers";
import { ListaNecesidades } from "./ListaNecesidades";

const Valoracion = ({ completada, setCompletada }) => {

    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);

    const navegar = useNavigate();

    const nextPage = () => {
        /* setCompletada(true); */
        navegar();

    }

    return (
        <ValoracionContainer
            elementPosition={"top-center"}
            padding="1rem"
        >
            <Titulo texto="Valoración" />
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
                <ListaNecesidades />
            </ToggleSection>
            <BotonSiguiente
                nextPage={"/evolucion/valoracion/finalizar"}
            />
        </ValoracionContainer>
    );
}

const ValoracionContainer = styled(Columns)`
    min-height: 100vh;
    height: 100%;
    overflow-y: visible;
    width: 100%;
`;



export { Valoracion }