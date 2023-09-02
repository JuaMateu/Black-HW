import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    const categories = [
        { id: 1, name: "motherboards" },
        { id: 2, name: "Memorias Ram" },
        { id: 3, name: "Procesadores" },
        { id: 4, name: "Almacenamiento" },
        { id: 5, name: "Fuentes" },
        { id: 6, name: "Gabinetes" },
        { id: 7, name: "Refrigeracion" },
        { id: 8, name: "Monitores" },
        { id: 9, name: "Accesorios" },
    ]


    return (
        <nav className="navbar sticky top-0 lg:px-32 bg-primary z-50 shadow-lg shadow-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52"
                    >
                        <li>
                            <Link to="/shop">shop </ Link>
                        </li>
                        <li>

                            <details>
                                <summary>Categorías</summary>
                                <ul className="p-2 ">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <Link to={`/categories/${cat.id}`}> {cat.name} </ Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link to="/aboutus">Sobre Nostoros </ Link>
                        </li>
                        <li>
                            <Link to="/contact">Contacto </ Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost  normal-case text-xl">
                    Black<span className="text-terciary">Hw</span>
                </Link>
            </div>
            {/* large screens navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/shop">Shop </ Link>
                    </li>
                    <li>
                        <details>
                            <summary >Categorías</summary>
                            <ul className="grid grid-cols-2 w-80 bg-secondary">
                                {categories.map((cat, index) => (
                                    <li key={index}>
                                        <Link to={`/categories/${cat.id}`}> {cat.name} </ Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to="/aboutus">Sobre Nostoros </ Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto </ Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
