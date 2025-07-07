import { DeleteIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

export default function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);

  const subTotal = product.price * product.quantity;

  const handleIncrement = () => {
    dispatch({ type: "Increment", payload: product });
  };

  const handleDecrement = () => {
    dispatch({ type: "Decrement", payload: product });
  };

  return (
    <div className="flex justify-between items-center *:flex-1 text-center">
      <div>
        <img src={product.image} alt={product.name} className="w-36 h-auto" />
      </div>
      <h3>{product.name}</h3>
      <p>$ {product.price}</p>
      <div className="flex justify-center items-center">
        <button onClick={handleDecrement} className="bg-gray-200 p-1 rounded-full cursor-pointer">
          <MinusIcon size={18} />
        </button>
        <input type="text" value={product.quantity} className="w-1/3 text-center" />
        <button onClick={handleIncrement} className="bg-gray-200 p-1 rounded-full cursor-pointer">
          <PlusIcon size={18} />
        </button>
      </div>
      <p>$ {subTotal}</p>
      <button
        onClick={() => dispatch({ type: "Remove", payload: product.id })}
        className="flex justify-center items-center cursor-pointer"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
