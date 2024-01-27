import React from "react";
import Product from "./Product";
import { productData } from "@/data";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="products_list">
        {productData.slice(0, 8).map((product) => (
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
