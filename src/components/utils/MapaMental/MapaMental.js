import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Marcador } from './Marcador';
import "./mapa-mental.css";
import { CreadorDeMarcador } from './CreadorDeMarcador';

const MapaMental = () => {

  const AGREGAR = 1;
  const QUITAR = 2;
  const CONSULTAR = 3;

  const [marcadores, setMarcadores] = useState([]);
  const [marcadorNuevo, setMarcadorNuevo] = useState({ id: -1 });

  const [operacionMarcadores, setOperacionMarcadores] = useState(AGREGAR);
  const [showOpcionesCreacion, setShowOpcionesCreacion] = useState(false);

  const addMarcador = (event) => {
    setShowOpcionesCreacion(true);
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    const marcador = {
      id: 0,
      x: x,
      y: y,
      text: ""
    };
    setMarcadorNuevo(marcador);
  };

  const getOnClic = (operacion) => {
    switch (operacion) {
      case AGREGAR: return (addMarcador);
      case QUITAR: return (() => { });
      case CONSULTAR: return (() => { });
      default: return null;
    }
  }

  return (
    <>
      <div className="mapa-mental-container">
        <img
          className="mapa-mental"
          draggable={false}
          src={mapaMental}
          alt="mapa mental"
          onClick={getOnClic(operacionMarcadores)}
        />
        {marcadores.map(m =>
          <Marcador
            posX={m.x}
            posY={m.y}
            text={m.text}
            tipoOperacion={operacionMarcadores}
            color={"green"}
          />)
        }
        {
          marcadorNuevo.id != -1 ?
            <Marcador
              posX={marcadorNuevo.x}
              posY={marcadorNuevo.y}
              text={marcadorNuevo.text}
              tipoOperacion={operacionMarcadores}
              color={"blue"}
            /> : ""
        }
      </div>
      {showOpcionesCreacion ? <CreadorDeMarcador closeModalFunction={() => setShowOpcionesCreacion(false)} /> : ""}
      {/* <div>
        <button onClick={() => setOperacionMarcadores(AGREGAR)}>AGREGAR</button>
        <button onClick={() => setOperacionMarcadores(QUITAR)}>QUITAR</button>
        <button onClick={() => setOperacionMarcadores(CONSULTAR)}>CONSULTAR</button>
      </div> */}
    </>

  );
};

export { MapaMental };
