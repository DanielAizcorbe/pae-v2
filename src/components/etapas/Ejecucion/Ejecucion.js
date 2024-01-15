import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns } from "../../utils/Containers";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";
import { ListaDeAcciones } from "./ListaDeAcciones";
import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleAccionSeleccion } from "../../../store/slices/diagnosticos";


const Ejecucion = () => {

    const [showAcciones, setShowAcciones] = useState(true);
    const [showMapa, setShowMapa] = useState(true);


    const diagnosticosSeleccionados = useSelector(state => state.diagnosticos).filter(d => d.selected);
    const dispatch = useDispatch();

    const acciones = diagnosticosSeleccionados.map(
        o => ({
            nombre: o.nombre,
            acciones: o.acciones,
            diagnosticoId: o.id
        })
    );

    const toggleSelection = (diagnostico, accion) => {
        dispatch(toggleAccionSeleccion({diagnostico:diagnostico, accion:accion}));
    }

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
                <MapaMental
                    slice={"marcadoresEjecucion"}
                />
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
                    {acciones.map(a =>
                        <ListaDeAcciones
                            diagnostico={a.nombre}
                            diagnosticoId={a.diagnosticoId}
                            acciones={a.acciones}
                            toggleSelection={toggleSelection}
                            key={a.diagnosticoId}
                        />)}
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