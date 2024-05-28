import { Link } from "react-router-dom";
import './styles.css';
import logo from '/assets/listifymarketLogo.png';

function Header() {
    return (
        <header className="sticky top-0 bg-white text-light-grey border-b border-gray-200">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="flex text-2xl">
                    <img src={logo} alt="ListifyMarket Logo" className="h-8 w-8 mr-2" />
                    ListifyMarket
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/about" class="JS76Uv" className="nav-link">About</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/todo" className="nav-link">Tasks</Link></li>
                    <li><Link to="/users" className="nav-link">Users</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


