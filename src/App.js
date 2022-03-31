import Hero from "./Components/Hero";
import ItemCVEducacion from "./Components/ItemCVEducacion";
import ItemCVExperiencia from "./Components/ItemCVExperiencia";
import ItemCVHerramientasTecnologias from "./Components/ItemCVHerramientasTecnologias";
import ItemCVAptitudesHabilidades from "./Components/ItemCVAptitudesHabilidades";
import ItemCVContacto from "./Components/ItemCVContacto";
function App() {
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

export default App;
