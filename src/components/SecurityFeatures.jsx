import React from "react";
import { Check } from "lucide-react";
import Btnplain from "./btnplain";

const features = [
  "SOC 2 Type II certified",
  "GDPR- and CCPA-compliant",
  "Custom data retention controls",
  "Encryption at rest and in transit",
  "Multi-factor Authentication",
  "Single sign-on",
  "Audit logs",
  "Role-based access controls",
];

const SecurityFeatures = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md max-w-6xl mx-auto text-left m-20">
      <h2 className="text-2xl font-bold mb-6">
        Enterprise-grade privacy and security
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Check size={16} className="text-purple-700" />
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
