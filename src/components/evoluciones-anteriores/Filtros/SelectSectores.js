import { Select } from "antd";
import React from "react";

const SelectSectores = ({ selected, changeSelected }) => {

    const onChange = (value) => {
        console.log("seleccionados: ",value);
        changeSelected(value);
    }

    const selectOptions = [
        {
            label: "UTI",
            value: "UTI"
        },
        {
            label: "Sector 2",
            value: "Sector 2"
        },
        {
            label: "Sector 3",
            value: "Sector 3"
        },
        {
            label: "Sector 4",
            value: "Sector 4"
        },
        {
            label: "Sector 5",
            value: "Sector 5"
        },
        {
            label: "Sector 6",
            value: "Sector 6"
        },
    ];


    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Selecciones los Sectores"
            onChange={onChange}
            options={selectOptions}
            name="sectores-seleccionados"
            value={selected}
        />
    );
}

export { SelectSectores }