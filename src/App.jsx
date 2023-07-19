
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner'
import NavBar from './Components/NavBar/NavBar'

// import Home from './Screens/Home'
// import Shop from './Screens/Shop'
// import Contact from './Screens/Contact'
// import AboutUs from './Screens/AboutUs'

// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='bg-primary'>
      <header>
        <NavBar />
      </header>
    {/* <Router>
        <Routes>
          <Route exact path='/' element={<Home />} /> }
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

    </Router> */}
      <ItemListConteiner greeting={"Bienvenidos a Black Hardware"} />
    </div>
  );
}

export default App
