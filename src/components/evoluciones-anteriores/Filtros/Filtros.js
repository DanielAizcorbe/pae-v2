import React, { useState } from "react";
import { Button, Flex} from "antd";
import Title from "antd/es/typography/Title";
import { Columns } from "../../utils/Containers";
import { SelectSectores } from "./SelectSectores";
import { InputFecha } from "./InputFecha";
import { InputRangoFechas } from "./InputRangoFechas";

const Filtros = ({filtrosAplicados, aplicarFiltros}) => {

    const styles = {
        padding: "1rem 2rem",
    };

    const [fechaBusqueda, setFechaBusqueda] = useState(filtrosAplicados.fechaBusqueda);
    const [rangoFechas, setRangoFechas] = useState(filtrosAplicados.rangoFechas);
    const [selected, setSelected] = useState(filtrosAplicados.sectores);

    const changeDatePicker = (date, dateString) => {
        setRangoFechas([]);
        setFechaBusqueda(date);
    }

    const changeRangePicker = (dates, dateString) => {
        setFechaBusqueda("");
        setRangoFechas(dates);
    }

    const changeSelected = (sectores) => {
        setSelected(sectores);
    }

    const applyFiltros = () => {
        const nuevosFiltros= {
            fechaBusqueda: fechaBusqueda,
            rangoFechas: rangoFechas,
            sectores: selected,
        };

        aplicarFiltros(nuevosFiltros);
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
            <SelectSectores 
                selected={selected}
                changeSelected={changeSelected}
            />
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