
import './App.css';
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Valoracion } from './components/etapas/Valoracion/Valoracion';
import { Diagnostico } from './components/etapas/Diagnostico/Diagnostico';
import { Evolucion } from "./components/evolucion/Evolucion";
import { Route, Routes } from 'react-router-dom';
import { Planeacion } from './components/etapas/Planeacion/Planeacion';
import { Ejecucion } from './components/etapas/Ejecucion/Ejecucion';
import { Evaluacion } from './components/etapas/Evaluacion/Evaluacion';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Borrador } from './components/borrador/Borrador';
import { FinalizarEvolucion } from './components/evolucion/FinalizarEvolucion';
import { EjecutarAcciones } from './components/etapas/Ejecucion/EjecutarAcciones';
import Registro from './components/registro-paciente/Registro';
import { Home } from './components/registro-paciente/Home';
import { PantallaNoDisponible } from './components/PantallaNoDisponible';

function App() {

  return (
    <div className="App">
      <Provider store={store}>

        <Routes>
          <Route exact path="/evolucion/paciente" element={<BusquedaPaciente />} />
          <Route exact path='/registro-paciente' element={<Registro></Registro>} />
          <Route exact path="/evolucion" element={<Evolucion />} />
          <Route exact path='/evolucion/valoracion' element={<Valoracion />} />
          <Route exact path='/evolucion/diagnostico' element={<Diagnostico />} />
          <Route exact path='/evolucion/planeacion' element={<Planeacion />} />
          <Route exact path='/evolucion/ejecucion' element={<Ejecucion />} />
          <Route exact path='/evolucion/evaluacion' element={<Evaluacion />} />
          <Route exact path="/evoluciones-atenriores" element={<PantallaNoDisponible seccion={2} />} />
          <Route exact path='/evolucion/borrador' element={<Borrador />} />
          <Route exact path='/evolucion/finalizar' element={<FinalizarEvolucion />} />
          <Route exact path='/evolucion/ejecucion/acciones' element={<EjecutarAcciones />} />
          <Route exact path='/' element={<Home />} />
        </Routes>

      </Provider>
    </div>
  );
}
export default App;

