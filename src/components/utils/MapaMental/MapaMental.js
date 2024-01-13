import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Marcador } from './Marcador';
import "./mapa-mental.css";
import { CreadorDeMarcador } from './CreadorDeMarcador';
import { Rows } from '../Containers';
import { styled } from 'styled-components';
import { ListaMarcadores } from './ListaMarcadores';
import { MarcadorTemporal } from './MarcadorTemporal';

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
    setMarcadores(marcadores.filter(m => m.id == id));
  }

  const addMarcadorALaLista = (marcador) => {
    setMarcadores([...marcadores, marcador]);
    console.log(marcador);
    console.log(marcadores);
  }

  const closeModalFunction = () => {
    setMarcadorNuevo({ id: -1 });
    setShowOpcionesCreacion(false);
  }

  return (
    <Rows
      elementPosition="center-top"

    >
      <MapaMentalContainer
        width="100%"
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
        />
        <MarcadorTemporal 
          marcador={marcadorNuevo}
          nextId={marcadores.length + 1}
          removeMarcador={removeMarcador}
        />
      </MapaMentalContainer>
      <ol className='marcadores-info'>
        {marcadores.map(m => <li key={m.id}>{m.text}</li>)}
      </ol>
      {showOpcionesCreacion ?
        <CreadorDeMarcador
          closeModalFunction={closeModalFunction}
          marcadorNuevo={marcadorNuevo}
          addNuevoMarcador={addMarcadorALaLista}
        /> : ""}
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