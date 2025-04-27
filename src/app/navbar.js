"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full px-4 py-3 md:px-8">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex flex-row items-center">
          <img src="/images/logo.png" alt="Logo" width={48} height={48} />
          <Link href="/" className="text-xl pl-4 font-bold text-blue-600" >Elvis Restaino</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden items-center md:flex space-x-6">
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-large font-bold">About Us</a>
          <a href="/signin" className="text-gray-700 hover:text-blue-600 font-large font-bold">Sign In</a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-large font-bold">Sign Up</a>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">About Us</a>
          <a href="/signin" className="block text-gray-700 hover:text-blue-600 font-medium">Sign In</a>
          <a href="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;