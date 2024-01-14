import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Rows } from '../Containers';
import { styled } from 'styled-components';
import { ListaMarcadores } from './Marcador/ListaMarcadores';
import { MarcadorTemporal } from './Marcador/MarcadorTemporal';
import { InfoMarcadores } from './Marcador/InfoMarcadores';
import { ModalCreacionMarcador } from './Marcador/ModalCreacionMarcador';

const MapaMental = () => {

  const [marcadores, setMarcadores] = useState([]);
  const [marcadorNuevo, setMarcadorNuevo] = useState({ id: -1 });

  const [showOpcionesCreacion, setShowOpcionesCreacion] = useState(false);
  const [contador, setContador] = useState(1);

  const addMarcador = (event) => {
    setShowOpcionesCreacion(true);
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    const marcador = {
      id: contador,
      x: x,
      y: y,
      text: ""
    };
    setMarcadorNuevo(marcador);
    setContador(contador + 1);
  };

  const removeMarcador = (id) => {
    const marcadoresRestantes = marcadores.filter(m => m.id != id);
    console.log("BORRADO MARCADOR CON ID: ",id);
    setMarcadores(marcadoresRestantes);
    console.log(marcadores);
  }

  const addMarcadorALaLista = (marcador) => {
    setMarcadores([...marcadores, marcador]);
  }

  const closeModalFunction = () => {
    setMarcadorNuevo({ id: -1 });
    setShowOpcionesCreacion(false);
  }

  return (
    <Rows
      elementPosition="center-left"
    >
      <MapaMentalContainer
        width="auto"
        height="600px"
        elementPosition="top-left"
      >
        <ImagenCuerpoHumano
          draggable={false}
          src={mapaMental}
          alt="mapa mental"
          onClick={addMarcador}
        />
        <ListaMarcadores
          marcadores={marcadores}
          removeMarcador={removeMarcador}
        />
        <MarcadorTemporal
          marcador={marcadorNuevo}
          numero={marcadores.length + 1}
          nextId={contador}
          removeMarcador={removeMarcador}
        />
      </MapaMentalContainer>
      <InfoMarcadores
        marcadores={marcadores}
      />
      <ModalCreacionMarcador 
        addMarcadorALaLista={addMarcadorALaLista}
        marcadorNuevo={marcadorNuevo}
        showModal={showOpcionesCreacion}
        closeModalFunction={closeModalFunction}
      />
    </Rows>
  );
};

const MapaMentalContainer = styled(Rows)`
  position: relative;
`;

const ImagenCuerpoHumano = styled.img`
  height: 600px;
  width: auto;
  border: 1px solid black;
  position: absolute;
  z-index: 1;
`;

export { MapaMental };