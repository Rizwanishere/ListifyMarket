import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex bg-white text-black text-center">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-serif mt-4 mb-4 ml-4 animate-fadeIn">Welcome to ListifyMarket</h1>
          <p className="text-lg mb-8 ml-4 font-serif animate-slideIn">Your one-stop destination for all your shopping needs.</p>
          <div className="grid flex justify-center">
            <div className="animate-fadeInLeft">
              <Link to="/products" className="flex justify-center">
                <div className="border border-gray-300 p-4 rounded-md">
                  {/* Add your image here */}
                  <img src="../assets/prdImg.png" alt="Placeholder" className="w-100 h-72 mb-4" />
                  <h2 className="text-2xl font-serif mb-2">Shop Now</h2>
                  <p className="font-serif text-lg">Discover our latest products and deals.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="animate-slideInRight mt-24">
          <p className="text-3xl font-serif mb-4">Why Choose ListifyMarket?</p>
          <ul className="text-lg font-serif ml-8 mb-6">
            <li>Wide range of products</li>
            <li>Great deals and discounts</li>
            <li>Fast and reliable shipping</li>
          </ul>
          <p className="text-lg font-serif">Start shopping today and experience the convenience of online shopping with ListifyMarket!</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
