import React from "react";
import { BotonSiguiente } from "../BotonSiguiente";
import { Columns, ContentContainer, Rows } from "../../utils/containers/Containers";
import { Titulo } from "../../utils/Titulos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionMapaMental } from "../Valoracion/SeccionMapaMental";
import { Secciones } from "../../generales/Secciones";
import { SeccionAcciones } from "./SeccionAcciones";
import { addAcciones } from "../../../store/slices/accionesARealizar";
import { setMensaje } from "../../../store/slices/avisosSlice";
import { getResumenEjecucion } from "../generarResumenes";


const getSelected = (object) => {
    return {
        diagnostico: object.nombre,
        acciones: object.acciones.filter(a => a.selected)
    }
}

const secciones = [
    "Ejecución",
    "Mapa Mental",
    "Acciones Recomendadas",
    "Finalizar"
];

const Ejecucion = () => {

    const dispatch = useDispatch();
    const accionesSeleccionadas = useSelector(state => state.diagnosticos);
    const marcadoresEjecucion = useSelector(state => state.marcadores).filter(m => m.etapa === "ejecucion");
    const fueCompletadaLaEtapaSiguiente = useSelector(state => state.estadoEtapas.evaluacion.completada);

    const onClick = () => {
        const acciones = accionesSeleccionadas.map(a => getSelected(a)).filter(o => o.acciones.length > 0);
        dispatch(completarEtapa({ etapa: "ejecucion", completada: true, resumen: getResumenEjecucion(marcadoresEjecucion, acciones) }))
        dispatch(addAcciones(acciones));

        if (fueCompletadaLaEtapaSiguiente) {
            dispatch(setMensaje("EJECUCIÓN"));
        }
    }

    const acciones = useSelector(state => state.diagnosticos).map(d => d.acciones).reduce((acumulador, acciones) => acumulador.concat(acciones), []);

    return (
        <Rows>
            <Secciones secciones={secciones} />
            <ContentContainer>
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
                        nextPage={"/evolucion/ejecucion/acciones"}
                        onClick={onClick}
                        sePuedeActivar={
                            marcadoresEjecucion.length > 0
                            && acciones.some(a => a.selected)
                        }
                        id={secciones[3]}
                    />
                </Columns>
            </ContentContainer>

        </Rows>
    );
}

export { Ejecucion }