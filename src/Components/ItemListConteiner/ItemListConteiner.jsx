import ItemList from "./ItemList"
import { useEffect, useState } from 'react';

const ItemListConteiner = () => {
  const [data, setData] = useState([]);

  async function fetchingProductos() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      const data = await fetchingProductos();
      setData(data);
    }
    fetchData();
  }, []);

  console.log(data)

  return (
      <section className="bg-primary my-4">
        <ItemList products={data} ></ItemList>
      </section>

  );
}

export default ItemListConteiner