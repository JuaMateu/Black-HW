import Item from "./Item"

const ItemList = ({products}) => {
  return (
    <section className="bg-primary mx-40 my-8 md:justify-center md:grid md:grid-cols-4 flex flex-col min-h-screen  gap-10">
        {products.map((prod, index) => (
            <Item key={index} item={prod}></Item>
        ))}
    </ section>
  )
}

export default ItemList
