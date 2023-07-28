import ItemDetail from "./ItemDetail"

const ItemList = ({products}) => {
  return (
    <section className="md:justify-center md:grid md:grid-cols-4 flex flex-col min-h-screen items-center gap-6">
        {products.map((prod, index) => (
            <ItemDetail key={index} item={prod}></ItemDetail>
        ))}
    </ section>
  )
}

export default ItemList
