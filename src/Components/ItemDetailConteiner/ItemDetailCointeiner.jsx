import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from "../../Data/products";
import ItemDetail from './itemDetail';


const ItemDetailCointeiner = () => {
    const [product, setProduct] = useState();

    const {id} = useParams()
 
    useEffect(() => {
        getProductById(id)
            .then(res => {
                setProduct(res);
                console.log(res)
            })
            .catch(error => {
                console.error(error);
            })
    }, [id]);


    return (
        <>
        {product !== undefined ? <ItemDetail product={product} /> : <h1>Cargando...</h1>}
        </>
    )
}

export default ItemDetailCointeiner