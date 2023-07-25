// ProductList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/produckt/productSlice";
import ProducktCard from "./ProducktCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: Unable to fetch products.</div>;
  }

  return (
    <div className="flex w-full mx-auto justify-between flex-wrap">
      {products.map((product) => (
        <ProducktCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.images}
          producer={product.producer}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
