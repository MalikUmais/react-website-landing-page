import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Btnplain from "./btnplain";
import Btnlg from "./Btnlg";

// Dynamic data for sections
const sections = [
  {
    id: 1,
    title: "Route Optimization API",
    description:
      "Get efficient routes for your vehicle drivers and field service agents to perform a series of deliveries or tasks.",
    features: [
      "Generate truck-safe routes",
      "Choose from 50+ constraints",
      "Optimize custom travel cost",
    ],
    buttonText: "Learn about Route Optimization",
    isCarousel: true, // Indicates this section has a carousel
    slides: [
      {
        id: 1,
        title: "Custom Objective - Equal Task Distribution",
        img: "assets/code.png",
      },
      {
        id: 2,
        title: "Custom Objective - Minimize Travel Time",
        img: "assets/code.png",
      },
      {
        id: 3,
        title: "Custom Objective - Maximize Deliveries",
        img: "assets/code.png",
      },
    ],
  },
  {
    id: 2,
    title: "Distance Matrix API",
    description:
      "Get accurate transit ETAs and distances from all origins to destinations without high cost or latency.",
    features: [
      "Generate truck mileage",
      "Solve 5000x5000 matrix size",
      "Use a low-latency endpoint",
    ],
    buttonText: "Learn about Distance Matrix Calculations",
    isCarousel: false, // Indicates this section is a text box
    image: "assets/code.png", // Placeholder for the black code box
  },
  {
    id: 3,
    title: "Directions API",
    description:
      "Compute the shortest or fastest route between an origin and a destination for cars, motorcycles, or trucks.",
    features: [
      "Routes with multiple stops",
      "Real-Time & Historical Traffic Data",
      "Avoid tolls, highways, and sharp turns",
    ],
    buttonText: "Learn about Directions API",
    isCarousel: false, // Indicates this section is a text box
    image: "assets/code.png", // Placeholder for the black code box
  },
];

const RouteOptimization = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sections[0].slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12`}
          >
            {/* Left Content */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <div className="space-y-4 mb-6">
                {section.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Check className="w-5 h-5 text-purple-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md transform transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
                {section.buttonText}
              </button>
            </div>

            {/* Right Content */}
            <div className="flex-1 relative">
              {section.isCarousel ? (
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {section.slides.map((slide) => (
                      <div
                        key={slide.id}
                        className="min-w-full p-6 flex flex-col items-start"
                      >
                        <img src={slide.img} alt={slide.title} />
                      </div>
                    ))}
                  </div>

                  {/* Dots for navigation */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {section.slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentSlide === index
                            ? "bg-purple-600"
                            : "bg-gray-400 hover:bg-gray-500"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              ) : (
                <img src={section.image} alt={section.title} />
              )}
            </div>
          </div>
        ))}

        {/* CTA Buttons */}
        <div className="flex justify-center mt-12 space-x-4">
          <Btnlg text="View three pricing options" />
          <Btnplain text="Explore all APIs and SDKs" />
        </div>
      </div>
    </section>
  );
};

export default RouteOptimization;
