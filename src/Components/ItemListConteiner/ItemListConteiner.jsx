import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Data/products";

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      }, [])
  });


  let filtredProducts = products.filter((prod) => prod.categoryid == category)



  return (
    <>
      {category ? <ItemList products={filtredProducts} /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListConteiner;
