import { DatosPaciente } from "./components/DatosPaciente";
import { EvoluacionesAnteriores } from "./components/EvoluacionesAnteriores";
import { EtapasEvolucion } from "./components/EtapasEvolucion";
import './App.css';

const nombrePaciente = "JUAN CARLOS DEL CAMPO";
const documentoPaciente = "42880000";

function App() {
  return (
    <div className="App">
      <h1>EVOLUCIÓN DE PACIENTE</h1>
      <DatosPaciente
        nombre={nombrePaciente}
        documento={documentoPaciente}
      />
      <EvoluacionesAnteriores />
      <EtapasEvolucion/>
    </div>
  );
}

export default App;
