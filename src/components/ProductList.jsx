import { useContext } from "react";
import { ProductContext } from "../context/product/ProductContext";
import Product from "./Product";

export default function ProductList() {
  const { productList } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-4 max-w-6xl mx-auto gap-12">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
