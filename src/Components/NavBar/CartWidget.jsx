import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({number}) => {
  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart size={38} color="#D7DDE6" className="bg-secondary p-2 rounded-full" />
       <span className="text-primary absolute top-6 left-7 bg-terciary rounded-full px-1 text-xs font-bold">{ number }</span>
     </div>
  )
}

export default CartWidget