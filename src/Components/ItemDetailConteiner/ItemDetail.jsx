
import ItemCount from "../ItemCount"

const ItemDetail = ({ img, title, price, description, categoryName, stock }) => {

    return (
        <section className="flex bg-primary h-[100vh] m-20">
            <div className="flex-col w-1/2 grow-0 justify-center">
                <picture>
                    <img className="mx-auto object-cover h-[400px] w-[500px] " src={img} alt={title} />
                </picture>
            </div>
            <div className="flex-col w-1/2 grow-0 justify-center  h-[100vh]">
                <h1 className="text-4xl mb-4">{title}</h1>
                <h2 className="text-4xl font-semibold m-3 text-terciary">$ {price}</h2>
                <p > {description}</p>
                <p > Categoria: {categoryName}</p>
                <p > stock: {stock}</p>
                <ItemCount initial={1} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)}></ItemCount>
            </div>
        </ section>
    )
}

export default ItemDetail