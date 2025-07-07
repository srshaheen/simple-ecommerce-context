import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ShoppingCart, User } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-8">
        <Link className="font-bold text-lg">BaraiBazar</Link>
        <Navbar />
        <div className="flex gap-8 items-center">
          <Link to="/cart" className=" hover:text-secondary transition-all duration-300 cursor-pointer">
            <div className="relative">
              <ShoppingCart />
              <span className="absolute -inset-y-4 -right-3 font-bold">{cart.length}</span>
            </div>
          </Link>
          <Link to="/account" className=" hover:text-secondary transition-all duration-300 cursor-pointer">
            <User />
          </Link>
          <Link to="/contact" className=" hover:text-secondary transition-all duration-300 cursor-pointer">
            <button className="px-6 py-2 bg-secondary rounded-full text-primary hover:scale-90 transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
