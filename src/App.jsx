import Interfaz from "./components/UI/Interfaz";
import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Interfaz>
        <h1 className="text-center">Feriados de chile</h1>
        <MiApi />
      </Interfaz>
    </>
  );
}

export default App;
