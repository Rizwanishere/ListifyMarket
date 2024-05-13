import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import axios from "axios";
import Loader from "../util/Loader";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const url = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(url)
      .then((res) => setProduct(res.data), setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center">
      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>

      <ShouldRender when={product}>
        <ProductItem product={product} />
      </ShouldRender>
    </div>
  );
}

export default ProductDetail;
