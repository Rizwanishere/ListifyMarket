import React from "react";
import { Link } from "react-router-dom";

function Actions() {
  return (
    <div className="mt-2 flex font-serif">
      <a
        href="#"
        className="border border-black text-black rounded-lg m-2 p-2 h-12 flex items-center whitespace-nowrap"
      >
        Add to cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </a>

      <a
        href="#"
        className="border border-black text-black rounded-lg m-2 p-2 h-12 flex items-center whitespace-nowrap"
      >
        Buy Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </a>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <div className="flex m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link to={"/products/" + product.id}>
        <img
          className="p-8 h-64 w-30"
          src={product.image}
          alt="product image"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {product.title}
          </h5>

          <div className="text-xl m-4 ml-0 font-bold">
            Price ${product.price}
          </div>

          <Actions product={product} />
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
