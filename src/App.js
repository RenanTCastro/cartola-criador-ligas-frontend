import "./App.css";
import { EditarLiga } from "./pages/EditarLiga/EditarLiga";
import { VisualizarLiga } from "./pages/VisualizarLiga/VisualizarLiga";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VisualizarLiga />
      </header>
    </div>
  );
}

export default App;
