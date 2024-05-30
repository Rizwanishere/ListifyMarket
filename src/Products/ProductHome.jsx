import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import Product from "./Product";
import Loader from "../util/Loader";

function ProductHome() {
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
      </div>
      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>
      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>
      <div className="container mx-auto px-4 mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
