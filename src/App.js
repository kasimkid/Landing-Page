import "./App.css";
import NavBar from "./componentes/navbar";
import { Card } from "./componentes/card";
import Footer from "./componentes/footer";
import Jumbotron from "./componentes/jumbotron";

const App = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
        <div className="row justify-content-center ">

          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
      <>
        <Footer />
      </>
    </>

  );
};

export default App;
