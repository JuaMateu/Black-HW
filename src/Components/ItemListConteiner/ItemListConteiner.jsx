const ItemListConteiner = ({ greeting }) => {
  return (
    <section className="h-screen">
        <div className="flex flex-col justify-center text-center h-4/6 bg-Hero">
          <h2 className="text-white text-2xl font-medium ">Despegá en tus partidas</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">{greeting}</h1>
      </div>
    </section>
  );
}

export default ItemListConteiner