const ItemListConteiner = ({ greeting }) => {
  return (
    <section className="h-screen bg-primary bg-gradient-to-tr font-[Poppins] ">
      <div className="h-4/6 mx-40">
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h2 className="text-white text-2xl font-medium ">Despegá en tus partidas</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">{greeting}</h1>
        </div>
      </div>
    </section>
  );
}

export default ItemListConteiner