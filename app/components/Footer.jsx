"use client";

import Image from "next/image.js";
import React from "react";
import { assets } from "../../assets/assets.js";
import { useTheme } from "../contexts/ThemeContext.js";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          shubhammohapatra2005@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Shubham Mohapatra. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li className="bg-white rounded-full">
            <a href="https://github.com/shubham-codee" target="_blank">
              <Image src="/GitHub.png" alt="" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/shubham-codee" target="_blank">
              <Image src="/LinkedIn.png" alt="" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
