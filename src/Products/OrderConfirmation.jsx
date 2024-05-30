import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

const OrderConfirmation = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <IoCheckmarkCircle className="text-9xl text-primary"/>
      <h1 className="text-3xl font-semibold mb-4">Order Successful!</h1>
      <p className="text-lg mb-8">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/product" className="bg-primary text-white py-2 px-4 rounded">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
