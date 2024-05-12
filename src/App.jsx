import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MainApp from "./MainApp";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <MainApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;