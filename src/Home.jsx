import { Link } from "react-router-dom";
import shoppingPic from "../assets/shoppingPic2.jpg";
import todoPic from "../assets/todoPic2.jpg";
import ApiPing from "./util/ApiPing";

function Home() {
  return (
    <div className="flex bg-white text-black text-center">
      <div className="container mx-auto px-4 py-8">
        <div>
        <ApiPing />
          <h1 className="text-2xl md:text-4xl mt-4 mb-4 ml-4 animate-fadeIn">Welcome to ListifyMarket</h1>
          <p className="text-md md:text-lg mb-8 ml-4 animate-slideIn">Your one-stop destination for all your shopping needs.</p>
          <div className="flex justify-center">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
              <Link to="/product" className="flex justify-center">
                <div className="border-2 border-primary p-4 rounded-md shadow-lg hover:shadow-2xl w-full max-w-xs md:max-w-sm">
                  <img src={shoppingPic} alt="Shop Now" className="w-full h-auto object-cover mb-4" />
                  <h2 className="text-xl md:text-3xl mb-2">Shop Now</h2>
                  <p className="text-md md:text-lg">Discover our latest products and deals.</p>
                </div>
              </Link>
              <Link to="/todo" className="flex justify-center">
                <div className="border-2 border-primary p-4 rounded-md shadow-lg hover:shadow-2xl w-full max-w-xs md:max-w-sm">
                  <img src={todoPic} alt="Tasks" className="w-full h-auto object-cover mb-4" />
                  <h2 className="text-xl md:text-3xl mb-2">Tasks</h2>
                  <p className="text-md md:text-lg">Complete your pending tasks</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
