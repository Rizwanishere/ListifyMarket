import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "/assets/listifymarketLogoGray.png";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-100 text-light-grey border border-gray-200 rounded-xl p-3 mt-4">
      <div className="container mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex text-2xl mb-6 lg:mb-0 lg:text-left">
            <img src={logo} alt="ListifyMarket Logo" className="h-8 w-8 mr-2" />
            ListifyMarket
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li className="mb-3 font-bold text-primary">{title}</li>
                {items.map((link) => (
                  <li key={link} className="py-1.5">
                    <Link className="text-gray-700">{link}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center border-t border-blue-gray-50 py-4">
          <div className="mb-4 text-center font-normal text-blue-gray-900">
            &copy; {currentYear} ListifyMarket. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaFacebook className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaTwitter className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaInstagram className="text-xl mx-2 text-primary" />
            </a>
            <a
              href="https://github.com/rizwanishere/cgc-codecrafters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaGithub className="text-xl mx-2 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
