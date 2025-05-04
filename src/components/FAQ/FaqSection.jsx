import React from "react";
import FaqItem from "./FaqItem";

const FaqSection = ({ title, items }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-10 font-poppins">
      <h4 className="text-[var(--custom-green)] uppercase text-lg font-bold  mb-4">
        {title}
      </h4>
      {items.map((item, idx) => (
        <FaqItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default FaqSection;
