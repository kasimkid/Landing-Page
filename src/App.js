import "./App.css";
import NavBar from "./componentes/navbar";
import { Card } from "./componentes/card";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
