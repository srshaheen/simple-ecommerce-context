import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import toast from "react-hot-toast";

export default function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleAdd = () => {
    dispatch({ type: "Add", payload: product });
    toast.success("Product Added Succesfully");
  };

  return (
    <div className="max-w-[300px] my-2 shadow-md rounded-lg p-6 flex flex-col gap-2 items-center">
      <img src={product.image} alt={product.name} className="w-9/12 h-auto" />
      <div>
        <h3 className="text-xl font-bold text-primary tracking-wider mb-1">{product.name}</h3>
        <p className="text-sm text-primary font-light">{product.description}</p>
        <p className="text-lg font-bold text-primary my-2">$ {product.price}</p>
        <button
          className="text-primary py-2 px-8 bg-secondary rounded-full cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handleAdd}
        >
          <ShoppingBag size={18} /> Add To Cart
        </button>
      </div>
    </div>
  );
}
