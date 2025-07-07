import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductProvider from "./context/product/ProductProvider";
import CartProvider from "./context/cart/CartProvider";

export default function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Header />
          <main>
            <Outlet />
          </main>
        </CartProvider>
      </ProductProvider>
    </>
  );
}
