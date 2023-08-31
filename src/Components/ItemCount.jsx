import { useState } from 'react'

const ItemCount = ({ initial, onAdd }) => {

    let [quantity, setQuantity] = useState(initial)

    const increment = () => {
        setQuantity(quantity = quantity + 1)
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='w-60 mx-auto'>
            <div className='flex text-lg justify-between align-middle items-center'>
                <button className=" cursor-pointer font-extrabold grow py-4  px-3 border-2 rounded-md" onClick={decrement}>-</button>
                <h4 className="font-extrabold grow py-4 px-3 text-center border-2 rounded-md">{quantity}</h4>
                <button className=" cursor-pointer font-extrabold grow py-4  px-3 border-2 rounded-md" onClick={increment}>+</button>
            </div>
            <div className='flex justify-center align-middle text- items-center'>
                <button className=' cursor-pointer font-extrabold p-2 px-3 border-2 rounded-md w-full' onClick={() => onAdd(quantity)}>
                    Agregar al carrito!
                </button>
            </div>

        </div>
    )
}

export default ItemCount