"use client";
import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa"; // Replace with a valid icon
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Import required icons

import LogoGrid from "./LogoGrid"; // Ensure the file path is correct

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-100 bg-black py-10">
      <div className="container mx-auto flex flex-wrap justify-between gap-0 p-2">
        
        {/* Exclusive Section */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-md font-semibold mb-4 text-white">Exclusive.</h2>
          <h3 className="text-md  mb-4">Subscribe.</h3>
          <p className="text-xs font-normal mb-1">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Write your email"
              className="w-48 px-1 py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <FaLocationArrow className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white" size={20} />

          </div>
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-md font-semibold mb-4">Support</h3>
          <p>lll Bijoy sarani, Dhaka,</p>
          <p>Phone: DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-md font-semibold text-white mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="/account" className="hover:text-gray-100">My Account</Link></li>
            <li><Link href="/register" className="hover:text-gray-100">Login/Register</Link></li>
            <li><Link href="/cart" className="hover:text-gray-100">Cart</Link></li>
            <li><Link href="/wishlist" className="hover:text-gray-100">Wishlist</Link></li>
            <li><Link href="/shop" className="hover:text-gray-100">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-md font-semibold mb-2 text-white">Quick Link</h3>
          <ul className="space-y-2">
            <li><Link href="/policies" className="hover:text-gray-100">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-100">Terms Of Use</Link></li>
            <li><Link href="/faq" className="hover:text-gray-100">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-gray-100">Contact</Link></li>
          </ul>
        </div>

        {/* Last Column - Download App Section */}
        <div className="flex-1 min-w-[200px]">
          <LogoGrid /> {/* Ensure this component exists and is properly implemented */}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-0 -mt-6 justify-end mr-24">
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black hover:border-blue-500"
      >
        <FaTwitter className="text-white w-6 h-6" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black hover:border-blue-800"
      >
        <FaFacebookF className="text-white w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black hover:border-blue-700"
      >
        <FaLinkedinIn className="text-white w-6 h-6" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-black hover:border-pink-500"
      >
        <FaInstagram className="text-white w-6 h-6" />
      </a>
    </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-xs text-center text-white py-2">
        <p>&copy; 2024-25 Ummay Kulsoom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
