import React from "react";
import faqData from "./faqData";
import FaqSection from "./FaqSection";

const FaqContainer = () => {
  return (
    <section className="bg-[#FAF8FF] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>
        {faqData.map((section, index) => (
          <FaqSection key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default FaqContainer;
