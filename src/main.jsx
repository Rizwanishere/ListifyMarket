import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SidebarProvider from "./Contexts/SidebarContext";
import CartProvider from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);
