import React, { useContext } from "react";
import { SidebarContext } from "./Contexts/SidebarContext";
import { CartContext } from "./Contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/listifymarketLogo.png";
import ShouldRender from "./util/ShouldRender";
import UserContext from "./Contexts/UserContext";

const Header = () => {
  const { isLoggedin, setLoggedin } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogoutButton = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    setLoggedin(false);
  };
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-white text-light-grey border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex text-2xl">
          <img src={logo} alt="ListifyMarket Logo" className="h-8 w-8 mr-2" />
          ListifyMarket
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" class="JS76Uv" className="nav-link">
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
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer flex relative max-w-[50px]"
            >
              <BsBag className="text-2xl" />
              <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
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
              <button onClick={onLogoutButton} className="nav-link">
                Logout
              </button>
            </li>
          </ShouldRender>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
