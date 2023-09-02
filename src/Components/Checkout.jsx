import { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/services/firebase/firebaseConfig.js';
import { CartContext } from '/src/context/cartContext';

const Checkout = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [orderSent, setOrderSent] = useState(false);

    const { cart, precioTotal, clearCart } = useContext(CartContext);
    const items = cart.map((item) => {
        return {
            id: item.id,
            price: item.price,
            name: item.title,
            quantity: item.quantity,
        };
    });

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError('');
        setLastNameError('');
        setEmailError('');

        let valid = true;

        if (name.trim() === '') {
            setNameError('El nombre es requerido');
            valid = false;
        }

        if (lastName.trim() === '') {
            setLastNameError('El apellido es requerido');
            valid = false;
        }

        if (!validateEmail(email)) {
            setEmailError('Ingrese un correo electrónico válido');
            valid = false;
        }

        if (valid) {
            const order = {
                buyer: { name, lastName, email },
                items,
                total: precioTotal,
            };

            const ordersCollection = collection(db, 'orden');

            addDoc(ordersCollection, order).then(({ id }) => {
                setOrderId(id);
                setOrderSent(true);
                clearCart()
            });
        }
    };

    return (
        <div className="mx-auto max-w-md p-4 h-screen py-32">
            <h1 className="text-2xl font-bold mb-4">Enviando Órdenes</h1>

            {/* Mostrar el formulario o el mensaje de confirmación según el estado */}
            {orderSent ? (
                <div>
                    <p className="text-green-500 text-xl mb-4">¡Gracias por su compra!</p>
                    {orderId && <p className="mt-2">Número de orden: {orderId}</p>}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-1">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full p-2 border rounded ${nameError ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastname" className="block font-semibold mb-1">Apellido</label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`w-full p-2 border rounded ${lastNameError ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {lastNameError && <p className="text-red-500 mt-1">{lastNameError}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-1">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="correo@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-2 border rounded ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Finalizar Compra</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;