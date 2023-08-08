import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-Hero">
            <div className="hero-overlay bg-opacity-70 bg-primary"></div>
            <div className="hero-content text-center text-grey">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold ">Bienvenidos a Black Hw</h1>
                    <p className="mb-5 text-grey">Despegá en tus partidas con los mejores componentes de BlackHW. Asesorate para armar tu equipo a medida</p>
                    <Link to="/shop">
                        <button className="btn bg-terciary text-black font-bold hover:bg-primary hover:text-terciary">Comprar</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home