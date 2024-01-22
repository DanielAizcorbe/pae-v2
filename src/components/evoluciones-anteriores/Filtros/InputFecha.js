import { DatePicker } from "antd";
import React from "react";

const InputFecha = ({fechaBusqueda, changeDate}) => {

    return (
        <DatePicker
            format="DD-MM-YYYY"
            placeholder="Fecha y hora aproximada"
            value={fechaBusqueda}
            onChange={changeDate}
            name="fecha-buscada"
            size="small"
            showNow={false}
        />
    );
}

export { InputFecha }