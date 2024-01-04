
import './App.css';
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Valoracion } from './components/etapas/Valoracion';
import { EvolucionTerminada } from './components/evolucion-terminada/EvolucionTerminada';
import { Evolucion } from "./components/evolucion/Evolucion";

function App() {
  return (
    <div className="App">
      {/* <BusquedaPaciente seBuscoDocumentoInexistente={true} /> */}
      {/* <Evolucion /> */}
      {/* <EvolucionTerminada/> */}
      <Valoracion/>
    </div>
  );
}

export default App;
