import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "./Contexts/SidebarContext";
import { CartContext } from "./Contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/listifymarketLogo.png";
import ShouldRender from "./util/ShouldRender";
import UserContext from "./Contexts/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { isLoggedin, setLoggedin } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLogoutButton = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    setLoggedin(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (
      !isLoggedin &&
      (currentPath === "/todo" || currentPath === "/product")
    ) {
      navigate("/signin");
      toast.error("Please sign in to continue!");
    }
    console.log(currentPath);
  }, [isLoggedin, navigate]);

  const MobileMenu = () => (
    <div className="flex items-center justify-between py-4">
      <Link to="/" className="flex text-2xl">
        <img src={logo} alt="ListifyMarket Logo" className="h-8 w-8 mr-2" />
        ListifyMarket
      </Link>
      <div className="flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary text-3xl mr-4"
        >
          &#9776;
        </button>
        <ShouldRender when={isLoggedin}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative max-w-[50px] cursor-pointer"
          >
            <BsBag className="text-2xl" />
            <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </ShouldRender>
      </div>
    </div>
  );

  const ToggleMenu = () => (
    <ul className="flex flex-col space-y-4">
      <li>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/product" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Products
        </Link>
      </li>
      <li>
        <Link to="/todo" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Tasks
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </li>
      <ShouldRender when={!isLoggedin}>
        <li>
          <Link
            to="/signin"
            className="p-1 rounded-lg bg-white text-primary border ml-2 border-primary hover:text-white hover:bg-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </Link>
        </li>
      </ShouldRender>
      <ShouldRender when={isLoggedin}>
        <li>
          <button
            onClick={() => {
              onLogoutButton();
              setIsMenuOpen(false);
            }}
            className="border px-1 border-primary rounded text-primary hover:text-white hover:bg-primary"
          >
            Logout
          </button>
        </li>
      </ShouldRender>
    </ul>
  );

  return (
    <header className="bg-white text-light-grey border-b border-gray-200">
      <nav className="container mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex text-2xl">
              <img src={logo} alt="ListifyMarket Logo" className="h-8 w-8 mr-2" />
              ListifyMarket
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="nav-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/todo" className="nav-link">
                  Tasks
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <ShouldRender when={isLoggedin}>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer flex relative max-w-[50px]"
                  >
                    <BsBag className="text-2xl" />
                    <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
                      {itemAmount}
                    </div>
                  </div>
                </ShouldRender>
              </li>
              <ShouldRender when={!isLoggedin}>
                <li>
                  <Link
                    to="/signin"
                    className="p-1 rounded-lg bg-white text-primary border ml-2 border-primary hover:text-white hover:bg-primary"
                  >
                    Sign in
                  </Link>
                </li>
              </ShouldRender>
              <ShouldRender when={isLoggedin}>
                <li>
                  <button
                    onClick={onLogoutButton}
                    className="ml-2 border px-1 border-primary rounded text-primary hover:text-white hover:bg-primary"
                  >
                    Logout
                  </button>
                </li>
              </ShouldRender>
            </ul>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <MobileMenu />
          <ShouldRender when={isMenuOpen}>
            <ToggleMenu />
          </ShouldRender>
        </div>
      </nav>
    </header>
  );
};

export default Header;
