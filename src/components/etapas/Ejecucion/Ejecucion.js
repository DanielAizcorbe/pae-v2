import React from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Columns, Rows } from "../../utils/Containers";
import { Titulo } from "../../utils/Titulos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { SeccionMapaMental } from "../Valoracion/SeccionMapaMental";
import { Secciones } from "../../generales/Secciones";
import { SeccionAcciones } from "./SeccionAcciones";
import { addAcciones } from "../../../store/slices/accionesARealizar";

const getResumen = (marcadores, acciones) => {

    const operacionesRealizadas = marcadores.map(m => m.text) || "";

    return `Se realizaron las siguientes prácticas en el paciente:\n${operacionesRealizadas.map(o => `${operacionesRealizadas.indexOf(o) + 1}. ${o}`).join("\n")}`
        + `\n\nSe realizaron las diferentes acciones:\n${acciones.map(a => `> ${a.diagnostico}\n${a.acciones.map(as => `  * ${as.nombre}`).join("\n")}`).join("\n")}`;
}

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

    const onClick = () => {
        const acciones = accionesSeleccionadas.map(a => getSelected(a)).filter(o => o.acciones.length > 0);
        console.log(getResumen(marcadoresEjecucion, acciones))
        dispatch(completarEtapa({ etapa: "ejecucion", completada: true, resumen: getResumen(marcadoresEjecucion, acciones) }))
        console.log("acciones: ",acciones);
        dispatch(addAcciones(acciones));
    }

    const acciones = useSelector(state => state.diagnosticos).map(d => d.acciones).reduce((acumulador, acciones) => acumulador.concat(acciones), []);

    return (
        <Rows>
            <Secciones secciones={secciones} />
            <Columns
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
                        nextPage={"/evolucion/ejecucion/acciones"}
                        onClick={onClick}
                        sePuedeActivar={
                            marcadoresEjecucion.length > 0
                            && acciones.some(a => a.selected)
                        }
                        id={secciones[3]}
                    />
                </Columns>
            </Columns>

        </Rows>
    );
}

export { Ejecucion }