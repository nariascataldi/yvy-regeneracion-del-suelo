import Sencibilizacion from "./components/sencibilizacion/Sencibilizacion";
import Productor from "./components/productor/Productor";
import Vocacion from "./components/vocacion/Vocacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Costras from "./components/indicadores/Costras";
import Sales from "./components/indicadores/Sales";
import Infiltracion from "./components/indicadores/Infiltracion";
import Agregados from "./components/indicadores/Agregados";
import Pendientes from "./components/indicadores/Pendientes";
import Cobertura from "./components/cobertura/Cobertura";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Sencibilizacion />} />
        <Route path="/productor" element={<Productor />} />
        <Route path="/vocacion" element={<Vocacion />} />
        <Route path="/costras" element={<Costras />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/infiltracion" element={<Infiltracion />} />
        <Route path="/agregados" element={<Agregados />} />
        <Route path="/pendientes" element={<Pendientes />} />
        <Route path="/cobertura" element={<Cobertura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
