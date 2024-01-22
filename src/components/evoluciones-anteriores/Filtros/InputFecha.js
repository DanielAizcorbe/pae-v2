import { DatePicker } from "antd";
import React from "react";

const InputFecha = ({fechaBusqueda, changeDate}) => {

    return (
        <DatePicker
            showTime
            format="DD-MM-YYYY / hh:00"
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