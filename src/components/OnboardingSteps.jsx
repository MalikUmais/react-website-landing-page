import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const steps = [
  {
    id: 1,
    title: "Get the trial API key",
    description:
      "Book a demo or a trial onboarding call. And get the trial key.",
    img: "/assets/image1.png", // replace with actual image path
  },
  {
    id: 2,
    title: "Test it with your tech and data",
    description: "Test the APIs with your tools, data, and constraints.",
    img: "/assets/image2.png", // replace with actual image path
  },
  {
    id: 3,
    title: "Push it to production",
    description: "Integrate NextBillion route planning APIs with your systems.",
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
          Test and go live with{" "}
          <span className="text-purple-700">NextBillion.ai</span> route
          <br />
          planning APIs within a week.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Number circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8   rounded-full bg-purple-700 text-white text-sm font-bold flex items-center justify-center z-20 ">
                {step.id}
              </div>

              {/* Arrows - only display between steps (after 1 and 2) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 left-full transform -translate-x-1/2  z-10 w-full">
                  <div className="h-1 w-full border-t border-dashed border-purple-400 relative">
                    <ArrowRight
                      className="absolute -right-1 -top-2.5 text-purple-600"
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
          <Button
            className={`${btnClasses} text-white bg-gradient-to-r from-purple-500 to-blue-600`}
            text="Start Trial"
          />
          <Button
            className={`${btnClasses} px-5 border border-purple-600 text-purple-600`}
            text="Read API docs"
          />
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
