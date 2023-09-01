import { useContext, useState } from "react"
import { CartContext } from "/src/context/cartContext"
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, removeItem, precioTotal, clearCart } = useContext(CartContext)
    console.log(cart)

    // const removeItemHandler = (id) => {
    //     removeItem(id)
    // }

    // const precioTotal = cart.reduce((prev, prod) => {
    //     const precioProd = prod.quantity * prod.price;
    //     return prev + precioProd;
    // }, 0)

    return (

        <div className="min-h-screen">
            <h1 className="w-full text-4xl my-12 text-center">Carrito de compras</h1>
            {cart.length > 0 ? (
                <div className='flex-col m-8 w-'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Img</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((prod, index) => (
                                    <tr key={index}>
                                        <th >
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20 h-20">
                                                        <img src={prod.img} alt={prod.title} />
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            {prod.title}
                                        </td>
                                        <td> $ {prod.price}</td>
                                        <td>{prod.quantity}</td>
                                        <td><strong>$ {prod.quantity * prod.price}</strong> </td>
                                        <td><FaTrashAlt className="cursor-pointer" onClick={() => removeItem(prod.id)} ></FaTrashAlt></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mr-32">
                    <button onClick={()=> clearCart()}className="btn mt-3 mx-auto w-40">
                        vaciar carrito
                    </button>
                        <h1 className="w-full text-2xl my-12  text-right">Total de compra: $ <span className="text-terciary font-bold">{precioTotal}</span> </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center"> Finalizar la compra </h1>
                        <Link to="/checkout">
                            <button className="btn btn-primary mt-3 mx-auto w-40">
                                checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )
                : (
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center"> El carrito de compras esta vacío</h1>
                        <Link to="/shop">
                            <button className="btn btn-primary mt-3 mx-auto w-40">
                                ir a comprar
                            </button>
                        </Link>
                    </div>
                )}
        </div>

    )
}

export default Cart