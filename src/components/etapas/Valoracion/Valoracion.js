import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns } from "../../utils/Containers";
import { ListaNecesidades } from "./ListaNecesidades";
import { EtapaContainer } from "../EtapaContainer";
import { useSelector } from "react-redux";

const Valoracion = () => {

    {/*ESTADOS PARA LOS TOGGLE SECTION */}
    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);
    
    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding="1rem"
        >
            <Titulo texto="Valoración" />
            <ToggleSection
                showCondition={showMapa}
                toggleFunction={setShowMapa}
                title={"Mapa Mental"}
                elementPosition={"center-left"}
            >
                <MapaMental 
                    slice={"marcadoresValoracion"}
                />
            </ToggleSection>
            <ToggleSection
                showCondition={showNecesidades}
                toggleFunction={setShowNecesidades}
                title={"Necesidades"}
                elementPosition={"top-center"}
            >
                <ListaNecesidades />
            </ToggleSection>
            <Columns
                elementPosition="bottom-center"
                padding="2rem"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                />
            </Columns>
        </EtapaContainer>
    );
}




export { Valoracion }