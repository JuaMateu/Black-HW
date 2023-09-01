import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "/src/services/firebase/firebaseConfig.js"

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [filtredProducts, setfiltredProducts] = useState([]);
  console.log(products)
  useEffect(() => {


    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
      const filtered = docs.filter((prod) => prod.categoryId == category);
      setfiltredProducts(filtered);

    })

  }, [category]);





  return (
    <>
      {category ? <ItemList products={filtredProducts} /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListConteiner;
