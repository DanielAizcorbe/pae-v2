import React from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns, Rows } from "../../utils/Containers";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionMapaMental } from "../Valoracion/SeccionMapaMental";
import { Secciones } from "../../generales/Secciones";
import { SeccionAcciones } from "./SeccionAcciones";


const Ejecucion = () => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(completarEtapa({ etapa: "ejecucion", completada: true, text: "" }))
    }

    const marcadoresEjecucion = useSelector(state => state.marcadoresEjecucion);
    const acciones = useSelector(state => state.diagnosticos).map(d=> d.acciones).reduce((acumulador, acciones) => acumulador.concat(acciones), []);

    const secciones = [
        "Ejecución",
        "Mapa Mental",
        "Acciones",
        "Finalizar"
    ];

    return (
        <Rows>
            <EtapaContainer
                elementPosition={"top-center"}
                padding={"1rem"}
                height={"100%"}
                width={"100%"}
            >

                <Titulo texto="Ejecución" id={secciones[0]} />
                <SeccionMapaMental
                    seccion={secciones[1]}
                    etapa="ejecucion"
                />
                <SeccionAcciones 
                    seccion={secciones[2]}
                />
                <Columns
                    elementPosition={"bottom-center"}
                    padding={"2rem"}
                >
                    <BotonSiguiente
                        nextPage={"/evolucion"}
                        onClick={onClick}
                        sePuedeActivar={
                            marcadoresEjecucion.length > 0
                            && acciones.some(a => a.selected)
                        }
                        id={secciones[3]}
                    />
                </Columns>
            </EtapaContainer>
            <Secciones secciones={secciones} />
        </Rows>
    );
}

export { Ejecucion }


/*
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
*/