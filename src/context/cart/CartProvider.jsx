import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { CartReducer } from "./CartReducer";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}
