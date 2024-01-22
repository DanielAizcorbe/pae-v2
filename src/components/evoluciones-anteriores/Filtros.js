import React, { useState } from "react";
import { Button, DatePicker, Flex, Select, theme } from "antd";
import Title from "antd/es/typography/Title";
import { Columns } from "../utils/Containers";

const Filtros = () => {

    const { RangePicker } = DatePicker;

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

    const styles = {
        padding: "1rem 2rem",
    };

    const [fechaBusqueda, setFechaBusqueda] = useState(null);
    const [rangoFechas, setRangoFechas] = useState(null);

    const changeDatePicker = (date, dateString) => {
        setRangoFechas(null);
        setFechaBusqueda(date);
    }

    const changeRangePicker = (dates, dateString) => {
        setFechaBusqueda(null);
        setRangoFechas(dates);
    }
    return (
        <Flex
            gap={"middle"}
            style={styles}
            vertical
        >
            <Title level={2}>
                Filtros
            </Title>
            <DatePicker
                showTime
                format="DD-MM-YYYY / hh:00"
                placeholder="Fecha y hora aproximada"
                value={fechaBusqueda}
                onChange={changeDatePicker}
                name="fecha-buscada"
                size="small"
                showNow={false}
            />
            <RangePicker
                format="DD-MM-YYYY"
                placeholder={['Inicio', 'Fin']}
                value={rangoFechas}
                onChange={changeRangePicker}
                name="rango-buscador"
                size="small"
            />
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Selecciones los Sectores"
                onChange={() => { }}
                options={selectOptions}
                name="sectores-seleccionados"
            />
            <Columns>
                <Button
                    type="default"
                    style={{ width: "50%" }}
                >
                    Buscar
                </Button>
            </Columns>
        </Flex>
    );
}

export { Filtros }