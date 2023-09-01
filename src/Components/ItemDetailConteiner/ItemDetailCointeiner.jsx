import { useEffect, useState } from 'react';
import ItemDetail from './itemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "/src/services/firebase/firebaseConfig.js"

const ItemDetailCointeiner = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const oneItem = doc(db, "productos", id);
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data();
                setProduct(docs)
            }
        })

    }, [id]);


    return (
        <>
            {product ? <ItemDetail {...product} /> : <h1 className='h-[100vh] w-full leading-[100vh] text-center align-middle'>Cargando...</h1>}
        </>
    )
}

export default ItemDetailCointeiner