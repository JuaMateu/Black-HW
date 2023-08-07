import ItemList from "./ItemList"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import products from "../../Data/products"

const ItemListConteiner = () => {
  const [data, setData] = useState([]);

  const { category } = useParams()

  


  const fetchProducts = () => {
    return new Promise((res, rej) => {
      if (products.length > 0) {
        setTimeout(() => {
          res(products);
        }, 2000);
      } else {
        rej(new Error("No hay datos"));
      }
    });
  };
  

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setData(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  // getProducts
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // //    fetch afakestoreapi 
  // async function fetchingProductos() {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products/category/electronics');
  //     const data = await response.json();
  //     return data
  //   } catch (error) {
  //     console.error(error)
  //     return []
  //   }
  // }




  return (
    < >
      <ItemList products={data} ></ItemList>
    </>

  );
}

export default ItemListConteiner