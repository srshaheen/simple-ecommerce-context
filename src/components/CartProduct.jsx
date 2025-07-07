import { DeleteIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart/CartContext";

export default function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const subTotal = product.price * quantity;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    dispatch({ type: "Increment", payload: product });
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
      dispatch({ type: "Decrement", payload: product });
    }
  };

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);

    if (isNaN(inputValue)) {
      setQuantity(1);
    } else {
      setQuantity(inputValue);
      dispatch({ type: "updateQuantity", payload: { product, quantity } });
    }
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
        <input onChange={handleChange} type="text" value={quantity} className="w-1/3 text-center" />
        <button onClick={handleIncrement} className="bg-gray-200 p-1 rounded-full cursor-pointer">
          <PlusIcon size={18} />
        </button>
      </div>
      <p>$ {subTotal}</p>
      <button
        onClick={() => dispatch({ type: "Remove", payload: product.id })}
        className="flex justify-center items-center"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
