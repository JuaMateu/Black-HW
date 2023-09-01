import { collection, addDoc } from 'firebase/firestore'
import { db } from "/src/services/firebase/firebaseConfig.js"
import { useState } from 'react'

const SendOrder = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersColection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        name,
        email
    }

    const ordersColection = collection(db, "orden")

    return (
        <div>
            <h1>Enviando Ordenes</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nombre y apellido"
                    onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="nombre y apellido"
                    onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'> Finalizar Compra! </button>
            </form>
            <p>Número de orden: {orderId}</p>
        </div>
    )
}

export default SendOrder