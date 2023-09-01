import { createContext, useState } from 'react'

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    
    console.log(cart)
    //funcion que agrega item
    const addItem = (quantity, item) => {
        //si el item ya esta en el array no hacer nada
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log('El producto ya se encuentra en el carrito')
        }
    }

    const precioTotal = cart.reduce((prev, prod) => {
        const precioProd = prod.quantity * prod.price;
        return prev + precioProd;
    }, 0)

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <>
            <CartContext.Provider value={{cart, precioTotal, addItem, removeItem}}>
                {children}
            </CartContext.Provider>
        </>
    )
}


export default ShoppingCartProvider