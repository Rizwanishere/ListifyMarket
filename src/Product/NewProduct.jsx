import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function NewProduct() {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    inStock: false,
  });
  const [hasError, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onInputChange = (evt) => {
    const newState = { ...product, [evt.target.name]: evt.target.value };
    setProduct(newState);
  };

  const navigate = useNavigate();

  const onSaveBtn = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      await axios.post(url, product);
      setSuccess(true);
      setProduct({
        category: "",
        title: "",
        price: "",
        description: "",
        inStock: false,
      });
      setTimeout(() => {
        navigate("/products")
      }, 1000)
    } catch {
      setError(true);
    }
  };

  return (
    <div className="m-2 p-2 ml-28 font-serif">
      <ShouldRender when={success}>
        <div className="py-2 my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
          Successfully saved data
        </div>
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <h1 className="flex text-2xl font-serif mt-3 p-1">New Product</h1>
      <div className="mt-4 mb-4">
        <label className="block py-1">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
        >
          <option value="">category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewellery">Jewellery</option>
          <option value="womens's clothing">Women's clothing</option>
          <option value="electronics">Electronics</option>
        </select>
        <ShouldRender when={!product.category}>
          <div className="text-sm text-red-500 m-1">category is required</div>
        </ShouldRender>
      </div>

      <div className="mb-4">
        <label className="block py-1">Title</label>
        <input
          name="title"
          value={product.title}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="title"
          type="text"
        />
        <ShouldRender when={!product.title}>
          <div className="text-sm text-red-500 m-1">Title is required</div>
        </ShouldRender>
        <ShouldRender when={product.title && product.title.length < 3}>
          <div className="text-sm text-red-500 m-1">Min 3 chars</div>
        </ShouldRender>
        <ShouldRender when={product.title && product.title.length > 20}>
          <div className="text-sm text-red-500 m-1">Max 20 chars</div>
        </ShouldRender>
      </div>

      <div className="mb-4">
        <label className="block py-1">Price</label>
        <input
          name="price"
          value={product.price}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="price"
          type="text"
        />
        <ShouldRender when={!product.price}>
          <div className="text-sm text-red-500 m-1">Price is required</div>
        </ShouldRender>
      </div>

      <div className="mb-4">
        <label className="block py-1">Description</label>
        <input
          name="description"
          value={product.description}
          onChange={onInputChange}
          className="border border-gray-500 p-1  w-1/2 rounded"
          placeholder="description"
          type="text"
        />
        <ShouldRender when={!product.description}>
          <div className="text-sm text-red-500 m-1">
            Description is required
          </div>
        </ShouldRender>
      </div>

      <div className="mb-4">
        <button
          disabled={!product.category || !product.title || !product.price}
          onClick={onSaveBtn}
          className="border border-black rounded px-4 py-1.5"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default NewProduct;
