import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns } from "../../utils/Containers";
import { ListaNecesidades } from "./ListaNecesidades";
import { EtapaContainer } from "../EtapaContainer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";

const Valoracion = () => {

    {/*ESTADOS PARA LOS TOGGLE SECTION */}
    const [showMapa, setShowMapa] = useState(true);
    const [showNecesidades, setShowNecesidades] = useState(false);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(completarEtapa({etapa:"valoracion",completada: true, text:""}))
    }

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
                    onClick={onClick}
                />
            </Columns>
        </EtapaContainer>
    );
}




export { Valoracion }