import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar sticky top-0 bg-primary z-50 shadow-lg shadow-secondary">
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
                            <details>
                                <summary>Categorías</summary>
                                <ul className="p-2 ">
                                    <li>
                                        <a>Motherboards</a>
                                    </li>
                                    <li>
                                        <a>Memorias RAM</a>
                                    </li>
                                    <li>
                                        <a>Procesadores</a>
                                    </li>
                                    <li>
                                        <a>Almacenamiento</a>
                                    </li>
                                    <li>
                                        <a>Fuentes</a>
                                    </li>
                                    <li>
                                        <a>Gabinetes</a>
                                    </li>
                                    <li>
                                        <a>Refrigeracion</a>
                                    </li>
                                    <li>
                                        <a>Monitores</a>
                                    </li>
                                    <li>
                                        <a>Accesorios</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Sobre Nostoros</a>
                        </li>
                        <li>
                            <a>Contacto</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost  normal-case text-xl">
                    Black<span className="text-terciary">Hw</span>
                </a>
            </div>
            {/* large screens navbar */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary >Categorías</summary>
                            <ul className="grid grid-cols-2 w-80 bg-secondary">
                                <li>
                                    <a>Motherboards</a>
                                </li>
                                <li>
                                    <a>Memorias RAM</a>
                                </li>
                                <li>
                                    <a>Procesadores</a>
                                </li>
                                <li>
                                    <a>Almacenamiento</a>
                                </li>
                                <li>
                                    <a>Fuentes</a>
                                </li>
                                <li>
                                    <a>Gabinetes</a>
                                </li>
                                <li>
                                    <a>Refrigeracion</a>
                                </li>
                                <li>
                                    <a>Monitores</a>
                                </li>
                                <li>
                                    <a>Accesorios</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Sobre Nostoros</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget number={2} />
            </div>
        </nav>
    );
};

export default NavBar;
