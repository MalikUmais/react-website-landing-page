import React from "react";
import { Check } from "lucide-react";
import Btnplain from "./btnplain";

const features = [
  "Lorem ipsum dolor sit amet.",
  "ipsum  sit amet.",
  "ipsum dolor sit amet Lorem.",
  "Lorem  dolor sit amet.",
  "ipsum Lorem  dolor sit .",
  "Lorem ipsum dolor sit amet.",
  "Lorem amet  dolor sit amet.",
  "Lorem ipsum  sit ipsum.",
];

const SecurityFeatures = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md max-w-6xl mx-auto text-left m-20">
      <h2 className="text-2xl font-bold mb-6">
        Lorem ipsum dolor sit amet.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Check size={16} className="text-[var(--custom-green)]" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Btnplain text="Learn More"/>
    </div>
  );
};

export default SecurityFeatures;
