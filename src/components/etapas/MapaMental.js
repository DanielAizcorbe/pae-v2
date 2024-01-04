import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Marcador } from './Marcador';
import { marker } from 'leaflet';

const MapaMental = () => {

  const AGREGAR = 1;
  const QUITAR = 2;
  const CONSULTAR = 3;
  
  const [marcadores, setMarcadores] = useState([]);

  const [operacionMarcadores, setOperacionMarcadores] = useState(CONSULTAR);

  const addMarcador = (event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    const marcador = {
      id: marcadores.length,
      x: x,
      y: y,
      text: "OPERACION X"
    };
    setMarcadores([...marcadores, marcador]);
  };

  const getOnClic = (operacion) => {
    switch(operacion) {
      case AGREGAR: return (addMarcador);
      case QUITAR: return (() => {});
      case CONSULTAR: return (() => {});
      default: return null;
    }
  }

  return (
    <>
      <div className="mapa-mental-container">
        <img className="mapa-mental" draggable={false} src={mapaMental} alt="mapa mental" onClick={getOnClic(operacionMarcadores)} />
        {marcadores.map(m =><Marcador style={{left: m.x, top: m.y}} text={m.text} tipoOperacion={operacionMarcadores}/>)}
      </div>
      <div>
        <button onClick={() => setOperacionMarcadores(AGREGAR)}>AGREGAR</button>
        <button onClick={() => setOperacionMarcadores(QUITAR)}>QUITAR</button>
        <button onClick={() => setOperacionMarcadores(CONSULTAR)}>CONSULTAR</button>
      </div>
    </>

  );
};

export { MapaMental };
