import { useState } from "react";

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
          className="w-[400px]"
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
          <a href="#" className="font-bold hover:text-gray-700">
            HOME
          </a>
          <a href="#" className="hover:text-gray-700">
            LISTINGS
          </a>
          <a href="#" className="hover:text-gray-700">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-700">
            LET'S MOVE
          </a>
          <a href="#" className="hover:text-gray-700">
            CONTACT US
          </a>
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
