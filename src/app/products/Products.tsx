import React from "react";
// import Product from "./Product";
import { productData } from "@/data";
import Link from "next/link";
import Product from "@/components/Product";
import Pagination from "@/components/Pagination";

const Products = () => {
  return (
    <>
      <div className="products_list max-w-6xl p-8 md:p-16">
        {productData.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Products;
