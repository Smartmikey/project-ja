import React from "react";
// import Product from "./Product";
import { productData } from "@/data";
import Link from "next/link";
import Product from "@/components/Product";

const Products = () => {
  return (
    <>
      <div className="products_list max-w-6xl">
        {productData.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <div className=" mx-auto text-center">

      <Link href="/products" className="button_outline ">Show More</Link>
      </div>
    </>
  );
};

export default Products;
