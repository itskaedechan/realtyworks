import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-center py-2 px-4 bg-white shadow-md">
      {!isOpen && (
        <button
          className="absolute left-8 flex flex-col justify-between w-6 h-5 group"
          onClick={() => setIsOpen(true)}
        >
          <span className="block h-0.5 bg-gray-700 rounded transition-transform duration-200 group-hover:translate-x-1"></span>
          <span className="block h-0.5 bg-gray-700 rounded transition-transform duration-200 group-hover:scale-x-110"></span>
          <span className="block h-0.5 bg-gray-700 rounded transition-transform duration-200 group-hover:translate-x-1"></span>
        </button>
      )}

      <div className="mx-auto">
        <img
          src="/logo/header-logo.webp"
          alt="Company Logo"
          className="w-[250px] md:w-[400px]"
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-10 right-10 text-2xl font-bold text-gray-700 hover:text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="p-16 flex flex-col space-y-6 text-[#826C6C] font-sanspro text-sm mt-8">
          <Link
            to="home"
            smooth={true}
            className="font-bold hover:text-gray-700 transition-transform duration-300 hover:scale-110"
          >
            HOME
          </Link>
          <Link
            to="listings"
            smooth={true}
            className="hover:text-gray-700 transition-transform duration-300 hover:scale-110"
          >
            LISTINGS
          </Link>
          <Link
            to="about-section"
            smooth={true}
            className="hover:text-gray-700 transition-transform duration-300 hover:scale-110"
          >
            ABOUT US
          </Link>
          <Link
            to="callorvisit"
            smooth={true}
            className="hover:text-gray-700 transition-transform duration-300 hover:scale-110"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
