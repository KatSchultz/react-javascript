import "./App.css";
import BasicCall from "./components/BasicCall";
import ColorCall from "./components/ColorCall";
import PokeColor from "./components/PokeColor";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      {/* <BasicCall /> */}
      <Pokemon />
      <PokeColor />
      <ColorCall />
    </div>
  );
}

export default App;
