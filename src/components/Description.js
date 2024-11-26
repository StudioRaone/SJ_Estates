import React from "react";

const Description = () => {
  return (
    <div className="container" style={{ width: "95%", marginTop: '5%' }}>
      <section className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          {/* <h1 className="text-3xl font-bold">Hi, I'm Sushant</h1> */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight tracking-wide" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Hi, I'm Sushant
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6" style={{ paddingLeft: "4%", paddingRight: "4%", paddingBottom: "4%", paddingTop: "2%" }}>
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 w-full lg:w-1/3">
            <img
              src="/about/profileImage.jpg" // Replace with your logo path
              alt="Company Logo"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-gray-700 text-base leading-relaxed" style={{textAlign:"left"}}>
              Welcome to my real estate portfolio, where passion for property and commitment to client satisfaction come together. With a deep understanding of the real estate market and a keen eye for quality, I specialize in finding exceptional properties that match my client’s unique needs and aspirations.
              <br />
              My journey in real estate has been driven by a genuine love for connecting people with their perfect homes and investment opportunities. Whether you're looking for a new place to call home, a commercial space for your growing business, or an investment property to diversify your portfolio, I am here to help guide you through every step.
              <br />
              What sets me apart is a personalized approach to real estate. I take the time to listen, understand, and collaborate with you, ensuring that every decision is informed and every transaction is seamless. My goal is not just to meet but exceed your expectations, providing a real estate experience that is as rewarding as it is stress-free.
              <br />
              Explore my portfolio and discover a curated property collection that showcases my dedication to quality and excellence. Let’s make your real estate dreams a reality.
              <br />
              <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px" }}>
                Your vision, my commitment.
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Description;
