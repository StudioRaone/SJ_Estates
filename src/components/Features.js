import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const FeaturesSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="container justify-center" style={{ marginTop: "100px", padding: '20px', paddingTop: '60px' }}>
        <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      </div>

      {/* Second Section */}
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div className="container flex justify-center items-center my-12">
          <div className="w-full max-w-5xl lg:flex">
            
            
            {/* Carousel Section */}


            <div className="lg:w-2/5 flex-none text-center">
              <Slider {...settings}>
                <div>
                  <img
                    src="/properties/estate2/1.jpeg"
                    alt="Image 1"
                    className="object-contain w-full h-full rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate2/2.jpeg"
                    alt="Image 2"
                    className="object-contain w-full h-full rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate2/3.jpeg"
                    alt="Image 3"
                    className="object-contain w-full h-full rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                
                <div>
                  <img
                    src="/properties/estate2/4.jpeg"
                    alt="Image 3"
                    className="object-contain w-full h-full rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                
                <div>
                  <img
                    src="/properties/estate2/5.jpeg"
                    alt="Image 3"
                    className="object-contain w-full h-full rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>

              </Slider>
            </div>

            {/* Added space between image and content */}
            <div className="lg:w-1/12"></div>

            {/* Card content */}
            
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-center items-start leading-normal lg:w-3/5">
              <div>
                <div className="text-gray-900 font-bold text-xl mb-2">
                108 Ocean Road, South Shields
                </div>
                <a href="https://maps.app.goo.gl/aFLRX4cjkgJfC7gVA" target="_blank" style={{textDecoration: "none"}}>
                  <div className="text-gray-500 text-l mb-2">
                  Address: 108 Ocean Road, South Shields, NE33 2JF
                  </div>
                </a>
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  Exciting opportunity at 108 Ocean Road, South Shields – a well-established fish and chips shop in a bustling, high-traffic area near the coastline.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  The shop features a traditional frontage, a fully equipped kitchen, and a spacious counter with seating. It draws a steady stream of locals and visitors.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  With high footfall from nearby attractions, this is a prime location for a successful business or expansion.
                </p>

              </div>
            </div>
            
          </div>
        </div>
      </div>


      {/* Third Section */}
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div className="container flex justify-center items-center my-12">
          <div className="w-full max-w-5xl lg:flex">
            
            
            {/* Carousel Section */}


            <div className="lg:w-2/5 flex-none text-center max-h-64">
              <Slider {...settings}>
                <div>
                  <img
                    src="/properties/estate3/1.jpeg"
                    alt="Image 1"
                    className="object-contain w-full max-h-64 rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate3/2.jpeg"
                    alt="Image 2"
                    className="object-contain w-full max-h-64 rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate3/3.jpeg"
                    alt="Image 3"
                    className="object-contain w-full max-h-64 rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate3/4.jpeg"
                    alt="Image 3"
                    className="object-contain w-full max-h-64 rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
                <div>
                  <img
                    src="/properties/estate3/5.jpeg"
                    alt="Image 3"
                    className="object-contain w-full max-h-64 rounded-t lg:rounded-t-none lg:rounded-l"
                  />
                </div>
              </Slider>
            </div>

            {/* Added space between image and content */}
            <div className="lg:w-1/12"></div>

            {/* Card content */}
            
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-center items-start leading-normal lg:w-3/5">
              <div>
                <div className="text-gray-900 font-bold text-xl mb-2">
                110 Ocean Road, South Shields
                </div>
                <a href="https://maps.app.goo.gl/xjSUkXsYJdyUmuDr7" target="_blank" style={{textDecoration: "none"}}>
                  <div className="text-gray-500 text-l mb-2">
                  Address: 110 Ocean Road, South Shields, NE33 2JF
                  </div>
                </a>
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  Welcome to 110 Ocean Road, a delightful 2-bedroom property in South Shields, just a short stroll from the picturesque coastline. This home beautifully blends seaside charm with urban convenience.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  Inside, you'll find two generously sized bedrooms bathed in natural light, creating a peaceful and inviting atmosphere. The open-plan living and dining area is perfect for entertaining guests or enjoying cozy evenings at home. The well-equipped kitchen features modern fixtures and ample storage space.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  The property’s prime location offers easy access to local amenities, including shops, restaurants, and cafes, as well as excellent transport links. Ideal for first-time buyers, investors, or anyone seeking a tranquil seaside retreat.
                </p>


              </div>
            </div>


          </div>
        </div>
      </div>



    </div>
  );
};

export default FeaturesSection;