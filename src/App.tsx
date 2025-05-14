import "./App.css";
import { Card } from "./components";

function App() {
  return (
    <>
      <Card
        imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        nombre="Rick Sanchez"
        species="Human"
        location="Earth (C-137)"
        status="Alive"
      />
    </>
  );
}

export default App;
