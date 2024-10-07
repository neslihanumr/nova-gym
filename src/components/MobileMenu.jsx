import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="block md:hidden p-4 focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-[#d8d8d8] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#d8d8d8] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#d8d8d8]"></div>
      </button>

      {/* Menu Items */}
      <div
        className={`fixed inset-0 bg-[#242424] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full "
        }`}
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <nav className="flex flex-col items-center mt-8">
          <Link to="/" className="text-xl p-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="text-xl p-2" onClick={handleLinkClick}>
            About
          </Link>
          <div className="text-xl p-2 cursor-pointer" onClick={toggleServices}>
            Services
            <span className="ml-2">{isServicesOpen ? "▲" : "▼"}</span>
          </div>
          {isServicesOpen && (
            <div className="flex flex-col items-center mt-2">
              <Link
                to="/services/Stretch-training"
                className="text-lg p-2"
                onClick={handleLinkClick}
              >
                Stretch Training
              </Link>
              <Link
                to="/services/Kick-boxing"
                className="text-lg p-2"
                onClick={handleLinkClick}
              >
                Kick Boxing
              </Link>
              <Link
                to="/services/Body-building"
                className="text-lg p-2"
                onClick={handleLinkClick}
              >
                Body Building
              </Link>
              <Link
                to="/services/Weight-loss"
                className="text-lg p-2"
                onClick={handleLinkClick}
              >
                Weight Loss
              </Link>
            </div>
          )}
          <Link to="/blog" className="text-xl p-2" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/contact" className="text-xl p-2" onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
