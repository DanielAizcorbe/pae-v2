import React, { useState } from "react";
import { Columns, Rows } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";
import { Divider } from "antd";
import { Filtros } from "./Filtros/Filtros";
import { ListaEvolucionesAnteriores } from "./ListaEvolucionesAnteriores";

const EvolucionesAnteriores = () => {

    const defaultFiltros = {
        fechaBusqueda: "",
        rangoFechas: [],
        sectores: [],
    };
    const [filtros, setFiltros] = useState(defaultFiltros);

    return (
        <Columns
            elementPosition={"top-center"}
            margin={"0"}
        >
            <NavBar defaultSection={2} />
            <Rows>
                <Rows
                    elementPosition={"top-left"}
                    height={"100%"}
                    width={"20rem"}
                >
                    <Filtros 
                        aplicarFiltros={setFiltros}
                        filtrosAplicados={filtros}
                    />

                </Rows>
                <Divider type="vertical" style={{ height: '100%' }} />
                <Columns
                    height={"100%"}
                    elementPosition={"top-left"}
                    padding={"1rem 2rem"}
                >
                    <ListaEvolucionesAnteriores
                        filtros={filtros}
                    />
                </Columns>
            </Rows>
        </Columns>
    );
}

export { EvolucionesAnteriores }