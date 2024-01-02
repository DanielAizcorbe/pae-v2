
import './App.css';
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Evolucion } from "./components/evolucion/Evolucion";

function App() {
  return (
    <div className="App">
      <BusquedaPaciente seBuscoDocumentoInexistente={true} />
      {/* <Evolucion /> */}
    </div>
  );
}

export default App;
