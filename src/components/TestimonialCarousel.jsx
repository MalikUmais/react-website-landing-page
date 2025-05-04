import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://nextbillion.ai/wp-content/themes/nb-child/assets/images/page-specific/product/route-api/new/v3/james-new-opt.webp",
      name: "Lorem, ipsum.",
      position: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quis pariatur? Ab, quas provident! Earum ducimus nam et praesentium similique cupiditate deleniti sapiente rem optio ipsum? Voluptates, eius.",
    },
    {
      id: 2,
      image:
        "https://nextbillion.ai/wp-content/themes/nb-child/assets/images/page-specific/product/route-api/new/v3/yantisa-akhadi-new-opt.webp",
      name: "Lorem, ipsum.",
      position: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptate enim necessitatibus est aspernatur iure tempore aliquam temporibus obcaecati qui.",
    },
    {
      id: 3,
      image:
        "https://nextbillion.ai/wp-content/themes/nb-child/assets/images/page-specific/product/route-api/new/v3/james-new-opt-new.webp",
      name: "Lorem, ipsum.",
      position: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facere deserunt neque, nesciunt aperiam quae suscipit.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === testimonials.length - 1 && direction === 1) {
          setDirection(-1); // Reverse direction to backward
          return prevIndex - 1;
        } else if (prevIndex === 0 && direction === -1) {
          setDirection(1); // Reverse direction to forward
          return prevIndex + 1;
        }
        return prevIndex + direction; // Move in the current direction
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [direction, testimonials.length]);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 overflow-hidden relative">
        {/* Testimonial Card */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full bg-white rounded-lg shadow-lg p-8 flex items-center gap-6"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonial.position}
                </p>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[var(--custom-green)]" : "bg-gray-300 "
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
