import React from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns, Rows } from "../../utils/Containers";
import { EtapaContainer } from "../EtapaContainer";
import { useDispatch, useSelector } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { Secciones } from "../../generales/Secciones";
import { SeccionMapaMental } from "./SeccionMapaMental";
import { SeccionNecesidades } from "./SeccionesNecesidades";

const Valoracion = () => {

    const necesidades = useSelector(state => state.necesidades);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(completarEtapa({ etapa: "valoracion", completada: true, text: "" }))
    }

    const secciones = [
        "Valoración",
        "Mapa Mental",
        "Necesidades",
        "Finalizar"
    ];


    return (
        <Rows>
            <EtapaContainer
                elementPosition={"top-center"}
                padding="1rem"
            >
                <Titulo texto="Valoración" id={"Valoración"} />
                <SeccionMapaMental seccion={secciones[1]} etapa={"valoracion"}/>
                <SeccionNecesidades seccion={secciones[2]} />
                <Columns
                    elementPosition="bottom-center"
                    padding="2rem"
                >
                    <BotonSiguiente
                        nextPage={"/evolucion"}
                        onClick={onClick}
                        id={secciones[3]}
                        sePuedeActivar={necesidades.some(n => n.selected)}
                    />
                </Columns>
            </EtapaContainer>
            <Secciones
                secciones={secciones}
            />
        </Rows>
    );
}




export { Valoracion }