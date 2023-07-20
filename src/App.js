import "./App.css";
import NavBar from "./componentes/navbar";
import { Card } from "./componentes/card";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

function App() {
  return (

      <div className="container">
        <NavBar />
        <Header />
          <div className=" container row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Footer/>
      </div>
  );
}

export default App;
