import React from "react";

const partners = [
  { id: 1, name: "Accenture", logo: "assets/accenture.png" },
  { id: 2, name: "Persistent", logo: "assets/persistent.png" },
  { id: 3, name: "Searce", logo: "assets/searce.png" },
  { id: 4, name: "Morphia", logo: "assets/morphia.png" },
];

const Partners = () => {
  return (
    <section className="mt-10 py-16 md:py-20 max-w-6xl mx-auto">
      <div className=" px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Partner with Us: Build Smarter Location & Logistics Solutions
        </h2>
        <p className="text-gray-600 mb-8">
          Are you an IT services company building location-based software for
          businesses? Partner with NextBillion.ai to get exclusive benefits,
          premium technical support & white-label our solutions.
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-64 h-32 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-md font-medium cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Partners;
