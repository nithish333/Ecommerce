import React from "react";
import "./CategoryWiseProductScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import Loader from "../../components/Loader/Loader";

const CategoryWiseProductsScreen = () => {
  const pathname = window.location.pathname;
  const pathParts = pathname.split("/").filter((part) => part !== "");

  const category = pathParts[0];
  const subcategory = pathParts[1];
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div></div>
      ) : (
        <>
          <Navbar />
          <div
            className="products"
            style={{
              padding: "3rem",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {products.length > 0 ? (
              products
                .filter(
                  (prod) =>
                    prod.category.toLowerCase() === category &&
                    prod.subcategory.toLowerCase() === subcategory
                )
                .map((p) => <ProductCard product={p} key={p._id} />)
            ) : (
              <h1>No products found</h1>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryWiseProductsScreen;
