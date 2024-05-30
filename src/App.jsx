import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";
import Sidebar from "./Products/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <main className="flex flex-grow justify-center items-center">
          <MainApp />
        </main>
        <Footer />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};

export default App;
