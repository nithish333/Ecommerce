import React from "react";
import "./CategoryWiseProductScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../data";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryWiseProductsScreen = () => {
  const pathname = window.location.pathname;
  const pathParts = pathname.split("/").filter((part) => part !== "");

  const category = pathParts[0];
  const subcategory = pathParts[1];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="products"
        style={{
          padding: "3rem",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {products
          .filter(
            (prod) =>
              prod.category.toLowerCase() == category &&
              prod.subcategory.toLowerCase() == subcategory
          )
          .map((p) => (
            <ProductCard product={p} />
          ))}
      </div>
    </div>
  );
};

export default CategoryWiseProductsScreen;
