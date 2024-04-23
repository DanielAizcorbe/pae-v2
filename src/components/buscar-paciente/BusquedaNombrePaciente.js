import React from "react";
import Search from "antd/es/input/Search";
import { Rows } from "../utils/containers/Containers";

const BusquedaNombrePaciente = ({ onChange, onSearch }) => {

    return (
        <Rows
            width="40rem"
            elementPosition="center"
            height="30%"
        >
            <Search
                placeholder="Ingrese el nombre del paciente"
                onSearch={onSearch}
                enterButton
                size="large"
                onChange={onChange}
                name="nombreBuscado"
                autoComplete="off"
            />
        </Rows>
    );
};

export { BusquedaNombrePaciente }