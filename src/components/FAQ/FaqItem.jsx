import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open, answer]);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium  text-gray-800 transition duration-300 ease-in-out   cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <div className="transform transition-transform duration-300">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <p ref={contentRef} className="mt-1 text-sm text-gray-600 py-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
