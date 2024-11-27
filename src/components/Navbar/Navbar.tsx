import { useState } from "react";
import logo from "../../assets/NCBDG.png";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-lg z-20">
      <div className="bg-[#fb5659] h-2"></div>
      <div className="container mx-auto px-9 lg:px-15">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[9vw] lg:h-[3.7vw] lg:w-auto w-auto"
              loading="lazy"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="py-2 px-4 rounded text-gray-800 hover:bg-gray-100 font-sans"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded text-gray-800 hover:bg-gray-100"
            >
              About
            </a>
            {/* Dropdown */}
            <div className="relative z-10">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="py-2 px-4 flex items-center gap-2 rounded text-gray-800 hover:bg-gray-100"
              >
                <span>Our Activities</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-500 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg transition-all duration-500 transform origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Cosplay
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Board Games
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  SEO
                </a>
              </div>
            </div>
            <a
              href="#"
              className="py-2 px-4 rounded text-gray-800 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden z-10`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            About
          </a>
          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
            >
              <span>Our Activities</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`pl-4 transition-all duration-300 ${
                isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              >
                Cosplay
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              >
                Board Games
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              >
                SEO
              </a>
            </div>
          </div>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
