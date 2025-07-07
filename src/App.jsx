import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductProvider from "./context/product/ProductProvider";
import CartProvider from "./context/cart/CartProvider";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main>
            <Outlet />
          </main>
        </CartProvider>
      </ProductProvider>
    </>
  );
}
