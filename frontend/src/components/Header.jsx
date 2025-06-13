import React, { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import
import Logo from "../assets/csitlogo.png";
import Image1 from "../assets/Aicte-logo.png";
import Image2 from "../assets/Institutions innovation council.png";
import Image3 from "../assets/ISO_logo.png";
import Image4 from "../assets/CSVTU.png";
import Image5 from "../assets/dataquest.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="bg-gray-200 text-white py-4 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                to="/"
                className="flex items-center space-x-4 md:space-x-6 hover:opacity-90 transition-opacity"
              >
                <img
                  src={Logo}
                  alt="CSIT Logo"
                  className="w-24 md:w-40 h-auto rounded-full"
                />
                <div className="text-left">
                  <h1 className="text-xl md:text-4xl text-black font-serif">
                    Chhatrapati Shivaji Group of Institutions{" "}
                  </h1>
                  <p className="text-xs md:text-sm text-black">
                    Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Side Menu - Modified for better mobile display */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              {/* Images Section - Visible on all devices */}
              <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0">
                {/* Additional Photos */}
                <div className="flex space-x-2 md:space-x-4">
                  <img
                    src={Image1}
                    alt="AICTE Logo"
                    className="h-10 w-10 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image2}
                    alt="IIC Logo"
                    className="h-10 w-10 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image3}
                    alt="ISO Logo"
                    className="h-10 w-10 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image4}
                    alt="CSVTU Logo"
                    className="h-10 w-10 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image5}
                    alt="DataQuest Logo"
                    className="h-10 w-10 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove the mobile menu since admission button is now always visible */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {/* Other mobile menu items if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
