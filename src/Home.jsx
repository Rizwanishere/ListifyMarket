import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex bg-white text-black text-center">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl mt-4 mb-4 ml-4 animate-fadeIn">Welcome to ListifyMarket</h1>
          <p className="text-lg mb-8 ml-4 animate-slideIn">Your one-stop destination for all your shopping needs.</p>
          <div className="grid flex justify-center">
            <div>
              <Link to="/products" className="flex justify-center">
                <div className="border-2 border-primary p-4 rounded-md shadow-lg hover:shadow-2xl">
                  <img src="../assets/shoppingPic.jpg" alt="Placeholder" />
                  <h2 className="text-3xl mb-2">Shop Now</h2>
                  <p className="text-lg">Discover our latest products and deals.</p>
                </div>
              </Link>
              <Link to="/todo" className="flex justify-center mt-10">
                <div className="border-2 border-primary p-4 rounded-md shadow-lg hover:shadow-2xl">
                  <img src="../assets/todoPic.jpg" alt="Placeholder" />
                  <h2 className="text-3xl mb-2">Tasks</h2>
                  <p className="text-lg">Complete your pending tasks</p>
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