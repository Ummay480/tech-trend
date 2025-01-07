"use client";

import React from "react";
import { BsQrCode } from "react-icons/bs"; // QR Code Icon
import { FaApple } from "react-icons/fa"; // Apple Icon
import { FaGooglePlay } from "react-icons/fa"; // Google Play Icon

const LogoGrid = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Title */}
      <h2 className="text-md font-semibold mb-2 text-white">Download App</h2>

      {/* Save Offer Text */}
      <p className="text-xs text-gray-400">Save $3 with App new user only</p>

      {/* Grid with QR Code and Store Links */}
      <div className="flex space-x-1 -ml-6">
        {/* QR Code */}
        <div className="flex-shrink-0 bg-black p-2 rounded-md">
          <BsQrCode className="w-20 h-20 text-white" /> {/* QR Code in white */}
        </div>

        {/* Google Play and Apple Store */}
        <div className="flex flex-col space-y-1">
          {/* Google Play Store */}
          <div className="flex items-center border p-2 rounded-sm space-x-1 bg-black text-white">
            <div className="w-5 h-5">
              <FaGooglePlay
                className="h-full w-full"
                style={{
                  background: "linear-gradient(45deg, #34A853, #FBBC05, #EA4335, #4285F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </div>
            <div>
              <p className="text-xs">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </div>

          {/* Apple Store */}
          <div className="flex items-center border p-1 rounded-sm space-x-1 bg-black text-white">
            <FaApple className="w-5 h-5" /> {/* White Apple Icon */}
            <div>
              <p className="text-xs">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
