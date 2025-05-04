import React from "react";
import Btnplain from "./btnplain";

const caseStudies = [
  {
    id: 1,
    title: "Field Services",
    description: "Reduction in scheduling time",
    percentage: "40%",
    image: "assets/health.png", // Replace with the actual image path
  },
  {
    id: 2,
    title: "Middle Mile Logistics",
    description: "API costs savings",
    percentage: "30%",
    image: "assets/map.png", // Replace with the actual image path
  },
  {
    id: 3,
    title: "Logistics Software",
    description: "Reduction in Operating Costs",
    percentage: "35%",
    image: "assets/truck.png", // Replace with the actual image path
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 max-w-7xl mx-auto rounded-xl m-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <p className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-medium mb-4">
          Case Study
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Learn how transportation and logistics businesses improve operational
          KPIs with NextBillion.ai
        </h2>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-20 h-20 mb-4 rounded-full object-cover"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {study.title}
              </h3>
              <p className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-3xl font-bold mb-1">
                {study.percentage}
              </p>
              <p className="text-gray-600">{study.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Btnplain text="View more case studies" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
