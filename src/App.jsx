import Footer from "./Components/Footer/Footer";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="font-[Poppins] bg-primary text-grey">
      <NavBar />

      <ItemListConteiner greeting={"Bienvenidos a Black Hardware"} />
      <Footer />
    </ div>
  );
}

export default App;
