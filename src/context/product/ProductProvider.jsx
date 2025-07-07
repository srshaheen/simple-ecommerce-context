import { useState } from "react";
import { ProductContext } from "./ProductContext";
import { products } from "../../data/data";

export default function ProductProvider({ children }) {
  const [productList] = useState(products);

  return <ProductContext.Provider value={{ productList }}>{children}</ProductContext.Provider>;
}
