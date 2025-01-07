"use client"; // Ensure client-side rendering 

import React, { useState } from 'react';
import Link from "next/link"; // Import Link for navigation
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  // State to toggle the search input visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 px-32 text-gray-800 bg-white">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link href="/" passHref>
          Exclusive
        </Link>
      </div>

      {/* Navigation links */}
      <ul className="flex item-center space-x-6 ml-12">
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/pages" passHref>
            Pages
          </Link>
        </li>
        <li>
          <Link href="/aboutUs" passHref>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right-side action buttons (Cart, Search, Wishlist) */}
      <div className="flex items-center space-x-2">
        {/* Search Block */}
        <div className="relative">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <CiSearch className="w-6 h-6" />
          </button>

          {/* Conditional Search Input */}
          {isSearchOpen && (
            <div className="absolute top-full mt-2 bg-white text-black">
              <input
                type="text"
                placeholder="Search..."
                className="px-1 py-1 rounded border-2 focus:outline-1"
                onBlur={() => setIsSearchOpen(false)} // Close input when focus is lost
              />
            </div>
          )}
        </div>

        {/* Wishlist Block */}
        <Link href="/wishlist" passHref>
          <button className="flex items-center space-x-2 px-2 py-2 border-none text-gray-800 hover:text-red-600">
            <CiHeart className="w-6 h-6" />
          </button>
        </Link>

        {/* Cart Block */}
        <Link href="/cart" passHref>
          <button className="relative flex items-center space-x-2 px-4 py-2 border-none text-gray-800 hover:bg-slate-600">
            <IoCartOutline className="w-6 h-6" />
            <span className="absolute top-0 right-0 text-xs font-bold text-red-600 bg-white rounded-full px-2 py-1">
              0
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
