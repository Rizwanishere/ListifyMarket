import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";
import Sidebar from "./Products/Sidebar";
import UserContext from "./Contexts/UserContext";
import { ToastContainer } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "./util/ScrollToTop";

const stripePromise = loadStripe("pk_test_51PMPMCRqDKJqedll0zQ5Xb0S7my1mhW6ub8mmza5XJYfwhI6muyFq598rI3CtjVOsvg1ROctSbh8XzjmmVjB2qeS00NZ2U4e46");

const App = () => {
  const [isLoggedin, setLoggedin] = useState(() => {
    return localStorage.getItem("token") ? true : false;
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <ScrollToTop />
        <UserContext.Provider value={{ isLoggedin, setLoggedin }}>
          <Header />
          <main className="flex flex-grow justify-center items-center">
            <Elements stripe={stripePromise}>
              <MainApp />
            </Elements>
          </main>
          <Footer />
          <ToastContainer />
          <Sidebar />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
