import React from 'react';
import Hero from "./Components/Hero";
import ItemCVEducacion from "./Components/ItemCVEducacion";
import ItemCVExperiencia from "./Components/ItemCVExperiencia";
import ItemCVHerramientasTecnologias from "./Components/ItemCVHerramientasTecnologias";
import ItemCVAptitudesHabilidades from "./Components/ItemCVAptitudesHabilidades";
import ItemCVContacto from "./Components/ItemCVContacto";
import WOW from 'wowjs';
class App extends React.Component {
  componentDidMount(){
    new WOW.WOW({
      live:false
    }).init();
  }
  render(){
  return (
    <div>
      <Hero/>
      <main>
        <ItemCVEducacion/>
        <hr/>
        <ItemCVExperiencia/>
        <hr/>
        <ItemCVHerramientasTecnologias/>
        <hr/>
        <ItemCVAptitudesHabilidades/>
        <hr/>
        <ItemCVContacto/>
      </main>
    </div>
  );
}
}

export default App;
