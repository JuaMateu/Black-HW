import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({number}) => {
  return (
    <div className="relative bg-secondary p-2 rounded-full cursor-pointer z-0">
      <FaShoppingCart size={35} color="#D7DDE6" className=" p-1 z-10" />
       <span className="text-primary absolute top-8 left-9 bg-terciary rounded-full px-1 text-xs font-extrabold z-20">{ number }</span>
     </div>
  )
}

export default CartWidget