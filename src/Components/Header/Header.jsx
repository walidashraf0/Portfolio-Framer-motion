import { Logs, Menu } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <nav className="bg-white/50 text-black p-4 shadow-lg rounded-b-2xl">
          <div className="flex items-center justify-between mx-auto">
            <a href="#" className="text-2xl font-bold">
              Brand
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="cursor-pointer block text-block md:hidden"
            >
              {isOpen ? (
                <Logs className="text-3xl" />
              ) : (
                <Menu className="text-3xl" />
              )}
            </button>
            <ul
              className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent md:flex-row transition-all duration-300 ease-in-out ${
                isOpen ? "h-[200px]" : "h-0"
              }`}
            >
              <li>
                <a
                  href="#"
                  className={`block ${
                    isOpen ? "" : "max-md:hidden"
                  } transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600 cursor-pointer`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block ${
                    isOpen ? "" : "max-md:hidden"
                  } transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600 cursor-pointer`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block ${
                    isOpen ? "" : "max-md:hidden"
                  } transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600 cursor-pointer`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block ${
                    isOpen ? "" : "max-md:hidden"
                  } transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600 cursor-pointer`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
