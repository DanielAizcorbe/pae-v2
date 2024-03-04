import React, { useState } from 'react';
import imagen from './cuerpo-humano-mapa.png';
import { Rows } from '../Containers';
import { InfoMarcadores } from './Marcador/InfoMarcadores';
import { ListaMarcadores } from './Marcador/ListaMarcadores';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMarcador, removeMarcador } from '../../../store/slices/marcadoresMapaMental';
import { ModalCreacionMarcador } from './Marcador/ModalCreacionMarcador';

export const MapaMental = ({ etapa }) => {

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

    return (
        <Rows
            elementPosition={"center-left"}
        >
            <div style={{ position: "relative" }}>
                <img
                    alt='cuerpo-humano'
                    src={imagen}
                    onClick={agregarMarcador}
                    style={{ position: "relative" }}
                    draggable={false}
                />
                <ListaMarcadores
                    marcadores={marcadores}
                    etapaActual={etapa}
                    removeMarcador={remove}
                />
            </div>
            <InfoMarcadores
                marcadores={marcadores}
            />
            <ModalCreacionMarcador
                showModal={showModal}
                addMarcadorALaLista={create}
                closeModalFunction={closeModal}
                nuevoMarcador={marcadorTemporal}
            />
        </Rows>
    )
}
