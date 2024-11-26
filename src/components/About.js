import React from "react";

const About = () => {
    return (
        <div style={{ width: "100%", marginTop: "100px"}}>
            {/* Container for the image and the text overlay */}
            <div style={{
                width: "100%",
                height: "60vh",
                position: "relative",
                overflow: "hidden",
                backgroundImage: 'url("/about/background.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // Add a dark overlay for more depth
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {/* Dark overlay */}
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",  // Dark overlay with some transparency
                    zIndex: 0  // Ensure overlay is below the text
                }}></div>
                
                {/* Text overlay */}
                {/* <div style={{
                    position: "relative",  // Changed to relative to position it above the overlay
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",  // Slightly stronger shadow for more readability
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    zIndex: 1  // Ensure the text is above the overlay
                }}>
                    About SJ Estates
                </div> */}

                <div style={{
                    position: "relative", 
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)", 
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    zIndex: 1
                }}>
                    About <span style={{ display: "inline-block", verticalAlign: "middle", margin:"0" }}>
                        <img 
                            src="/carousel/logo.png" 
                            alt="SJ Logo" 
                            style={{ 
                                height: "4em",  // Adjust height as needed
                                verticalAlign: "middle"
                            }} 
                        />
                    </span> Estates
                </div>


            </div>



            {/* Text content below the image */}
            <div style={{
                padding: "40px 20px",
                marginTop: "20px",
                maxWidth: "1000px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.6",
                fontSize: "18px",
                textAlign: "justify",
                color: "#333",
                fontFamily: "Arial, sans-serif",
            }}>
                <p className="text-gray-800 text-base leading-relaxed" style={{fontSize: "1.1rem"}}>
                    SJ Private Limited* is a premier real estate management company, dedicated to overseeing and optimizing the expansive real estate portfolio of Sushant Jain. Focusing on innovation, integrity, and excellence, we specialize in managing high-value residential, commercial, and mixed-use properties, ensuring sustainable growth and maximizing stakeholder value. Our expertise spans property acquisition, development, leasing, and long-term asset management, making us a trusted partner in the real estate industry. At SJ Private Limited, we are committed to building lasting relationships and delivering exceptional real estate solutions that elevate lifestyles and drive success.
                </p>
            </div>
        </div>
    );
};

export default About;
