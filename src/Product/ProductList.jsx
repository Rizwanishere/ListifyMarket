import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";
import Loader from "../util/Loader";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState("asc");

  const fetchData = async () => {
    const url = `https://fakestoreapi.com/products?sort=${direction}`;
    try {
      const res = await axios.get(url);
      setProducts(res.data);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [direction]);

  const onSortChange = (evt) => {
    setDirection(evt.target.value);
  };

  return (
    <div>
      <div className="flex m-2 justify-center absolute top-20 left-0 right-0">
        <h1 className="flex text-xl mt-3 p-1">Products</h1>

        <div>
          <select
            className="h-12 ml-3 mt-2 border border-black rounded"
            onChange={onSortChange}
          >
            <option>Sort</option>
            <option value="desc">Newest Arrivals</option>
            <option value="asc">Bestselling</option>
          </select>
        </div>

        <Link
          to="/products/new"
          className="text-white bg-primary hover:bg-secondary rounded m-2 p-3 pt-3 pb- rounded ml-4"
        >
          Add Product
        </Link>
      </div>

      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 ml-16 mt-28 ">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
