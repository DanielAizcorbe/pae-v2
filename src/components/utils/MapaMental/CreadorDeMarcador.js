import React, { useState } from "react";
import { VentanaModal } from "../VentanaModal";

const CreadorDeMarcador = ({ closeModalFunction, marcadorNuevo, addNuevoMarcador }) => {

    const cancel = () => {
        closeModalFunction();
    }

    const [selectedOption, setSelectedOption] = useState("");

    const changeOption = (event) => {
        setSelectedOption(event.target.value);
    }
    const create = (event) => {
        event.preventDefault()
        const newMarker = marcadorNuevo;
        newMarker.text = selectedOption;
        addNuevoMarcador(newMarker);
        console.log("MARCADOR: " + newMarker.text + " " + newMarker.id + " " + newMarker.x + " " + newMarker.y);
        closeModalFunction();
    };

    return (
        <VentanaModal
            showBackground={true}
            position={"center"}
            width={"30rem"}
            height={"30rem"}
            showAnimation={false}
        >
            <h2>Nuevo Marcador</h2>
            <form onSubmit={create}>
                <select required id="lista" name="lista" value={selectedOption} onChange={changeOption}>
                    <option value="" disabled >Selecciona una práctica</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                </select>
                <button onClick={cancel}>
                    Cancelar
                </button>
                <input type="submit" value="Crear"/>
            </form>
        </VentanaModal>
    );
};

export { CreadorDeMarcador }