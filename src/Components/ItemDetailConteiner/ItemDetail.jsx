import { useParams } from "react-router-dom";
import Item from "../ItemListConteiner/Item"

const ItemDetail = ({ products }) => {

    const { id } = useParams();
    const filtredProducts = products.filter((producto) => producto.id == id)
    console.log(filtredProducts)

    return (
        <section className="bg-primary h-[100vh]">
            {filtredProducts.map((prod, index) => (
                <Item key={index} item={prod}></Item>
            ))}
        </ section>
    )
}

export default ItemDetail