import React, { useState } from 'react';
import { Rows } from '../containers/Containers';
import { InfoMarcadores } from './Marcador/InfoMarcadores';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMarcador, removeMarcador } from '../../../store/slices/marcadoresMapaMental';
import { ModalCreacionMarcador } from './Marcador/ModalCreacionMarcador';
import { MapaConPuntos } from './MapaConPuntos';
import InfoMarcadoresDeshabilitado from './InfoMarcadoresDeshabilitado';

export const MapaMental = ({ etapa, disabled, mostrarSoloLosDeLaEtapa }) => {

    const marcadores = useSelector(state => state.marcadores);
    const lastId = Math.max(...[...marcadores.map(m => m.id), 0]);
    const [marcadorTemporal, setMarcadorTemporal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const agregarMarcador = (event) => {
        const imgRect = event.target.getBoundingClientRect();
        const x = event.clientX - imgRect.left;
        const y = event.clientY - imgRect.top;

        const marcador = {
            id: lastId + 1,
            x: x,
            y: y,
            text: "",
            etapa: etapa
        };

        setMarcadorTemporal(marcador);
        console.log(marcador);
        setShowModal(true);
    };

    const create = (marcador) => {
        dispatch(addMarcador(marcador))
    }

    const remove = (id) => {
        dispatch(removeMarcador({ id: id }))
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const marcadoresFiltrados = (mostrarSoloLosDeLaEtapa ? marcadores.filter(m => m.etapa === etapa) : marcadores);

    return (
        <Rows
            elementPosition={"top-left"}
        >
            <MapaConPuntos
                disabled={disabled}
                etapa={etapa}
                addMarcadores={agregarMarcador}
                remove={remove}
                mostrarTodos={!mostrarSoloLosDeLaEtapa}
                marcadores={marcadores}
            />
            {
                disabled ? <InfoMarcadoresDeshabilitado
                    etapa={etapa}
                    marcadores={marcadoresFiltrados}
                /> : <InfoMarcadores
                    etapa={etapa}
                    marcadores={marcadoresFiltrados}
                />
            }
            <ModalCreacionMarcador
                showModal={showModal}
                addMarcadorALaLista={create}
                closeModalFunction={closeModal}
                nuevoMarcador={marcadorTemporal}
            />
        </Rows>
    )
}
