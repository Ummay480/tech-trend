import React from "react";
import ProductGrid from "@/components/ProductGrid"; // Adjust the path if needed

const ProductPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Our Products</h1>
      <ProductGrid />
    </div>
  );
};

export default ProductPage;
