import React, { useState } from 'react';
import mapaMental from "./cuerpo-humano-mapa.png";
import { Rows } from '../Containers';
import { styled } from 'styled-components';
import { ListaMarcadores } from './Marcador/ListaMarcadores';
import { MarcadorTemporal } from './Marcador/MarcadorTemporal';
import { InfoMarcadores } from './Marcador/InfoMarcadores';
import { ModalCreacionMarcador } from './Marcador/ModalCreacionMarcador';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { agregarMarcadorE, quitarMarcadorE } from '../../../store/slices/mapaMentalEjecucion';
import { agregarMarcadorV, quitarMarcadorV } from '../../../store/slices/mapaMentalValoracion';


const MapaMental = ({ etapa,disabled }) => {

  const etapaActual = etapa === "valoracion" ? "marcadoresValoracion" : "marcadoresEjecucion";
  const marcadoresV = useSelector(state => state.marcadoresValoracion);
  const marcadoresE = useSelector(state => state.marcadoresEjecucion);
  const marcadores = [...marcadoresV, ...marcadoresE];
  const dispatch = useDispatch();

  const [marcadorTemporal, setMarcadorTemporal] = useState({ id: -1, etapa });

  const [showOpcionesCreacion, setShowOpcionesCreacion] = useState(false);
  const [contador, setContador] = useState(marcadores.length + 1);

  const agregar = (etapaActual === "marcadoresValoracion" ? agregarMarcadorV : agregarMarcadorE);

  const quitar = (etapaActual === "marcadoresValoracion" ? quitarMarcadorV : quitarMarcadorE);

  const addMarcador = (event) => {
    setShowOpcionesCreacion(true);
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    const marcador = {
      id: contador,
      x: x,
      y: y,
      text: "",
      etapa: etapa
    };
    setMarcadorTemporal(marcador);
    setContador(contador + 1);
  };

  const removeMarcador = (id) => {
    dispatch(quitar({ id: id }));
  }

  const addMarcadorAlMapa = (marcador) => {
    dispatch(agregar(marcador));
  }

  const closeModalFunction = () => {
    setMarcadorTemporal({ id: -1 });
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
          onClick={disabled ? () => {} : addMarcador}
        />
        <ListaMarcadores
          marcadores={marcadores}
          removeMarcador={removeMarcador}
          etapaActual={etapa}
        />
        <MarcadorTemporal
          marcador={marcadorTemporal}
          numero={marcadores.length + 1}
          nextId={contador}
          removeMarcador={removeMarcador}
          etapa={etapa}
        />
      </MapaMentalContainer>
      <InfoMarcadores
        marcadoresValoracion={marcadoresV}
        marcadoresEjecucion={marcadoresE}
        marcadores={marcadores}
      />

      <ModalCreacionMarcador
        addMarcadorALaLista={addMarcadorAlMapa}
        nuevoMarcador={marcadorTemporal}
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