import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          {/* Left: Company Logo */}
          <div className="flex items-center mb-6 lg:mb-0">
            <img
              src="/carousel/logo.png" // Replace with your logo path
              alt="Company Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Center: Contact Details */}
          <div className="text-center mb-6 lg:mb-0">
            {/* <p className="text-md mb-1">123 Ocean Road, South Shields, NE33 1AA</p>
            <p className="text-md mb-1">Phone: (123) 456-7890</p> */}
            <p className="text-md">
              Email: <a href="mailto:sushantjain@sjprivatelimited.com" className="text-blue-400 hover:underline">sushantjain@sjprivatelimited.com</a>
            </p>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center space-x-6 mt-4 lg:mt-0" style={{paddingRight: "35px", paddingLeft:"35px"}}>
            <a
              href="https://www.linkedin.com/company/sj-private-limited/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={50} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center" style={{textAlign:'center', marginTop:'20px'}}>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} SJ Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



{/* <a
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a> */}