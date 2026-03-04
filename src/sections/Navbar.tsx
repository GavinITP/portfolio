import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Education", "Experience", "Projects", "Achievements"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-display text-3xl tracking-tight uppercase font-extrabold cursor-pointer text-purple-600">
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
              className="px-5 py-2 bg-white text-black hover:bg-purple-600 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Animated Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-8 bg-white transition duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Fullscreen Overlay (Height NEVER changes) */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-screen bg-black text-white px-6 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col mt-10 space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`transform transition duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`mt-6 px-5 py-2 bg-white hover:bg-purple-600 hover:text-white text-black text-center transition duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
