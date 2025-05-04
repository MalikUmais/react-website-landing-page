import React from "react";

const badges = [
  {
    id: 1,
    title: "High Performer",
    year: "2024",
    image: "assets/high-performer-1.svg",
  },
  {
    id: 2,
    title: "Best Support",
    year: "2024",
    image: "assets/best-support-2.svg",
  },
  {
    id: 3,
    title: "Momentum Leader",
    year: "2024",
    image: "assets/momentum-leader-3.svg",
  },
  {
    id: 4,
    title: "Easiest To Do Business With",
    year: "2024",
    image: "assets/easiest-to-do-4.svg",
  },
];

const ratings = [
  { id: 1, platform: "G2", rating: "4.7", image: "assets/g2-badge-1.svg" },
  {
    id: 2,

    image: "assets/g2-badge-2.png",
  },
  {
    id: 3,

    image: "assets/g2-badge-3.png",
  },
  {
    id: 4,

    image: "assets/g2-badge-4.svg",
  },
];

const Ratings = () => {
  return (
    <section className="bg-white py-16 md:py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <img
                src={badge.image}
                alt={badge.title}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-900">{badge.title}</p>
              <p className="text-xs text-gray-500">{badge.year}</p>
            </div>
          ))}
        </div>

        {/* Ratings */}
        <div className="flex flex-wrap justify-center gap-6 ">
          {ratings.map((rating) => (
            <div
              key={rating.id}
              className="flex items-center gap-4  rounded-lg  px-6 py-4 cursor-pointer"
            >
              <img
                src={rating.image}
                alt={rating.platform}
                className="w-40 h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
