import React from "react";
import Btnplain from "./btnplain";

const Integrations = () => {
  return (
    <section className="bg-white py-16 md:py-20 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            and ERP systems.
          </p>
          <Btnplain text="adipisicing elit."/>
        </div>

        {/* Right Content (Image Placeholder) */}
        <div className="flex-1">
          <img
            src="assets/integration-new.png"
            alt="Integration Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
