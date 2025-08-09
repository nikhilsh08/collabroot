"use client";
import {
  Facebook,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="shadow-sm">
      {/* Top Bar */}
      <div className="  mt-2 py-2 px-4 max-sm:hidden">
        <div className="w-[95%] mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-6 h-6 max-md:w-4 max-md:h-4 text-orange-500" />
              <p>+1 (212)-578-5758</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-6 h-6 max-md:w-4 max-md:h-4 text-orange-500" />
              <p> nikhil@collabroot.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-8 max-md:space-x-3">
            <Twitter className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-500 hover:text-orange-500 cursor-pointer" />
            <Facebook className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-500 hover:text-orange-500 cursor-pointer" />
            <Linkedin className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-500 hover:text-orange-500 cursor-pointer" />
            <Youtube className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-500 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-300 border-0 max-sm:hidden dark:bg-[#333333]" />

      {/* Navigation */}
      <nav className="bg-white py-4 px-4">
        <div className="w-[94.5%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                <div className="absolute inset-1 border border-white rounded-xs"></div>
              </div>
            </div>
            <span className="text-3xl heading-font font-bold text-gray-800">
              Collabroot
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center paragraph-font space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Pages
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-orange-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col paragraph-font space-y-4 pt-4">
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Pages
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
