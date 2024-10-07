import React, { useState, useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const location = useLocation();
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100); // Update scrolled based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `fixed w-full z-50 ${
    isHomePage && !scrolled
      ? "md:bg-transparent md:backdrop-blur-md bg-[#242424]"
      : "bg-[#242424]"
  }`;

  return (
    <nav className={navbarClass}>
      <div className={`md:container flex justify-between items-center h-16 `}>
        {/* Logo */}
        <h1 className="text-[#d8d8d8] text-xl font-semibold mr-4">
          Nova<span className="text-[#C0EA18]">gym</span>
        </h1>
        {/* Navbar */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className="text-[#d8d8d8] hover:text-[#98F224] font-jura px-3 py-2 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#d8d8d8] hover:text-[#98F224] font-jura  px-3 py-2 transition-colors duration-300"
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className="text-[#d8d8d8] hover:text-[#98F224] font-jura px-3 py-2 transition-colors duration-300"
            >
              Services
            </button>
            {servicesDropdown && (
              <div className="absolute top-full font-jura left-0 mt-2 w-48 bg-[#242424] border border-gray-700 rounded-md shadow-lg">
                <Link
                  to="/services/Stretch-training"
                  className="block px-4 py-2 text-[#d8d8d8] hover:text-[#98F224] hover:bg-[#343434] transition-colors duration-300"
                  onClick={() => setServicesDropdown(false)}
                >
                  Stretch Training
                </Link>
                <Link
                  to="/services/Kick-boxing"
                  className="block px-4 py-2 text-[#d8d8d8] hover:text-[#98F224] hover:bg-[#343434] transition-colors duration-300"
                  onClick={() => setServicesDropdown(false)}
                >
                  Kick Boxing
                </Link>
                <Link
                  to="/services/Body-building"
                  className="block px-4 py-2 text-[#d8d8d8] hover:text-[#98F224] hover:bg-[#343434] transition-colors duration-300"
                  onClick={() => setServicesDropdown(false)}
                >
                  Body Building
                </Link>
                <Link
                  to="/services/Weight-loss"
                  className="block px-4 py-2 text-[#d8d8d8] hover:text-[#98F224] hover:bg-[#343434] transition-colors duration-300"
                  onClick={() => setServicesDropdown(false)}
                >
                  Weight Loss
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="text-[#d8d8d8] hover:text-[#98F224] font-jura  px-3 py-2 transition-colors duration-300"
          >
            Blog
          </Link>
        </div>
        {/* Contact */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#98F224] text-gray-800 px-8 py-2 rounded-md hover:bg-[#f3f6ef] font-jura transition-colors duration-300"
        >
          Contact
        </Link>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
