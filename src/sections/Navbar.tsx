import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Education", "Experience", "Achievements", "Projects"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-display text-3xl tracking-tight uppercase font-extrabold cursor-pointer text-white">
            Ittipat Y
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white font-light hover:text-gray-400 transition duration-300"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-white text-black hover:bg-gray-400 hover:cursor-pointer transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between w-8 h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white backdrop-blur-md px-6 pb-4 h-screen">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-5 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full mt-3 px-5 py-2  rounded-xl bg-white text-black hover:bg-gray-800 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
