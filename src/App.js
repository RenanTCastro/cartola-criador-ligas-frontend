import "./App.css";

import { EditarLiga } from "./pages/EditarLiga/EditarLiga";
import { VisualizarLiga } from "./pages/VisualizarLiga/VisualizarLiga";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
