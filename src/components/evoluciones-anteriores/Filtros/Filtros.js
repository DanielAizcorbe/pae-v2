import React, { useState } from "react";
import { Button, Flex} from "antd";
import Title from "antd/es/typography/Title";
import { Columns } from "../../utils/Containers";
import { SelectSectores } from "./SelectSectores";
import { InputFecha } from "./InputFecha";
import { InputRangoFechas } from "./InputRangoFechas";

const Filtros = () => {

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

    const applyFiltros = () => {

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
            <InputFecha 
                fechaBusqueda={fechaBusqueda}
                changeDate={changeDatePicker}
            />
            <InputRangoFechas 
                rangoFechas={rangoFechas}
                changeRango={changeRangePicker}
            />
            <SelectSectores />
            <Columns>
                <Button
                    type="default"
                    style={{ width: "50%" }}
                    onClick={applyFiltros}
                >
                    Aplicar
                </Button>
            </Columns>
        </Flex>
    );
}

export { Filtros }