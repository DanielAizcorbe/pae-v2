import { DatosPaciente } from "./components/DatosPaciente";
import { EvoluacionesAnteriores } from "./components/EvoluacionesAnteriores";
import { EtapasEvolucion } from "./components/EtapasEvolucion";
import './App.css';

const nombrePaciente = "JUAN CARLOS DEL CAMPO";
const documentoPaciente = "42880000";

function App() {
  return (
    <div className="App">
      <div className="col-container">
        <EvoluacionesAnteriores />
        <main>
          <h1>Evolucion paciente</h1>
          <DatosPaciente
            nombre={nombrePaciente}
            documento={documentoPaciente}
          />
          {/* <EtapasEvolucion /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
