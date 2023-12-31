import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link to="/cart">
      <div className="relative bg-secondary p-2 rounded-full cursor-pointer z-0">
        <FaShoppingCart size={35} color="#D7DDE6" className=" p-1 z-10" />
        <span className="text-primary absolute top-8 left-9 bg-terciary rounded-full px-1 text-xs font-extrabold z-20">{cart.length > 0 ? cart.length : ""}</span>
      </div>
    </Link>
  )
}

export default CartWidget