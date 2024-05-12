import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark-slate text-light-grey border border-black p-3 mt-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <p className="lg:text-left ml-10">&copy; 2024 <p className="inline font-serif">ListifyMarket. All rights reserved.</p></p>
                <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
                        <FaFacebook className="text-xl mx-2" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
                        <FaTwitter className="text-xl mx-2" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
                        <FaInstagram className="text-xl mx-2" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



