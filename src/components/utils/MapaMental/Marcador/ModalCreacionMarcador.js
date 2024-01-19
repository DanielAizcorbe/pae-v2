import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Select } from "antd";
import { Columns } from "../../Containers";
import { practicasprueba } from "../../../datos/practicas";

const ModalCreacionMarcador = ({ showModal, addMarcadorALaLista, closeModalFunction, nuevoMarcador }) => {


    const cancel = () => {
        closeModalFunction();
    }

    const [selectedOption, setSelectedOption] = useState("");

    const create = () => {
        const newMarker = nuevoMarcador;
        newMarker.text = selectedOption;
        addMarcadorALaLista(newMarker);
        closeModalFunction();
    };

    const getItem = (practica) => {
        return {
            value: practica,
            label: practica
        }
    }

    const options = practicasprueba.map(p => getItem(p));

    const defaultOption = {
        value: "",
        label: "Selecciona una opción",
        disabled: true
    };

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
                    options={[defaultOption, ...options]}
                    style={selectStyle}
                    onChange={(value) => setSelectedOption(value)}
                />
            </Columns>
        </Modal>
    );
}

export { ModalCreacionMarcador }