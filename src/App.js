import { DatosPaciente } from "./components/DatosPaciente";
import { EvoluacionesAnteriores } from "./components/EvoluacionesAnteriores";
import { EtapasEvolucion } from "./components/EtapasEvolucion";
import './App.css';

const nombrePaciente = "JUAN PEREZ GONZALES";
const documentoPaciente = "20333012";
const fechaNacPaciente = "09-09-1990";

function App() {
  return (
    <div className="App">
      <div className="col-container">
        <EvoluacionesAnteriores />
        <main>
          <div className="main-container">
            <h1>Evolucion paciente</h1>
            <DatosPaciente
              nombre={nombrePaciente}
              documento={documentoPaciente}
              fechaNac={fechaNacPaciente}
            />
          </div>
          <EtapasEvolucion />
        </main>
      </div>
    </div>
  );
}

export default App;
