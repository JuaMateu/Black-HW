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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
      const filtered = docs.filter((prod) => prod.categoryId == category);
      setfiltredProducts(filtered);
      setLoading(false); // Cambia el estado de carga una vez que los productos se han cargado
    })
  }, [category]);





  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {loading ? (
        <span className="loading loading-ring loading-lg text-center align-middle absolute"></span>
      ) : (
        <>
          {category ? <ItemList products={filtredProducts} /> : <ItemList products={products} />}
        </>
      )}
    </div>
  );
};

export default ItemListConteiner;
