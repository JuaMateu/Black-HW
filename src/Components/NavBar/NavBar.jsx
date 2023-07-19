import CartWidget from "./CartWidget";
// hardcoded quantity for cart
let number = 2; 
const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary font-[Poppins] text-grey drop-shadow-2xl items-center md:mx-24">
      <div className="flex justify-around items-center">
        {/* logo */}
        <li className="text-2xl font-extrabold px-6  py-2 cursor-pointer flex">
          Black <span className="text-terciary">HW</span>
        </li>
        {/* navlinks */}
        <ul className="hidden md:flex">
          <li className="group w-auto text-lg px-8 py-2 mx-2 font-extrabold hover:bg-secondary hover:border-b-2 hover:border-b-white border-b-transparent border-b-2 cursor-pointer ">
            Categorías
            <div className="bg-transparent absolute hover:block group-hover:block w-[800px] h-7">
              <ul className="hidden hover:block absolute rounded-lg  group-hover:grid top-6 w-[600px] p-2 mx-auto grid-cols-3 gap-2 font-normal bg-secondary ">
                <li className="hover:text-terciary hover:bg-primary p-2">Motherboards</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Memorias RAM</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Procesadores</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Almacenamiento</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Fuentes</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Gabinetes</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Refrigeracion</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Monitores</li>
                <li className="hover:text-terciary hover:bg-primary p-2">Accesorios</li>
              </ul>
            </div>
          </li>
          <li className="text-lg px-8 py-2 mx-2 font-extrabold hover:bg-secondary hover:border-b-2 cursor-pointer ">
            Sobre Nostoros
          </li>
          <li className="text-lg px-8 py-2 mx-2 font-extrabold hover:bg-secondary hover:border-b-2 cursor-pointer ">
            Contacto
          </li>
        </ul>
        {/* cart */}
        <CartWidget number={number}></CartWidget>
      </div>
    </nav>
  );
};

export default Navbar;
