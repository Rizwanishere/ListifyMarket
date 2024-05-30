import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/orderconfirmation");
  };

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      <h1 className="text-2xl font-semibold mb-12 text-center">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 w-[940px]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex flex-col gap-y-2 border-b pb-4">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="mt-4 text-xl font-semibold">
            Total: ${parseFloat(total).toFixed(2)}
          </div>
        </div>

        {/* Checkout Form */}
        <div className="flex-1 ml-28">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <form className="flex flex-col gap-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full border p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Street</label>
              <input
                type="text"
                className="w-full border p-2"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                className="w-full border p-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">State</label>
              <input
                type="text"
                className="w-full border p-2"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Pincode</label>
              <input
                type="text"
                className="w-full border p-2"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="card">Card Payment</label>
              </div>
            </div>
            {paymentMethod === "Card" && (
              <div>
                <label className="block mb-1">Card Details</label>
                <input
                  type="text"
                  className="w-full border p-2"
                  placeholder="Card Number"
                  required
                />
                <input
                  type="text"
                  className="w-full border p-2 mt-2"
                  placeholder="MM/YY"
                  required
                />
                <input
                  type="text"
                  className="w-full border p-2 mt-2"
                  placeholder="CVV"
                  required
                />
              </div>
            )}
            <button
              type="button"
              className="bg-primary text-white py-2 px-4 mt-4"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
