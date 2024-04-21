import React from "react";
import Search from "antd/es/input/Search";
import { Rows } from "../utils/containers/Containers";

const InputNroDocumento = ({ onChange, onSearch }) => {

    return (
        <Rows
            width="40rem"
            elementPosition="center"
            height="30%"
        >
            <Search
                placeholder="Ingrese un documento"
                onSearch={onSearch}
                enterButton
                size="large"
                onChange={onChange}
                name="numeroDocumentoBuscado"
                autoComplete="off"
            />
        </Rows>
    );
};

export { InputNroDocumento }