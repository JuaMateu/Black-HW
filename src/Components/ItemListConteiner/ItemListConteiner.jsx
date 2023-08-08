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

  let filtredProducts = ""
  if (category != undefined) {
    filtredProducts = products.filter((prod) => prod.categoryid == category)
  } else {
    filtredProducts = products
  }


  return (
    <>
      <ItemList products={filtredProducts}></ItemList>
    </>
  );
};

export default ItemListConteiner;
