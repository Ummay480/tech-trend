
"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

// Define the interface for a product
interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: IImage;
  category: {
    name: string;
  };
}

// Fetch product data
export const getProductData = async (): Promise<IProduct[]> => {
  try {
    const res: IProduct[] = await client.fetch(`*[_type == "product"]`);
    return res;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return []; // Return an empty array in case of error
  }
};

// Product Grid Component
const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductData();
      setProducts(productData);
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={urlForImage(product.image).url()}
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category.name}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
