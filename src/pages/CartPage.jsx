import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartProduct from "../components/CartProduct";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  const grandTotal = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  console.log(grandTotal);

  return (
    <div className="max-w-6xl mx-auto my-4">
      <div>
        <h2 className="text-3xl text-primary my-2">Cart</h2>
      </div>
      {cart.length > 0 && (
        <div className="flex justify-between font-bold text-primary text-lg py-6 *:flex-1 text-center">
          <span>Image</span>
          <span> Name</span>
          <span>Price</span>
          <span>Qty</span>
          <span>Subtotal</span>
          <span>Action</span>
        </div>
      )}
      {cart.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
      <p>Grand Total: {grandTotal}</p>
    </div>
  );
}
