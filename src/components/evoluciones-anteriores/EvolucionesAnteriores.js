import React from "react";
import { Columns, Rows } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import { Filtros } from "./Filtros/Filtros";
import { ListaEvolucionesAnteriores } from "./ListaEvolucionesAnteriores";

const EvolucionesAnteriores = () => {

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
                    <Filtros />

                </Rows>
                <Divider type="vertical" style={{ height: '100%' }} />
                <Columns
                    height={"100%"}
                    elementPosition={"top-left"}
                    padding={"1rem 2rem"}
                >
                    <ListaEvolucionesAnteriores
                    />
                </Columns>
            </Rows>
        </Columns>
    );
}

export { EvolucionesAnteriores }