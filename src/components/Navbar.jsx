import { Link } from "react-router-dom";
import { navbarItems } from "../data/data";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-16">
        {navbarItems.map((item) => (
          <li key={item.id} className="text-sm hover:text-secondary transition-all duration-300 cursor-pointer">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
