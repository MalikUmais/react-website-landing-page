import React from "react";

const LogoCarousel = () => {
  const logos = [
    { id: 1, src: "assets/TREAD.svg", alt: "TREAD" },
    { id: 2, src: "assets/db.svg", alt: "DB" },
    { id: 3, src: "assets/AbInBev.svg", alt: "AbInBev" },
    { id: 4, src: "assets/doordash.svg", alt: "doordash" },
    { id: 5, src: "assets/xplor.png", alt: "Xplor" },
    { id: 6, src: "assets/xgs.png", alt: "xgs" },
    { id: 7, src: "assets/geotab.png", alt: "geotab" },
    { id: 8, src: "assets/gojek.svg", alt: "gojek" },
    { id: 9, src: "assets/unis.svg", alt: "unis" },
    { id: 10, src: "assets/ups.svg", alt: "ups" },
  ];

  return (
    <>
      {/* Title */}
      <p className="text-center text-black  mt-20 text-2xl font-bold">
        Product and tech leaders in large-scale logistics companies use{" "}
        <span>NextBillion.ai</span>
      </p>
      <div className="m-8 py-8 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            ))}
            {/* Duplicate logos for seamless scrolling */}
            {logos.map((logo) => (
              <img
                key={`duplicate-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
