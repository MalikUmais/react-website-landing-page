import React from "react";

const Integrations = () => {
  return (
    <section className="bg-white py-16 md:py-20 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NextBillion.ai APIs integrate with all logistics applications
          </h2>
          <p className="text-gray-600 mb-8">
            Add advanced routing and dispatch capabilities to your telematics
            and ERP systems.
          </p>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md   cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1">
            View Integrations
          </button>
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
