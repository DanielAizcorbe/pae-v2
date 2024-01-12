
import './App.css';
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Valoracion } from './components/etapas/Valoracion/Valoracion';
import { EvolucionTerminada } from './components/evolucion-terminada/EvolucionTerminada';
import { Diagnostico } from './components/etapas/Diagnostico/Diagnostico';
import { Evolucion } from "./components/evolucion/Evolucion";
import { Route, Routes } from 'react-router-dom';
import { Planeacion } from './components/etapas/Planeacion/Planeacion';
import { Ejecucion } from './components/etapas/Ejecucion/Ejecucion';
import { Evaluacion } from './components/etapas/Evaluacion/Evaluacion';

function App() {

  const valoracionFalsa = "- RESPIRACIÓN\n\n- ALIMENTACIÓN E HIDRATACIÓN\n\n- ELIMINACIÓN\n\n";
  const diagnosticoFalso = "DISMINUCIÓN DEL GASTO CARDIACO\n\n" +
  "La cantidad de sangre bombeada por el corazón es inadecuada para satisfacer las demandas metabólicas del cuerpo.\n\n"
  + "DETERIORO DEL INTERCAMBIO DE GASES\n\n"
  + "Exceso o déficit en la oxigenación y/o eliminación del dióxido de carbono en la membrana alveolocapilar.";
  
  const resumenFinal = "VALORACIÓN\n\n" + valoracionFalsa + "\nDIAGNÓSTICO\n\n" + diagnosticoFalso;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<BusquedaPaciente seBuscoDocumentoInexistente={true} />} />
        <Route exact path="/evolucion" element={<Evolucion />} />
        <Route exact path='/evolucion/valoracion' element={<Valoracion />} />
        <Route exact path='/evolucion/valoracion/finalizar' element={<EvolucionTerminada title={"Valoración"} text={valoracionFalsa} nextPage={"/evolucion"} />} />
        <Route exact path='/evolucion/diagnostico' element={<Diagnostico />} />
        <Route exact path='/evolucion/diagnostico/finalizar' element={<EvolucionTerminada title={"Diagnóstico"} text={diagnosticoFalso} nextPage={"/evolucion"}/>} />
        <Route exact path='/evolucion/finalizar' element={<EvolucionTerminada />} nextPage={"/"} title={"Vista previa"}text={resumenFinal}/>
        <Route exact path='/evolucion/planeacion' element={<Planeacion />}/>
        <Route exact path='/evolucion/ejecucion' element={<Ejecucion />}/>
        <Route exact path='/evolucion/evaluacion' element={<Evaluacion />}/>
      </Routes>
    </div>
  );
}
export default App;
