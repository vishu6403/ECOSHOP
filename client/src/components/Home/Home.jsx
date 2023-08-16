import React, { useEffect, useContext, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
