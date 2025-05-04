import React from "react";

const RoutingDispatchApp = () => {
  return (
    <section className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white p-7 rounded-2xl">
      <div className=" px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-white text-blue-600 text-xs font-bold uppercase px-2 py-1 rounded-full mb-4 inline-block">
            New
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Routing & Dispatch App
          </h2>
          <p className="text-white/90 mb-6">
            Plan and dispatch optimal routes with the NextBillion.ai Routing &
            Dispatch App – designed for fleet managers & dispatchers.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium  cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1">
            Learn More
          </button>
        </div>

        {/* Right Content (Image Placeholder) */}
        <div className="flex-1">
          <img
            src="assets/bigmap.png" // Replace with the actual image path
            alt="Routing & Dispatch App"
          />
        </div>
      </div>
    </section>
  );
};

export default RoutingDispatchApp;
