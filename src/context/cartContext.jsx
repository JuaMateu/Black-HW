import { createContext, useState } from 'react'

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //funcion que agrega item
    const addItem = (quantity, item) => {
        //si el item ya esta en el array no hacer nada
        setCart(prev => [...prev, {...item, quantity}])
    }
    
    return (
        <>
            <CartContext.Provider value={{cart, setCart, addItem}}>
                {children}
            </CartContext.Provider>
        </>
    )
}


export default ShoppingCartProvider