import { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import products from "../../Data/products";
import ItemDetail from './itemDetail';

const ItemDetailCointeiner = () => {
    const [data, setData] = useState([]);
    
    // const { idParam } = useParams()
    
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

    // fetchProducts()
    //     .then((res) => {
    //         setData(res)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchProducts();
                setData(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);


    return (
        <ItemDetail products={ data }></ ItemDetail>
    )
}

export default ItemDetailCointeiner