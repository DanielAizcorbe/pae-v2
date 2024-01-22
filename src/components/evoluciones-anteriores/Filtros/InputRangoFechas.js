import { DatePicker } from "antd";
import React from "react";

const InputRangoFechas = ({rangoFechas, changeRango}) => {

    const { RangePicker } = DatePicker;

    return (
        <RangePicker
            format="DD-MM-YYYY"
            placeholder={['Inicio', 'Fin']}
            value={rangoFechas}
            onChange={changeRango}
            name="rango-buscador"
            size="small"
        />
    );
}

export { InputRangoFechas }