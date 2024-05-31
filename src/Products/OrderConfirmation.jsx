import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

const OrderConfirmation = () => {
  return (
    <div className="h-[740px] flex flex-col items-center justify-center px-4">
      <IoCheckmarkCircle className="text-6xl lg:text-9xl text-primary mb-8" />
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
        Order Successful!
      </h1>
      <p className="text-lg lg:text-xl mb-8 text-center">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/product"
        className="bg-primary text-white py-2 px-4 rounded text-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
