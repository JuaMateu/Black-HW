import Footer from "./Components/Footer/Footer";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import NavBar from "./Components/NavBar/NavBar";


function App() {

  const productos = [
    {
      id: "1",
      name: "Mother Asrock Z390", 
      description: "Chipsets: Z390",
      stock: 20,
    },
    {
      id: "2",
      name: "Mother Msi Z390 Gam Plus 1151",
      description: "1 x turbo m.2 slot usb 3.1 gen1 8 x usb 3.1 gen1 usb 2.0 6 x usb 2.0,4 x pci-e x1 slot sata / m.2 / u.2 6 x sata 6gb/s ports",
      stock: 31,
    },
    {
      id: "3",
      name: "Motherboard Gigabyte GA-A320M-H",
      description: "Ranuras de expansión: 1 x PCI Express x16",
      stock: 20 ,
    }
  ]

    // const getProductos = () => {
    //   return new Promise((resolve, reject) => {
    //     if (productos.length === 0) {
    //       reject(new Error("No hay productos."))
    //     }
    //     setTimeout(()=> {
    //       resolve(productos)
    //     }, 3000)
    //   })
    // }

  //   getProductos()
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })



      // fetch('https://fakestoreapi.com/products')
      //   .then(function(res) {
      //     return Response.json();
      //   })
      //   .then(function(product) 
      //   {

      //   })
    



  return (
    <div className="font-[Poppins] bg-primary text-grey">
      <NavBar />
      <ItemListConteiner greeting={"Bienvenidos a Black Hardware"} />
      <Footer />
    </ div>
  );
}

export default App;
