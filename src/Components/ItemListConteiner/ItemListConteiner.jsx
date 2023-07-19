const ItemListConteiner = ({ greeting }) => {
  return (
    <div className="hero min-h-screen bg-Hero">
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-grey">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ">{greeting}</h1>
          <p className="mb-5 text-grey">Despegá en tus partidas con los mejores componentes de BlackHW. Asesorate para armar tu equipo a medida</p>
          <button className="btn bg-terciary text-black font-bold hover:bg-primary hover:text-terciary">Comprar</button>
        </div>
      </div>
    </div>

  );
}

export default ItemListConteiner