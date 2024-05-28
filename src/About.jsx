function About() {
  return (
    <section>
      <div className="mb-7 mx-auto py-24 px-4 sm:px-4 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl text-primary">About ListifyMarket</h2>
            <p className="mt-4 text-gray-500 text-lg">
              Founded with a vision to revolutionize the online shopping
              experience. Since our inception, we have been committed to
              providing our customers with a wide range of high-quality
              products, exceptional customer service, and unbeatable prices. Our
              mission is to create a seamless and enjoyable shopping platform
              where customers can discover the latest trends, find great deals,
              and shop with confidence.
            </p>
            <div className="mt-8">
              <a href="#" className="text-primary">
                Learn more about ListifyMarket
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://kinsta.com/wp-content/uploads/2021/11/about-us-page-1024x512.png"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;