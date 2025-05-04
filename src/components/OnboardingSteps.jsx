import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Btnplain from "./btnplain";
import Btnlg from "./Btnlg";

const steps = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur aspernatur delectus rem doloribus.",
    img: "/assets/image1.png", // replace with actual image path
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur aspernatur delectus rem doloribus.",
    img: "/assets/image2.png", // replace with actual image path
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur aspernatur delectus rem doloribus.",
    img: "/assets/image3.png", // replace with actual image path
  },
];

const OnboardingSteps = () => {
  const btnClasses =
    "text-md px-4 py-2 cursor-pointer font-poppins rounded-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1";

  return (
    <section className="bg-[#FAF8FF] py-16">
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Lorem ipsum dolor sit amet.{" "}
          <span className="text-[var(--custom-green)]">Lorem, dolor.</span> lorem
          <br />
          Lorem ipsum dolor sit amet.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Number circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8   rounded-full bg-[var(--custom-green)] text-white text-sm font-bold flex items-center justify-center z-20 ">
                {step.id}
              </div>

              {/* Arrows - only display between steps (after 1 and 2) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 left-full transform -translate-x-1/2  z-10 w-full">
                  <div className="h-1 w-full border-t border-dashed border-[var(--custom-green-light)] relative">
                    <ArrowRight
                      className="absolute -right-1 -top-2.5 text-[var(--custom-green)]"
                      size={20}
                    />
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className="bg-white rounded-4xl shadow-md pb-16 text-left mt-8 h-full flex flex-col">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full object-contain rounded-md"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-xl px-4 mt-4">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-20 flex justify-center gap-4">
          <Btnlg

            text="dolor sit."
          />
          <Btnplain

            text="Lorem, ipsum dolor."
          />
          
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
