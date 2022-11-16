import Game from "./components/Game";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Game rows={20} columns={11} />
    </div>
  );
}
