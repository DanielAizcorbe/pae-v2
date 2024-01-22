import { Select } from "antd";
import React from "react";

const SelectSectores = () => {

    const selectOptions = [
        {
            label: "Sector 1",
            value: "Sector 1"
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
            onChange={() => { }}
            options={selectOptions}
            name="sectores-seleccionados"
        />
    );
}

export { SelectSectores }