import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Select } from "antd";
import { Columns } from "../../Containers";
import { practicasprueba } from "../../../datos/practicas";

const ModalCreacionMarcador = ({ showModal, addMarcadorALaLista, closeModalFunction, nuevoMarcador }) => {


    const cancel = () => {
        setSelectedOption(defaultOption.label);
        closeModalFunction();
    }

    const defaultOption = {
        value: "disable",
        label: "Selecciona una opción",
        disabled: true
    };

    const [selectedOption, setSelectedOption] = useState(defaultOption.label);

    const create = () => {

        if (selectedOption !== defaultOption.label) {
            const newMarker = nuevoMarcador;
            newMarker.text = selectedOption;
            addMarcadorALaLista(newMarker);
            setSelectedOption(defaultOption.label);
            closeModalFunction();
        }
    };

    const getItem = (practica) => {
        return {
            value: practica,
            label: practica
        }
    }

    const options = practicasprueba.map(p => getItem(p));

    const selectStyle = {
        width: "90%"
    };


    return (
        <Modal
            open={showModal}
            title={"Nuevo Marcador"}
            onOk={create}
            onCancel={cancel}
            afterClose={cancel}
            centered
            width={"40%"}
        >
            <Columns
                elementPosition={"center"}
                height={"5rem"}
            >
                <Select
                    placeholder="Seleccione una práctica"
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                    style={selectStyle}
                    onChange={(value) => setSelectedOption(value)}
                    value={selectedOption}
                />
            </Columns>
        </Modal>
    );
}

export { ModalCreacionMarcador }