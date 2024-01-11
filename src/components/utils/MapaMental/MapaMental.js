import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Marcador } from './Marcador';
import "./mapa-mental.css";
import { CreadorDeMarcador } from './CreadorDeMarcador';

const MapaMental = () => {

  const [marcadores, setMarcadores] = useState([]);
  const [marcadorNuevo, setMarcadorNuevo] = useState({ id: -1 });

  const [showOpcionesCreacion, setShowOpcionesCreacion] = useState(false);
  const [contador, setContador] = useState(1);

  const addMarcador = (event) => {
    setShowOpcionesCreacion(true);
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


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
    <div className='general-container'>
      <div className="mapa-mental-container">
        <img
          className="mapa-mental"
          draggable={false}
          src={mapaMental}
          alt="mapa mental"
          onClick={addMarcador}
        />
        {marcadores.map(m =>
          <Marcador
            posX={m.x}
            posY={m.y}
            numero={marcadores.findIndex(n => n.id == m.id) + 1}
            color={"green"}
          />)
        }
        {
          marcadorNuevo.id != -1 ?
            <Marcador
              posX={marcadorNuevo.x}
              posY={marcadorNuevo.y}
              color={"blue"}
              numero={marcadores.length + 1}
              removeMarcador={() => removeMarcador(marcadores.length + 1)}
            /> : ""
        }
      </div>
      <ol className='marcadores-info'>
        {marcadores.map(m => <li key={m.id}>{m.text}</li>)}
      </ol>
      {showOpcionesCreacion ? 
        <CreadorDeMarcador 
          closeModalFunction={closeModalFunction} 
          marcadorNuevo={marcadorNuevo}
          addNuevoMarcador={addMarcadorALaLista}
        /> : ""}
    </div>

  );
};

export { MapaMental };
