import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import AccountPage from "../pages/AccountPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "/about", Component: AboutPage },
      { path: "/service", Component: ServicePage },
      { path: "/shop", Component: ShopPage },
      { path: "/cart", Component: CartPage },
      { path: "/account", Component: AccountPage },
      { path: "/contact", Component: ContactPage },
    ],
  },
]);

export default router;
