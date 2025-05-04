import React from "react";
import Btnlg from "./Btnlg";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita.
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, molestias inventore. Earum animi nisi sapiente voluptate modi magni reprehenderit at officia inventore sit. Iste ea reiciendis magni libero quae recusandae!
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
        <Btnlg text="Learn More"/>
      </div>
    </section>
  );
};

export default Partners;
