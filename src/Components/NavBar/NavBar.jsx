import CartWidget from "./CartWidget";
// hardcoded quantity for cart
let number = 2; 
const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 shadow-sm shadow-secondary">
      <div className="flex justify-around items-center md:mx-24">
        {/* logo */}
        <h3 className="flex text-2xl font-extrabold p-6 cursor-pointer">
          Black <span className="text-terciary">HW</span>
        </h3>
        {/* navlinks */}
        <ul className="flex font-extrabold text-lg">
          <li className="group p-6 hover:bg-secondary hover:border-b-2 hover:border-b-white border-b-transparent border-b-2 cursor-pointer">
            Categorías
            <div className="hidden absolute hover:block group-hover:block w-40 h-20">
              <ul className="hidden absolute rounded-lg group-hover:grid top-10 -left-10 w-[600px] p-2  grid-cols-3 gap-2 font-normal bg-secondary ">
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
          <li className="p-6 hover:bg-secondary hover:border-b-2 hover:border-b-white border-b-transparent border-b-2 cursor-pointer ">
            Sobre Nostoros
          </li>
          <li className="p-6 hover:bg-secondary hover:border-b-2 hover:border-b-white border-b-transparent border-b-2 cursor-pointer">
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
