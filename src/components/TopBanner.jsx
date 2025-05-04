import React from "react";
import { ArrowRight, Check } from "lucide-react";

const TopBanner = () => {
  const benefits = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit.",
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 w-full mx-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Subtitle */}
        <p className="text-sm md:text-base uppercase tracking-wider text-[var(--custom-green)] font-medium mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        {/* Main heading - split into multiple lines for styling */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12">
          <div className="bg-gradient-to-r from-[var(--custom-green)] to-[var(--custom-green-dark)] bg-clip-text text-transparent mb-2 uppercase">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
            <br />
            Lorem ipsum dolor sit amet.
          </div>
        </h1>

        {/* Benefits list */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-center px-6 py-3 bg-white rounded-full shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check size={16} className="text-[var(--custom-green)]" />
              </div>
              <span className="text-gray-800">
                {benefit.text.split(" ").map((word, i, arr) => {
                  return (
                    <span key={i}>
                      {i > 0 ? " " : ""}
                      {word}
                    </span>
                  );
                })}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--custom-green)] to-[var(--custom-green-dark)] text-white shadow-lg transition-all hover:shadow-xl">
            <div className="text-left">
              <span className="font-medium">Lorem, ipsum dolor.</span>
              <br />
              <span className="text-xs opacity-90">
              (Lorem ipsum dolor sit.)
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ml-4">
              <ArrowRight size={20} className="text-white" />
            </div>
          </button>
        </div>

        {/* Watch demos link */}
        <a
          href="#demos"
          className="inline-block text-[var(--custom-green)] hover:text-[var(--custom-green)] border-b border-[var(--custom-green)] pb-1 transition-colors"
        >
          Lorem, ipsum dolor.
        </a>
      </div>
      <div className="mt-12 md:mt-20 w-[90%] mx-auto">
        <img
          src="assets/TopBanner.png"
          alt="Route Planning Demo"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
};

export default TopBanner;
