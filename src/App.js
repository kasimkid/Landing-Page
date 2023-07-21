import "./App.css";
import NavBar from "./componentes/navbar";
import { Card } from "./componentes/card";
import Header from "./componentes/header";
import Footer from "./componentes/footer";

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Header />
      <div className="container">
        <div className="row gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
