import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { MinhaConta } from "./pages/MinhaConta/MinhaConta";
import { EditarLiga } from "./pages/EditarLiga/EditarLiga";
import { VisualizarLiga } from "./pages/VisualizarLiga/VisualizarLiga";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="/editar-liga" element={<EditarLiga />} />
          <Route path="/liga/:id" element={<VisualizarLiga />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
