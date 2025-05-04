import React from "react";
import { ArrowRight } from "lucide-react";

const RoutingConstraints = () => {
  const features = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet.",
  ];

  return (
    <section className="bg-white py-16 md:py-20 max-w-6xl mx-auto ">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum!
      </h2>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corrupti.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[var(--custom-green)]" />
                </div>
                <span className="text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <img src="assets/code.png" alt="Routing Constraints Illustration" />
        </div>
      </div>
    </section>
  );
};

export default RoutingConstraints;
