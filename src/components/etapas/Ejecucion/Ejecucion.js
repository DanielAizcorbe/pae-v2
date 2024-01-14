import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { diagnosticos } from "../../datos/datos-diagnostico";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns } from "../../utils/Containers";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";
import { ListaDeAcciones } from "./ListaDeAcciones";
import { MapaMental } from "../../utils/MapaMental/MapaMental";


const Ejecucion = () => {

    const [showAcciones, setShowAcciones] = useState(true);
    const [showMapa, setShowMapa] = useState(true);

    const diagnosticosPrueba = diagnosticos.filter(d => d.tipo === "Prevención");

    const acciones = diagnosticosPrueba.map(
        o => ({
            nombre: o.nombre,
            acciones: o.acciones
        })
    );

    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding={"1rem"}
            height={"100%"}
            width={"100%"}
        >
            <Titulo texto="Ejecución" />
            <ToggleSection
                showCondition={showMapa}
                toggleFunction={setShowMapa}
                title={"Mapa Mental"}
                elementPosition={"center-left"}
            >
                <MapaMental />
            </ToggleSection>
            <ToggleSection
                title={"Acciones"}
                showCondition={showAcciones}
                toggleFunction={setShowAcciones}
                elementPosition={"top-left"}
            >
                <Columns
                    elementPosition={"top-left"}
                    padding={" 1rem 2rem"}
                    width={"80%"}
                >
                    {acciones.map(a => <ListaDeAcciones categoria={a.nombre} acciones={a.acciones} />)}
                </Columns>
            </ToggleSection>
            <Columns
                elementPosition={"bottom-center"}
                padding={"2rem"}
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                />
            </Columns>
        </EtapaContainer>
    );
}

export { Ejecucion }