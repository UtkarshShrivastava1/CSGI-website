import React, { useState } from 'react';
import { User } from 'lucide-react';
import Logo from '../assets/csitlogo.png';
import Image1 from '../assets/Aicte-logo.png';
import Image2 from '../assets/Institutions innovation council.png';
import Image3 from '../assets/ISO_logo.png';
import Image4 from '../assets/CSVTU.png';
import Image5 from '../assets/dataquest.png';

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
      <div className="bg-gray-200 text-white py-2 px-4 md:py-4 md:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center container mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6">
            <img src={Logo} alt="CSIT Logo" className="w-40 h-auto rounded-full" />
            <div>
              <h1 className="text-3xl text-black font-serif">Chhatrapati Shivaji Group of Institutions</h1>
              <p className="text-sm text-black">Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001</p>
            </div>
          </div>
          
          {/* Additional Photos - Desktop Only */}
          <div className="flex space-x-3">
            <img src={Image1} alt="Sample 1" className="h-12 w-auto rounded-md" />
            <img src={Image2} alt="Sample 2" className="h-12 w-auto rounded-md" />
            <img src={Image3} alt="Sample 3" className="h-12 w-auto rounded-md" />
            <img src={Image4} alt="Sample 4" className="h-12 w-auto rounded-md" />
            <img src={Image5} alt="Sample 5" className="h-12 w-auto rounded-md" />
          </div>
        </div>
        
        {/* Mobile View - Left Logo, Right Info */}
        <div className="md:hidden flex justify-between items-center">
          {/* Logo on Left - Increased Size */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="CSIT Logo" className="w-24 h-auto rounded-full" />
          </div>
          
          {/* Institution Info on Right */}
          <div className="text-right flex-grow ml-3">
            <h1 className="text-sm text-black font-serif">Chhatrapati Shivaji Institute of Technology</h1>
            <p className="text-xs text-black">Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only showing the ADMISSION icon as per original code */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {/* Icons with labels */}
            <div className="flex justify-around py-4 border-b">
              <div className="flex flex-col items-center">
                <User size={20} className="text-red-900" />
                <span className="text-xs mt-1">ADMISSION</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;