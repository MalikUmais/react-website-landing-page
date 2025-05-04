import React, { useState } from "react";
import Button from "./Button";

const navLinks = [
  {
    title: "Product ▾",
    dropdown: [
      { label: "Route Optimization API", link: "#" },
      { label: "Distance Matrix API", link: "#" },
      { label: "Directions API", link: "#" },
    ],
  },
  {
    title: "Solutions ▾",
    dropdown: [
      { label: "Fleet Management", link: "#" },
      { label: "Logistics", link: "#" },
      { label: "E-commerce", link: "#" },
    ],
  },
  {
    title: "Resources ▾",
    dropdown: [
      { label: "Documentation", link: "#" },
      { label: "Technical Blogs", link: "#" },
      { label: "Integration", link: "#" },
    ],
  },
  {
    title: "Developers ▾",
    dropdown: [
      { label: "API Reference", link: "#" },
      { label: "Tutorials", link: "#" },
      { label: "Notebooks", link: "#" },
    ],
  },
  {
    title: "Company ▾",
    dropdown: [
      { label: "Logistics", link: "#" },
      { label: "Integration", link: "#" },
      { label: "Tutorials", link: "#" },
    ],
  },
  { title: "Pricing", dropdown: [] },
];

const Header = () => {
  const linkClasses =
    "cursor-pointer text-lg hover:text-purple-600 transition-colors duration-300 ease-in-out font-poppins";
  const btnClasses = "text-md px-4 py-2 cursor-pointer font-poppins rounded-lg";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://nextbillion.ai/wp-content/uploads/2022/10/nb-logo-colored-80x73.png" // replace with your logo
            alt="NextBillion.ai"
            className="h-18"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
          {navLinks.map((navItem, index) => (
            <div key={index} className="relative group">
              <span className={linkClasses}>{navItem.title}</span>
              {navItem.dropdown.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out">
                  {navItem.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Button
            className={`${btnClasses} px-5 border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-300`}
            text="Start Trial"
          />

          <Button
            className={`${btnClasses} text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 transition-opacity duration-300`}
            text="Request a Demo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
