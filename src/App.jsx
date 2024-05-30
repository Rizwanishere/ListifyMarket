import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";
import Sidebar from "./Products/Sidebar";
import UserContext from "./Contexts/UserContext";

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
        <UserContext.Provider value={{ isLoggedin, setLoggedin }}>
          <Header />
          <main className="flex flex-grow justify-center items-center">
            <MainApp />
          </main>
          <Footer />
          <Sidebar />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
