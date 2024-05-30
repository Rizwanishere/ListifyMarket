import React, { useContext } from "react";
import { SidebarContext } from "./Contexts/SidebarContext";
import { CartContext } from "./Contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "/assets/listifymarketLogo.png";

const Header = () => {
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
            <Link to="/users" className="nav-link">
              Users
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
