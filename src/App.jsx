import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailCointeiner";

import ShoppingCartProvider from './context/cartContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/shop' element={<ItemListConteiner />} />
            <Route exact path='/categories/:category' element={<ItemListConteiner />} />
            <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
            <Route exact path='/aboutus' element={<Home />} />
            <Route exact path='/contact' element={<Home />} />
            <Route  path='*' element={<h4> error 404 </h4>} />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
