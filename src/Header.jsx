import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-dark-slate text-light-grey border border-black">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="text-2xl font-serif">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                    </svg>
                    ListifyMarket
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/about" class="JS76Uv" className="font-serif">About</Link></li>
                    <li><Link to="/products" className="font-serif">Products</Link></li>
                    <li><Link to="/todo" className="font-serif">Tasks</Link></li>
                    <li><Link to="/users" className="font-serif">Users</Link></li>
                    <li><Link to="/contact" className="font-serif">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


